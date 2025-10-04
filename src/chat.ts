import ollama from 'ollama';

async function run() {
  const model = 'llama3.1:8b';

  const messages: { role: string; content: string }[] = [
    {
      role: 'system',
      content: 'You are a technical assistant, respond briefly and clearly.',
    },
    { role: 'user', content: 'What is tokenization in LLMs?' },
  ];

  let res = await ollama.chat({ model, messages, stream: false });
  console.log('Assistant:', res.message.content);

  messages.push(res.message);

  messages.push({
    role: 'user',
    content: "Give me an example using the word 'Argentina'.",
  });

  res = await ollama.chat({ model, messages, stream: false });
  console.log('Assistant:', res.message.content);
}

run().catch(console.error);
