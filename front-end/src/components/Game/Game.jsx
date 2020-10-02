import React, { useState } from 'react';
import Audio1 from '../../assets/Oasis-Wonderwall.mp3'
import Audio2 from '../../assets/EarthWindFire-September.mp3';
import Audio3 from '../../assets/MichaelJackson-BillieJean.mp3';
import Audio4 from '../../assets/ShaniaTwain-ManIFeelLikeAWoman.mp3';
import Audio5 from '../../assets/DrakeRihanna-TakeCare.mp3';
import Audio6 from '../../assets/FreshPrinceofBelAirThemeSong.mp3';
import Audio7 from '../../assets/Kelis-Milkshake.mp3';
import Audio8 from '../../assets/RickAstley-NeverGonnaGiveYouUp.mp3';
import Audio9 from '../../assets/AvrilLavigne-Complicated.mp3';
import Audio10 from '../../assets/ABBA-DancingQueen.mp3';
import './Game.scss'

function Game() {
    
    const songInfo = [
        {
            albumCover: 'https://upload.wikimedia.org/wikipedia/en/1/17/Wonderwall_cover.jpg',
            audio: Audio1,
            artist: 'Oasis',
            song: 'Wonderwall',
            lyrics: `Today is gonna be the day \n That they’re gonna throw it back to you \n By now you should’ve somehow \n Realized what you gotta do \n I don’t believe that anybody \n Feels the way I do, about you now \n Backbeat, the word was on the street \n That the fire in your heart is out \n I’m sure you’ve heard it all before \n But you never really had a doubt`,
            answerOptions: [
                { answerText: "Today was gonna be the day", isCorrect: false },
                { answerText: "And after all, you're my wonderwall", isCorrect: false },
                { answerText: "I don’t believe that anybody feels the way I do about you now", isCorrect: true },
                { answerText: "Because maybe, you're gonna be the one that saves me", isCorrect: false },
            ],
        },
        {
            albumCover: 'https://i.pinimg.com/736x/37/3a/da/373adaed94cca75f4a9416ecfb414e33.jpg',
            audio: Audio2,
            artist: 'Earth, Wind & Fire',
            song: 'September',
            lyrics: "Do you remember the 21st night of September? \n Love was changing the minds of pretenders \n While chasing the clouds away \n Our hearts were ringing \n In the key that our souls were singing \n As we danced in the night", 
            answerOptions: [
                { answerText: "Remember how the stars stole the night away", isCorrect: true },
                { answerText: "Now December found the love we shared in September", isCorrect: false },
                { answerText: "Ba de ya, say do you remember", isCorrect: false },
                { answerText: "Ba duda, ba duda, ba duda, badu", isCorrect: false },
            ],
        },
        {
            albumCover: 'https://cloud10.todocoleccion.online/discos-vinilo/tc/2018/11/11/21/139760030.jpg',
            audio: Audio3,
            artist: 'Michael Jackson',
            song: 'Billie Jean',
            lyrics: `She was more like a beauty queen from a movie scene \n I said don’t mind, but what do you mean, I am the one \n Who will dance on the floor in the round? \n She said I am the one, who will dance on the floor in the round \n She told me her name was Billie Jean, as she caused a scene \n Then every head turned with eyes that dreamed of being the one \n Who will dance on the floor in the round \n People always told me be careful of what you do`,
            answerOptions: [
                { answerText: "Billie Jean is not my lover", isCorrect: false },
                { answerText: "And don’t go around breaking young girls’ hearts", isCorrect: true },
                { answerText: "She told my baby we'd danced 'til three, then she looked at me", isCorrect: false },
                { answerText: "She's just a girl who claims that I am the one", isCorrect: false },
            ],
        },
        {
            albumCover: 'https://upload.wikimedia.org/wikipedia/en/9/93/Man%21_I_Feel_Like_a_Woman%21.jpg',
            audio: Audio4,
            artist: 'Shania Twain',
            song: 'Man! I Feel Like a Woman',
            lyrics: `Let’s go girls, come on \n I’m going out tonight, I’m feelin’ alright \n Gonna let it all hang out \n Want to make some noise, really raise my voice \n Yeah, I want to scream and shout \n No inhibitions, make no conditions \n Get a little outta line \n I ain’t gonna act politically correct`,
            answerOptions: [
                { answerText: "The girls need a break-tonight we're gonna take", isCorrect: false },
                { answerText: "Oh, oh, oh, I want to be free yeah, to feel the way I feel", isCorrect: false },
                { answerText: "Man! I feel like a woman!", isCorrect: false },
                { answerText: "I only want to have a good time", isCorrect: true },
            ],
        },
        {
            albumCover: 'https://m.media-amazon.com/images/M/MV5BZmY2MTUyNzAtNGM3MS00NDI5LWEzNzgtOTU3YThjOWEzNWZkXkEyXkFqcGdeQXVyMjA4OTI5NDQ@._V1_SY500_SX500_AL_.jpg',
            audio: Audio5,
            artist: 'Drake & Rihanna',
            song: 'Take Care',
            lyrics: `I’ve asked about you and they told me things \n But my mind didn’t change and I still feel the same \n What’s a life with no fun? Please, don’t be so ashamed \n I’ve had mine, you’ve had yours, we both know, we know\n They won’t get you like I will`,
            answerOptions: [
                { answerText: "My only wish is I die real", isCorrect: true },
                { answerText: "You hate being alone well you ain't the only one", isCorrect: false },
                { answerText: "I know you've been hurt by someone else", isCorrect: false },
                { answerText: "'Cause that truth hurts and those lies heal", isCorrect: false },
            ],
        },
        {
            albumCover: 'https://img.discogs.com/XuuwPLMpeXsdL6tsq3yHdLiRSEQ=/fit-in/600x592/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-259613-1282467240.jpeg.jpg',
            audio: Audio6,
            artist: 'Will Smith & DJ Jazzy Jef',
            song: 'Yo Home to Bel-Air',
            lyrics: `In West Philadelphia born and raised \n On the playground is where I spent most of my days \n Chilling out, maxing, relaxing all cool \n And all shooting some b-ball outside of the school \n When a couple of guys who were up to no good \n Started making trouble in my neighborhood \n I got in one little fight and my mom got scared`,
            answerOptions: [
                { answerText: "Drinking orange juice out of a champagne glass", isCorrect: false },
                { answerText: `You're movin' with your auntie and uncle in Bel-Air"`, isCorrect: false },
                { answerText: `And said "You're moving with your auntie and uncle in Bel-Air"`, isCorrect: true },
                { answerText: "I hope they're prepared for the prince of Bel-Air", isCorrect: false },
            ],
        },
        {
            albumCover: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Kelis_milkshake.jpg',
            audio: Audio7,
            artist: 'Kelis',
            song: 'Milkshake',
            lyrics: `My milkshake brings all the boys to the yard \n And they’re like, it’s better than yours \n Damn right it’s better than yours \n I can teach you, but I have to charge \n My milkshake brings all the boys to the yard \n And they’re like, it’s better than yours \n Damn right it’s better than yours`,
            answerOptions: [
                { answerText: "La la, la la, la", isCorrect: false },
                { answerText: "You must maintain your charm", isCorrect: false },
                { answerText: "I can teach you but I have to charge", isCorrect: true },
                { answerText: "I know you want it", isCorrect: false },
            ],
        },
        {
            albumCover: 'https://i.pinimg.com/originals/6e/71/05/6e7105058a0d653a79c82fc35a8c5977.jpg',
            audio: Audio8,
            artist: 'Rick Astley',
            song: 'Never Gonna Give You Up',
            lyrics: `We’re no strangers to love \n You know the rules and so do I \n A full commitment’s what I’m thinking of \n You wouldn’t get this from any other guy \n I just wanna tell you how I’m feeling \n Gotta make you understand \n Never gonna give you up \n Never gonna let you down`,
            answerOptions: [
                { answerText: "Never gonna tell a lie and hurt you", isCorrect: false },
                { answerText: "Never gonna make you cry", isCorrect: false },
                { answerText: "Never gonna say goodbye", isCorrect: false },
                { answerText: "Never gonna run around and desert you", isCorrect: true },
            ],
        },
        {
            albumCover: 'https://img.discogs.com/lUZasWpAJ8ndqj0fD_oRlSGFBQ8=/fit-in/600x581/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6524065-1421189890-2236.jpeg.jpg',
            audio: Audio9,
            artist: 'Avril Lavigne',
            song: 'Complicated',
            lyrics: `Chill out, what ya yellin’ for? \n Lay back, it’s all been done before \n And if, you could only let it be, you will see \n I like you the way you are \n When we’re driving in your car \n And you’re talking to me one on one, but you become \n Somebody else \n ‘Round everyone else \n You’re watching your back \n Like you can’t relax \n You try to be cool`,
            answerOptions: [
                { answerText: "I see the way you're acting like you're somebody else", isCorrect: false },
                { answerText: "Life's like this, you", isCorrect: false },
                { answerText: "Why'd you have to go and make things so complicated?", isCorrect: false },
                { answerText: "You look like a fool to me", isCorrect: true },
            ],
        },
        {
            albumCover: 'https://i.pinimg.com/originals/65/6c/dc/656cdcb91956a4d474016f9e54a0f292.jpg',
            audio: Audio10,
            artist: 'ABBA',
            song: 'Dancing Queen',
            lyrics: `Friday night and the lights are low \n Looking out for a place to go \n Where they play the right music \n Getting in the swing \n You come to look for a king \n Anybody could be that guy \n Night is young and the music’s high \n With a bit of rock music \n Everything is fine`,
            answerOptions: [
                { answerText: "You’re in the mood for a dance", isCorrect: true },
                { answerText: "And when you get the chance", isCorrect: false },
                { answerText: "You are the dancing queen", isCorrect: false },
                { answerText: "Feel the beat from the tambourine, oh yeah", isCorrect: false },
            ],
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    const answerClick = (isCorrect) => {
        if(isCorrect === true) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < songInfo.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        };
    };
        
        return(
            <div className="game">
                <h1 className="game__title">Baby Got Track</h1>
                {showScore ? (
                    <div className="game__score-section"> You scored {score} out of {songInfo.length}
                        <br/><img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves"/>
                    </div>
                ) : (
                <>
                    <div className="game__question-section">
                        <div className="game__question-count">
                            <span>Song {currentQuestion + 1}</span>/{songInfo.length}
                        </div>
                    </div>
                    <h1 className="game__artist">{songInfo[currentQuestion].artist}</h1> 
                    <div className="game__flex">
                        <div>
                            <img src={songInfo[currentQuestion].albumCover} className="game__album-cover" alt="Album Cover"/>
                            <br/><br/><audio controls autoPlay src={songInfo[currentQuestion].audio}></audio>
                        </div>
                        <div className="game__card">
                            <br/><br/><div className="game__question-text">{songInfo[currentQuestion].lyrics}</div>
                        </div>
                        </div>
                        <br/><br/><div className="game__answer-section">
                            {songInfo[currentQuestion].answerOptions.map(answerOption => <button className="game__button" onClick={() => answerClick(answerOption.isCorrect)}>{answerOption.answerText} </button>)}
                    </div>
                    </>
                )}
            </div>
        );
    }

export default Game;