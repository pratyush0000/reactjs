const event = new Promise((resolve,reject) => {
    var name = "Pratyuh";
    if(name == "Pratyush"){
        resolve(name);
    } else {
        reject("Name was: "+name)
    }
});

event.then((name) => {
    console.log(name);
}) .catch((err) => {
    console.log(err);
});