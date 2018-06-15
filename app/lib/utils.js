const fs = require('fs');
const util = require('util');
const path = require('path');
const crypto = require('crypto');
const qs = require('querystring');
const _ = require('lodash');

const U = {
  _,
  qs,
  fs,
  util,
  path,
  crypto,
};

module.exports = U;
