//  icons
import {
  FiYoutube,
  FiLinkedin,
  FiFacebook,
  FiGithub,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import {
  FaArtstation,
  FaRegFileCode,
  FaRegCalendarPlus,
  FaBug,
} from "react-icons/fa";

// Brands icon
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/Capture1.PNG";
import Project2 from "./assets/img/projects/material.PNG";
import Project3 from "./assets/img/projects/laptop.PNG";
import Project4 from "./assets/img/projects/tutor.PNG";
import Project5 from "./assets/img/projects/rolex.PNG";
import Project6 from "./assets/img/projects/phone.PNG";
import Project7 from "./assets/img/projects/page.PNG";
import Project8 from "./assets/img/projects/responsive.PNG";

// skills images
import SkillImg1 from "./assets/img/skills/html5.jpg";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/express.png";
import SkillImg6 from "./assets/img/skills/node.png";
import SkillImg7 from "./assets/img/skills/mpngodb.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "skill",
    href: "skill",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "Projects",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiFacebook />,
    href: "https://web.facebook.com/mdborhan.uddin.121",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/muhammadBorhan/",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/mdborhanuddin-majumder-3a37a61a4/",
  },
  {
    icon: <FiYoutube />,
    href: "https://www.youtube.com/",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
  },
  {
    img: UpworkBrandIcon,
  },
  {
    img: FiverBrandIcon,
  },
  {
    img: BehanceBrandIcon,
  },
  {
    img: DribbbleBrandIcon,
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web Design",
  },
  {
    name: "web development",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Car Manufacture",
    desc: "Website of the essential parts of any car manufacturing company.",
    live: "https://glowing-conkies-fc5384.netlify.app/",
    client:
      "https://github.com/MuhammadBorhan/manufacturer-website-client-side-MuhammadBorhan",
    server:
      "https://github.com/MuhammadBorhan/manufacturer-website-server-side-MuhammadBorhan",
    category: "web development",
  },
  {
    id: "2",
    image: Project2,
    name: "Material Purchase",
    desc: "Website of the essential products purchase from vendors.",
    live: "https://cheery-baklava-f9168f.netlify.app/",
    client: "https://github.com/MuhammadBorhan/material-purchase-project",
    server: "https://github.com/MuhammadBorhan/material-purchase-server-side",
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    name: "Laptop Warehouse",
    desc: "Website of the essential laptops stocked from supplier for sale.",
    live: "https://scintillating-quokka-d477fd.netlify.app/",
    client:
      "https://github.com/MuhammadBorhan/warehouse-management-client-side-MuhammadBorhan",
    server:
      "https://github.com/MuhammadBorhan/warehouse-management-server-side-MuhammadBorhan",
    category: "web development",
  },
  {
    id: "4",
    image: Project4,
    name: "Tutor Portland",
    desc: "Website of the essential products purchase from vendors.",
    live: "https://sparkly-travesseiro-3c9d55.netlify.app/",
    client:
      "https://github.com/programming-hero-web-course-4/independent-service-provider-MuhammadBorhan",
    category: "web development",
  },
  {
    id: "5",
    image: Project5,
    name: "RolexShop",
    desc: "Website of the essential products purchase from vendors.",
    live: "https://velvety-palmier-679f13.netlify.app/",
    client:
      "https://github.com/programming-hero-web-course-4/product-analysis-website-MuhammadBorhan",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "PANACEA-SHOP.COM",
    desc: "Website of the essential products purchase from vendors.",
    live: "https://splendorous-sunburst-d213a0.netlify.app/",
    client:
      "https://github.com/Programming-Hero-Web-Course4/lucky-one-MuhammadBorhan",
    category: "Web design",
  },
  {
    id: "7",
    image: Project7,
    name: "Influential commodity",
    desc: "Website of the essential products purchase from vendors.",
    live: "https://muhammadborhan.github.io/My_Second_Assginment/",
    client: "https://github.com/MuhammadBorhan/My_Second_Assginment",
    category: "Web design",
  },
  {
    id: "8",
    image: Project8,
    name: "Charlotte Convention Center",
    desc: "Website of the essential products purchase from vendors.",
    live: "https://objective-mclean-51b05c.netlify.app/",
    client:
      "https://github.com/Porgramming-Hero-web-course/convention-center-MuhammadBorhan",
    category: "Web design",
  },
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
  },
];

// services
export const services = [
  {
    icon: <FaArtstation />,
    name: "Web Design",
    description:
      "A beautiful responsive website you can design through me in a very short time. My previous experience in this regard is also good.",
  },
  {
    icon: <FaRegFileCode />,
    name: "Web Development",
    description:
      "I can develop Web application very nicely using ReactJs and NodeJs you can create it through me if you want in a very short time.",
  },
  {
    icon: <FaRegCalendarPlus />,
    name: "Website Re-Design",
    description:
      "If your existing design isn't userfriendly or look like not so good so i can do it marvelous design in a very short time.",
  },
  {
    icon: <FaBug />,
    name: "Website Bug Fixing",
    description:
      "If your website under too bugs and doesn't work properly, you can fix it through me if you want in a very short time.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at hello@youremail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Bucharest, Romania",
    description: "Serving clients worldwide",
  },
];
