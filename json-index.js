
const fs = require('fs');

const bioData = {
    name: 'lok',
    age:22,
    fav:'cric',
};

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData,  (err) => {
    console.log("done");
});

fs.readFile("json1.json", "utf8", (err, data) => {
    const orgData = JSON.parse(data);
    console.log(orgData);
    console.log(data);
});

// console.log(bioData);
// console.log(bioData.name);
// console.log(bioData.age);
// console.log(bioData.fav);

// const jsonData = JSON.stringify(bioData);  //stringify for json format
// console.log(jsonData);
// //converted json--{"name":"lok","age":22,"fav":"cric"} 

// const objData = JSON.parse(jsonData);  //parse to convert into general objects format
// console.log(objData);
// console.log(objData.name);
// // { name: 'lok', age: 22, fav: 'cric' } //-- json to object format


// // console.log(jsonData.name); //can't be done because undefined

