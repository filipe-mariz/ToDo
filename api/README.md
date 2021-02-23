# database config => 

    - Crie um banco de dados PostgreSQL com o nome: ToDo
    - Crie na raiz do seu projeto 'api' um arquivo chamado ormconfig.json
    - copie as segintes configurações:
    {
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "",
        "password": "",
        "database": "ToDo",
        "entities": [
            "./src/app/model/**/*.ts"
        ],
        "migrations": [
            "./src/database/migration/*.ts"
        ],
    
        "cli": {
            "migrationsDir": "./src/database/migration"
        }
    }

    - Coloque sua senha e nome de usuário do banco de dados PostgreSQL
