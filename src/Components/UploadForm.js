import React, {useState} from "react";
import ProgressBar from "./ProgressBar";
import '../App.css';

const UploadForm = () =>{
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    //Allowed types
    const types = ['image/png','image/jpeg'];

    const changeHandler = (e) =>{
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Select a valid image type(.png or .jpeg).');
        }
    }

    return (
        <form>
            <label>
                <span>
                <input type = "file" onChange={changeHandler}/>
                +</span>
            </label>
            <div className={"output"}>
                {//Only shows right side if left side is true
                    error && <div className={"error"}>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}
export default UploadForm;