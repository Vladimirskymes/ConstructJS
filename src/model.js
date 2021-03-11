import image from './assets/image.png'
import {Title, Text, Columns, Image} from './classes/block'
export const model = [
    
    new Title( "Конструктор на джаваскрипт", {
    tag: 'h2',
    styles: {
        background:'linear-gradient(to right, #ff0099, #493240)',
        color: "#fff",
        'text-align': "center",
        padding: "1.5em"
    }}),
    new Text("Here we go again", {
        tag: 'p'
    }),
    new Columns([
    "first",
    "second",
    "third"],
    {
        tag: 'p'
    }
    
    ),
    new Image(image, {
        tag: 'img',
        imageStyles: {
            width: '500px',
            heigth: 'auto',
            margin: 'auto'
        },
        alt: "Картинка",
    })

]