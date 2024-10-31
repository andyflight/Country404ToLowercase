// Target words: English and Cyrillic variations
const targetWords = ["Russia","Росія", "Россия"];

// Function to convert target words to lowercase
const toLowercase = (text) => {
  let modifiedText = text;
  targetWords.forEach(word => {
    // Adjust regex for Unicode support with Cyrillic characters
    const regex = new RegExp(`\\b${word}\\b`, "giu"); // 'u' flag for Unicode support
    modifiedText = modifiedText.replace(word, word.toLowerCase());
  });
  return modifiedText;
};

// Listen to input events on fields to apply transformations
document.addEventListener("input", (event) => {
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
    const originalText = event.target.value;
    const modifiedText = toLowercase(originalText);
    
    // Only update field if text was modified
    if (originalText !== modifiedText) {
      event.target.value = modifiedText;
    }
  }
});
