//function handleClick() {
//alert("aku mau di pencet");
//}

// Variabel, Konstanta, Tipe Data dan Operator

// Variabel
alert("Troubleshot")
let name;
name = "Farhan ganteng";
console.log(name);

let kota;
kota = "Bandung";
console.log(kota);
kota = "Karawang";
console.log(kota);

// Konstanta
const phi = 3.14;
const greet = "Good Morning";
console.log("Nilai phi adalah "+ phi);
console.log(greet+" Budi Setiawan");

// Tipe Data
// (Number)
let ipk = 3.90;
let price = 15000;
let celcius = -15;
console.log(ipk);
console.log(price);
console.log(celcius);
// (String)
let activity;
activity = 'Hello FASILKOM';
console.log(activity);
activity = "I'm learning javascript";
console.log(activity);
activity = "2021";
console.log(activity);
// (Boolean)
let isSuccess = true;
let isFailed = false;
console.log(isSuccess);
console.log(isFailed);

// Tipe Data Object
// (Array)
let faculties = [
    "Fakultas Ilmu Komputer",
    "Fakultas Hukum",
    "Fakultas Teknik",
    "Fakultas Ilmu Sosial dan Ilmu Politik",
    "Fakultas Agama Islam"
    ];
    console.log(faculties[0]);
    console.log(faculties[1]);
    console.log(faculties[2]);
    console.log(faculties[3]);
    console.log(faculties[4]);

// Mengubah Elemen Array
let faculties = [
    "Fakultas Ilmu Komputer",
    "Fakultas Hukum",
    "Fakultas Teknik",
    "Fakultas Ilmu Sosial dan Ilmu Politik",
    "Fakultas Agama Islam"
    ];
    faculties[1] = "Fakultas Ekonomi dan Bisnis";
    console.log(faculties);
    faculties[4] = 50;
    console.log(faculties);
    Array 2 Dimensi
    let coordinate = [
    [0,3],
    [6,2],
    [9,8]
    ];
    console.log(coordinate[0][0]);
    console.log(coordinate[0][1]);
    console.log(coordinate[1][0]);
    console.log(coordinate[1][1]);
    console.log(coordinate[2][0]);
    console.log(coordinate[2][1]);

// Operator
// (Aritmatika)
let results = 9+10;
console.log(results);
results = 15-10;
console.log(results);
results = 9*5;
console.log(results);
results = 18/2;
console.log(results);
results = 28 % 3;
console.log(results);
results = 10 + 15 * 2 / 2;
console.log(results);

// Perbandingan
let results = 18 < 2;
console.log(results);
results = 10 > 3;
console.log(results);
results = 5 >= 10;
console.log(results);
results = 16 <= 4;
console.log(results);
results = 19 == 10;
console.log(results);
results = 20 === 20;
console.log(results);

// Logika
let bool;
bool = true && false;
console.log(bool);
bool = false || true;
console.log(bool);

bool = !false;
console.log(bool);
bool = true || true || false;
console.log(bool);
bool = true && false || true;
console.log(bool);

