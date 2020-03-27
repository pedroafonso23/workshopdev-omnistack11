// Used Express Framework to create and configurate my server
const express = require('express')
const server = express()

const ideas = [
    {
        img: 'https://image.flaticon.com/icons/svg/2729/2729007.svg',
        title: 'Programming Courses',
        category: 'Study',
        description: 'Lorem ipsum',
        url: 'https://rocketseat.com.br'
    },
    {
        img: 'https://image.flaticon.com/icons/svg/2729/2729005.svg',
        title: 'Exercices',
        category: 'Health',
        description: 'Lorem ipsum',
        url: 'https://rocketseat.com.br'
    },
    {
        img: 'https://image.flaticon.com/icons/svg/2729/2729027.svg',
        title: 'Meditation',
        category: 'Mind',
        description: 'Lorem ipsum',
        url: 'https://rocketseat.com.br'
    },
    {
        img: 'https://image.flaticon.com/icons/svg/2729/2729032.svg',
        title: 'Karaoke',
        category: 'Family Fun',
        description: 'Lorem ipsum',
        url: 'https://rocketseat.com.br'
    },
    {
        img: 'https://image.flaticon.com/icons/svg/2729/2729038.svg',
        title: 'Painting',
        category: 'Creativity',
        description: 'Lorem ipsum',
        url: 'https://rocketseat.com.br'
    },
    {
        img: 'https://image.flaticon.com/icons/svg/2729/2729048.svg',
        title: 'Paper Work',
        category: 'Creativity',
        description: 'Lorem ipsum',
        url: 'https://rocketseat.com.br'
    }
]

// Configure Static Files (CSS, scripts, images, etc)
server.use(express.static('public'))

// Nunjucks configuration
const nunjucks = require('nunjucks')
nunjucks.configure('views', {
    express: server,
    noCache: true, // Cache saves in memory things that may be important and used frequently. Better to turn off during develop. 
})

// My server is listening to the gate 3000
server.listen(3000) // .listen comes from the Express Framework

// Creating the route /
// and capturing the client request to respond
server.get("/", function(req, res) { // "When I get to the / address, execute this function"
    // console.log('Cheguei')  // So, when you load localhost:3000, the function will execute
    // return res.send('Server response')
    // return res.sendFile(__dirname + '/index.html')

    // const h1 = 'Hello from backend'
    // return res.render('index.html', { title: h1 }) // Passing a variable to index.html using nunjucks

    const reversedIdeas = [...ideas].reverse() // This way, reversedIdeas is not a reference to ideas, it is a copy of it.

    let lastIdeas = []
    for (idea of reversedIdeas) {
        if (lastIdeas.length < 3) {
            lastIdeas.push(idea)
        }
    }

    return res.render('index.html', { ideas: lastIdeas })
})

server.get("/ideas", function(req, res) {
    // return res.sendFile(__dirname + '/ideas.html')

    const reversedIdeas = [...ideas].reverse()

    return res.render('ideas.html', { ideas: reversedIdeas })
})


