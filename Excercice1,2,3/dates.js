/*<-----Date----->*/
var now = new Date();
console.log("now",now)
console.log("now",now.toString())
console.log("getTime",now.getTime())

console.log("toLocaleDatestring",now.toLocaleDateString('en-US'));
console.log("getFullYear",now.getFullYear());

var annee = new Date (2022,1,0);
console.log("annee",annee)


/*<-----heure et date----->*/
var hour = new Date(2022,1,0,17,15,00);
console.log("hour",hour)

var ts = new Date(annee.getTime());
console.log("ts",ts)

var date1 = new Date('04/05/2022');//MM/DO/AAAA
console.log("date1",date1);
//ISO 8601
var date2 = new Date('2022-05-04');//MM/DO/AAAA
console.log("date2",date2);
//format ISO
var date3 = new Date('2022-05-04T15:15:00');//MM/DO/AAAA
console.log("date3",date3);

//Zulu times temp universel
var dateZ = new Date("2022-05-04T15:15:00.000Z");
console.log("zulu,",dateZ);
