const employee = {
  name: "Orion",
  streetAdress: "14 freedom street",
};
//returns an employee with the original key value pairs and the new key value pair, and it does not modify the original employee, but rather returns a clone with the new data
const updateEmployeeWithKeyAndValue = function(employee, key, value){
  const newKey = { ...employee};
  newKey[key] = value;
  return newKey;
}
console.log(updateEmployeeWithKeyAndValue(employee));

//console.log(updateEmployeeWithKeyAndValue(employee,"age",29));

//updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
const destructivelyUpdateEmployeeWithKeyAndValue = function(employee, key, value){
  employee[key] = value;
  return employee;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee));

// deletes `key` from a clone of employee and returns the new employee (it is non-destructive), and does not modify the original employee (it is non-destructive)

const deleteFromEmployeeByKey = function(employee, key){
  const newEmployee = Object.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;

  /**const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
   */
} 
// returns employee without the deleted key/value pair, and modifies the original employee
const destructivelyDeleteFromEmployeeByKey = function(employee, key){
  delete employee[key];
  return employee;
}
