var firstName = "john";
var lastName = "doe";
var wordInput = function (word) {
    if (!word) {
        return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase();
};
firstName = wordInput(firstName);
lastName = wordInput(lastName);
var fullName = "".concat(firstName, " ").concat(lastName);
console.log("FullName: ", fullName);
