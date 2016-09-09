/* jsHint inline configuration : */
/* global System , rivets , sightglass */

window.onload = function(){
	// configure SystemJS
	System.config({ baseURL: './' });
	// configure RivetsJS
	rivets.configure({
		prefix: 'rv', 					// Attribute prefix in templates
		preloadData: true,				// Preload templates with initial data on bind
		rootInterface: '.',				// Root sightglass interface for keypaths
		templateDelimiters: ['{', '}'],	// Template delimiters for text bindings
	});
	// configure Sightglass
	sightglass.adapters = rivets.adapters;
	sightglass.root 	= rivets.rootInterface;
	// bind body to allow rivets parse tags
	rivets.bind( document.body,{} );
};
