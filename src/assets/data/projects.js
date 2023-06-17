import { v4 as uuidv4 } from 'uuid';
import meme from '../images/meme.png';
import UTrackerImg from '../images/utracker.jpg';
import iot from '../images/iot.png';
import food from '../images/food.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'College Info website(Stbg)',
    desc:
      ' I developed the website which give info about the all enginnerings colleges of india.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Smart parking System(IOT)',
    desc:
      'An smart parking model is designed using arduino and various other Automations technique.',
    img: iot,
  },
  {
    id: uuidv4(),
    name: 'Food delivery (Zomato dummy)',
    desc:
      'Using this app you can order your food from restaurants nearby. Also you will get can add your restaurant also. ',
    img: food,
  },
  {
    id: uuidv4(),
    name: 'Portfolio',
    desc:
      'A portfolio for showing my skills. The portfolio is made using ReactJs .',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Meme Generator',
    desc:
      'A meme creating website that will show the meme according to the user need. Also you will get some useful suggestions.',
    img: meme,
  },
];

export default projects;
