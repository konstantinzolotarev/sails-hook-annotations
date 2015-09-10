## Sails hook annotations

Hook brings annotations support for Sails.js applications.

Please see `docs` folder for list of supported annotations and description.

Right now this hook supports this annotations:

+ [Route](docs/Route.md)
+ [Policy](docs/Policy.md)

### Installation

Just use simple command:
`npm install --save sails-hook-annotations`

### Configuration

```javascript

module.exports.annotations = {

  policy: false, // Will disable @Policy annotation

  route: false // Will disable @Route annotation

};

```
