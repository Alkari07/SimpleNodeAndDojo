define(function() {
    //this variable can't be directly accessed
    //this is the "private" section of the closure
    var privateValue =0;
    return {
        //Public section of the closure
        increment: function() {
            privateValue++;
        },

        decrement: function() {
            privateValue--;
        },

        getValue: function() {
            return privateValue;
        }
    }
})