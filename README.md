# rivets-import (rv-model & rv-view)
Experimental Set of Custom Binders for RivetsJS, to import ES6 modules, as Models... and HTML as Views.

- Dependencies: [System.import](https://github.com/systemjs/systemjs)
- Installation: npm install rivets-import

Experimental RIVETS-IMPORT Binders
by Colxi - www.colxi.info

Rivets-import is a set of custom Binders capable of importing ES6 modules as ViewModels, performing automatic binding to DOM elements, applying convenient inheritage, managing nesting, and automatic binding and unbinding routines.
It should allow to develope rivetsJS based applications with a cleaner and better structured Model files Architecture and namespaces, where each model code is isolated from the others in its own file, improving the maintainability of the applications.
Rivets-import is also capable of importing HTML code from .html files and inject in in the DOM, again , performing appropiate Model binding.
Rivets-import aims to behave like  ```ng-controller``` & ```ng-view``` do behave in AngularJS.

###BUT DON'T FORGET: this is just an experiment... It' can produce memory leaks, inconsistent behavior under certain scenarios, and must be improved and tested, before considering its usage in a production enviroment.

###Main binders:
* rivets.binders['model']  -> Imports the JS file and binds the imported object to element (and childs)
* rivets.binders['view'] -> Imports the HTML file and renders inside the binded element.

###Some extra binders and formaters are included in this library  :
* rivets.formatters.set -> allows assign a value to a variable
* rivets.binders['element'] -> for DOM element binding to a variable

###Utilities:

* rivets._.Util.resolveKeyPath => returns the Reference of the object represented in a string KeyPath
* rivets.configure_importer => Expects an object with one or all the following properties:
```javascript
{
  baseUrl : (string) base url for models directory
  baseUrl_Views : (string) base url for views directory
  constructor : (string) name of the custom Module constructor
  debug : (boolean) : enabled and disabled the on-screen bindings visualization
  onLoadController : (function) function to be notified each time a Model is loaded
}
```

###Some notes:
- SystemJS needs to be included manually (https://github.com/systemjs/systemjs)
- Views must use .html extewnsion
- Imported Models are stored in rivets.imports.
- Custom Model Constructor can be set via config, it will be executed only in first import.
- Debug mode (enable it via config) allows bindings and nested bindings visualization on elements
- By default models should be placed in ./models/ and vies in ./views/ (configurable)
- Models Structure needs to be implemented using an Object Pattern , and exports must be using the export default mode.
- You will find a rude implementation and confusing structures on the code. It was my first aproximation to RivetsJS, and the main objective here has always been make it functional, not elegant.

###Examples:
- You will find a simple example in the DEMO directory

