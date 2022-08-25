//  icons
import { FiYoutube, FiLinkedin, FiFacebook, FiGithub, FiMail, FiMapPin } from 'react-icons/fi';
import { FaArtstation, FaRegFileCode, FaRegCalendarPlus, FaBug } from 'react-icons/fa';

// Brands icon
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.jpg';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/express.png';
import SkillImg6 from './assets/img/skills/node.png';
import SkillImg7 from './assets/img/skills/mpngodb.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'skill',
    href: 'skill',
  },
  {
    name: 'services',
    href: 'services'
  },
  {
    name: 'Projects',
    href: 'portfolio',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiFacebook />,
    href: 'https://web.facebook.com/mdborhan.uddin.121',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/muhammadBorhan/'
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/mdborhanuddin-majumder-3a37a61a4/',
  },
  {
    icon: <FiYoutube />,
    href: 'https://www.youtube.com/'
  }
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon
  },
  {
    img: UpworkBrandIcon
  },
  {
    img: FiverBrandIcon
  },
  {
    img: BehanceBrandIcon
  },
  {
    img: DribbbleBrandIcon
  }
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'Web design',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'UI/UX design',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Web Design',
  },
  {
    name: 'web development',
  }
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  }
];

// services
export const services = [
  {
    icon: <FaArtstation />,
    name: 'Web Design',
    description:
      'A beautiful responsive website you can design through me in a very short time. My previous experience in this regard is also good.',
  },
  {
    icon: <FaRegFileCode />,
    name: 'Web Development',
    description:
      'I can develop Web application very nicely using ReactJs and NodeJs you can create it through me if you want in a very short time.',
  },
  {
    icon: <FaRegCalendarPlus />,
    name: 'Website Re-Design',
    description:
      "If your existing design isn't userfriendly or look like not so good so i can do it marvelous design in a very short time.",
  },
  {
    icon: <FaBug />,
    name: 'Website Bug Fixing',
    description:
      "If your website under too bugs and doesn't work properly, you can fix it through me if you want in a very short time.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
