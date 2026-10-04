function removeStopWords() {

    const text = document.getElementById("textInput").value.trim();

    if (text === "") {
        alert("Please enter some text!");
        return;
    }

    const stopWords = [
        "the", "is", "a", "an", "and", "or", "of",
        "to", "in", "on", "for", "with", "this",
        "that", "are", "was", "were", "it", "as",
        "at", "by", "from", "be", "has", "have",
        "had", "will", "can", "but", "not",
        "we", "they", "he", "she", "i", "you",
        "my", "your", "our", "their", "his", "her"
    ];

    const words = text.match(/\b[a-zA-Z]+\b/g) || [];

    const filteredWords = words.filter(word =>
        !stopWords.includes(word.toLowerCase())
    );

    const removedCount =
        words.length - filteredWords.length;

    document.getElementById("before").textContent =
        words.length;

    document.getElementById("after").textContent =
        filteredWords.length;

    document.getElementById("removed").textContent =
        removedCount;

    document.getElementById("output").textContent =
        filteredWords.join(" ");
}