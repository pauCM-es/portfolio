export const projects = [
  {
    title: `EscandallosApp`,
    subtitle: "Helps with data register of quality produce at stone fruit warehouses",
    date: "Feb. 2023",
    inConstruction: true,
    // image: `https://res.cloudinary.com/didwvaeha/image/upload/v1678737571/portfolio/under-construction_hnqbdt.png`,
    image: `https://res.cloudinary.com/didwvaeha/image/upload/v1678350265/portfolio/escandallo_ennf7x.png`,
    video: "",
    intro: [
      `Simple apps like this one can optimaze work at small and medium industries where still the paper is the winner.`,
      `UNDER CONSTRUNCTION -> Working on it so it's not only an MVP.`
    ],
    description: [
      `Group project end of bootcamp at Hupgrade Hub. An MVP for a real industry.`,
      `Technologies used: Angular, TypeScript, JWT auth, Socket.io, Tailwind, Cloudinary, NodeJS, Express and mongoDB.`,
      `Little resume:`,
      `- CRUD of data from quality checks the produce received at warehouse entrance. (It's known as "escandallo")`,
      `- Possibility of taking pictures of the fruit batch of each escandallo, and upload them to cloudinary.`,
      `- Catalogue of defects, plages the fruit can suffer, and that the worker has to check for. Another CRUD.`,
      `- A chat section between users so the worker doesn't need to use their personal phone.`,
      `- User roles: reader, writer, admin (this can register and modify users).`,
      `- We wanted for input data to be fast. to try and not to use much the keyboard: dynamicaly generated buttons, radio and range inputs, the use of
      key intro to add data... `,
      `- Design thinking in scalability. In case of diferent products, growing and having more warehouses. 
      Being able to filter wich warehouse data shoud each user see and work with...`,

      `- This one is a pet project of mine so I'm going to keep developing it and learn from it. WHAT'S NEXT: `,
      `- Improve the chat and make it completed fuctional between diferent users.`,
      `- Improve the catalogue. When creating a new defect, the posibility of take a photo and save it.`,
      `- Another section for instructions and protocols so the worker can be more independent.`,
      `- Being able to export to .cvs, excel.`,
      `- Generate reports in PDF.`,
      `- Make it responsive.`,
    ],
    tags: ['angular', 'typecript', 'node', 'mongo', 'tailwind', 'cloudinary', 'socket.io'],
    icons:['angular', 'node', 'mongo', 'tailwind'],
    github: "https://github.com/pauCM-es/portfolio",
    link: null,
  },  
  {
    title: `Warehouse TV`,
    subtitle: "It tells you on wich service is any film or tv-show streaming",
    date: "Feb. 2023",
    inConstruction: true,
    image: `https://res.cloudinary.com/didwvaeha/image/upload/v1678350272/portfolio/warehouse-search_yx2tk6.png`,
    video: "",
    intro: [
      `Use the WatchMode API. The back is done with JSON-Server and Angular the front.`,
      `UNDER CONSTRUNCTION -> I plan on redoing it. All the obstacles we 
      encountered along the way made de code a little messy at the end.`],
    description: [
      `Small group project for Angular.`,
      `The idea is that users select which streaming services have so they can:`,
      `- See the titles trending.`,
      `- Look for information of any movie, tv-show, miniserie, ect...`,
      `- Know on which platforms any title is streaming.`,
      ` One of the difficulties we ran into was with json-server. We used it to store data from the API to 
      reduce the number of requests (there was a limit of 1000 per month), but it got clogged and gave us a hell of a fight. 
      We had to get creative in order to do it.`,
      `Also had to work on cleaning up the objects received from the API to not clutter the json-server 
      with unnecessary information. We realized, a little late, that it has limited capacity.`,
      `I learned a lot about Angular, and working with GIT as a part of a remote team, but most of all I learned from 
      the number of obstacles along the way that forced us to react quickly and adjust our thinking as we went.`,
    ],
    tags: ['angular', 'sass', 'jason-server', 'git'],
    icons:['angular', 'sass'],
    github: "https://github.com/pauCM-es/portfolio",
    link: null,
  },
  {
    title: `Portfolio`,
    subtitle: "REACT SPA. dark/light themes with redux. Framer motion animation library",
    date: "Jan. 2023",
    image: `https://res.cloudinary.com/didwvaeha/image/upload/v1678737721/portfolio/portfolio_rcetxh.png`,
    video: `https://res.cloudinary.com/didwvaeha/video/upload/v1678214437/portfolio/Paula-Costa_kyfhmn.webm`,
    intro: [`It started as an individual project for React module at the bootcamp.`],
    description: [`
    One thing that stucked with me when we learned about redux was the use of objects instead of switch in the reducers. 
    I've been using this structure since then.`,
    `I use BEM for scss styles, but realize I was making some mistakes, so I already have in mind not to repeat them. `,
    `While trying to implement an input to pick the color theme I've learn new ways in which this can be made more eficiently.`,
    `I had to implement a delay when clicking buttons so the animation can be seen before the page change.`,
    `There is also a reusable button. The ones on the navbar and the home page. It would also work with the profile section buttons.`,
  ],
    tags: ['react', 'redux', 'javascript', 'framer motion', 'SPA', 'scss', 'git'],
    icons:['react', 'redux', 'sass'],
    github: "https://github.com/pauCM-es/portfolio",
    link: null,
  },
  {
    title: `3d prints API REST`,
    subtitle: "API to keep track of different settings used on 3D prints.",
    date: "Jan. 2023",
    image: `https://res.cloudinary.com/didwvaeha/image/upload/v1678738363/portfolio/api-rest-prints_yxqyf1.png`,
    video: ``,
    intro: [
      `Project at Upgrade Hub bootcamp.`,
      `The idea comes because I'm incapable of remember what settings I used, or what I shoud use for new prints. Also it'd be usefull
      if I could get ideas from other people settings.`
     ],
    description: [`Technologies used: NODE, Express, MongoDB, authentication via passport, puppeteer library for scrapping...`,
    `It has 3 collections: Users, Prints (settings) and Thingies (3d-designs to print).`,
    `I used the scrapping to collect data (title, image url, link url) from a free website where most of us print stuff.`,
    `It scrape designs saved as favorites in that website, and stores them in the thingies collection with the reference of your user`,
    `You must be logged in to add/modify data, if not only read permission is granted.`,
    `NEXT: I'd like to develope a small react front so I can use it myself. And implement the option of taking photos of the
    prints and upload them to cloudinary. Kind of like my own catalogue of 3D prints.
    `,
  ],
    tags: ["NODE", "Express", "API", "Asynchronous", "MongoDB", "Web Scrapping", "GIT"],
    icons:['node', 'mongo'],
    github: "https://github.com/pauCM-es/upgrade-api-project",
    link: null,
  },
  {
    title: `Pokedex`,
    subtitle: "This quickly escalated and became my little monster 😊.",
    date: "Jan. 2023",
    image: `https://res.cloudinary.com/didwvaeha/image/upload/v1678737951/portfolio/pokedex_k2wjst.png`,
    video: `https://res.cloudinary.com/didwvaeha/video/upload/v1678213926/portfolio/Pokedex_excmot.webm`,
    intro: [
      `Project end of javascript module at Upgrade Hub bootcamp.`,
      `Technologies used: javaScript, DOM, HTML & SCSS, poke-API.`,
      `Super proud of this one. Made after only 10 days of javascript classes.`
    ],
    description: [
      `The requirements for this project were to get the information asynchronously and do some rendering.`,
      `When they said pokedex it, the cards people usually do didn' come to mind, the real machine did.`,
      `Pokemons are a part of my childhood, so my mind went wild with the possibilities. There were also Christmas 
      holidays and that meant more time for this. I went all in...`,
      `The more challenging aspect was that is all done in the same html page... games and all. I had to play a lot with css displays to show
      the pieces I wanted.`,
      `Clean and organize code was my priority. To make it more easy on the eyes, I pulled apart into diferent files everything I could: 
      DOM elements, function helpers, minigames...`,
      `Something I had a hard time finding in the internet (I actually didn't) but ended up doing on my own was chain evolutions.
      It's not the simplest object to iterate over. I also saved that function into a different file for the future.`,
      `The pokedex can differentiate between seen pokemons and captured ones (you can toggle the capture status).`,
      `Filters done by search input for names or numbers, or the type-buttons. They are acumulative and dinamycally rendered. `,
      `There's also one last unseen pokemon, and if you find it an click 3 times on it, the pokedex activates and detects a wild one 
      so you can catch it (when it appears just click on it).`
  ],
    tags: ["javascript", "DOM", "API", "Asynchronous", "GIT", 'html', 'css', 'BEM', 'scss'],
    icons:['js', 'html', 'sass'],
    github: "https://github.com/pauCM-es/upgrade-pokedex",
    link: "https://upgrade-pokedex.vercel.app/",
  },
  {
    title: `Memory game`,
    subtitle: "Javascript logic exercise that later I adapted and integrated into the pokedex",
    date: "Dic. 2022",
    image: `https://res.cloudinary.com/didwvaeha/image/upload/v1678350268/portfolio/memory-game_vxppeq.png`,
    video: `https://res.cloudinary.com/didwvaeha/video/upload/v1678789200/portfolio/memory-game_zdgkeb.webm`,
    intro: [
      `Technologies used: javaScript, DOM, HTML & SCSS.`,
      `Made all the game logic in a function to call it afterwards within the pokedex.`
    ],
    description: [
      `Almost 200 lines of code...`,
      `I really enjoy these kind of logic challenges. Taking apart the puzzle in small pieces,
      solving each one of them, looking for all the ways they affect each other and how they are supposed to work together. 
      And then, putting everything together in the best possible way...`,
  ],
    tags: ["javascript","GIT",],
    icons:['js'],
    github: "https://github.com/pauCM-es/portfolio",
    link: null,
  },
  {
    title: `Snake game`,
    subtitle: "JavaScript little challenge",
    date: "Dic. 2022",
    image: `https://res.cloudinary.com/didwvaeha/image/upload/v1678348848/portfolio/snake_zjk89s.png`,
    video: `https://res.cloudinary.com/didwvaeha/video/upload/v1678213902/portfolio/Snake-Game_jhe6qm.webm`,
    intro: [`While learning javascript and DOM manipulation, I wanted to see if I could replicate the logic behind small games.`],
    description: [
      `It started as an array of arrays where the indexed where used as coordinates for the grid, but later I changed it to create 
      the grid directly on the DOM as a 'div' made of 'spans' where I would pass the coordinates of eack span as the 'id'.`,
      `This way depending of the direction of the snake, it's easy to access the next span and change the class that show the movement.`,
      `The snake is done with an array of 'ids' that means the position each part of the body is. Index [0] is the head, the rest, body parts. 
      It's used to later aply classes to the grid spans.`,
      `The random generate apple is also a span class, so it is quite easy to know when the head of the snake has the same coordinates as
      the apple meaning it's being eaten.`,
      `Each time the snake move, the next position is add to the start of the array (the head) and deleted the last one.`,
      `There is a variable that indicates the current direction. It changes every time an arroy key is press down.`,
      ` `,
      `Ther's more... and I think the code is pretty clean and readable... So if you want to check it out, please, by all means...`,
    ],
    tags: ["javascript",],
    icons:['js'],
    github: "https://github.com/pauCM-es/portfolio",
    link: null,
  },
  {
    title: `Othello game`,
    subtitle: "JavaScript little challenge",
    date: "Dic. 2022",
    image: `https://res.cloudinary.com/didwvaeha/image/upload/v1678350673/portfolio/othello_l9cien.png`,
    video: `https://res.cloudinary.com/didwvaeha/video/upload/v1678213939/portfolio/Othello_m5typg.webm`,
    intro: [`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Excepturi fuga minima voluptate rem consequuntur quos explicabo`],
    description: [`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Excepturi fuga minima voluptate rem consequuntur quos explicabo, ipsum ducimus 
    quaerat numquam dolorum beatae consectetur aliquid neque eius quae quibusdam. 
    Temporibus, numquam!.
    `],
    tags: ["javascript",],
    icons:['js'],
    github: "https://github.com/pauCM-es/portfolio",
    link: null,
  },
  {
    title: `Replica of Slack home page`,
    subtitle: "Project end of module at Upgrade Hub bootcamp.",
    date: "Dic. 2022",
    image: `https://res.cloudinary.com/didwvaeha/image/upload/v1678348841/portfolio/slack_jdqojv.png`,
    video: `https://res.cloudinary.com/didwvaeha/video/upload/v1678214404/portfolio/Slack-proyecto-maquetacion_ulqsmi.webm`,
    intro: [`Technologies used: HTML, CSS, SCSS, BEM methodology, media queries, 
    and trying to keep the code clean.`,],
    description: [
    `On this first project, the main challange was mostly the planning. How to structure the html and
    css classes applying the BEM methodology, while keeping in mind the responsive aspect of the page, so 
    the coding part would be faster and cleaner to do.`],
    tags: ["HTML", "CSS", "SCSS", "BEM", "responsive"],
    icons:['html', 'css', 'sass'],
    github: "https://github.com/pauCM-es/upgrade-html-css/tree/master/slack",
    link: null,
  },

]
