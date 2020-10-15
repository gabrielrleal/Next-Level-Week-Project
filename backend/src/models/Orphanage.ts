import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image'

@Entity('orphanages')
export default class Orphanage{
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;
   
    @Column()
    latitude: number;
    
    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage ,{//relacionamento um para muitos, recebe de parametro função que retorna tipo de retorno, e segundo parametro , o campo que retorna relacionamento inverso(orfanato)
        cascade: ['insert', 'update'] // caso eu crie orfanato e preencha ele com imagens, irá automaticamente cadastrar ou atualizar imagens 
    }) 
    @JoinColumn({name: 'orphanage_id'}) //nome da coluna que armazena o relacionamento de orfanato com imagens.
    images: Image[]

}