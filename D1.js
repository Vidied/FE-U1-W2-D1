/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* I principali datatype in javascript sono suddivisi in:
number: sono numeri tipo 1,22,333 
string: sono parole come "sole" o "parcogiochi" che possono essere accompagnate dai numeri ma solo dopo le parole tipo "sole1"
boolean: sono vero e falso come per esempio che 1 < (vuol dire minore, quindi più piccolo di) 2 è vero siccome 1 è più piccolo di 2, altrimenti come esempio ci sta che Marco === (uguale) Andrea è falso perchè Marco non è uguale ad Andrea
undefined: quando nessuno dei datatype che abbiamo parlato vinene scritto quindi è un semplice ""
null:  quando ha come valore niente di niente neanche undefined e viene segnato con null tipo Testa=null

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Davide"
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let dodici = 12
let venti = 20
let risultato = dodici + venti

console.log('risultato di dodici+venti', risultato )
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = dodici
console.log (x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let cognome = "Pan"
myName = myName+cognome
console.log(myName)

let nomecompleto = "Davide " + cognome
console.log("prova per il nome completo",nomecompleto)

const datadinascita = 19102001
//  datadinascita = 19102002
console.log (datadinascita)
// ques'ultimo segnerà errore perchè provo a cambiare valore a una const

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4 - x 
console.log (y)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"

console.log(name1 !== name2)
//   john e John sono diversi e questi risulta in un true quando viene chiesto con !==

console.log (name1. toLocaleLowerCase === name2. toLocaleLowerCase)
// controlla se john e John sono uguali nel caso venissero trasformati in minuscolo


// zona extra test
let a = "a"
let b = "b"
let c = "c"

let ab = a+b 
console.log (ab)
let abc = a+b
abc = ab+c
console.log (abc)
console.log (ab === abc)
console.log (ab !== abc)


let cibo = true
let cucinare = true

let cenare = cibo&&cucinare 
console.log("se ho sia cibo che voglia di cucinare allora cenare",cenare)

cucinare = false
cenare = cibo&&cucinare 
console.log("se ho cibo ma non ho voglia di cucinare allora cenare",cenare)

let acqua = true
let bevanda = false
bere = acqua || bevanda
console.log ("se ho l'acqua ma non ho una bevanda avrò lo stesso qualcosa da bere",bere)
acqua = false 
console.log (acqua)
bere = acqua || bevanda
console.log( "se non ho nessuna delle due ovvero false a entrambi allora non avrò niente da bere",bere)

