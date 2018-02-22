define([
    'dojo/dom'
], function(dom) {
    return {
        execute: function(id, userName) {
            var node= dom.byId(id);
            node.innerHTML = 'executed Authored Dialog for: ' + userName;
        }
    }
})