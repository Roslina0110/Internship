let names=["Arun","Malu","Jose"];
console.log(names);
console.log(names[1]);
console.log('The length of the list is',names.length)
console.log('The length of the name is',names[1].length)
names.push("Aleena");
console.log(names);
names.unshift("Anu");
console.log(names);
let person={
    Name:"Meera",
    Age:41

}
console.log(person);//returns the array person 

let persons=[{
    Name:"Abhishek",
    Age:22
},
{
    Name:"Sanal",
    Age:21

},
{
    Name:"Deepak",
    Age:20
}
]
console.log(persons);//returns the array person
console.log(persons[2].Name);//name of the person from the third array