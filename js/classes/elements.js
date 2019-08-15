export class Elements {
    elements = {};
    ids = [];

    removeElements(id) {
        delete this.elements[id];
        this.ids.splice(this.ids.indexOf(id), 1)
    }

    registerElements(id) {
        this.elements[id] = document.createElement('div');
        document.body.appendChild(this.elements[id]);
        this.elements[id].classList.add('being');
        this.ids.push(id);
    }

    id(p_id ){
        return this.elements[p_id];
    }
}
