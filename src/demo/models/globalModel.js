// This model is loaded automatically on Demo load, because of the rv-model="'globalModel'"
// found in the "./views/globalView.html".
// Is remarcable to appreciate here, the usage of the properties defined in globalModel.about,
// later, in the nested view "myView.html" ,thanks to automatic scope inheritage,
// provided by rivets-import.

let globalModel = {
	title : 'IMPORTS EXAMPLE',
	currentView : '',
	currentModel : '',
	loadView: function(){
		globalModel.currentView = 'myView';
	},
	loadModel: function(){
		if(globalModel.currentModel === '') globalModel.currentModel = 'myModel';
		else globalModel.currentModel = '';
	},
	about : {
        author : 'colxi',
        web : 'http://www.colxi.info',
        installation : 'Installation: npm install rivets-import'
    }
};

exports.default = globalModel;
