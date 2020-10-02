const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser');
// const Audio1 = require('./assets/Oasis-Wonderwall.mp3');
// const Audio2 = require('./assets/EarthWindFire-September.mp3');
// const Audio3 = require('./assets/MichaelJackson-BillieJean.mp3');
// const Audio4 = require('./assets/ShaniaTwain-ManIFeelLikeAWoman.mp3');
// const Audio5 = require('./assets/DrakeRihanna-TakeCare.mp3');
// const Audio6 = require('./assets/FreshPrinceofBelAirThemeSong.mp3');
// const Audio7 = require('./assets/Kelis-Milkshake.mp3');
// const Audio8 = require('./assets/RickAstley-NeverGonnaGiveYouUp.mp3');
// const Audio9 = require('./assets/AvrilLavigne-Complicated.mp3');
// const Audio10 = require('./assets/ABBA-DancingQueen.mp3')

app.use(bodyParser.json())  

const songInfo = [
    {
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/1/17/Wonderwall_cover.jpg',
        audio: './assets/Oasis-Wonderwall.mp3',
        artist: 'Oasis',
        song: 'Wonderwall',
        lyrics: `Today is gonna be the day \n That they’re gonna throw it back to you \n By now you should’ve somehow \n Realized what you gotta do \n I don’t believe that anybody \n
        Feels the way I do, about you now \
        Backbeat, the word was on the street \
        That the fire in your heart is out \
        I’m sure you’ve heard it all before \
        But you never really had a doubt`,
        answerOptions: [
            { answerText: "Today was gonna be the day", isCorrect: false },
            { answerText: "And after all, you're my wonderwall", isCorrect: false },
            { answerText: "I don’t believe that anybody feels the way I do about you now", isCorrect: true },
            { answerText: "Because maybe, you're gonna be the one that saves me", isCorrect: false },
        ],
    },
    {
        albumCover: 'https://i.pinimg.com/736x/37/3a/da/373adaed94cca75f4a9416ecfb414e33.jpg',
        // audio: Audio2,
        artist: 'Earth, Wind & Fire',
        song: 'September',
        lyrics: "Do you remember the 21st night of September? \
        Love was changing the minds of pretenders \
        While chasing the clouds away \
        Our hearts were ringing \
        In the key that our souls were singing \
        As we danced in the night",
        answerOptions: [
            { answerText: "Remember how the stars stole the night away", isCorrect: true },
            { answerText: "Now December found the love we shared in September", isCorrect: false },
            { answerText: "Ba de ya, say do you remember", isCorrect: false },
            { answerText: "Ba duda, ba duda, ba duda, badu", isCorrect: false },
        ],
    },
    {
        albumCover: 'https://cloud10.todocoleccion.online/discos-vinilo/tc/2018/11/11/21/139760030.jpg',
        // audio: Audio3,
        artist: 'Michael Jackson',
        song: 'Billie Jean',
        lyrics: "She was more like a beauty queen from a movie scene \
        I said don’t mind, but what do you mean, I am the one \
        Who will dance on the floor in the round? \
        She said I am the one, who will dance on the floor in the round \
        She told me her name was Billie Jean, as she caused a scene \
        Then every head turned with eyes that dreamed of being the one \
        Who will dance on the floor in the round \
        People always told me be careful of what you do",
        answerOptions: [
            { answerText: "Billie Jean is not my lover", isCorrect: false },
            { answerText: "And don’t go around breaking young girls’ hearts", isCorrect: true },
            { answerText: "She told my baby we'd danced 'til three, then she looked at me", isCorrect: false },
            { answerText: "She's just a girl who claims that I am the one", isCorrect: false },
        ],
    },
    {
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/9/93/Man%21_I_Feel_Like_a_Woman%21.jpg',
        // audio: Audio4,
        artist: 'Shania Twain',
        song: 'Man! I Feel Like a Woman',
        lyrics: "Let’s go girls, come on \
        I’m going out tonight, I’m feelin’ alright \
        Gonna let it all hang out \
        Want to make some noise, really raise my voice \
        Yeah, I want to scream and shout \
        No inhibitions, make no conditions \
        Get a little outta line \
        I ain’t gonna act politically correct",
        answerOptions: [
            { answerText: "The girls need a break-tonight we're gonna take", isCorrect: false },
            { answerText: "Oh, oh, oh, I want to be free yeah, to feel the way I feel", isCorrect: false },
            { answerText: "Man! I feel like a woman!", isCorrect: false },
            { answerText: "I only want to have a good time", isCorrect: true },
        ],
    },
    {
        albumCover: 'https://m.media-amazon.com/images/M/MV5BZmY2MTUyNzAtNGM3MS00NDI5LWEzNzgtOTU3YThjOWEzNWZkXkEyXkFqcGdeQXVyMjA4OTI5NDQ@._V1_SY500_SX500_AL_.jpg',
        // audio: Audio5,
        artist: 'Drake & Rihanna',
        song: 'Take Care',
        lyrics: `I’ve asked about you and they told me things 
        But my mind didn’t change and I still feel the same 
        What’s a life with no fun? Please, don’t be so ashamed 
        I’ve had mine, you’ve had yours, we both know, we know
        They won’t get you like I will`,
        answerOptions: [
            { answerText: "My only wish is I die real", isCorrect: true },
            { answerText: "You hate being alone well you ain't the only one", isCorrect: false },
            { answerText: "I know you've been hurt by someone else", isCorrect: false },
            { answerText: "'Cause that truth hurts and those lies heal", isCorrect: false },
        ],
    },
    {
        albumCover: 'https://img.discogs.com/XuuwPLMpeXsdL6tsq3yHdLiRSEQ=/fit-in/600x592/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-259613-1282467240.jpeg.jpg',
        // audio: Audio6,
        artist: 'Will Smith & DJ Jazzy Jef',
        song: 'Yo Home to Bel-Air',
        lyrics: `In West Philadelphia born and raised
        On the playground is where I spent most of my days
        Chilling out, maxing, relaxing all cool
        And all shooting some b-ball outside of the school
        When a couple of guys who were up to no good
        Started making trouble in my neighborhood
        I got in one little fight and my mom got scared`,
        answerOptions: [
            { answerText: "Drinking orange juice out of a champagne glass", isCorrect: false },
            { answerText: `You're movin' with your auntie and uncle in Bel-Air"`, isCorrect: false },
            { answerText: `And said "You're moving with your auntie and uncle in Bel-Air"`, isCorrect: true },
            { answerText: "I hope they're prepared for the prince of Bel-Air", isCorrect: false },
        ],
    },
    {
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Kelis_milkshake.jpg',
        // audio: Audio7,
        artist: 'Kelis',
        song: 'Milkshake',
        lyrics: `My milkshake brings all the boys to the yard
        And they’re like, it’s better than yours
        Damn right it’s better than yours
        I can teach you, but I have to charge
        My milkshake brings all the boys to the yard
        And they’re like, it’s better than yours
        Damn right it’s better than yours`,
        answerOptions: [
            { answerText: "La la, la la, la", isCorrect: false },
            { answerText: "You must maintain your charm", isCorrect: false },
            { answerText: "I can teach you but I have to charge", isCorrect: true },
            { answerText: "I know you want it", isCorrect: false },
        ],
    },
    {
        albumCover: 'https://i.pinimg.com/originals/6e/71/05/6e7105058a0d653a79c82fc35a8c5977.jpg',
        // audio: Audio8,
        artist: 'Rick Astley',
        song: 'Never Gonna Give You Up',
        lyrics: `We’re no strangers to love
        You know the rules and so do I
        A full commitment’s what I’m thinking of
        You wouldn’t get this from any other guy
        I just wanna tell you how I’m feeling
        Gotta make you understand
        Never gonna give you up
        Never gonna let you down`,
        answerOptions: [
            { answerText: "Never gonna tell a lie and hurt you", isCorrect: false },
            { answerText: "Never gonna make you cry", isCorrect: false },
            { answerText: "Never gonna say goodbye", isCorrect: false },
            { answerText: "Never gonna run around and desert you", isCorrect: true },
        ],
    },
    {
        albumCover: 'https://img.discogs.com/lUZasWpAJ8ndqj0fD_oRlSGFBQ8=/fit-in/600x581/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6524065-1421189890-2236.jpeg.jpg',
        // audio: Audio9,
        artist: 'Avril Lavigne',
        song: 'Complicated',
        lyrics: `Chill out, what ya yellin’ for?
        Lay back, it’s all been done before
        And if, you could only let it be, you will see
        I like you the way you are
        When we’re driving in your car
        And you’re talking to me one on one, but you become
        Somebody else
        ‘Round everyone else
        You’re watching your back
        Like you can’t relax
        You try to be cool`,
        answerOptions: [
            { answerText: "I see the way you're acting like you're somebody else", isCorrect: false },
            { answerText: "Life's like this, you", isCorrect: false },
            { answerText: "Why'd you have to go and make things so complicated?", isCorrect: false },
            { answerText: "You look like a fool to me", isCorrect: true },
        ],
    },
    {
        albumCover: 'https://i.pinimg.com/originals/65/6c/dc/656cdcb91956a4d474016f9e54a0f292.jpg',
        // audio: Audio10,
        artist: 'ABBA',
        song: 'Dancing Queen',
        lyrics: `Friday night and the lights are low
        Looking out for a place to go
        Where they play the right music
        Getting in the swing
        You come to look for a king
        Anybody could be that guy
        Night is young and the music’s high
        With a bit of rock music
        Everything is fine`,
        answerOptions: [
            { answerText: "You’re in the mood for a dance", isCorrect: true },
            { answerText: "And when you get the chance", isCorrect: false },
            { answerText: "You are the dancing queen", isCorrect: false },
            { answerText: "Feel the beat from the tambourine, oh yeah", isCorrect: false },
        ],
    }
]

app.get("/lyrics", (_req, res) => {
    res.json(songInfo);
})

app.listen(port, () => console.log(`Listening on ${port}`));