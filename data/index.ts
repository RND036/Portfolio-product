export const navItems = [
  { name:"Home",link:"#"},
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building AI/ML projects and exploring up to date technologies.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Potato Dieases Classifier",
    des: "An AI-powered web application that detects and classifies diseases in potato leaves using image processing and deep learning. Upload a photo of a potato leaf, and the app will identify the disease and show the confidence level of the prediction.",
    img: "/farmerphotato.png",
    iconLists: ["/re.svg", "/Python.svg", "/FastAPI.svg", "/TensorFlow.svg", "/Docker.svg"],
    link: "https://github.com/RND036/Potatodisease.git",
  },
  {
    id: 2,
    title: "Hardware Store App",
    des: "Built a feature-rich Flutter shopping app with custom API auth, offline support, geolocation, QR scanning, battery tracking, and responsive UI with dark mode.",
    img: "/hardwarestore.png",
    iconLists: ["/Flutter.svg", "/Dart.svg", "/MongoDB.svg", "/MYSQL.svg","/Postman.svg"],
    link: "https://github.com/RND036/HardwareStoreApp-Flutter.git",
  },
  {
    id: 3,
    title: "Hand Gesture Game Control",
    des: "Control games using hand gestures through your webcam! This Python application uses computer vision to detect hand gestures and translates them into keyboard inputs for gaming.",
    img: "/game.png",
    iconLists: ["/Python.svg", "/OpenCV.svg", "/keyboard.svg"],
    link: "https://github.com/RND036/GamePlay-CV.git",
  },
  {
    id: 4,
    title: "Pet Care management System",
    des: "Built a full-featured web platform for pet owners and vets using Laravel and Jetstream, featuring vaccination tracking, appointment booking, emergency QR access, real-time chat (via Chatify), and an integrated pet store. Implemented role-based access for admins, vets, and users, with inventory management and analytics support.",
    img: "/petcare.png",
    iconLists: ["/laravel.svg", "/MYSQL.svg", "/Livewire.svg", "/jira.svg", "/slack.svg"],
    link: "https://github.com/RND036/PetCare_Web.git",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "IT Intern",
    desc: "Assisted in the development of a platform using Odoo,Wordpress enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Project Developer",
    desc: "Led the dev of apps/websites for  clients",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/RND036"
  },
  {
    id: 2,
    img: "/email.svg",
    link:"mailto:ravishaknimsara20@gmail.com"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/ravishka-dissanayaka-630263281/"
  },
];
