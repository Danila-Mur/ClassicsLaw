import "./404";
import initHome from "./home";
import initFeedback from "./feedback";
import initAboutCompany from "./about-company";
import initContacts from "./contacts";
import initCatalog from "./catalog";
import initCarLawyer from "./сar-lawyer";
import initRoot from "./root";

export default () => {
  initHome();
  initFeedback();
  initAboutCompany();
  initContacts();
  initCatalog();
  initCarLawyer();
  initRoot();
};
