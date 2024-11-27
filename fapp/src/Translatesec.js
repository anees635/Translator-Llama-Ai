import React,{useState} from 'react'
import axios from 'axios';
import './Translate.css'

export default function Translatesec() {
  // variables / hooks
  const [text, settext] = useState("");
  const targetLanguage = 'Urdu'; // set language 
  const [translation, setTranslation] = useState("")   // set response in translation hook

  // handle the submit of user 
  // give request to api
  const handlesubmit = async (e)=>{
    e.preventDefault();
    
    try{
  
      // give request to api
      const response = await axios.post ("http://localhost:8080/translate", {text, targetLanguage});
       
      setTranslation(response.data.translatedText)

    }
    catch(error){
      console.error("Error during translation:", error);
      alert("Error during translation", error)
    }
  }
  return (
  <div>
      {/* header */}

      <p className='header2'>Translate Text from English to Urdu</p>

      {/* input field */}

     
    <form onSubmit={handlesubmit}>   {/* form  and call handlesubmit to send request to api*/}
      <div className="flexcontainer">
       <label for="Textarea">English</label>
        {/* using textarea */}
       <textarea class="textarea" onChange={(e)=>settext(e.target.value)} placeholder="Enter text in english" id="Textarea" value={text}></textarea>
       
      
       
      </div>
      <div className="flexcontainer">
         <label for="Textarea">Urdu</label>

         <textarea class="textarea" placeholder="Translated text" id="Textarea" value={translation}></textarea>
        
      </div>
       {/* submit button*/}
       <div>
      <button type="submit" className='subbtn '>Translate</button>
      </div>
    </form>
  </div>
  )
}
