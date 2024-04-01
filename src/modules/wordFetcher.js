export const fetchRandomWord = async () => {
    try {
        const response = await fetch('https://api.datamuse.com/words?ml=animals+in+the+ocean&max=1000');
        const data = await response.json();
        if (response.ok) {
            const randomIndex = Math.floor(Math.random() * data.length);
            return data[randomIndex].word.toUpperCase();
        } else {
            console.error("Error fetching word");
            return null;
        }
    } catch (error) {
        console.error('Error fetching random word:', error);
        return null;
    }
};