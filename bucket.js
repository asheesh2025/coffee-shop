// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucketData=JSON.parse(localStorage.getItem("coffee")) 
let amount=[]
bucketData.map(function(el,index){
    let image=document.createElement("img")
    image.src=el.image1
    image.style.width="80%"
    image.style.height="50%"
    let title=document.createElement("h5")
    title.innerText=el.title1
    let price=document.createElement("p")
    price.innerText=el.price1
    amount.push(el.price1)
    let rbtn=document.createElement("button")
    rbtn.innerText="Remove"
    rbtn.id="remove_coffee"
    rbtn.addEventListener("click",function(){
    remove1(el,index)
    })
    let div=document.createElement("div")
    div.append(image,title,price,rbtn)
    div.style.textAlign="center"
    div.style.border="2px solid blue"
    div.style.height="300px"
    div.style.width="300px"
    div.style.margin="auto"
    div.style.padding="25px"
    document.querySelector("#bucket").append(div)
})
function remove1(el,index)
{
    bucketData.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(bucketData))
    window.location.reload()
}

let sum=0
for(let i=0; i<amount.length; i++)
{
    sum=sum+amount[i]
}
document.querySelector("#total_amount").innerText=sum