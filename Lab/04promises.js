/**
 * @description This document explains how promises work in javascript
 * @author David Avalos
 * @lastUpdate 09/04/2019
 * 
 * I highly recommend you read this article to understand promises: https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1
 * I don't think I can give a better explanation.
 * 
 * Below code is a very simple example of promises... and also a TL;DR version of the article.
 */

//Create the promise
var promise = new Promise(function(resolve,reject){
    result = true; //The promise will be resolved or rejected depending on the value of this flag (which you may change manually to see different results)
    //Since this is just an example, both resolve and reject return strings in the callbacks
    if(result){
        resolve("Promise was fullfilled");
    }else{
        reject("Promise rejected");
    }
});

//catch method will execute whenever the promise is rejected, else it won't do anything.
promise.catch(function(rejectedReason){
    console.log("Something went wrong" + rejectedReason);
});

//Then function will handle both resolved and reject. When it's resolved it will execute the first function, and when reject will execute the second.
//Also, reject handling is optional. Meaning, when you send only one function to the callback, it will only handle the resolve scenario.
promise.then(function(value){
    console.log("Things were as expected" + value);
},function(reason){
    console.log("Confirm promise was rejected: " + reason);
});

//Finally will execute always after the promise is either resolved or rejected.
promise.finally(function(){
    console.log("This is the end of promises section");
});