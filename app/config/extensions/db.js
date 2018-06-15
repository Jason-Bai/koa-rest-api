module.exports = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  encode: {
    set: 'utf8',
    collation: 'utf8_general_ci',
  },
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  dialect: 'mysql',
  dialectOptions: {
    supportBigNumbers: true,
    charset: 'utf8mb4'
  },
  logging: false,
  define: {
    underscored: false,
    freezeTableName: true,
    syncOnAssociation: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    engine: 'InnoDB',
  },
  syncOnAssociation: true,
  pool: {
    min: 2,
    max: 10,
    idle: 30 * 1000,
  },
};
