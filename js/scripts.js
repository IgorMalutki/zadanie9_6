// scripts.js


function checkOnclickEvent(param) {
    console.log(param);
    var element = document.createElement('li');
    var number = document.getElementsByTagName('li');
    element.innerHTML = ('item ' +number.length);
    param.appendChild(element);
    console.log(element);
}
var listElem = document.getElementById('list');
console.log(listElem);
buttonElem = document.getElementById('addElem');
console.log(buttonElem);
buttonElem.addEventListener('click', function() {
  checkOnclickEvent(listElem)
});






/*var withButtonClass = document.getElementsByClassName('Button');

console.log(withButtonClass);
for ( var i=0 ; i < withButtonClass.length ;i++) {
	console.log(i);
	console.log(withButtonClass[i].innerText);
	
}








drawTree();
 
function drawTree (h) {
	var h = prompt ('Jak duża ma być choinka?');
		if ( h > 0 ) {
            for ( var i = 1; i <= h ; i++) {
                var star = '';
                for ( var j = 1; j <= i ; j++) {
                    star += '*';
                }
                console.log(star);
            }
        }  else alert ('Zła wysokość choinki ');
}
 





var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
console.log(dinosaurUpperCase);
var textChanged = text.replace('Velociraptor',dinosaurUpperCase);
console.log(textChanged);
//var halfOfTextChanged = (textChanged.length)/2;
//console.log(halfOfTextChanged);
var firstHalfOfTextChanged = textChanged.substr(0,(textChanged.length)/2);
console.log(firstHalfOfTextChanged);



var arrayMen = ['Tomek','Krzysiek','Piotr','Paweł','Norbert','Kacper'];
var arrayWomen = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var arrayWomenAndMen = arrayMen.concat(arrayWomen);
console.log(arrayWomenAndMen);
var newName = 'Marian';
var isIn = arrayWomenAndMen.indexOf(newName);
if (isIn < 0) {
                arrayWomenAndMen.push(newName);
                console.log(arrayWomenAndMen);
} else {
                alert('Imię'+ newName +' występuje już w tablicy na pozycji numer: '+ isIn );
}


function getTriangleArea (a,h) {
	//var a = prompt('Podaj wartość podstawy trójkąta');
	//var h = prompt('Podaj wartość wysokości trójkąta');
	if ((a <=0) || (h <=0 )) { 
		alert ('Wprowadzona wartość jest mniejsza od zera - błąd !');
		return 'Nieprawidłowe dane';
	} else 
		return ( a*h/2) ;
}
console.log(getTriangleArea(10,6));
var triangle1Area = getTriangleArea(10,15);
alert('Pole trójkąta to : '+ triangle1Area);
console.log(triangle1Area);
var triangle2Area = getTriangleArea(8,12);
alert('Pole trójkąta to : '+ triangle2Area);
console.log(triangle2Area);
var triangle3Area = getTriangleArea(4,7);
alert('Pole trójkąta to : '+ triangle3Area);
console.log(triangle3Area);

var name = prompt('Enter your name'); /* deklaracja zmiennej o nazwie "name" ,przypisanie jej wartości którą zwraca funkacja prompt
// alert('Hello, ' + name);
console.log('wartość zmiennej name to : ' + name); // funkcja pozwalająca wyświetlić aktualną wartość zmiennej "name"
var person;
console.log(person);
console.log(10 * 'napis');// NaN
var result = 10/0;
console.log(result);


var foo = 'lorem' + ['1', 2, 3.4];
console.log("wynik operacji'lorem' + ['1', 2, 3.4]",foo,typeof(foo));
var foo = ['1', 2, 3.4] + 'lorem';
console.log("wynik operacji['1', 2, 3.4] + 'lorem'",foo,typeof(foo));
var foo = 9 + ['1', 2, 3.4];
console.log("wynik operacji: 9 + ['1', 2, 3.4]",foo,typeof(foo));
var foo = ['1', 2, 3.4] + 9;
console.log("wynik operacji: ['1', 2, 3.4] + 9",foo,typeof(foo));
var foo = ['1', 2, 3.4] + [1, '2', 3.4];
console.log("wynik operacji: ['1', 2, 3.4] + [1, '2', 3.4]",foo,typeof(foo));
var foo = ['1', 2, 3.4] + {bar: 'lorem'};
console.log("wynik operacji: ['1', 2, 3.4] + {bar: 'lorem'}",foo,typeof(foo));
var foo = {bar: 'lorem'} + [1, '2', 3.4];
console.log("wynik operacji: {bar: 'lorem'} + [1, '2', 3.4]",foo,typeof(foo));
var foo = ['1', 2, 3.4] + undefined;
console.log("wynik operacji: ['1', 2, 3.4] + undefined to",foo,typeof(foo));
var foo = undefined + [1, '2', 3.4];
console.log("wynik operacji: undefined + [1, '2', 3.4]",foo,typeof(foo));

var points = 1;
console.log( 'The current value of points is: ', points ); // 1
console.log( 'The current value of points is: ', points++ ); // 1
console.log( 'The current value of points is: ', points ); // 2
console.log( 'The current value of points is: ', points ); // 1
console.log( 'The current value of points is: ', ++points ); // 2
console.log( 'The current value of points is: ', points ); // 2 

alert('Proste zadanko na obliczanie pola trójkąta, zastanów się nad danymi do wprowadzenia ');
var a = prompt('Podaj wartość podstawy trójkąta');
console.log(a);
var h = prompt('Podaj wartość wysokości trójkąta');
console.log(h);
var triangleArea = a*h/2;
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
alert('Pole trójkąta to : '+ triangleArea);

var a = 1;
var b = 12;
var value = (a * a) - (2 * a * b) + (b * b);
console.log(value);
if (value > 0) {
	console.log ('Wynik dodatni');
	alert ('Wynik dodatni');
} else if (value < 0) {
	alert ('Wynik ujemny');
	console.log('Wynik ujemny');
} else {
	alert ('Wynik równy zero');
	console.log('Wynik równy zero');
}*/
