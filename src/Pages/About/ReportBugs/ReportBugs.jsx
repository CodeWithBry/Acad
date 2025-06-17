import { useContext, useEffect, useRef, useState } from "react"
import Button from "../../../Components/Button"
import s from "./ReportBugs.module.css"
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import {context} from "../../../App"
import { auth, db } from "../../../Firebase/Firebase"

const ReportBugs = () => {
    const editorRef = useRef()
    const bar = useRef()
    const {userData, setLoading} = useContext(context)
    const [reportedPrompt, setReportedPrompt] = useState(false)
    const [barTimeInterval, setBarTimeInterval] = useState()
    const [barTimeVisibility, setBarTimeVisibility] = useState(5)
    // --------------- Data structure --------------------
    // default > userNames > {reports: []}




    const submitToAuthor = async () => {
        const report = {
            userName: userData?.perInfo?.name,
            report: editorRef.current.value
        }

        try {
            const docRef = doc(db, 'Reports', 'Reports')
            const data = await getDoc(docRef)
            data.exists ? 
                await updateDoc(docRef, { reports: arrayUnion(report) }) :
                await setDoc(docRef, { reports: arrayUnion(report) })
            setReportedPrompt(true)
            editorRef.current.value = ""
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        let interval;
        let time = 5
        
        if(reportedPrompt) {
            interval = setInterval(() => {
                bar.current.style.width = `${ time / 5 * 90 }%`
                if(time >= -.1) {
                    time = time - .1
                } else { setReportedPrompt(false) }
                    
                
            }, 100)
        }

        return () => clearInterval(interval)
    },[reportedPrompt])

    const ReportedPrompt = () => {
        return (
            <div className={reportedPrompt ? s.reportedWrapper : s.hideReportedPrompt} >
                <i className="fa fa-check"></i>
                <p>Report has been submitted!</p>
                <p>Thank you for your concern🧡</p>
                <div className={s.bar} ref={bar}></div>
            </div>
        )
    }
    
    
    return (
        <div className={s.reportBugsWrapper}>
            <ReportedPrompt />

            <div className={s.top}>
                <h3>Make a description:</h3>
                <Button 
                    content={"Clear"}
                    func={()=>{editorRef.current.value = null}}/>
            </div>

            <div className={s.middle}>
                <textarea ref={editorRef} rows={4}></textarea>
            </div>

            <div className={s.bottom}>
                <Button 
                    content={"Submit"}
                    func={()=>{submitToAuthor(), setLoading(true)}} />
            </div>
        </div>
    )
}

export default ReportBugs
