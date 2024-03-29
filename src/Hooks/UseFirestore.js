import {useEffect, useState} from "react";
import {projectFirestore} from "../Firebase/config";
import '../App.css';

const UseFirestore = (collection) =>{
    const [docs, setDocs] = useState([]);

    useEffect(()=>{
        const unsub = projectFirestore.collection(collection).orderBy('createdAt','desc').onSnapshot((snap)=>{
            let documents = [];
            snap.forEach(doc =>{
               documents.push({...doc.data(),id:doc.id,});
            });
            setDocs(documents);
        });
        return () => unsub();
    },[collection]);

    return {docs};
}
export default UseFirestore;
