const JSON_INPUT = require('./JSON_Inputs/JSON_INPUT.js')
const JSON_INPUT_ERROR = require('./JSON_Inputs/JSON_INPUT_ERROR.js')
const Error_Input_1 = {};
const Error_Input_2 = 2;

function check(input){

    if(input.hasOwnProperty("PolicyDocument") && input.PolicyDocument.hasOwnProperty("Statement")
        && input.PolicyDocument.Statement[0].hasOwnProperty("Resource")){

        const resource = input.PolicyDocument?.Statement[0]?.Resource;
        return resource !== "*";
    }else{
        console.error("JSON input has errors");
    }
}

console.log(check(JSON_INPUT));
console.log(check(JSON_INPUT_ERROR));
console.log(check(Error_Input_1));
console.log(check(Error_Input_2));