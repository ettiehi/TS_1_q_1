"use strict";
exports.__esModule = true;
function Stack() {
    var items = [];
    return {
        push: function (item) { return items.push(item); },
        pop: function () { return items.pop(); },
        peek: function () { return items[items.length - 1]; }
    };
}
exports["default"] = Stack;
