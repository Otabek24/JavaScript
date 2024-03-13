let a = +prompt("Xohlagan soningizni kiriting")
while (isNaN(a) || a==0){
    a = +prompt("Xatolik. Son kiriting")
}
if (16 % 2 == a) {
    alert("Siz juft son yozdingiz: " + a)
}
else if (15%2) {
    alert("Siz toq son yozdingiz: " + a)
}
console.log(a)