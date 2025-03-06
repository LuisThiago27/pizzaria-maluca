const ct = require('../controllers/horario');
const UsuarioAcessoToken = require('../common/protecaoAcesso');
const Acesso = new UsuarioAcessoToken();

module.exports = (server) => {

    //obtem os horarios de funcionamento da empresa
    server.get('/empresa/horario', async (req, res) => {
        const result = await ct.controllers().obterHorarios(req);
        res.send(result);
    });

    //salva os horarios de funcionamento da empresa
    server.post('/empresa/horario', Acesso.verificaTokenAcesso, async (req, res) => {
        const result = await ct.controllers().salvarHorarios(req);
        res.send(result);
    });
}