enum SystemMode {
    AUTO = "AUTO",
    MANUAL = "MANUAL",
}
type Direction = "left" | "right" | "forward" | "backWard";
const logMovement = (direction: Direction): string => {
    return `🔄 Moving ${direction}`;
};

const setMode = (systemMode: SystemMode): string => {
    return `⚙️ System set to ${systemMode}`;
}

const processInput = (input: any): any => {
    if(typeof input === 'string'){
        console.log(`input length ${input.length}`);
    } else {
        console.log("Input: ", input);
    }
    
};

const validateInput = (input: unknown) => {
    if(typeof input == 'number'){
        console.log(`received input (any):  ${input}`);
    } else {
        console.log("❌ Invalid input type");
    }
}

const crash = (message: string): never => {
    throw new Error(message);
    // try {
    //     logic thàn công;
    // } catch (error) {
    //     console.log(message);
        
    // }
}
console.log(validateInput);

logMovement("left");

setMode(SystemMode.AUTO);

try {
    crash("💥 SYSTEM CRASHED: Overheat detected!");
} catch(error){
    console.log(error);
}