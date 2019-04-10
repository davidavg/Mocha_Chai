/**
 * @description This file contains dummy functions that will serve for mocha test examples in other files. 
 * Each of them take a different amount of parameters, for examples pruposes, and they all print a string message to console and return true.
 * Since the purpose of these functions is to use them on different files I added the 'exports' function at the end.
 * 
 * @author David Avalos
 * @lastUpdate 09/04/2019
 */

function sendRequest(request){
    console.log("Request sent: "+request);
    return true;
}

function checkPostedValues(){
    console.log("Posted values are okay, stop asking!");
    return true;
}

function deleteValue(value){
    console.log("Value deleted: "+value);
    return true;
}

function changeValue(current, newValue){
    console.log("Value changed from - "+current+" to - "+newValue);
    return true;
}

module.exports = {
    sendRequest, checkPostedValues, deleteValue, changeValue
}