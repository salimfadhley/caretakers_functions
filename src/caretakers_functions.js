"use strict";
exports.__esModule = true;
var zip = function (arr) {
    var arrs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arrs[_i - 1] = arguments[_i];
    }
    return arr.map(function (val, i) { return arrs.reduce(function (a, arr) { return a.concat([arr[i]]); }, [val]); });
};
function concatenate_email_addresses(names, email_addresses) {
    return "xxxx";
}
exports.concatenate_email_addresses = concatenate_email_addresses;
//# sourceMappingURL=caretakers_functions.js.map