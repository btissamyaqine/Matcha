import { Sequelize } from "sequelize";
const db = new Sequelize ('matcha', 'root', '', {
  host: 'localhost',
  dialect:'mysql' // or'mariadb' for MariaDB, etc.

});
export default db;