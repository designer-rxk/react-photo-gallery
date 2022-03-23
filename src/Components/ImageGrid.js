import React from "react";
import useFirestore from "../Hooks/UseFirestore";
import {motion} from "framer-motion";

const ImageGrid = ({setSelectedImg}) =>{
    const {docs} = useFirestore('images');
    return(<div>
        {docs.length>=1?
            <div className={"img-grid"}>
          {docs && docs.map(doc =>(
              <motion.div className={"img-wrap"} key={doc.id} onClick={()=>setSelectedImg(doc.url)} whileHover={{opacity:1}} layout>
                  <motion.img src={doc.url} alt={"uploaded pic"} innitial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}/>
              </motion.div>
          ))}
      </div>:<h3 className={"no-photos"}>No photos have been uploaded.</h3>}</div>
    );
}
export default ImageGrid;