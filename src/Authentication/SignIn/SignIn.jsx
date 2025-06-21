import s from "./SignIn.module.css"
import Button from "../../Components/Button.jsx"
import { useContext, useEffect, useRef, useState } from "react"
import { context } from "../../App.jsx"

import { auth, db, FBProvider, GithubProvider } from "../../Firebase/Firebase.js"
import { FacebookAuthProvider, fetchSignInMethodsForEmail, GithubAuthProvider, linkWithCredential, signInWithEmailAndPassword } from "firebase/auth"
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { Link, useNavigate } from "react-router-dom"

export default function SignIn() {
    const { setUser, setLoading,
        setContinueAs, pagination,
        prevPage } = useContext(context)

    const navigate = useNavigate()

    const [showPass, setShowPass] = useState(false)
    const [data, setdata] = useState()

    const refInvalid1 = useRef(null)
    const refInvalid2 = useRef(null)
    const emailInput = useRef(null)
    const passWordInput = useRef(null) // Replace 'your/data/path' with the actual path to your data

    const getInputs = () => {
        const email = emailInput?.current.value
        const pass = passWordInput?.current.value
        const warning1 = refInvalid1.current
        const warning2 = refInvalid2.current

        return { email: email, pass: pass, warning1: warning1, warning2: warning2 }
    }

    const clearInputs = () => {
        const inputs = getInputs()
        if (inputs.email) inputs.email = ""
        if (inputs.pass) inputs.pass = ""
        inputs.warning1.innerText = ""
        inputs.warning2.innerText = ""
    }

    const userTestValue = (e) => {
        const inputs = getInputs()
        let error = false
        if (e?.target.value == "" || inputs.email == "") {
            refInvalid1.current.textContent = "The input field is blank!"
        } else {
            refInvalid1.current.textContent = ""
        }

        return error ? true : false
    }
    const passTestValue = (e) => {
        const inputs = getInputs()
        let error = false
        if (e?.target.value == "" || inputs.pass == "") {
            refInvalid2.current.textContent = "The input field is blank!"
        } else {
            refInvalid2.current.textContent = ""
        }

        return error ? true : false
    }

    const signInByEmailAndPassword = async () => {
        const err1 = userTestValue()
        const err2 = passTestValue()

        if (!err1 && !err2) {
            setLoading(true)
            try {
                await signInWithEmailAndPassword(
                    auth,
                    emailInput.current.value,
                    passWordInput.current.value
                )
                clearInputs()
                setUser(auth.currentUser)
                setContinueAs(true)
                navigate(prevPage)
                pagination(0)
            } catch (error) {
                console.log(error)
                if (error.code == 'auth/invalid-email') {
                    refInvalid1.current.textContent = "Invalid email/Email doesn't exist."
                }

                if (error.code == 'auth/invalid-credential') {
                    refInvalid2.current.textContent = "Password does not match."
                }

                if (error.code == "auth/network-request-failed") {
                    alert("Network Error, unable to sign in. Please try again.")
                }
            }
            setLoading(false)
        }
    }

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        setLoading(true)
        signInWithPopup(auth, provider)
            .then((res) => {
                clearInputs()
                setUser(res.user)
                const docRef = doc(db, "Users", auth.currentUser?.uid)
                setContinueAs(true)
                navigate(prevPage)
                pagination(0)
            }).catch((error) => {
                console.log(error)
                setLoading(false)
            })
        setLoading(false)
    }


    const signInWithFacebook = async () => {

        setLoading(true)

        signInWithPopup(auth, FBProvider).then((result) => {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);

            const user = result.user;
            setUser(user)
            setContinueAs(true)
            navigate(prevPage)
            pagination(0)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            alert(error)
            setLoading(false)
        });

        setLoading(false)
    }


    const signInWithGithub = async () => {
        signInWithPopup(auth, GithubProvider)
            .then((result) => {
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token)
                const user = result.user;
                setUser(user)
                setContinueAs(true)
                navigate(prevPage)
                pagination(0)
            }).catch(async (error) => {
                if (error.code === "auth/account-exists-with-different-credential") {
                    const pendingCred = error.credential;
                    const email = error.customData.email;

                    // Get the existing sign-in methods for this email
                    const methods = await fetchSignInMethodsForEmail(auth, "bryanagustinpajarillaga@gmail.com");
                    console.log(methods)
                    if (methods.includes("gmail.com")) {
                        // You might prompt user to sign in with Google first
                        const googleProvider = new GoogleAuthProvider();

                        signInWithPopup(auth, googleProvider).then((result) => {
                            const user = result.user;
                            setUser(user)
                            setContinueAs(true)
                            navigate(prevPage)
                            pagination(0)
                            return linkWithCredential(result.user, pendingCred);
                        }).then((linkedResult) => {
                            console.log("GitHub account linked to existing user:", linkedResult.user);
                        }).catch(console.error);
                    } else {
                        console.error("User must sign in with existing method:", methods);
                        // You can guide the user based on what method is returned
                    }
                } else {
                    console.error("Other auth error:", error);
                }
            });

        setLoading(false)
    }

    return (
        <>
            <div className={s.signInWrapper}>
                <Link to={prevPage != "" ? prevPage : "/AcadComponent/"} className={s.Link}>
                    <Button func={() => { clearInputs() }} content={"X"} className={s.goToStartingPage}></Button>
                </Link>

                <div className={s.topArc}>SIGN IN</div>
                <div className={s.form}>
                    <div className={s.userNameCon}>
                        <h3>Username :</h3>
                        <input className="emailInput" ref={emailInput} onInput={(e) => { userTestValue(e) }}></input>
                        <span ref={refInvalid1}></span>
                    </div>
                    <div className={s.passwordCon}>
                        <h3>Password :</h3>
                        <input type={showPass ? "text" : "password"} ref={passWordInput} onInput={(e) => { passTestValue(e) }} className={s.Password}></input>
                        <span ref={refInvalid2}></span>
                        <img src={showPass ? "./password/visible.png" :
                            "./password/unsee.png"}
                            className={s.seePassword} onClick={() => { showPass ? setShowPass(false) : setShowPass(true) }} />
                    </div>
                    <div className={s.moreActions}>
                        <span className={s.forgotPass}>Forgot Password</span>
                        <Link className={s.createAcc} to={"/AcadComponent/SignUp"}>Doesn't Have An Account?</Link>
                    </div>
                    <Button className={s.signInButton} func={() => { signInByEmailAndPassword() }} content={"SIGN IN"}></Button>
                </div>

                <div className={s.otherPlatformsWrapper}>
                    <div className={s.iconsWrapper}>
                        <div className={s.wrapper} onClick={() => { signInWithGoogle() }}><img src="./platforms/GG.png " /></div>
                        <div className={s.wrapper} onClick={() => { signInWithFacebook() }}><img src="./platforms/facebook.png" /></div>
                        <div className={s.wrapper} onClick={() => { signInWithGithub() }}><img src="./platforms/github.png" /></div>
                    </div>
                    <h3>SIGN IN WITH DIFFERENT PLATFORMS</h3>
                </div>
            </div>
        </>
    )
}
