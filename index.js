const employee={
    name: `Joe`,
    streetAddress: `9030 Whispering Pines`,
}

function updateEmployeeWithKeyAndValue(obj,key,value){
    return Object.assign({},obj,{[key]:value})

}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    return Object.assign(obj,{[key]:value})
}

function deleteFromEmployeeByKey(obj,key,value){

    delete obj.key;
    return Object.assign({},obj,{[key]:value})
    
}

function destructivelyDeleteFromEmployeeByKey(obj,key,value){

    delete obj.key;
    return Object.assign(obj,{[key]:value})
    
}

