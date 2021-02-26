import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Action1614188829015 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Action',
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

                {
                    name: 'user_id',
                    type: 'integer'
                }
            ],

            foreignKeys: [
                {
                    name: 'userAction',
                    columnNames: ['user_id'],
                    referencedTableName: 'User',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
