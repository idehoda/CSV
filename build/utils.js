"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    //'10/08/2018',
    var _a = dateString.split('/')
        .map(function (datePart) { return parseInt(datePart); }), day = _a[0], month = _a[1], year = _a[2];
    return new Date(year, month - 1, day).toDateString();
};
