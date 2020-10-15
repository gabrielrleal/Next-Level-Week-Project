//views ->  determina como os dados vão ficar disponíveis pra quem consumir a api

import Orphanage from "../models/Orphanage";
import imageView from "./imageView";

export default {
    render(orphanage: Orphanage){//metodo render, retorna orfanato na maneira que precisa ser exibido no front-end
        return{// retorna cada um dos dados que quero retornar para o front-end

            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: imageView.renderMany(orphanage.images)

        }
    },
    renderMany(orphanages: Orphanage[]){
        return orphanages.map( orphanage => this.render(orphanage) )
    }
}