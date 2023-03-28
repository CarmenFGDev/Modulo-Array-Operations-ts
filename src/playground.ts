const a = {name: 'Maria', surname: 'Ibañez', country: 'SPA'};
const b ={name:'Luisa', age:31, married: true};

//Ejercicio 3 Clone 
function clone(source) {
    return {...source};
}
console.log("Ejercicio 3");
console.log("Original", a);
console.log("clone", clone(a));

//Ejercicio 3 Clone Merge
function merge(source, target) {
    return {...target,
            ...source}
}
console.log("merge", merge(a ,b));

// Ejercicio 4 ReadBooks
interface IBook {
    title: string;
    isRead: Boolean;

}
const books: IBook[] = [
    {title: 'Harry Potter', isRead: true},
    {title: 'Canción de hielo y fuego', isRead: false},
    {title: 'Devastación', isRead: true}
]
function isBookRead(books: IBook[] , titleToSearch: string ): Boolean {
    const book= books.find(b => b.title === titleToSearch);
    return !!book ? book.isRead : false;
}
console.log("Ejercicio 4");
console.log('ReadBook Harry Potter',isBookRead(books,'Harry Potter') );
console.log('ReadBookCanción de hielo y fuego',isBookRead(books,'Canción de hielo y fuego') );

//Ejercicio 5 Slot Machine
class SlotMachine {
    slot1: boolean;
    slot2:boolean;
    slot3:boolean;
    constructor (){
        this.slot1= false;
        this.slot2= false;
        this.slot3= false;
    }
    play(){
        this.slot1 = Math.random() >= 0.5; 
        this.slot2 = Math.random() >= 0.5; 
        this.slot3 = Math.random() >= 0.5; 
        this.check();
    }
    check(){
       const slot= [this.slot1, this.slot2, this.slot3].filter(slot => slot);
       if (slot.length === 0) {
        console.log("Good look next time");
       } else {
        console.log(`Congratulations!!!!. You won ${slot.length} coins`);
       }
    }
}
const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();



