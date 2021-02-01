export const projects = [
  {
    title: 'Course enrollment system frontend',
    description:
      'This is a frontend demo of a tennis course enrollment system which I have been recently part of developing.',
    links: [
      {
        label: 'Live Demo',
        url: 'https://demo.kooste.fi',
      },
    ],
    img: require('../assets/tennis.png'),
    tech: ['React', 'Material UI'],
  },
  {
    title: 'Bookstore',
    description:
      'In this Spring MVC application authenticated users can create, read and update books to a database. Deletion is reserved only for admin user role. Guest username is "user" and password is "user".',
    links: [
      {
        label: 'Live Demo',
        url: 'https://osholopa-spring-bookstore.herokuapp.com/',
      },
      {
        label: 'Github URL',
        url: 'https://github.com/osholopa/bookstore',
      },
    ],
    img: require('../assets/bookstore.png'),
    tech: ['Java', 'Spring', 'H2', 'Thymeleaf', 'MVC'],
  },
  {
    title: 'Blog app',
    description:
      "This is one of the courseworks of fullstackopen.com - course. It's a bloglist app where users can like and anonymously comment on blogs, authenticated users can add or remove their own blogs. The backend is a REST API that is built on top of MongoDB database.",
    links: [
      {
        label: 'Live Demo',
        url: 'https://young-basin-26674.herokuapp.com/',
      },
      {
        label: 'Frontend Github URL',
        url:
          'https://github.com/osholopa/fullStackMooc-part7/tree/master/bloglist-frontend',
      },
      {
        label: 'Backend Github URL',
        url:
          'https://github.com/osholopa/fullStackMooc-part7/tree/master/bloglist-backend',
      },
      {
        label: 'Course URL',
        url: 'https://fullstackopen.com/',
      },
    ],
    img: require('../assets/bloglist.png'),
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Heroku', 'REST Api'],
  },
  {
    title: 'Button click game',
    description:
      'Full-stack button click game made with React, Node, Express.js and Socket.io.',
    links: 'https://cryptic-mountain-25746.herokuapp.com/',
    links: [
      {
        label: 'Live Demo',
        url: 'https://young-basin-26674.herokuapp.com/',
      },
      {
        label: 'Frontend Github URL',
        url: 'https://github.com/osholopa/clickpoints-frontend',
      },
      {
        label: 'Backend Github URL',
        url: 'https://github.com/osholopa/clickpoints-backend',
      },
    ],
    img: require('../assets/clickpoints-1568x882.jpg'),
    tech: ['React', 'Node', 'Express', 'Socket.io', 'Heroku'],
  },
  {
    title: 'Unity 2D Platformer WebGL',
    description:
      '2D side scroller prototype game made with Unity, C# and built with WebGL. I made most of the graphics with Inkscape.',
    links: [
      {
        label: 'Live Demo',
        url: 'https://osholopa.github.io/Platformer2DWebGL/',
      },
      {
        label: 'Github URL',
        url: 'https://github.com/osholopa/Platformer2D',
      },
    ],
    img: require('../assets/platformer-1568x882.jpg'),
    tech: ['Unity', 'WebGL', 'C#', 'Inkscape'],
  },
  {
    title: 'JS Snake Game',
    description: 'HTML canvas snake game inspired by old Nokia phones.',
    links: [
      {
        label: 'Live Demo',
        url: 'https://osholopa.github.io/SnakeJS/',
      },
      {
        label: 'Github URL',
        url: 'https://github.com/osholopa/SnakeJS',
      },
    ],
    img: require('../assets/snake.png'),
    tech: ['HMTL', 'CSS', 'JavaScript'],
  },
]
