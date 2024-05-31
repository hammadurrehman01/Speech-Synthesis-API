function speak() {
    const text = document.querySelector("#input").value;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}