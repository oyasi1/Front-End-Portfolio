import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact} from 'react-icons/fa';
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  }, 
  {
    id: nanoid(),
    title: 'React Native',
    icon: <RiReactjsFill className='h-16 w-16 text-black' />,
    text: 'React Native developer building performance mobile apps on both the iOS and Android platforms. A strong team player with a commitment to perfection.',
  },
{
  id: nanoid(),
    title: 'Node-Express',
    icon: <SiExpress className='h-16 w-16 text-emerald-500' />,
    text: ' Design and develop server-side applications and APIs using Node.js,  Using web frameworks like Express.js to build robust and scalable back-end solutions.',
},
{
  id: nanoid(),
    title: 'MongoDb',
    icon: <SiMongodb  className='h-16 w-16 text-emerald-500' />,
    text: ' Design, maintain, and optimize databases, including data modeling and querying',
},
];

export const projects = [
  {
    id: nanoid(),
    img: 'data:image/jpeg;base64,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',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/oyasi1/my-ReactTour-App',
    title: 'Tour App',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRjYRIBcv9ijZz9NJl5niSBKl1S7LPsrn6g&usqp=CAU',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/oyasi1/Birthday-Buddy',
    title: 'Birthday Buddy',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/oyasi1/Online-store-React',
    title: 'Online Store',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
