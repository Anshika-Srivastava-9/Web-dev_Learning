const account_Id=123423;
let account_email="xyz@gmail.com";
var account_password="12345"; 
accountCountry="India"; 

// account_Id=2;    // we cannot change the value of const variable

account_email="sriak43@gmail.com";
account_password="67890";
accountCity="Bangalore";

// Prefer not to use var for variable declaration because of issue in block scope and function scope


console.log(account_Id);
console.table([account_email,account_password,accountCountry,accountCity]);
