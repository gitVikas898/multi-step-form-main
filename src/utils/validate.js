function validate(name,email,phone){
    let error = {};
    const testName = /^[A-Za-z\s]{2,50}$/.test(name);
    const testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const testPhoen = /^\+?[0-9]{10,15}$/.test(phone);

    if(!testName){
        error.name = "Please enter a valid name"
    }
    if(!testEmail){
        error.email = "Please enter a valid email"
    }
    if(!testPhoen){
        error.phone = "Please enter a valid phone number"
    }

    return error
    
}

export default validate;