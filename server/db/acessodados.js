var mysql = require('mysql2');

module.exports = class AcessoDados {
    async Query(SqlQuery, parametros) {
        try {
            var SqlQueryUp = SqlQuery;
            const connection = mysql.createConnection(global.config.database).promise();

            //percorre os parametros
            if(parametros && parametros != undefined) {
                let p = parametros;

                for(let key in p) {
                    if(p.hasOwnProperty(key)) {
                        let campo = key;
                        let valor = p[key];

                        SqlQueryUp = SqlQueryUp.replace('@' + campo, `'${valor}'`);
                    }
                }
            }

            // Executa a query
            const [results] = await connection.query(SqlQueryUp);

            // Fecha a conexão
            connection.end();

            // Retorna os resultados
            return results;

        } catch (error) {
            console.log(error);
            return error;
        }
    }
}