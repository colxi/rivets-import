/*jshint esversion: 6 */

let myModel = {
    description : 'This is an example model where can be appreciated the lazy load of model and view , and the model nesting, and scopes inheritage',
    consideration : 'Rivets-import is EXPERIMENTAL. Do not forget it.',
    warn : function(){ alert('WARN: This library is Not ready for  production enviroments. You are warned!(again)'); },
    toggleDebug : function(){ rivets.configure_importer({ debug : !rivets.imports.__debug__ }); },
};

exports.default = myModel;
