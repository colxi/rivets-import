# rivets-import (rv-model & rv-view)
Experimental Set of Custom Binders for RivetsJS, to import ES6 modules, as Models... and HTML as Views.

Requires:  [System.import](https://github.com/systemjs/systemjs)

Experimental RIVETS-IMPORT Binders v.0.0.12
by Colxi - www.colxi.info

Rivets-import is a set of custom Binders capable of importing ES6 modules
as ViewModels, performing automatic binding to DOM elements, applying
convenient inheritage, managing nesting, and automatic binding and unbinding routines.
It should allowing to develope rivetJS based applications with a cleaner and better structured Model Architecture  and namespaces, where each model is independent one from each other.
Rivets-import is also capable of importing HTML code from files and inject in in the DOM, again , performing appropiate Model binding.
Rivets-import aims to behave like  ```ng-controller``` & ```ng-view``` behave in AngularJS (kind of rude and dirty implementation).

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

###Examples:
- You will find a simple example in the DEMO directory

