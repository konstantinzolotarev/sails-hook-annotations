## Policy annotations

This hook allow developers to define Policies for actions using annotations.

For this you could use `@Policy("")` annotation. **It works only with double quotes!**

Parameters could be:
+ `string` - Policy name.
+ `Array` - Array of policies

**If you defined some policy for this action into `config/policies.js` file. Policy from annotation will be added to existing one !**

`config/policies.js`:

```javascript
module.exports = {

  UserController: {
    actionWithPolicyConfigured: "configuredPolicy"
  }
};
```

`api/controllers/UserController.js`:

```javascript

module.exports = {

  /**
   * Description of someAction
   *
   * Only one policy "isAuthorized" will be applyed
   *
   * @Policy("isAuthorized")
   * @param  {IncommingMessage} req
   * @param  {OutcommintMessage} res
   */
  someAction: function(req, res) {
    return res.ok();
  },

  /**
   * Another action description
   *
   * Two policies: "somepolicy", "anotherPolicy" will be applyed
   *
   * @Policy(["somepolicy", "anotherPolicy"])
   * @param  {IncommingMessage} req
   * @param  {OutcommingMessage} res
   */
  anotherAction: function(req, res) {
    // ...
    return res.ok();
  },

  /**
   * Description of someAction
   *
   * Two policies "isAuthorized" and "configuredPolicy" will be applyed
   *
   * @Policy("isAuthorized")
   * @param  {IncommingMessage} req
   * @param  {OutcommintMessage} res
   */
  actionWithPolicyConfigured: function(req, res) {
    return res.ok();
  }
};
```

