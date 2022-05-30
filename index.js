// Add the coffee to local storage with key "coffee"

const url ="https://masai-mock-api.herokuapp.com/coffee/menu"

 async function getData()
{
    try{
    const url ="https://masai-mock-api.herokuapp.com/coffee/menu"
    let res= await fetch(url)
    let data=await res.json()
    appendData(data.menu.data)
    //console.log(data.menu.data)
    }
    catch(error)
    {
        console.log(error)
    }
}
getData()

function appendData(getdata)
{
    getdata.map(function(el,index){
        let image=document.createElement("img")
        image.src=el.image
        image.style.width="80%"
        image.style.height="50%"
        let price=document.createElement("p")
        price.innerText=el.price
        let title=document.createElement("h5")
        title.innerText=el.title
        let addbtn=document.createElement("button")
        addbtn.innerText="add to bucket"
        addbtn.addEventListener("click",function()
        {
            added (el,index)
        })
        addbtn.id="add_to_bucket"
        let div=document.createElement("div")
        div.style.textAlign="center"
        div.style.border="2px solid blue"
        div.style.height="300px"
        div.style.width="300px"
        div.style.margin="auto"
        div.style.padding="25px"
        div.append(image,title,price,addbtn)
        document.querySelector("#menu").append(div)
    })
}
let arr=JSON.parse(localStorage.getItem("coffee")) || []
function added(el,index)
{
    let obj={
        image1:el.image,
        price1: el.price,
        title1:el.title,

    }
    arr.push(obj)
    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload()
    
}

document.querySelector("#coffee_count").innerText=arr.length