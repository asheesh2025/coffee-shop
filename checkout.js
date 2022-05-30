function alertData()
{
    event.preventDefault()
    setTimeout(function alert1(){
        alert("Your order is accepted")
    },1000)
    setTimeout(function alert1(){
        alert("Your order is being Prepared ")
    },3000)
    setTimeout(function alert1(){
        alert("Your order is being packed ")
    },8000)
    setTimeout(function alert1(){
        alert("Your order is out for delivery ")
    },10000)
    setTimeout(function alert1(){
        alert("Order delivered")
    },12000)
}