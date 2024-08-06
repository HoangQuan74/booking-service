import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1722920118432 implements MigrationInterface {
    name = 'Init1722920118432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`t_users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NOT NULL, \`deletedAt\` datetime(6) NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`email_verified_at\` bigint NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NULL, \`date_of_birth\` date NULL, \`last_login\` bigint NULL, \`gender\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`t_users\``);
    }

}
