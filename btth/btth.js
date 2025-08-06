"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "AUTO";
    SystemMode["MANUAL"] = "MANUAL";
})(SystemMode || (SystemMode = {}));
const logMovement = (direction) => {
    return `🔄 Moving ${direction}`;
};
const setMode = (systemMode) => {
    return `⚙️ System set to ${systemMode}`;
};
const processInput = (input) => {
    if (typeof input === 'string') {
        console.log(`input length ${input.length}`);
    }
    else {
        console.log("Input: ", input);
    }
};
const validateInput = (input) => {
    if (typeof input == 'number') {
        console.log(`received input (any):  ${input}`);
    }
    else {
        console.log("❌ Invalid input type");
    }
};
const crash = (message) => {
    throw new Error(message);
    // try {
    //     logic thàn công;
    // } catch (error) {
    //     console.log(message);
    // }
};
console.log(validateInput);
logMovement("left");
setMode(SystemMode.AUTO);
try {
    crash("💥 SYSTEM CRASHED: Overheat detected!");
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=btth.js.map