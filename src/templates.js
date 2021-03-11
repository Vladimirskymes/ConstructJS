import {colsm, row, css} from "./utils"

function title(block){
    const {tag = "h1", styles} = block.options;
    return row(colsm(
        `<${tag}>${block.value}</${tag}>`
    ), css(styles))
}
function text (block){
    const {tag = "p", styles} = block.options;
    return(
         row(colsm(
            `<${tag}>
            ${block.value}
            </${tag}>`
        ), css(styles))      
    )
}
function columns (block){
    const {tag = "p", styles} = block.options;
    let html = block.value.map(i=>{
        return(
            
            colsm(`<${tag}>
            ${i}
            </${tag}>`)
               
            
        
        )   
    })
    return  row(html.join(''), css(styles))    
}

function image (block){
    const {imageStyles, alt = ''} = block.options;
    const {tag = "img", styles} = block.options;
    return row(`<${tag} src = '${block.value}' style = '${css(imageStyles)}' alt = ${alt}></${tag}>`,css(styles))
}
export const templates = {
    title,
    text,
    columns,
    image
};