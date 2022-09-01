let homeResult = document.getElementById("home-num")
let guestResult = document.getElementById("guest-num")
let count = 0


function addHome1(){
    count+=1
    homeResult.textContent = count
}
function addHome2(){
    count+=2
    homeResult.textContent = count
}
function addHome3(){
    count+=3
    homeResult.textContent = count
}
function addGuest1(){
    count+=1
    guestResult.textContent = count
}
function addGuest2(){
    count+=2
    guestResult.textContent = count
}
function addGuest3(){
    count+=3
    guestResult.textContent = count
}

// if (homeResult.nodeValue)
console.log(homeResult.value)