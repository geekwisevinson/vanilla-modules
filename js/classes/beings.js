export class Beings {
    beings = {};

    ids = [];

    removeBeings(id) {
        delete this.beings[id];
        this.ids.splice(this.ids.indexOf(id), 1)
    }

    registerBeings(id, el) {
        this.beings[id] = el;
        this.ids.push(id);
    }

    id(p_id ){
        return this.beings[p_id];
    }
}
