try {
    console.log(a+b);
    
} catch (err) {
    console.log(err);
    console.log("An error occurred.");
}

try {
    throw new Error("test");
    
} catch (error) {
    console.log(error);
    
}

try {
    throw new ReferenceError("this is an error, type: Reference");
    
} catch (log) {
    console.log(log);
    
}

