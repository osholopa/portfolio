export const projects = [
    {
        title: 'Bookstore',
        description: 'In this Spring MVC application authenticated users can create, read and update books to a database. Deletion is reserved only for admin user role. Guest username is "user" and password is "user".',
        link: 'https://osholopa-spring-bookstore.herokuapp.com/',
        source: 'https://github.com/osholopa/bookstore',
        img: require('../assets/bookstore.png'),
        tech: ['Java', 'Spring', 'H2', 'Thymeleaf', 'MVC']
    },
    {
        title: 'Blog app',
        description: 'This is a bloglist app where users can like and anonymously comment on blogs, authenticated users can add or remove their own blogs. The backend is a REST API that is built on top of MongoDB database.',
        link: 'https://young-basin-26674.herokuapp.com/',
        source: 'https://github.com/osholopa/fullStackMooc-part7',
        img: require('../assets/bloglist.png'),
        tech: ['React', 'Node', 'Express', 'MongoDB', 'Heroku', 'REST Api']
    },
    {
        title: 'Phonebook app',
        description: 'Full-stack phonebook app where user can add, filter and delete numbers.',
        link: 'https://shielded-waters-62400.herokuapp.com/',
        source: 'https://github.com/osholopa/fullStackMooc-part3',
        img: require('../assets/puhelinluettelo.png'),
        tech: ['React', 'Node', 'Express', 'MongoDB', 'Heroku']
    },
    {
        title: 'Button click game',
        description: 'Full-stack button click game made with React, Node, Express.js and Socket.io.',
        link: 'https://cryptic-mountain-25746.herokuapp.com/',
        source: 'https://github.com/osholopa/clickpoints-frontend',
        img: require('../assets/clickpoints-1568x882.jpg'),
        tech: ['React','Node', 'Express', 'Socket.io', 'Heroku']
    },
    {
        title: 'Unity 2D Platformer WebGL',
        description: '2D side scroller made with Unity, C# and WebGL. Graphics made with Inkscape.',
        link: 'https://osholopa.github.io/Platformer2DWebGL/',
        source: 'https://github.com/osholopa/Platformer2D',
        img: require('../assets/platformer-1568x882.jpg'),
        tech: ['Unity', 'WebGL', 'C#', 'Inkscape']
    }
]