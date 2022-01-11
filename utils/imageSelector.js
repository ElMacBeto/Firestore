
import * as images from '../constants/imagePath';

const ImageSelector = (imageName) =>{
    switch(imageName){
        case 'afuera' : return images.afuera;
        case 'adentro' : return images.adentro;
        case 'ambas' : return images.ambas;
        case 'ninguna': return images.ninguna;
        case 'izquierda' : return images.izquierda;
        case 'derecha' : return images.derecha;  
        case 'ambasNaris' : return images.ambasNaris;
        case 'sinNaris' : return images.sinNaris;              
        default : return null;
    }
}

export default ImageSelector;