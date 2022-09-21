async function connetc(){
    //confima se está com a variavel global
    if(globalThis.connection && globalThis.connection.state !== 'disconnected')
    return globalThis.connection;

    const mysql = reqire("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/webii");
    console.log("Conectou no MySQL");
    globalThis.connection = connection;
    return connection;

    async function selectUsuario(){
      const conn = await connect();
      const [rows] = await conn.query('SELECT * FROM usuario;');
      return rows;
    }

    module.exports = {selectUsuario}
}