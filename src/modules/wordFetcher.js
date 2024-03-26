const fetchRandomWord = async () => {
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word');
        const data = await response.json();
        if (response.ok) {
            return data[0].toUpperCase();
        } else {
            console.error("Error fetching word");
            return null;
        }
    } catch (error) {
        console.error('Error fetching random word:', error);
        return null;
    }
};

export default fetchRandomWord;