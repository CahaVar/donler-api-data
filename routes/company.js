'use strict';

module.exports = function (app) {

  app.post('/companies', function (req, res) {
    // todo 请求参数验证

    res.send(201);

  });

};