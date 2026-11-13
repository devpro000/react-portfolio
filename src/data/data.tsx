import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import porfolioImage8 from '../images/portfolio/portfolio-8.png';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.png';
import porfolioImage9 from '../images/portfolio/portfolio-12.png';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Uno Kaito | Full Stack Software Engineer',
  description: "Uno Kaito's personal website and portfolio.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Uno Kaito`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Results-driven <strong className="text-stone-100">Full Stack Software Engineer</strong> with 6+ years of
        international experience developing scalable web applications, native iOS applications, and AI-powered digital
        solutions across Japan, Europe, and Africa. Proven ability to deliver end-to-end software products, optimize
        system performance, and translate complex business requirements into reliable technology solutions. Proficient
        in 15+ modern technologies, including React.js, Next.js, TypeScript, Node.js, Python, Swift, and SwiftUI, with
        expertise in backend architecture, RESTful APIs, microservices, cloud infrastructure, and AI integration using
        LLMs. Passionate about building innovative digital products that drive business efficiency, customer engagement,
        and measurable growth.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I play computer games, play and record music on my guitar.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.docx',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` I'm a software engineer who genuinely enjoys creating things with technology. I love taking an idea, figuring out how to make it work, and turning it into something people can actually use. I'm always curious, enjoy learning new things, and find the most satisfaction in solving problems and bringing creative ideas to life.`,
  aboutItems: [
    {label: 'Location', text: 'Brazzaville, Republic of Congo', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Japanese / Asian', Icon: FlagIcon},
    {label: 'Interests', text: 'Computer game, Guitar', Icon: SparklesIcon},
    {label: 'Study', text: 'Osaka University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Qukuri Inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Japanese',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'French',
        level: 2,
      },
    ],
  },
  {
    name: 'AI Engineering',
    skills: [
      {
        name: 'AI Chatbot',
        level: 9,
      },
      {
        name: 'RAG System',
        level: 7,
      },
      {
        name: 'AI Agent',
        level: 6,
      },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      {
        name: 'RESTful API, FAST API, GraphQL',
        level: 10,
      },
      {
        name: 'PostgreSQL, MySQL, MongoDB, Redis',
        level: 8,
      },
      {
        name: 'React.js, Next.js, TypeScript, Node.js, Django',
        level: 10,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Android, iOS, Kotlin, Swift, SwiftUI, UIKit',
        level: 10,
      },
      {
        name: 'React Native, Expo',
        level: 8,
      },
      {
        name: 'Flutter',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI ChatBot',
    description:
      'OpenAI-powered chatbot that provides intelligent responses to user queries, enhancing customer support and engagement.',
    url: '/',
    image: porfolioImage1,
  },
  {
    title: 'Trizy Shopping',
    description:
      'e-commerce platform that offers a seamless shopping experience with personalized recommendations, secure payments, and fast delivery.',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'emiTek AI',
    description:
      'AI Automation platform that leverages machine learning algorithms to automate repetitive tasks, optimize workflows, and improve operational efficiency.',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Babble',
    description:
      'As a V-Meeting app, Babble enables real-time communication and collaboration through video conferencing, screen sharing, and chat features, enhancing remote team productivity.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Food-Delivery App',
    description:
      'A mobile application for ordering and delivering food from local restaurants, featuring real-time tracking and seamless payment processing.',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'RAG System',
    description:
      'A cutting-edge retrieval-augmented generation system that combines the power of large language models with efficient information retrieval techniques.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'e-Commerce Platform',
    description:
      'A comprehensive e-commerce solution that provides a seamless shopping experience with personalized recommendations, secure payments, and fast delivery.',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'Individual Task',
    description: '',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'Novsed Player',
    description:
      'A media player application that supports various audio and video formats, offering a user-friendly interface and advanced playback features.',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'Delivering-Eat',
    description:
      'A food delivery application that connects customers with local restaurants, offering real-time tracking and seamless payment processing.',
    url: '',
    image: porfolioImage10,
  },
  {
    title: 'Navigation Service Platform',
    description:
      'A comprehensive navigation service that provides accurate location-based information and route planning capabilities.',
    url: '',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2014',
    location: 'Osaka',
    title: 'Osaka University',
    content: <p>Bachelor of Technology - BTech</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2025 - Sep 2026',
    location: 'emiTek',
    title: 'Senior Full-Stack & AI Engineer',
    content: (
      <p>
        • Lead the design, architecture, development, and deployment of scalable web applications, native iOS
        applications, and AI-powered digital products.
        <br />
        • Develop native iOS applications using Swift, SwiftUI, UIKit, and modern Apple frameworks, implementing clean
        architecture, reusable components, and optimized application performance.
        <br />
        • Design and implement scalable backend services using Node.js, NestJS, Python, and FastAPI to support mobile
        applications, web platforms, and AI-driven solutions.
        <br />
        • Architect and maintain RESTful APIs, ensuring seamless communication between frontend applications, backend
        services, databases, and external platforms.
        <br />• Integrate Large Language Models (LLMs) and AI APIs to develop intelligent assistants, conversational
        interfaces, automated workflows, and AI-powered business functionalities.
      </p>
    ),
  },
  {
    date: 'Nov 2022 - Dec 2024',
    location: 'VisualCron',
    title: 'Full-Stack Software Engineer',
    content: (
      <p>
        • Designed, developed, and maintained scalable enterprise web applications using React.js, Next.js, TypeScript,
        Node.js, and Python.
        <br />
        • Developed and maintained RESTful APIs and backend services for business logic, data processing, third-party
        integrations, and distributed application communication.
        <br />
        • Built responsive frontend architectures using reusable components, state management, and optimized rendering
        techniques to deliver consistent user experiences.
        <br />
        • Designed and managed relational and NoSQL database architectures using PostgreSQL, MongoDB, and Redis,
        focusing on data integrity, query performance, and scalability.
        <br />• Integrated third-party APIs, payment gateways, authentication providers, and enterprise platforms to
        extend application functionality.
      </p>
    ),
  },
  {
    date: 'Mar 2020 - Sep 2022',
    location: 'Altex',
    title: 'Full-Stack Software Engineer',
    content: (
      <p>
        • Developed and maintained full-stack web applications using React.js, Next.js, TypeScript, Node.js, and
        Express.js to support business operations and customer-facing platforms.
        <br />
        • Designed and implemented RESTful APIs to support application features, business workflows, user management,
        and third-party integrations.
        <br />
        • Developed backend business logic, data validation, authentication services, and application workflows using
        Node.js and Express.js.
        <br />• Designed database schemas, established data relationships, and optimized queries using PostgreSQL,
        MySQL, and MongoDB.
      </p>
    ),
  },
  {
    date: 'Mar 2020 - Sep 2022',
    location: 'Qukuri Inc',
    title: 'Junior Web Developer',
    content: (
      <p>
        • Assisted in developing and maintaining web applications using JavaScript, HTML5, CSS3, React.js, and Node.js.
        <br />
        • Developed responsive user interfaces based on technical specifications and design requirements.
        <br />• Supported backend development by implementing API endpoints and integrating frontend components with
        backend services.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Alex Morgan',
      text: 'Working with emiTek was a great experience. The AI chatbot they developed helped us automate customer interactions, provide instant responses, and improve our overall workflow. The solution was smart, efficient, and easy to use',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Sophia Williams',
      text: 'Altex did an excellent job bringing our mobile app idea to life. The iOS application has a clean design, smooth performance, and an intuitive user experience. Communication was professional throughout the development process.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Daniel Carter',
      text: 'I highly recommend Qukuri Inc for web development. They created a modern, responsive, and professional website that perfectly represents our brand. The attention to detail, technical skills, and commitment to quality were impressive.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'dev.uniway911@gmail.com',
      href: 'mailto:dev.uniway911@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Brazzaville, Republic of Congo',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Twitter,
      text: '@unokaito911',
      href: 'https://twitter.com/unokaito911',
    },
    {
      type: ContactType.Github,
      text: 'devpro000',
      href: 'https://github.com/devpro000',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/devpro000'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://facebook.com/unokaito911'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/unokaito911'},
];
