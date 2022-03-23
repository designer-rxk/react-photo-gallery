import React, {useEffect} from "react";
import useStorage from "../Hooks/UseStorage";
import {motion} from "framer-motion";
import '../App.css';

const ProgressBar = ({file,setFile}) => {
    const {url,progress} = useStorage(file);

    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url, setFile]);
    return(
        <motion.div className={"progress-bar"} innitial={{width:0}} animate={{width:progress+'%'}}></motion.div>
    )
}
export default ProgressBar;