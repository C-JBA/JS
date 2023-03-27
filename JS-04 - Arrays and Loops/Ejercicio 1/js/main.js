
let divAlert=document.getElementById("divAlert");

let nombres = ["Sofia",
"David",
"Juan"];


nombres.push("Sara"); 
nombres.push("Augustin");
nombres.shift(); 


//libros.splice(); // para quitar o reemplazar elementis
//libros.slice(); 

//libros.indexOf(""); // encuentra el índice del primer elemento de izquierda a derecha
//libros.indexOf("",2); // va a empezar a buscar a partir del numero 2
//si no existe te da -1

//lastIndexOf(); // busca de derecha a izquierda

//libros.includes(); //busca un elemento y regresa verdadero o falso

//libros.reverse(); //invierte el orden del arreglo, in place

libros.sort(); // ordena el arreglo, in place, por orden ascii


divAlert.innerHTML=libros.length+" libros<ul>";
divAlert.innerHTML+="<li>"+libros[0]+"</li>";
divAlert.innerHTML+="<li>"+libros[1]+"</li>";
divAlert.innerHTML+="<li>"+libros[2]+"</li>";
divAlert.innerHTML+="<li>"+libros[3]+"</li>";
divAlert.innerHTML+="<li>"+libros[4]+"</li>";
divAlert.innerHTML+="<li>"+libros[5]+"</li>";
divAlert.innerHTML+="<li>"+libros[6]+"</li>";
divAlert.innerHTML+="<li>"+libros[7]+"</li></ul>";


/* divAlert.innerHTML=libros.length+" libros<ol>"
+"<li>"+libros[0]+"</li>"
+"<li>"+libros[1]+"</li>"
+"<li>"+libros[2]+"</li>"
+"<li>"+libros[3]+"</li>"
+"<li>"+libros[4]+"</li>"
+"<li>"+libros[5]+"</li>"
+"<li>"+libros[6]+"</li></ol>";
 */
let nums=[1,30,4,21,100000];

console.log(nums.sort());
console.log(nums.sort(compareNumbers));
function compareNumbers(a,b){
    return a-b;
}

let strLibros=libros.join(", ");
console.log(strLibros);
//libros.join(); // une cadenas por defecto separa en comas
//libros.join(""); // concatena todo junto
//libros.join("-"); // separa con guiones


let arregloLibros=strLibros.split(", "); // separa una cadena 
console.log(arregloLibros.length);

