const U = require('../lib/utils');

const basename  = U.path.basename(__filename);
const ctls = {};

U.fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const filePath = U.path.join(__dirname, file);
    const name = U.path.basename(filePath, '.js');

    const model = require(filePath);

    ctls[name] = model;
  });

module.exports = ctls;
