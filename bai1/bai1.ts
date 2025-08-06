let userName: string = "Nguyen";
let age: number = 20;
let job: string = "Dev";
const printInfo = (userName: string, age: number, job: string): void => {
    console.log("Name: ", userName);
    console.log("Age: ", age);
    console.log("Job: ", job);
}
printInfo(userName, age, job);