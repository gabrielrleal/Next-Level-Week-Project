import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602691294705 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //Realiza alterações
        //criar tabela, criar um novo campo, deletar algum campo.
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [//colunas que iremos ter no banco de dados
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, //não pode ser um numero negativo, sempre vai ser um numero positivo
                    isPrimary: true,//indica que esta coluna é a primary key da tabela
                    isGenerated: true,//coluna gerada automaticamente.
                    generationStrategy: 'increment',//será gerado automaticamente com uma lógica incremental

                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2

                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2

                },
                {
                    name: 'opening_hours',
                    type: 'varchar'
                },
                {
                    name: 'about',
                    type: 'text'
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //desfaz o que foi feito no UP
        await queryRunner.dropTable('orphanages');
    }

}
