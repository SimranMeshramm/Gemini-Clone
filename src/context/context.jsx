import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const contextProvider = (props) => {

    const [input, setInput]= useState("");
    const [recentPrompt, setRecentPrompt]= useState("");
    const [previousPrompt, setPreviousPrompt]= useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLaoding] = useState(false);
    const [resultdata, setResultData]= useState("");
    const delayParam =(index, nextWord)=>{
       setTimeout(function(){
       setResultData(prev=>prev+nextWord)
       },75*index)
    }
  
    const newChat = () =>{
        setLaoding(false)
        setShowResult(false)
    }


   const onSent = async (prompt) =>{

    setResultData("")
    setLaoding(true)
    setShowResult(true)
    let response;
    if(prompt !== undefined){
      response = await runChat(prompt);
      setRecentPrompt(prompt)
    }
    else{
        setPreviousPrompt(prev =>[...prev,input])
       setRecentPrompt(input)
       response = await runChat(input)
    }
    //setRecentPrompt(input)
    //setPreviousPrompt(prev=>[...prev,input])
    //const response = await runChat(input)
    let responseArray= response.split("**")
    let newResponse="";
    for(let i=0 ; i< responseArray.length;i++){
        if ( i==0 || i%2 !==1){
            newResponse +=responseArray[i];
        }
        else
        {
            newResponse +="<b>"+responseArray[i]+"</b>";
        }
    }
    let newResponse2= newResponse.split("*").join("</br>")
    let newResponseArray= newResponse2.split(" ");
    for(let i =0; i<newResponseArray.length; i++){
        const nextWord = newResponseArray[i];
        delayParam(i, nextWord+" ")
    }
    setLaoding(false)
    setInput("")
   }

    const contextValue = { 
     previousPrompt,
     setPreviousPrompt,
     onSent,
     setRecentPrompt,
     recentPrompt,
     showResult,
     loading,
     resultdata,
     input,
     setInput,
     newChat

    }
  return (
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
  )
    
}
export default contextProvider