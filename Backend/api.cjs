// api 
const express = require("express");
// axios package allow to send and accept response and requests
const axios = require("axios");
const  cors = require('cors');
const bodypraser = require('body-parser')

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
// middle ware
app.use(bodypraser.json());
app.use(express.urlencoded({ extended: false }));


// port listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server started at port: ${PORT}`)
});

// post request and response to backend ai model

app.post('/translate', async(req, res)=>{
    // accept response from frontend
    const text = req.body.text;
    const targetLanguage = req.body.targetLanguage;
    
    // error handling
    try{
        //    send request to ai model using axios package
           const response = await axios.post("http://localhost:5000/translate",
            {text,targetLanguage}
           );
        //    send data in response in json format
           res.json(response.data);
    }
    catch{
           
           res.status(500).json({err: 'failed to translate the text' })      
    }
});