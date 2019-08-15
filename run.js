import {Player} from "./js/classes/player.js";
import {Elements} from "./js/classes/elements.js";
import {Beings} from "./js/classes/beings.js";

const els = new Elements();
const beings = new Beings();

function makeOne() {
    const player = new Player();
    player.createId();
    player.log();
    beings.registerBeings(player.id, player);
    els.registerElements(player.id);
}

for (let i = 0; i < 20; i++){
    makeOne();
}


beings.ids.forEach( id => {
    els.elements[id].innerHTML = beings.beings[id].innerHTML;
    for(let s in beings.beings[id].style) {
        els.elements[id].style[s] =  beings.beings[id].style[s];
    }

});


