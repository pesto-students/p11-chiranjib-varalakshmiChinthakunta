const apiKey = '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'; // Replace with your own OpenAI API key
const endpoint = 'https://api.openai.com/v1/completions';

const generateQuotes = async () => {

  const topic = document.querySelector("#topicName").value;
  console.log(topic);
   //const topic= document.getElementById("topicName").value;
 const prompt = 'Generate Famous quoates related to' + topic;
 console.log(prompt);
 const postData = {
   model: "text-davinci-003",
   prompt: prompt,
   max_tokens: 256
 };

 try {
   const response = await fetch(endpoint, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${apiKey}`
     },
     body: JSON.stringify(postData)
   });

   const data = await response.json();

   if (response.ok) {
     const quote = data.choices[0].text.trim();
     console.log(quote);
     displayQuotes(quote);
   } else {
     console.error('Request failed with status:', response.status);
   }
 } catch (error) {
   console.error('Error:', error);
 }
};

function displayQuotes(quote) {
 var mainContainer = document.getElementById("quotes");  
 var div = document.createElement("div");
 div.innerHTML = quote;
 mainContainer.appendChild(div); 
}   
//generateQuotes();