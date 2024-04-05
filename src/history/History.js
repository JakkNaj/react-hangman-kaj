import React from 'react';
import './History.css';

const History = () => {
    return (
        <section className="history-container">
            <header>
                <h1>History of Hangman</h1>
            </header>
            <main className="articles-container">
                <article className="article first-article">
                    <h2>Article 0</h2>
                    <p>
                        We’re all fond of guessing games. But have you ever wondered from where such games originated?
                        Hangman is said to have a shady history. This game has come under criticism, been reviewed, and
                        reinvented to accommodate people’s expectations.
                        Today, Hangman, along with its substitutes, happens to be a well-loved, fun, and even
                        educational game. Let’s take a look at the history of Hangman and how it has developed over
                        time.
                        Hangman’s history and origins tell us that the game has a dark past. While it was appropriate
                        during times of capital punishment, sometimes it is viewed as inappropriate today. The game has
                        adapted over time and was even turned into a video game by Alan Miller in 1978.
                        Hangman is used as an educational tool and even as the basis for creating similar entertainment
                        and learning games.
                        Not many people know much about Hangman. If you’re intrigued by what you have read already, read
                        on to learn more.
                    </p>
                </article>
                <article className="article">
                    <h2>Origins of Hangman</h2>
                    <p>
                        No one is certain when the game of Hangman came to be. Evidence indicates that it originated in
                        the 17th century in Europe, around the time when hanging criminals through public execution was
                        commonplace. A variation of this game exists in Birds, Beasts, and Fishes, a book published by
                        Alice Bertha Gomme in 1894.
                    </p>
                </article>
                <article className="article">
                    <h2>The history of Hangman</h2>
                    <p>
                        Many say that Hangman reflects a true story. Back in the day, the execution of an infamous
                        criminal was a public spectacle. People gathered around to watch a Hangman perform his duties –
                        to execute notorious criminals by hanging them.
                        With many criminals being illiterate, the Hangmen came up with a game to mock them. The
                        criminals had to guess a secret word that the Hangman was thinking. This was known as the “Rite
                        of Words and Life.”
                        Standing on a five-legged stool with a noose around his neck, the criminal would pick a letter.
                        With each incorrect guess, the Hangman would chop off a leg from the five-legged stool. After
                        five wrong guesses, all the stool legs would be chopped off by the Hangman, leaving the criminal
                        to hang.
                    </p>
                </article>
                <article className="article">
                    <h2>Countries began moving away from capital punishment</h2>
                    <p>
                        The execution of criminals by hanging them has been around since the earliest civilizations.
                        Scholars believe that the death of the murderer Rainey Bethea, the last hanging sentence in
                        America in 1936, led to authorities banning public executions in America.
                        The reason is more than twenty thousand people gathered to witness the hanging, with hundreds of
                        reporters and photographers waiting to cover this story. Other countries followed suit when many
                        people began petitioning to have hanging abolished.
                        Hanging is still capital punishment in some countries today. Hence, people view a game of
                        Hangman in these countries in a negative light, with players of the Hangman game regarded as
                        insensitive.
                    </p>
                </article>
                <article className="article">
                    <h2>People adopted Hangman as a local game</h2>
                    <p>
                        With a sense of light-heartedness, people have adopted the game of Hangman to be a fun guessing
                        game that uses a pen and paper. Two people would play the game, setting a secret word and trying
                        to figure it out. An incorrectly guessed letter translates into players drawing a part of the
                        Hangman stick figure.
                        Thankfully the person making an incorrect guess does not face the fate of a criminal. Instead,
                        if a player cannot figure out the secret word, the other player can reveal that word, and a
                        player can set a new game.
                    </p>
                </article>
                <article className="article">
                    <h2>Alan Miller developed Hangman into a video game</h2>
                    <p>
                        Alan Miller released Hangman as a video game in 1978. The developer replaced the traditional man
                        with a tiny monkey that hung from the gallows by its arm. The game contained a little more than
                        five hundred words, split into four categories. No guessable term was longer than six letters.
                        It was a one or two-player game. If a person played the game as a one-player game, they were
                        allowed eleven incorrect guesses. If two people played the game, the game could go on until a
                        player guessed the correct answer.
                        People criticized Hangman for differing a little from the original pen-and-paper-based game,
                        leaving reviewers unimpressed. It was re-released by the same developer in 1982 as Atari 2600,
                        along with many other games. Reviewers then described the game as “passable.”
                    </p>
                </article>
                <footer className="source-link">
                    <p>Source: <a href="https://www.gamesver.com/hangman-game-history-origins-past-present-and-future/">Source: www.gamesver.com</a></p>
                </footer>
            </main>
        </section>
    );
};

export default History;