/*
* This file contains the function that fetches a random word from the API.
 */

export const fetchRandomWord = async () => {
    try {
        const response = await fetch(`https://api.datamuse.com/words?ml=animals+in+the+ocean&max=1000&`);
        const data = await response.json();
        if (response.ok) {
            let word;
            do {
                const randomIndex = Math.floor(Math.random() * data.length);
                word = data[randomIndex].word;
            } while (word.includes(' '));
            return word.toUpperCase();
        } else {
            console.error("Error fetching word");
            return null;
        }
    } catch (error) {
        console.error('Error fetching random word:', error);
        return null;
    }
};