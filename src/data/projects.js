export const projects = [
    {
        title: 'Travel-app',
        description: 'This application uses AWS S3 bucket to store its images and MongoDB to store user and travel data. It uses spring security for authentication where normal users can create entries, admin users can create and delete entries.',
        link: 'https://osholopa-travel-app.herokuapp.com/',
        source: 'https://github.com/osholopa/travel-app',
        img: require('../assets/travel-app.png'),
        tech: ['Java', 'Spring','AWS', 'MongoDB', 'Thymeleaf', 'MVC']
    },
    {
        title: 'Bookstore',
        description: 'In this Spring MVC application authenticated users can create, read and update book information to a PostgreSQL database. Admin user role can delete info. Guest username is "user" and password is "user".',
        link: 'https://osholopa-spring-bookstore.herokuapp.com/',
        source: 'https://github.com/osholopa/bookstore',
        img: require('../assets/bookstore.png'),
        tech: ['Java', 'Spring', 'H2', 'Thymeleaf', 'MVC']
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