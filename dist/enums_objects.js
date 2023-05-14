"use strict";
// Enum
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "AMIN";
    Roles["SuperAdmin"] = "SUPERADMIN";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
