var h=document.createElement('h1')
h.setAttribute("id","title")
h.classList.add("text-center","py-3")
h.innerText="Click Button for Animal Facts"
document.body.append(h)


var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)


var row=document.createElement('div')
row.classList.add('row')
div1.appendChild(row)


fetch("https://zoo-animal-api.herokuapp.com/animals/rand").then((d)=>{
    return(d.json())
}).then((dat)=>{


    var col1=document.createElement('div')
    col1.setAttribute("id","colum")
    col1.classList.add("col-sm-6","col-md-4","col-lg-4","col-xl-4" ,"mx-auto",'rounded')
    row.appendChild(col1)

    var card=document.createElement('div')
    card.classList.add('card','rounded')
    card.setAttribute("id","colum")
    col1.appendChild(card)

    var cardimg=document.createElement('img')
    cardimg.classList.add("card-img-top","img-fluid","rounded",'py-3')
    cardimg.setAttribute("src",`${dat.image_link}`)
    card.append(cardimg)

    var cardtitle=document.createElement('h3')
    cardtitle.classList.add('card-title','text-center')
    cardtitle.innerText=dat.name
    card.append(cardtitle)

    var cardbody=document.createElement('div')
    cardbody.classList.add('card-body')
    cardbody.innerHTML="<b>Animal Type:</b>"+dat.animal_type+"<br><b>Latin Name:</b>"+dat.latin_name+"<br><b>Lifespan:</b>"+dat.lifespan+"<br><b>Habitat:</b>"+dat.habitat+"<br><b>Diet:</b>"+dat.diet+"<br><b>Location:</b>"+dat.geo_range+"<br><b>Weight:</b>"+dat.weight_min+"lbs-"+dat.weight_max+"lbs"
    card.append(cardbody)

    var cardtxt=document.createElement('div')
    cardtxt.classList.add("card-title")
    card.append(cardtxt)

  

    var btn=document.createElement('div')
    btn.classList.add("btn", "btn-primary", "btn-lg", "btn-block",'m-3')
    btn.setAttribute("onclick","refreshPage()")
    btn.innerText="Click to generate a fact"
    card.append(btn)




}).catch((er)=>{
    console.log('er')
})



function refreshPage(){
    window.location.reload();
}