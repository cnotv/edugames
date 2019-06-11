export const speak = (text: string) => {
  const msg = new SpeechSynthesisUtterance();
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.filter((el: SpeechSynthesisVoice) => ['en', 'en-US'].includes(el.lang))[0];
  msg.text = text;
  // Set the attributes.
  // msg.volume = 100
  msg.rate = 0.7;
  msg.pitch = 1.2;
  msg.voice = voice;
  window.speechSynthesis.speak(msg);
};
