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
      "  perspiciatis deleniti accusamus dignissimos commodi omnis! Excepturi animi reiciendis eum quisquam corporis nostrum?",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: "https://mihai-context-shop.netlify.app/",
    urlSecond: "https://github.com/Mihai9088/licentaRez",
  },
  {
    image: redux,
    title: "Redux Shop",
    description:
      "  perspiciatis deleniti accusamus dignissimos commodi omnis! Excepturi animi reiciendis eum quisquam corporis nostrum?",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: "https://mihai-redux-shop.netlify.app",
    urlSecond: "https://github.com/Mihai9088/ReduxShop",
  },
  {
    image: login,
    title: "Login Form",
    description:
      "  perspiciatis deleniti accusamus dignissimos commodi omnis! Excepturi animi reiciendis eum quisquam corporis nostrum?",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: " https://mihai-login-form.netlify.app",
    urlSecond: "https://github.com/Mihai9088/Login-Form",
  },
  {
    image: cocktails,
    title: "Cocktails App",
    description:
      "  perspiciatis deleniti accusamus dignissimos commodi omnis! Excepturi animi reiciendis eum quisquam corporis nostrum?",
    firstIcon: <FaEye />,
    secondIcon: <FaGithub />,
    urlFirst: "https://mihai-cocktails.netlify.app",
    urlSecond: "https://github.com/Mihai9088/Cocktails",
  },
];

export default data;
