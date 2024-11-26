// import express
import express from "express";
import bodyParser from "body-parser";
// import dotenv package for handle enviournment varaiable
import dotenv from "dotenv";
// after installing groq import it
import Groq from "groq-sdk";
dotenv.config();
const app = express();

// to run server on port
const port = process.env.PORT || 5000; 

// middleware to encode the url
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());

// using api key to run ai model
const apiKey = process.env.GROQ_API_KEY ;
const groq = new Groq({ apiKey: apiKey });

// handling the post request 
app.post("/translate", async (req, res) => {
  const { text, targetLanguage } = req.body;

  if (!text || !targetLanguage) {
    return res.status(400).json({ error: "Missing 'text' or 'targetLanguage'" });
  }
  // error handling
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Translate the following text into ${targetLanguage}: "${text}" and you have to just give the translated text`,
        },
      ],
      model: "llama3-70b-8192", 
    });

    const translatedText = chatCompletion.choices[0]?.message?.content || "Translation failed";
    //  sending json format in response
    res.json({ translatedText });

  } catch (error) {
    console.error("Error translating text:", error);
    res.status(500).json({ error: "An error occurred while translating the text." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
