let homeResult = document.getElementById("home-num")
let guestResult = document.getElementById("guest-num")
let count = 0
let count2 = 0


function addHome1(){
    count+=1
    homeResult.textContent = count
    compareValue()
    // console.log(count)
}
function addHome2(){
    count+=2
    homeResult.textContent = count
    compareValue()
    // console.log(count)
}
function addHome3(){
    count+=3
    homeResult.textContent = count
    compareValue()
}
function addGuest1(){
    count2+=1
    guestResult.textContent = count2
    // console.log(count2)
    compareValue()
}
function addGuest2(){
    count2+=2
    guestResult.textContent = count2
    // console.log(count)
    compareValue()
}
function addGuest3(){
    count2+=3
    guestResult.textContent = count2
    // console.log(count)
    compareValue()
}

function reset(){
    count = 0
    count2 = 0
    homeResult.textContent = count
    guestResult.textContent = count2
    compareValue()
}

function compareValue(){
    if(count>count2){
        homeResult.style.backgroundColor = "#10B981" //green bg
        guestResult.style.backgroundColor = "#FECDD3" //pink bg
    } else if(count2>count){
        homeResult.style.backgroundColor = "#FECDD3"  //pink bg
        guestResult.style.backgroundColor = "#10B981" //red bg
    } else if (count === count){
        homeResult.style.backgroundColor = "#142229"  //pink bg
        guestResult.style.backgroundColor = "#142229" //red bg
    }
}


// console.log(count)
// if (homeResult.nodeValue)
// console.log(homeResult.value)