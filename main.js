const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey:"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",
  });
  const openai = new OpenAIApi(configuration);


async function start(){
    
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Quotes  related to money",
        temperature: 0,
        max_tokens: 1000,
      });
      console.log(response.data.choices[0].text);
}

start()