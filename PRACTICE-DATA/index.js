
const txt = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj1 = JSON.parse(text);
obj.birth = new Date(obj1.birth);

document.getElementById("info").innerHTML = obj1.name + ", " + obj1.birth;

const info = {name: "john", age: 40, city: "Los Angelos"};
const list = JSON.stringify(info);
document.getElementById("list").innerHTML = info;