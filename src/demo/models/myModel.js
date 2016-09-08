/*jshint esversion: 6 */

let myModel = {
    about : 'This is an example model where can be appreciated model nesting, inheritage',
    consideration : ' Rivets-import is EXPERIMENTAL. Do not forget it.',
    warn : function(){ alert('WARN: This library is Not ready for  production enviroments. You are warned!!'); },
    toggleDebug : function(){ rivets.configure_importer({ debug : !rivets.imports.__debug__ }); },
    author : {
        name : 'colxi',
        web : 'http://www.colxi.info',
        email : 'contact@colxi.info'
    }
};

exports.default = myModel;
