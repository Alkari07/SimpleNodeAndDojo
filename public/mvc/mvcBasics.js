require([
    'dojo/Stateful',
    'dojo/_base/Deferred'
], function(Stateful, Deferred) {
    var viewInForm = function (object, form) {
        //copy initial values into form inputs
        for (var i in object) {
          updateInput(i, null, object.get(i));   
        }

        //watch for any future changes in the object
        function updateInput(name, oldValue, newValue) {
            var input = query('input')
        }
    }
});