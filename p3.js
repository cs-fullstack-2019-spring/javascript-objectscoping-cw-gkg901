var peopleList  = [{FirstName:"Jimmy",LastName:"Page",Age:62,ZipCode:90210},{FirstName:"Rick",LastName:"Nelson",Age:57,ZipCode:61016},{FirstName:"Jimi",LastName:"Hendrix",Age:58,ZipCode:90001},{FirstName:"Lemmy",LastName:"Kilmister",Age:57,ZipCode:21120}];





console.log(peopleList[0]);


peopleList[2].famousSong = "Purple Haze";

console.log(peopleList[2]);

peopleList[0].getBandandZip = function(){ return("Led Zeppelin " + this.ZipCode)};

peopleList[0].getBandandZip();
























//var list = [{color:"red",price:"12"},{color:"blue",price:"14"},{color:"pink",price:"15"}];