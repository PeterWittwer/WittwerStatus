//   mongodb://<dbuser>:<dbpassword>@ds127851.mlab.com:27851/adam_mern_shopping

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
  } else {
    module.exports = require('./keys_dev');
  }



