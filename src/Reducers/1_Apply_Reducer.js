// initalizing the reducer 
// Passing Reducer
import i18n from "i18next";

const initialstate =0;
const ChangeLenguage=(state=initialstate,action)=>{
    switch(action.type){
        case "English":
            // Changing Language 
            i18n.changeLanguage("EN")
            // Setting Local storage
            localStorage.setItem("Language","EN")
            return {change:"EN"}
        case "Spanish":
            i18n.changeLanguage("ES")
            localStorage.setItem("Language","ES")
            return {change:"ES"}
        case "Italian":
            localStorage.setItem("Language","IT")
            i18n.changeLanguage("IT")
            return {change:"IT"}
        case "German":
            localStorage.setItem("Language","DE")
            i18n.changeLanguage("DE")
            return {change:"DE"}
        default:    
            return{change:"En"};
    }
}
export default ChangeLenguage;