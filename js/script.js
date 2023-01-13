/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/




let numberContainer = document.getElementById('numbers'); 
let numberInput = document.getElementById('choose'); 
numberInput.style.display = "none";
let numberArray = Array.from({ length: 5}, () => Math.floor(Math.random() * (100 - 10) + 10));

for(let i = 0; i < 5 ; i++){
    let number = document.createElement('span');
    number.innerText = numberArray[i];
    numberContainer.append(number);
}

setTimeout(numberChoose, 3000);

function numberChoose() {

    numberContainer.style.display = "none";
    numberInput.style.display = "block";
    let submit = document.getElementById('submit');
    let arrayUser = [];
    let arrayWin = [];
    let i = 0;
    let p = 0;
    submit.addEventListener('click', control);

        function control(){

            let numberUser = document.getElementById('numberUser').value;
            if(i < 5){
                arrayUser[i] = numberUser; 
                console.log(arrayUser);
            }

            if (i >= 4){

                console.log("entrato");
                for (let index = 0; index < 5; index++){

                    for(let cont = 0; cont < 5; cont++){
                        
                        if(arrayUser[index] == numberArray[cont]){
                            arrayWin[p] = arrayUser[index];
                            p++
                        }

                    }

                }

                numberContainer.style.display = "block";
                numberInput.style.display = "none";

                numberContainer.innerHTML = "Hai indovinato " + arrayWin.length + " numeri: " + arrayWin;
                
            }

            i++
        }

}
