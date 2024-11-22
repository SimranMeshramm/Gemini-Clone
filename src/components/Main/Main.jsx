import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input}= useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt=''></img>
        </div>
        <div className="main-container">
            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello , Dev</span></p>
                <p>how Can I Help You toady? </p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>
                      suggest beautiful place for upcoming road trip?  
                    </p>
                    <img src={assets.compass_icon} alt=''></img>
                </div>
                <div className="card">
                    <p>
                     Briefly summarize this concept : urban Planning 
                    </p>
                    <img src={assets.bulb_icon} alt=''></img>
                </div>
                <div className="card">
                    <p>
                      Brainstrom team bonding activities for our work retreat 
                    </p>
                    <img src={assets.message_icon} alt=''></img>
                </div>
                <div className="card">
                    <p>
                     improve the readibility of the following code
                    </p>
                    <img src={assets.code_icon} alt=''></img>
                </div>
            </div>
            </>:
            <div className="result">
                <div className="title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?
                    <div className="loader">
                     <hr />
                     <hr />
                     <hr />

                    </div>: < p dangerouslySetInnerHTML={{__html:resultData}}>{resultData}</p>
                    }
                   
                </div>
            </div>
            }
            
            <div className="main-bottom">
             <div className="search-box">
                <input onChange={(e)=> setInput(e.target.value)} value={input} type='text' placeholder='Enyer aprompt here'></input>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                   {input?<img onClick={()=>onSent} src={assets.send_icon} alt="" />:null } 
                </div>
                <p className="bottom-info">
                    Gemini may display inacurate info , so double-check the response
                </p>
             </div>

            </div>
        </div>

    </div>
  )
}

export default Main