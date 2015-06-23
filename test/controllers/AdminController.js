'use strict';

module.exports = {

  index: function(req, res) {
    return res.ok();
  },

  /**
   * @Route("/route")
   */
  some: function(req, res) {
    return res.send('AdminController.some');
  },

  /**
   *
   * @Route("GET /getRoute")
   */
  another: function(req, res) {
    return res.send('AdminController.another');
  }
};
