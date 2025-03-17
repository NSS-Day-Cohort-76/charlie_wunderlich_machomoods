import { createMoods } from "./moods.js";
import { database } from "./database.js";



const moodsHTML = createMoods(database);

document.getElementById("container").innerHTML = moodsHTML;


//const container = document.querySelector('.container')



