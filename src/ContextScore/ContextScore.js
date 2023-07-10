import React, { createContext, useState } from "react";

const ContextScore=createContext();

const ContextScoreFunc=({children})=>{
     
    const [score,setscore]=useState(0);


     return <ContextScore.Provider value={{score,setscore}}>{children}</ContextScore.Provider>

}

export {ContextScore,ContextScoreFunc}