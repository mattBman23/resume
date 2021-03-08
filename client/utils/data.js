import React from 'react';
import { LinkedIn, GitHub, YouTube } from '@material-ui/icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Matthew Budiman',
  title: 'Software Engineer',
  email: 'mattbud2011@gmail.com',

  socials: {
    Youtube: {
      link: 'https://www.youtube.com/channel/UCxXdfk-udlBrLJji8nBipMg',
      text: 'Matthew',
      icon: <YouTube />,
    },
    Linkedin: {
      link: 'https://www.linkedin.com/in/matthewbudiman',
      text: 'matthewbudiman',
      icon: <LinkedIn />,
    },
    Github: {
      link: 'https://github.com/mattBman23',
      text: 'mattBman23',
      icon: <GitHub />,
    },
  },
  about: `Simplicity is life. I love learning new programming concepts and language. Currently learning flutter, might become my favourite...  \n\nMy strong curiosity of technology has driven me to explore various IT domains such as Networking, AI, Cyber Security, Cloud, and Software Development. This journey has brought me to the realization that my true passion lies in building applications. With its versatile nature and ever-changing environment, software engineering presents a new and exciting challenge day to day. My diverse technological background and desire for an exhilarating challenge enables me to make valuable contributions on any team or organization. `,
  experiences: [
    {
      title: 'Software Engineer - Accenture',
      date: '2019 - 2020',
      description:
        'Designed and researched POC technologies using AI to enhance user-interface and experience workflow.',
    },
    {
      title: 'Software Engineer - Rainbow Aquarium Pte Ltd',
      date: '2017',
      description:
        'Setup an e-commerce using Singapore’s largest shopping portal, Qoo10 which generated immediate revenue once deployed.',
    },
  ],
  education: [
    {
      title: 'Hack Reactor - Software Engineer Bootcamp',
      date: '2020-2021',
      description:
        'The Hack Reactor immersive program is an advanced coding bootcamp focused on building autonomous software engineers ready for any job in the tech industry',
    },
    {
      title: 'Nanyang Polytechnic - IT graduate',
      date: '2018 - 2020',
      description:
        'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.',
    },
  ],
  services: [
    // {
    //   title: 'Web Development',
    //   description: 'Been working as a freelancer for 2 years',
    //   icon: <WebOutlined />,
    // },
    // {
    //   title: 'IT Consultant',
    //   description: 'Been working as a freelancer for 2 years',
    //   icon: <WebOutlined />,
    // },
    // {
    //   title: 'Illustrator',
    //   description: 'Been working as a freelancer for 2 years',
    //   icon: <WebOutlined />,
    // },
    // {
    //   title: 'Fast Delivery',
    //   description: 'Been working as a freelancer for 2 years',
    //   icon: <WebOutlined />,
    // },
  ],
  skills: [
    {
      title: 'FRONT-END',
      description: ['ReactJS', 'React Native', 'Flutter'],
    },
    {
      title: 'BACK-END',
      description: ['NodeJs', 'JAVA-EE', 'TypeScript'],
    },
    {
      title: 'DATABASES',
      description: ['MSSQL', 'Mongo', 'Firestore'],
    },
    {
      title: 'CERTIFICATIONS',
      description: [
        'CCNA',
        'Certified Ethical Hacker, ECH',
        'AWS Cloud Practitioner',
      ],
    },
  ],

  projects: [
    {
      tag: 'Javascript',
      image:
        'https://images.unsplash.com/photo-1579264688258-c0ebf8c7942a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      title: 'Auctioneer',
      caption: 'short desc',

      description: '',
      links: [
        { link: 'https://github.com/mattBman23/Auctioneer', icon: <GitHub /> },
      ],
    },
    {
      tag: 'Javascript',
      image:
        'https://images.unsplash.com/photo-1579264688258-c0ebf8c7942a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      title: 'Mithril',
      caption: 'MERN retail application',
      description: '',
      links: [
        { link: 'https://github.com/mattBman23/Mithril', icon: <GitHub /> },
      ],
    },
    {
      tag: 'Javascript',
      image:
        'https://images.unsplash.com/photo-1579264688258-c0ebf8c7942a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      title: 'SeekerCatcher',
      caption: 'Smart IDS to tackle botting',

      description: '',
      links: [{ link: 'https://www.google.com', icon: <GitHub /> }],
    },
    {
      tag: 'Java',
      image:
        'https://images.unsplash.com/photo-1579264688258-c0ebf8c7942a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      title: 'MapleAuto',
      caption: 'MaplestoryM bot',
      description: '',
      links: [],
    },
    {
      tag: 'C#',
      image:
        'https://images.unsplash.com/photo-1579264688258-c0ebf8c7942a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      title: 'Merdsi',
      caption: 'Shoe ecommerce in ASP.NET',

      description: '',
      links: [],
    },
    {
      tag: 'Flutter',
      image:
        'https://images.unsplash.com/photo-1579264688258-c0ebf8c7942a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      title: 'Merdga',
      caption: 'Manga app',

      description: '',
      links: [
        { link: 'https://github.com/mattBman23/merdga', icon: <GitHub /> },
      ],
    },
    {
      tag: 'Flutter',
      image:
        'https://images.unsplash.com/photo-1579264688258-c0ebf8c7942a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      title: 'Merdoku',
      caption: 'Neumorphism sudoku UI',

      description: '',
      links: [
        { link: 'https://github.com/mattBman23/merdoku', icon: <GitHub /> },
      ],
    },
  ],
};
