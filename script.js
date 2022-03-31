
//.............................................async function..........................................

// function printletter(letter){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(letter);

//         },1000)
//     })
// }
// function printaplhaets(){
//     printletter('A').then((result)=>{
//         console.log(result);
//         console.log('before b get resolve')
//         return printletter('b');
//     })
//     .then((result)=>{
//         console.log(result);
//         console.log('before c get resolve')
//         return printletter('c');
    
//     })
//     .then((result)=>{
//         console.log(result);
        
//     })
// }

// printaplhaets();

//aync await= "synctatic sugar" (simpler syntax to write promises )=make your code very readable.

//................similarities of promises............

function printletter(letter){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log(letter);
            resolve(letter);

        },1000)
    })
}
async function printaplhaets(){
    await printletter('A');
    console.log('before b get resolve');
    await printletter('b');
    console.log('before c get resolve');
    await printletter('c');
} 
printaplhaets();

//await= if the promises does not resolve that time it wait to excute is  called await.



//.........................prototype=> they are inheriting of parent object .........................

//it is pridefine property 
//it end with  null
//first it will check in object if thier is no property then it go to thier proto proprty and thier it will check 
// let animal={
//     eats:true,
//     moves:true,
//     walk:function(){
//         console.log('i walk');
//     }
// }
// let rabit={
//     jumps:true,
    
// }
// rabit.__proto__=animal //rabit inherits animal object

// console.log(rabit.eats);
// rabit.walk();
// console.log(rabit.hasOwnProperty('moves'));//false
//when we use object .keys dont give me inheritance proprty.


//for in loops ---------------------> it give both inheritance and own property
for(let key in rabit){
    if(rabit.hasOwnProperty("jumps")){

    }
}


//........................................Constructor...............................................

//they are just like regular fucntion . there 2 conventions:
//1) they are  named with a capital letter
//2) theu should be called only with the "new" keyword.
//the construcor is make the object 


//constructor function return an object
//it automaticaly acces 
//they run like implicit(run automatically inbuild property)

//example==>
// function User(name){
// this.firstname= name
// this.isadmin= true
// }

// let result= new User('rahul')
// console.log(result)


let animal ={
    eats:true,
    moves:true,
    walk:function(){
        console.log('I walk');
    }
}

function Rabit(name){
    this.petname = name
    this.
}

