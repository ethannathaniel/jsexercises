/*simple alert*///(popup en la pantalla)
alert("Esto es un alert de js");
/*variables en js*///(es el valor dado a una letra, palabra)
//CONST: Es una constante la cual NO cambiara su valor en ningún momento en el futuro. VAR: Es una variable que SI puede cambiar su valor y su scope es local. LET: Es una variable que también podra cambiar su valor, pero solo vivirá(Funcionara) en el bloque donde fue declarada.
 //variable global
 perro = "dog";

 //esta es una variable la cual tendra el valor que le pongamos en el codigo
 alert("variables");
 var nombre = "imanol de jesus";
 alert(`esto es una variable ${nombre}`);

 //esta es una variable la cual tendra el valor que deseemos (prompt es para pedir que ingrese un dato)
 var apellido = prompt("ingresa tu apellido");
 alert(`${nombre} ${apellido}`);

 //aqui escribiremos en el documento
  document.write(`${nombre} ${apellido}`);

 //aqui imprimimos en la consola
 console.log(`${nombre}  ${apellido}`);

/*tipos de datos*/

 //Numericos - float(decimal)- interior (entero)
 var edad = 19.1234;
 document.write( `<br>${edad}`);

 //String- cadena de texto
 var nombre_2 = "imanol";
 var apellido_2 = "estevez";
 document.write(`<br>${nombre_2} ${apellido_2}`);


 //Array - arreglo (para tener varias variables en una variable)
 var amigos = ["carlos","Alejandro", "Cesar"];
 document.write(`<br>${amigos[0]}<br>`);
 
 //Object - objeto (para poder cambiar las propiedades de un objeto)
 var objeto = {
     color: "Black",
     size: 12     
 }

 //Boolean - boleano(solo nos permite almacenar true or false y comparar)
 var boleano = true;

 //Undefined(sin valor definido)
 var undefinided;

 //Null(para borrar un numero o hacerlo inexistente)
 var numero = 10;
 var numero = null;
 
 //NAN(valor invalido)
 var texto = "kakkaa";
 document.write(texto * 5);

/*Arrays*/
 //podemos tener true, numeros, string en un Array
 var amigos_2 = ["carl", "lenny", "moe", "barney", "apu", true];
 var selecciona = prompt("ingrese un numero del 0 al 6")
 document.write(`<br>${amigos_2[selecciona]}`);
 //Cambiar el valor de un array
 var x = prompt("ingresa un numero del 0 al 6 para sustituir el array")
 amigos_2[x] = prompt("ingresa el nuevo valor para el array")  
 //saber cual es la longitud de un arreglo
 document.write(`<br> Tienes ${amigos_2.length} Amigos`);
 //Agregar elementos al final de un arreglo
 var cambio_amigos = prompt("ingrese un nuevo valor");
 amigos_2.push(`${cambio_amigos}`)
 //quitar el ultimo elemento de un arreglo
 amigos_2.pop();
 //concatenar varios arreglos en uno solo
 var amigos_final = amigos_2.concat(amigos);
 //mostar los valores de un arreglo con un separador que querramos
 document.write(`<br>${amigos_final.join(" / ")}`);
 //ordenar un arreglo
 var ordenar = amigos_final.sort();
 document.write(`<br>${ordenar}`);
/*condicionales */
    /*if( condicion ){
        instrucciones
    } else{
        instrucciones
    }*/
    //varios  
     /*if( condicion ){
         instrucciones
        } else if( condicion ){
            instrucciones
    } else{
        instrucciones
    }*/
    //deben cumplirse ambas operador logico y
     /*if( condicion && condicion ){
         instrucciones
     } else{
         instrucciones
     }*/
     //deben cumplirse una de las dos condiciones operador logico o
     /*if( condicion || condicion ){
         instrucciones
     } else{
         instrucciones
     }*/

/* ciclo for*/
     //for(condicion; cuantas veces se repetira el ciclo; en cada ejecucion que la variable se incremente o decremente etc){
         //instrucciones
     //}
     
/* ciclo while */
     //while(condicion){
       //  instrucciones 
     //}
     //do {
         //siempre se ejecuta al menos una vez
     //}while(condicion);
/*funciones */
     //funcion autoimvocada(para que no puedan acceder a nuestros scripts)
     //(function(){
         //aqui va nuestro codigo de js 
     //}())

     //function nombre(parametro que queremos que reciba) {
       //  instrucciones
       //en caso de declar una variable dentro de una funcion no podremos acceder a ella desde fuera de la funcion
       //(asi se retorna un valor - pero rompe la ejecucion de la funcion ) return;
       //una funcion puede llamar a una funcion dentro de esta misma     
       //}
     //(asi se llama una funcion)saludo();
     //una funcion puede ser guardada dentro de una variable lo cual seria una funcion anonima
     //=====================funcion en un form================================//
     //<form action="">
     //vamos a llamar a la funcion de cada elemento del dom via un id
        //<input type="text" id="numero1">
        //<input type="text" id="numero2">
        //<input type="button" id="sumar" onclick="alert(suma());">
     //</form>
     //var suma = function(numero1, numero2){
         //aqui llamamos el elemento del dom con get element by id y usamos el parsefloat para cambiar el tipo de entrada que tendra el input
         //var numero1 = parseFloat(document.getElementById("numero1").value);
         //var numero2 = parseFloat(document.getElementById("numero2").value);
         //var resultado = numero1 + numero2;
         //return resultado;
     //}
/*scope de js*/
     //Global - podemos acceder a ellas desde cualquier parte del codigo
        //var variableglobal = "Esta es una variable Global";
        //alert(variableglobal);
        
        //var mifuncion = function(){
             //alert(variableglobal);
            //variableglobal = "esta es global, modificada";
            //alert(variableglobal);
        //}

     //Local - variables creadas dentro de una funcion, solo pueden ser accedidas desde una funcion
        //var mifuncion = function(){
            //var variablelocal = "esta es local";
            //alert(variablelocal);
            //en caso de declarar una variable sin la palabra reservada var dentro de una funcion esta se convierte en una variable global
            //por ejemplo numero = 3;
        //}La "función padre" NO puede ingresar a la "función hija", pero la "función hija" SI puede ingresar a la "función padre".La "función padre" NO puede ingresar a la "función hija", pero la "función hija" SI puede ingresar a la "función padre".
/*introduccion al dom */
     //al dom accedemos via un id con getElementById("") o por el nombre de la etiqueta con tagName("")
        //<h1 id="titulo">titulo</h1>
        //<p>lorem ipsum</p>
        //<p id="segundo">lorem ipsum</p>
        //<p>3.lorem ipsum</p>
    //por ejemplo lo podemos almacenar en una variable
        //var elementosp = document.getElementsByTagName("p");
        //var segundop = document.getElementById("segundo");
    //Creando nodos en js para modificar el dom (usar en trabajo)
      //pasos para a;adir al dom
     // 1.-crear el elemento
       // var elemento = document.createElement("etiqueta (elemento)")
     // 2.-crear un nodo de texto
       // var contenido = document.createTextNode("lo que tendra el elemento dentro")
     // 3.-a;adir el nodo de texto al elemento
       // elemento.appendChild("contenido") aqui se agrega el contenido
     // 4.-agregar atributos al elemento
       //elemento.setAttribute("atributos que queremos poner","")
     // 5.-agregar el elemento al documento
       //document.getElementById("id").appendChild(elemento)