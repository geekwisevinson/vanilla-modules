export class Player {
    id = '';
    type = 'player';
    style = {

    };
    changed = true;

    innerHtml = '';

    constructor() {
    }


    createId() {
        this.id = Math.random().toFixed(10).toString().slice(2);
        this.color = this.getColor();
        this.style.color = this.getColor();
        this.innerHTML = this.color;
    }

    log() {
        console.log(JSON.stringify(this) );
    }


    getColor() {
        switch (this.id[0]) {
            case '0':
                return 'red';
            case '1':
                return 'green';
            case '2':
                return 'blue';
            case '3':
                return 'orange';
            case '4':
                return 'yellow';
            case '5':
                return 'purple';
            case '6':
                return 'pink';
            case '7':
                return 'brown';
            case '8':
                return 'black';
            case '9':
                return 'grey';
        }
    }

    update() {
        this.style.color = 'blue';
    }
}
