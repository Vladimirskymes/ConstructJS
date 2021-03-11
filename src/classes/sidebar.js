import {Text, Title} from "./block"
import {block} from '../utils'
export class Sidebar{

    constructor(selector, updateCallback){
        this.$el = document.querySelector(selector)
        this.update = updateCallback;
        this.init()
    }
    init(){
        this.$el.insertAdjacentHTML("afterbegin", this.template);
        this.$el.addEventListener('submit', this.add.bind(this))

        
    }
    add(event){
        event.preventDefault();
        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;
        const newBlock = type==="text" ? new Text(value, {styles}) : new Title(value, {styles})
        
        this.update(newBlock);
        event.target.value.value = '';
        event.target.styles.value = '';
    }
    
    get template(){
        return [
            block('text'),
            block('title')
        ].join('')
    }
}

