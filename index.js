var utils = {
    cutZero: function (x) {
        if (x[0] === '0') {
            return x.slice(1);
        }
    },
    removeDash: function (x) {
        return x.replace(/-/g, "");
    }
};
utils.cutZero("0림");
utils.removeDash("dsf-fdsfdsf-dsf");
