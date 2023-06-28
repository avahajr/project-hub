// A file for storing the data of my project list.
const cardData = [
  {
    name: "Personal website",
    date: "May 2023",
    description:
      "A GitHub pages website for showcasing my projects to potential employers and practicing my web development skills. Now using React!",
    linkTo: "https://github.com/avahajr/avahajr.github.io",
    tags: ["HTML", "CSS", "ReactJS"],
    isPrivate: false,
    isAwarded: false,
  },
  {
    name: "RL Stick-shift sim",
    date: "Summer 2023",
    description:
      "A 3D Unity game/simulation where an AI learns to drive a manual car from scratch using reinforcement learning.",
    linkTo: "https://github.com/avahajr/Racing-Game",
    tags: ["AI", "Unity", "C#"],
    isAvaPick: true,
    isPrivate: false,
  },
  {
    name: "Neural Network",
    date: "April 2023",
    description:
      "Building and training a neural network from scratch to identify handwritten digits from the famous MNIST dataset.",
    linkTo: "",
    tags: ["AI", "Python"],
    isPrivate: true,
    isAwarded: false,
  },
  {
    name: "Dynamic web server and client",
    date: "December 2022",
    description:
      "Client and server side code for a dynamic HTML webpage using the Socket API.",
    tags: ["C", "HTML"],
    linkTo: "",
    isPrivate: true,
    isAwarded: false,
  },
];

export default cardData;
