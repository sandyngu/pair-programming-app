const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser');

app.use(bodyParser.json())  

const lyrics = [
    {
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/1/17/Wonderwall_cover.jpg',
        artist: 'Oasis',
        song: 'Wonderwall',
        lyrics: ''
    },
    {
        albumCover: 'https://i.pinimg.com/736x/37/3a/da/373adaed94cca75f4a9416ecfb414e33.jpg',
        artist: 'Earth, Wind & Fire',
        song: 'September',
        lyrics: "Do you remember the 21st night of September? \n Love was changing the minds of pretenders while chasing the clouds away our hearts were ringing \n In the key that our souls were singing As we danced in the night \n Remember how the stars stole the night away \n Hey hey hey \n Ba de ya, say do you remember? \n Ba de ya, dancing in September \n Ba de ya, never was a cloudy day \n Ba duda, ba duda, ba duda, badu \n Ba duda, badu, ba duda, badu \n Ba duda, badu, ba duda My thoughts are with you \n Holding hands with your heart to s"
    },
    {
        albumCover: 'https://cloud10.todocoleccion.online/discos-vinilo/tc/2018/11/11/21/139760030.jpg',
        artist: 'Michael Jackson',
        song: 'Billie Jean',
        lyrics: "She was more like a beauty queen from a movie scene \n I said don't mind, but what do you mean, I am the one \n Who will dance on the floor in the round? \n She said I am the one, who will dance on the floor in the round \n She told me her name was Billie Jean, as she caused a scene \n Then every head turned with eyes that dreamed of being the one \n Who will dance on the floor in the round \n People always told me be careful of what you do \n And don't go around breaking young girls' hearts \n And mother always told me b"
    },
    {
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/9/93/Man%21_I_Feel_Like_a_Woman%21.jpg',
        artist: 'Shania Twain',
        song: 'Man, I Feel Like a Woman',
        lyrics: "Let's go girls, come on \n I'm going out tonight, I'm feelin' alright \n Gonna let it all hang out \n Want to make some noise, really raise my voice \n Yeah, I want to scream and shout \n No inhibitions, make no conditions \n Get a little outta line \n I ain't gonna act politically correct \n I only want to have a good time \n The best thing about being a woman \n Is the prerogative to have a little fun and \n Oh, oh, oh, go totally crazy, forget I'm a lady \n Men's shirts, short skirts \n Oh, oh, oh, really go wild yeah, doin' it in"
    },
    {
        albumCover: 'https://img.discogs.com/uHRwD7cdCkudjOv5uo1ZXZRFRM4=/fit-in/600x594/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1513609-1350043097-5750.jpeg.jpg',
        artist: 'The Supremes',
        song: 'Stop In The Name Of Love',
        lyrics: "Stop! In the name of love \n Before you break my heart \n Baby, baby \n I'm aware of where you go \n Each time you leave my door \n I watch you walk down the street  \n Knowing your other love you'll meet  \n But this time before you run to her \n Leaving me alone and hurt  \n (Think it over) After I've been good to you ? \n (Think it over) After I've been sweet to you ? \n Stop! In the name of love \n Before you break my heart  \n Stop! In the name of love \n Before you break my heart \n Think it over \n Think it over \n I've known of your"
    },
    {
        albumCover: 'https://m.media-amazon.com/images/M/MV5BZmY2MTUyNzAtNGM3MS00NDI5LWEzNzgtOTU3YThjOWEzNWZkXkEyXkFqcGdeQXVyMjA4OTI5NDQ@._V1_SY500_SX500_AL_.jpg',
        artist: 'Drake & Rihanna',
        song: 'Take Care',
        lyrics: "I know you've been hurt by someone else \n I can tell by the way you carry yourself \n If you let me, here's what I'll do \n I'll take care of you \n I've loved and I've lost \n I've asked about you and they told me things \n But my mind didn't change and I still feel the same \n What's a life with no fun? Please, don't be so ashamed \n I've had mine, you've had yours, we both know, we know \n They won't get you like I will, my only wish is I die real \n 'Cause that truth hurts and those lies heal \n And you can't sleep thinkin"
    },
    {
        albumCover: 'https://img.discogs.com/XuuwPLMpeXsdL6tsq3yHdLiRSEQ=/fit-in/600x592/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-259613-1282467240.jpeg.jpg',
        artist: 'Will Smith & DJ Jazzy Jef',
        song: 'Yo Home to Bel-Air',
        lyrics: "Now this is a story all about how \n My life got flipped turned upside down \n And I'd like to take a minute, just sit right there \n I'll tell you how I became the prince of a town called Bel-Air \n In West Philadelphia born and raised \n On the playground is where I spent most of my days \n Chilling out, maxing, relaxing all cool \n And all shooting some b-ball outside of the school \n When a couple of guys who were up to no good \n Started making trouble in my neighborhood \n I got in one little fight and my mom got scared"
    },
    {
        albumCover: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Kelis_milkshake.jpg',
        artist: 'Kelis',
        song: 'Milkshake',
        lyrics: "My milkshake brings all the boys to the yard \n And they're like, it's better than yours \n Damn right it's better than yours \n I can teach you, but I have to charge \n My milkshake brings all the boys to the yard \n And they're like, it's better than yours \n Damn right it's better than yours \n I can teach you, but I have to charge \n I know you want it \n The thing that makes me \n What the guys go crazy for \n They lose their minds \n The way I wind \n I think it's time"
    },
    {
        albumCover: 'https://i.pinimg.com/originals/6e/71/05/6e7105058a0d653a79c82fc35a8c5977.jpg',
        artist: 'Rick Astley',
        song: 'Never Gonna Give You Up',
        lyrics: "We're no strangers to love \n You know the rules and so do I \n A full commitment's what I'm thinking of \n You wouldn't get this from any other guy \n I just wanna tell you how I'm feeling \n Gotta make you understand \n Never gonna give you up \n Never gonna let you down \n Never gonna run around and desert you \n Never gonna make you cry \n Never gonna say goodbye  \n Never gonna tell a lie and hurt you \n We've known each other for so long \n Your heart's been aching but you're too shy to say it"
    },
    {
        albumCover: 'https://img.discogs.com/lUZasWpAJ8ndqj0fD_oRlSGFBQ8=/fit-in/600x581/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6524065-1421189890-2236.jpeg.jpg',
        artist: 'Avril Lavigne',
        song: 'Complicated',
        lyrics: "Chill out, what ya yellin' for? \n Lay back, it's all been done before \n And if, you could only let it be, you will see \n I like you the way you are \n When we're driving in your car \n And you're talking to me one on one, but you become \n  Somebody else \n 'Round everyone else \n You're watching your back \n Like you can't relax  \n You try to be cool \n You look like a fool to me \n Tell me \n Why'd you have to go and make things so complicated? \n I see the way you're acting like you're somebody else \n Gets me frustrated"
    },
    {
        albumCover: 'https://i.pinimg.com/originals/65/6c/dc/656cdcb91956a4d474016f9e54a0f292.jpg',
        artist: 'ABBA',
        song: 'Dancing Queen',
        lyrics: "Ooh \n You can dance \n You can jive \n Having the time of your life \n Ooh, see that girl \n Watch that scene \n Digging the dancing queen \n Friday night and the lights are low \n Looking out for a place to go \n Where they play the right music \n Getting in the swing \n You come to look for a king \n Anybody could be that guy \n Night is young and the music's high \n With a bit of rock music \n Everything is fine \n You're in the mood for a dance \n And when you get the chance \n You are the dancing queen \n Young and sweet \n Only seventeen"
    }
]

app.get("/", (_req, res) => {
    res.json(lyrics);
})

app.listen(port, () => console.log(`Listening on ${port}`));