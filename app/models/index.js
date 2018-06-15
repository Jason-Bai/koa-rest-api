const U = require('../lib/utils');

const Sequelize = require('sequelize');
const basename  = U.path.basename(__filename);
const config    = require('../config');
const db        = {};

const opt = config.db;

const sequelize = new Sequelize(opt.name, opt.user, opt.pass, opt);

U.fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](U.path.join(__dirname, file));
    const name = model.name.toLowerCase();
    db[name] = model;
  });

Object.keys(db).forEach(modelName => db[modelName].associate && db[modelName].associate(db));

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Sequelize.Op;

module.exports = db;
