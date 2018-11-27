var flatten = function(a) {
    var reserve = [];

    return function() {
        var f = function(b) {
            if (Array.isArray(b)) {
                return b.map(f);
            }
            reserve.push(b);
            return b;
        };
        a.map(f);
        return reserve;
    }
};

console.log(flatten([1, [2, [3, [4]], 5]]) () );