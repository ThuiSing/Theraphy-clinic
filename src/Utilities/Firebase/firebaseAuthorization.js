import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const firebaseAuthorization = () => {
  return initializeApp(firebaseConfig);
};
export default firebaseAuthorization;
