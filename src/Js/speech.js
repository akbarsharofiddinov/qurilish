document.addEventListener('mouseup', () => {
  // Get the selected text
  const selectedText = window.getSelection().toString().trim();

  // If there is selected text, read it aloud
  if (selectedText) {
    const utterance = new SpeechSynthesisUtterance(selectedText);
    utterance.lang = 'ru-RU'; // Set language to English (US)
    speechSynthesis.speak(utterance);
  }
});