'use strict';

module.exports = {

  /** @Route("/test") */
  index: function(req, res) {
    return res.send('SubController.index');
  },

  action: function(req, res) {
    return res.send('SubController.action');
  }
};
