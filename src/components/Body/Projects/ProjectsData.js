import { FaEye, FaGithub } from "react-icons/fa";
import shop from "./shop.png";
import login from "./login.png";
import cocktails from "./cocktails.png";
import redux from "./ReduxShop.png";
import movies from "./Movies.png";

const data = [
  {
    image: shop,
    title: "Context Shop",
    description:
      " A simple E-Commerce app, it uses context, and  Firebase as backend. Used technologies: React.js, css modules and firebase. Main features: backend interaction,cart logic and a form with basic validation.",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: "https://mihai-context-shop.netlify.app/",
    urlSecond: "https://github.com/Mihai9088/licentaRez",
  },
  {
    image: redux,
    title: "Redux Shop",
    description:
      "Another E-Commerce app. The technologies that were used are css modules, and redux toolkit. The main feature in this project  is the cart logic.",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: "https://mihai-redux-shop.netlify.app",
    urlSecond: "https://github.com/Mihai9088/ReduxShop",
  },
  {
    image: login,
    title: "Login Form",
    description:
      "A simple form with basic validation and a cleanup function used for authentication.Used technologies: React.js and css modules.Main features:the form and the authentication status.",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: " https://mihai-login-form.netlify.app",
    urlSecond: "https://github.com/Mihai9088/Login-Form",
  },
  {
    image: cocktails,
    title: "Cocktails App",
    description:
      " A simple cocktails app, an API was used to fetch the cocktails. The technologies that were used are React.js and css. The main features are the filter and routing.",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: "https://mihai-cocktails.netlify.app",
    urlSecond: "https://github.com/Mihai9088/Cocktails",
  },
  {
    image: movies,
    title: "Movies App",
    description:
      " A basic movie app, an API was used to fetch the movies. The technologies that were used are React.js, css modules, axios and redux toolkit.",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: "https://reelworldapp.netlify.app/",
    urlSecond: "https://github.com/Mihai9088/MovieApp",
  },
];

export default data;
