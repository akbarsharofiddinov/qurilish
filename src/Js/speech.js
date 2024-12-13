document.querySelector('.speech').addEventListener('click', () => {
  // Get selected text
  const selectedText = window.getSelection().toString().trim();
  
  if (selectedText) {
    // Use the SpeechSynthesis API
    const utterance = new SpeechSynthesisUtterance(selectedText);
    utterance.lang = 'ru-RU'; // Set the language (can be changed)
    speechSynthesis.speak(utterance);
  } else {
    alert('Пожалуйста, сначала выберите текст!');
  }
});