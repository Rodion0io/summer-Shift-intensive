import axios from "axios";

export function getPizza(Url, getPizzaDate){
    axios.get(Url).then(
        (respones) => {
          getPizzaDate(respones.data.catalog);
        }
       ).catch((error) => {
        console.log("Error!");
       })
}