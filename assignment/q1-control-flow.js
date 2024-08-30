/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

// Task: Add code here
switch (env) {
    case 'DEV':
        console.log('It is DEV case');
        break;
    case 'STAGE':
        console.log('It is STAGE case');
        databaseCredential = "stageuser:password";
        break;
    case 'PROD':
        console.log('It is PROD case');
        databaseCredential = "produser:password";
        break;
    default:
        console.log('Invalid input detected');
        break;
  }
console.log(`Database credential for environment ${env} is ${databaseCredential}`);
