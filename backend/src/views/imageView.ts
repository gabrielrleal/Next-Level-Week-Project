//views ->  determina como os dados vão ficar disponíveis pra quem consumir a api

import Image from "../models/Image";


export default {
    render(image: Image){//metodo render, retorna image na maneira que precisa ser exibido no front-end
        return{// retorna cada um dos dados que quero retornar para o front-end

            id: image.id, 
            url: `http://localhost3333/uploads/${image.path}` //para imagem retornarei o endereço da imagem
           
            

        }
    },
    renderMany(images: Image[]){
        return images.map( image => this.render(image) )
    }
}