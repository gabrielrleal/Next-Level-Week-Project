import {MigrationInterface, QueryRunner, Table, TreeLevelColumn} from "typeorm";

export class createImages1602724486856 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path',
                    type: 'varchar',

                },
                {
                    name: 'orphanage_id',
                    type: 'integer',
                }
            ],
            foreignKeys: [ //chaves estrangeiras, cada chave fica em um objeto
                {           
                    name: 'ImageOrphanage',
                    columnNames: ['orphanage_id'], // nome da coluna que irá armazenar o relacionamento 
                    referencedTableName: 'orphanages',//qual tabela que está se relacionando 
                    referencedColumnNames: ['id'],//qual coluna na tabela orfanato que está sendo selecionada
                    onUpdate: 'CASCADE', // oque irá acontecer caso seja atualizado: CASCADE -> altera o ID dentro da tabela automaticamente
                    onDelete: 'CASCADE', // caso o id seja deletado, as imagens também serão delatadas de acordo com CASCADE
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
