export const projects = [
  {
    title: 'Tomato timer',
    description:
      "Sometimes one has to make effort to maintain structure and focus in daily activities. I always forget to have breaks when I'm working and a timer felt like easily approachable hobby project. I've never used Vue.js before so I decided to try it here.",
    links: [
      {
        label: 'Demo',
        url: 'https://nerdytomatoe.vercel.app/',
      },
      {
        label: 'Github URL',
        url: 'https://github.com/osholopa/nerdytomatoe',
      },
    ],
    img: require('../assets/images/pomodoro.png'),
    tech: ['Vue.js', 'Inkscape'],
  },
  {
    title: 'Newsletter form',
    description:
      'A newsletter subscription form made with React and styled with SASS. It demonstrates my skills on how to implement custom styles on UI elements. The project includes custom text fields, checkboxes, buttons and snackbars inside a responsive form',
    links: [
      {
        label: 'Demo',
        url: 'https://jovial-bell-2f4b94.netlify.app',
      },
      {
        label: 'Github URL',
        url: 'https://github.com/osholopa/newsletter-form',
      },
    ],
    img: require('../assets/images/newsletter-form.jpg'),
    tech: ['React', 'SASS'],
    mobileObjectPosition: '35%',
  },
  {
    title: 'Tennis course enrollment system frontend',
    description:
      'This is a frontend demo of a tennis course enrollment system which I have been recently part of developing. The layout might seem strange at first, but it is meant to be embedded inside an iframe.',
    links: [
      {
        label: 'Demo',
        url: 'https://demo.kooste.fi',
      },
    ],
    img: require('../assets/images/tennis.png'),
    tech: ['React', 'Material UI'],
  },
  {
    title: 'Blog app',
    description:
      "This is one of the courseworks of fullstackopen.com - course. It's a bloglist app where users can like and anonymously comment on blogs, authenticated users can add or remove their own blogs. The backend is a REST API that is built on top of MongoDB database.",
    links: [
      {
        label: 'Demo',
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
    img: require('../assets/images/bloglist.png'),
    tech: ['React', 'Node', 'MongoDB', 'Heroku'],
  },
  {
    title: 'Travel-app',
    description:
      'This was part of a Java Spring server programming course. This application uses AWS S3 bucket to store its images and MongoDB to store user and travel data. It uses spring security for authentication where normal users can create entries, admin users can create and delete entries.',
    links: [
      {
        label: 'Demo',
        url: 'https://osholopa-travel-app.herokuapp.com/',
      },
      {
        label: 'Github URL',
        url: 'https://github.com/osholopa/travel-app',
      },
    ],
    img: require('../assets/images/travel-app.jpg'),
    tech: ['Java', 'Spring', 'AWS', 'MongoDB'],
    mobileObjectPosition: '55%',
  },
  {
    title: 'Bookstore',
    description:
      'Also part of a Java Spring server programming course. In this Spring MVC application authenticated users can create, read and update books to a database. Deletion is reserved only for admin user role. Guest username is "user" and password is "user".',
    links: [
      {
        label: 'Demo',
        url: 'https://osholopa-spring-bookstore.herokuapp.com/',
      },
      {
        label: 'Github URL',
        url: 'https://github.com/osholopa/bookstore',
      },
    ],
    img: require('../assets/images/bookstore.jpg'),
    tech: ['Java', 'Spring'],
  },
  {
    title: 'Button click game',
    description:
      'Full-stack button click game made with React, Node, Express.js and Socket.io. Users start with 20 points and they consume the same counter on the server side. Each click costs 1 points and rewards (more points) are given on every 10th, 100th and 500th click.',
    links: [
      {
        label: 'Demo',
        url: 'https://cryptic-mountain-25746.herokuapp.com/',
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
    img: require('../assets/images/clickpoints-1568x882.jpg'),
    tech: ['React', 'Node', 'Socket.io', 'Heroku'],
    mobileObjectPosition: '45%',
  },
  {
    title: 'Unity 2D Platformer',
    description:
      '2D side scroller prototype game made with Unity, C# and built with WebGL. I made most of the graphics with Inkscape.',
    links: [
      {
        label: 'Demo',
        url: 'https://osholopa.github.io/Platformer2DWebGL/',
      },
      {
        label: 'Github URL',
        url: 'https://github.com/osholopa/Platformer2D',
      },
    ],
    img: require('../assets/images/platformer-1568x882.jpg'),
    tech: ['Unity', 'C#', 'Inkscape'],
    mobileObjectPosition: '95%',
  },
  {
    title: 'JS Snake Game',
    description: 'HTML canvas snake game inspired by old Nokia phones.',
    links: [
      {
        label: 'Demo',
        url: 'https://osholopa.github.io/SnakeJS/',
      },
      {
        label: 'Github URL',
        url: 'https://github.com/osholopa/SnakeJS',
      },
    ],
    img: require('../assets/images/snake.jpg'),
    tech: ['HTML', 'CSS', 'JavaScript'],
    mobileObjectPosition: '55%',
  },
  {
    title: 'Linux Server Course',
    description:
      'This course portfolio contains exercises related to a Linux server course I took in Haaga-Helia University of Applied Sciences.',
    links: [
      {
        label: 'Solutions',
        url: 'https://osholopa.github.io/linux-palvelimet/index.html',
      },
      {
        label: 'Course Exercises',
        url:
          'http://terokarvinen.com/2020/linux-palvelimet-2020-alkukevat-kurssi-ict4tn021-3010/#alustavat-tehtavanannot',
      },
    ],
    img: require('../assets/images/linux.jpg'),
    tech: ['Linux', 'Apache', 'MySQL', 'PHP', 'Python', 'Flask'],
    mobileObjectPosition: '45%',
  },
]
