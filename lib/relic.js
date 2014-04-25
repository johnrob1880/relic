module.exports = function(el) {
 
    function Relic (options) {
        this.options = options;
        this.el = options.el || el;
    };
    
    
    Relic.use = function(fn, options) {
        fn(Relic, options);
        return this;
    };
    
    
    return Relic;
}