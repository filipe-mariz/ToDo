import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Action1614188829015 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Actions',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },

                {
                    name: 'action', 
                    type: 'varchar',
                    isNullable: false
                },

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Action');
    }

}
