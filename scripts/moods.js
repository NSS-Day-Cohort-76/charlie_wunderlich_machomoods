import { database } from "./database.js";


export const createMoods = (database) => {
let moodsHTML = '';
    for (let i = 0; i < database.length; i++){
        moodsHTML += `
            <div class="column">
                <p>${database[i].name}</p>
                <img src="${database[i].imageUrl}" alt="${database[i].name}">
                <div class="advice">
                    <p>Macho Advice:</p>
                    <div class="quotes">        
                        <blockquote>"${database[i].quotes[0]}"</blockquote>
                         <blockquote>"${database[i].quotes[1]}"</blockquote>
                        </div>
                    </div>
                </div>
         `;
     }
    return moodsHTML;
}
