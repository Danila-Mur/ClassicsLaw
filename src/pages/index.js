import "./404";
import initHome from "./home";
import initFeedback from "./feedback";
import initAboutCompany from "./about-company";
import initContacts from "./contacts";

export default () => {
  initHome();
  initFeedback();
  initAboutCompany();
  initContacts();
};
