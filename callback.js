//callback

function submitForm(submit,isValid){
    console.log(isValid());
console.log(submit);
}

function submitForm(submit,db){
    var[dbName,comment]=db()
    console.log("DB name is",dbName,comment);
    console.lof(submit);
}

function database(){
    dbName="SECE"
    return [dbName,"Data stored successfully"]
}
function validations(){
    console.log("Form validation successful")
}

submitForm("Form Submitted successfully",validations)