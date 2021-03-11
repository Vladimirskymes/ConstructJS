import {colsm, row, css} from "../utils"
class Block {
    constructor( value, options){

        this.value = value;
        this.options = options;
    }
    toHTML() {
        throw new Error("Метод toHTML не определен ")
    }
}
export class Title extends Block{
    constructor( value, options){
        super(value, options)
    }
    toHTML(){
    const {tag = "h1", styles} = this.options;
    return row(colsm(
        `<${tag}>${this.value}</${tag}>`
    ), css(styles))
    }
}
export class Text extends Block{
    constructor( value, options){
        super(value, options)
    }
    toHTML(){
        const {tag = "p", styles} = this.options;
        return(
         row(colsm(
            `<${tag}>
            ${this.value}
            </${tag}>`
        ), css(styles))      
    )
    }
}
export class Columns extends Block{
    constructor( value, options){
        super( value, options)
    }
    toHTML(){
        const {tag = "p", styles} = this.options;
        let html = this.value.map(i=>{
            return(
                
                colsm(`<${tag}>
                ${i}
                </${tag}>`)       
            
            )   
        })
        return  row(html.join(''), css(styles))   
    }
}
export class Image extends Block{
    constructor( value, options){
        super( value, options)
    }
    toHTML(){
        const {imageStyles, alt = ''} = this.options;
        const {tag = "img", styles} = this.options;
        return row(`<${tag} src = '${this.value}' style = '${css(imageStyles)}' alt = ${alt}></${tag}>`,css(styles))
    }
}