let firstName: string = "john";
let lastName:string = "doe";
const wordInput = (word: string): string => {
    if(!word){
        return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase();
}

firstName = wordInput(firstName);
lastName = wordInput(lastName);

let fullName = `${firstName} ${lastName}`;
console.log("FullName: ", fullName);
