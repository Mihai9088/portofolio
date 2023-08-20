import { FaEye, FaGithub } from "react-icons/fa";
import image from "./image.jpg";
import shop from "./shop.png";
import login from "./login.png";
import cocktails from "./cocktails.png";
import redux from "./ReduxShop.png";

const data = [
  {
    image: shop,
    title: "Context Shop",
    description:
      " A vey simple E-Commerce app, it uses context, and  Firebase as backend. The technologies that were used are React.js, css modules and firebase. The main features are the backend interaction, the cart logic and a form with basic validation.",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: "https://mihai-context-shop.netlify.app/",
    urlSecond: "https://github.com/Mihai9088/licentaRez",
  },
  {
    image: redux,
    title: "Redux Shop",
    description:
      "Another E-Commerce app, it uses css modules, and redux toolkit this time. The main feature is the cart logic ",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: "https://mihai-redux-shop.netlify.app",
    urlSecond: "https://github.com/Mihai9088/ReduxShop",
  },
  {
    image: login,
    title: "Login Form",
    description:
      "A simple form with basic validation and a cleanup function used for authentication.The technologies that were used are React.js and css modules. The main features are the form and the authentication status",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: " https://mihai-login-form.netlify.app",
    urlSecond: "https://github.com/Mihai9088/Login-Form",
  },
  {
    image: cocktails,
    title: "Cocktails App",
    description:
      " A simple cocktails app, an API was used to fetch the cocktails. The technologies that were used are React.js and css. The main features are the filter and routing",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: "https://mihai-cocktails.netlify.app",
    urlSecond: "https://github.com/Mihai9088/Cocktails",
  },
];

export default data;
