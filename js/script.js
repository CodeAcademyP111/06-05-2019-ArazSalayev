// var a=7,b=11;
// console.log(a,b);
// var c=a;
// a=b;
// b=c;

// console.log(a,b);

// var lastAccessDate="06.05.2019";
// var lastAccessDate="06.06.2019";
// var sonuncuGirishTarixi="06.05.2019";

// console.log(lastAccessDate);
// var age=5;
// var city="Baku";
// var isMaried=true;
// var a=null;

// console.log(a);
// console.log(city);
// console.log(isMaried);
// document.write("<a href='google.com'>Google</a>");


// var person = {
//     name:"Mushfiq",
//     age:29,
//     isMaried: true
// }

// console.log(typeof(person.name));

// var a="51.5ans5ddkghfg";

// var b=Number(a);
// var c;
// var getNumberFromString=parseInt(a);
// var getFloatFromString=parseFloat(a);
// console.log(a);
// console.log(getNumberFromString);
// console.log(getFloatFromString);

// var intNumber=5.25464588;

// var fixedNumber=intNumber.toFixed(3);

// var convertToString=intNumber.toString();
// console.log(parseFloat(fixedNumber));
// console.log(convertToString);


// var a = 4, b = 2,c="15";
// var izah="Shahin";
// a++;
// b--;

// a += b; //a=a+b
// a-=b;
// a*=b //a=a*b
// a/=b; //a=a/b
// a**=b;
// a+=c; // a=a+c

// console.log(a);

// var a = 5;
// var b=5;

// var answer = a > 5 ? "Beli" : "Xeyir";

// console.log(answer)

var age = 26;
var city = "Baki";

// console.log(!(city == "Sumqayit"));

// if (age > 25) {
//     document.write("Buyurun,yashiniz - " + age);
// } else if (age > 20) {
//     document.write("Tam vaxtidir,yashiniz - " + age);
// } else {
//     document.write("get sonra gelersen,chox balacasan - " + age)
// }
var text;
switch (true) {
    case (age > 25):
        text = "Buyurun";
        break;
    case (age > 20):
        text = "Tam vaxtidir";
        break;
    default:
        text = "get sonra gelersen,chox balacasan";
}

console.log(text);

