let input=document.querySelector(".inputnumber");

let inputValue;
const form=document.querySelector(".form");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inputValue=input.value;
    }
})

function aadhaarNumber(number){
    numbers.forEach(number=>{
    console.log(number);
    if(number==inputValue){
        return number;
    }
    else{
        console.log('not matched')
    }
    console.log(matchedNumber);
})
let numbers=[];

db.collection("Aadhaarnumbers").get().then((querySnapshot) => {
    querySnapshot.docs.forEach((doc)=>{
        let aadhaarNumbers=doc.data().Aadhaarnumber;
        numbers.push(aadhaarNumbers);
        console.log(numbers);
        })
});    


// for(id=0;id<=aadhaarNumbers.length;id++){
//     aadhaarNumbers.forEach((aadhaarNumber)=>{
//         numbers[id].push(aadhaarNumber)
//     })
// }