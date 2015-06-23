## Route annotation

Allow developers to define Routes for actions using annotations.

For this you could use `@Route("")` annotation. **It works only with double quotes!**

You could use any **string** format for this annotation that Sails.js supports.

SomeController.js
```javascript

module.exports = {

  /**
   * @Route("/someRoute")
   */
  someAction: function(req, res) {
    res.ok();
  },

  /** @Route("GET /my/new/route") */
  another: function(req, res) {
    res.ok();
  }
};

```

**If you already have such route defined - it will be reassigned**