// String
let firstName, lastName, fullName;
firstName = "Budi";
lastName = "Setiawan";
fullName = firstName +" "+ lastName;
console.log(fullName);
console.log("Halo, my name is "+fullName);
let students = ["Reni Mulyasari", "Kevin Alam", "Putri
Nabila", "Rudi Widodo"];
console.log(students[0]+" dan "+students[2]+" merupakan
teman dekat");
let exam = students[3] +" mendapatkan nilai " + 9*9;
console.log(exam);

// Spread
let male = ["Ujang Sanjaya","Kevin Alam","Dedi Wijaya"];
console.log(male);
let female = ["Lilis Puspitasari","Ririn
Noviyanti","Putri Wijaya"];
console.log(female);
let students = [...male,...female];
console.log(students);

// Percabangan & Perulangan 
// (If)
let gender;
gender = 'L';
if(gender === 'L'){
console.log("I'm a man");
}

// (If else)
let gender;
gender = 'P';
if(gender === 'L'){
console.log("I'm a man");
}else{
console.log("I'm a woman");
}

// (If Else If)
let username, password;
username = "Admin";
password = "qwerty";
const isSuccess = true;
const isFailed = false;
if(username ==="Admin" && password === "qwerty"){
console.log(isSuccess);
}else if(username === "Admin" && password !== "qwerty"){
console.log(isFailed);
}else if(username !== "Admin" && password === "qwerty"){
console.log(isFailed);
}else{
console.log(isSuccess);
}

// (Nested If Else)
let username, password;
username = "Admin";
password = "qwerty";
const isSuccess = true;
const isFailed = false;
if(username === "Admin"){
if(password === "qwerty"){
console.log(isSuccess);
}else{
console.log(isFailed);
}
}else if(password === "qwerty"){
console.log(isFailed);
}else{
console.log(isFailed);
}

// (Switch)
let grade = 'A';
switch(grade){
case 'A':
console.log("Very good");
break;
case 'B':
console.log("Good");
break;
case 'C':
console.log("Enough");
break;
case 'D':
console.log("Very Enough");
break;
default:
console.log("No Grade");
break;
}

// (Operator Conditional)
let age = 18;
let result = (age >= 18) ? "Eligible for voting" : "Not
eligible for voting";
console.log(result);

// (For)
for (let i = 0; i < 10; i++) {
    console.log(“Halo Javascript”);
    }

// (While)
let i = 50;
while(i > 0){
console.log(i + " * 5 = " + i*5);
i = i -5;
}

// (Do While)
let i = 1;
do{

console.log(i+" kuadrat = "+i*i);
i = i + 1;
}while(i <= 10);

// (For Of)
let faculties = [
    "Fakultas Ilmu Komputer",
    "Fakultas Hukum",
    "Fakultas Pertanian",
    "Fakultas Ilmu Sosial dan Ilmu Politik",
    "Fakultas Teknik"
    ];
    for(let faculty of faculties){
    console.log(faculty);
    }

// (Break & Continue)
for(let i = 1; i<=10; i++){
    if(i === 6){
    break;
    }
    console.log(i);
    }
    
    for(let i = 1; i<=10; i++){
    if(i === 6){
    continue;
    }
    console.log(i);
    }

// (Nested Loop)
let weeks = 3;
let days = 7;
for (let i = 1; i <= weeks; ++i) {
console.log("Week: " + i);
for (let j = 1; j <= days; ++j) {
console.log(" Day: " + j);
}
}

// Function
function greet(){
    console.log("Good Morning");
    console.log("Good Afternoon");
    console.log("Good Night");
    }

// Memanggil Function
function greet(){
    console.log("Good Morning");
    console.log("Good Afternoon");
    console.log("Good Night");
    }
    greet();

// Return Function
function greet(){
    return "Good Morning";
    }
    let regard = greet();
    console.log(regard);
    console.log(greet());

// Return Function Array
function hobbies(){
    const listHobbies =
    ["Footbal","Swimming","Reading","Writing","Coding"];
    return listHobbies;
    }
    let hobby = hobbies();
    for (const iterator of hobby) {
    console.log(iterator);
    }

// Function Parameter
function sum(number1, number2){
    let results = number1 + number2;
    return results;
    }
    console.log(sum(5,5));

// Spread Operator
function average(...index){
    let sum = index.length;
    let result = 0;
    for(const i of index){
    result += i;
    }
    return result/sum;
    }
    let x = average(4,8,3,7);
    console.log(x);

// Arrow Function
// Arrow Function Tanpa Parameter
const greet = () =>{
    console.log('Good Morning');
    }
    greet();

// Arrow Function Dengan Parameter
const sum = (x, z) => {
    let result = x + z;
    return result;
    }
    let result1 = sum(5,10);
    console.log(result1);