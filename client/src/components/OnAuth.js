import {GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth";
import {useDispatch} from "react-redux";
import {signInSuccess} from "../redux/user/userSlice";
import {useNavigate} from "react-router-dom";
import {app} from "../firebase";

const OnAuth = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const handleGoogleClick = async()=>{
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result =await signInWithPopup(auth,provider);
            const res = await fetch("/api/auth/google",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL})
            })
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigator("/");
            console.log(result);

        }catch(error){
            console.log("could not sign in with goole", error);
        }

    }
    return (
        <button onClick={handleGoogleClick} type='button' className='bg-red-700 p-3 text-white rounded-lg uppercase hover:opacity-95'>Continue with google</button>
    )
}

export default OnAuth