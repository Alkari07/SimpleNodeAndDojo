define([
    'dojo/dom'
], function(dom) {
    //once all modules in the dependency list have loaded, this function is called to 
    //define the myModule module

    //the dojo/dom module is passed as the first argument to this function.  additional modules
    //in the dependency list would be subsequent arguments
    var oldText ={}; 

    //this returned object becomes the defined value of this module
    return {
        setText: function(id, text) {
            var node= dom.byId(id);
            oldText[id] = node.innerHTML;
            node.innerHTML = text;
        },
        restoreText: function(id) {
            var node = dom.byId(id);
            node.innerHTML = oldText[id];
            delete oldText[id];
        }
    }
})