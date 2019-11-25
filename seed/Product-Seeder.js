const Product = require('../models/product')
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/nodeshopping',{useNewUrlParser:true})

const products =
[ 
new Product({
    imagePath:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw0johC7Es9n84UhZxODTert0OXgZPVRXhYupZGX4anTQeTIjN",
    title:'Witcher',
    description:'Best game in the world',
    price:30
}),
new Product({
    imagePath:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZPrfioLBmVjN_QWfTEpW12F2dVBi5lrpWA-IBiEmu0Wgf9Oin",
    title:'Skyrim',
    description:'My favorite',
    price:30
}),
new Product({
    imagePath:"https://cdn.vox-cdn.com/thumbor/ieH94u9g7cgTWivuEnCO4PE-U70=/0x0:940x529/920x0/filters:focal(0x0:940x529):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19339555/99lifeisstrange.jpg",
    title:'Life is Strange',
    description:'Overrated game',
    price:30
}),
new Product({
    imagePath:"https://cdn.vox-cdn.com/thumbor/Zs6_SkdWUg-N8Hn4hBJ7b0hJTtw=/0x0:940x529/920x0/filters:focal(0x0:940x529):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19339733/95cuphead.jpg",
    title:'Cuphead',
    description:'Childish soulslike game',
    price:30
}),
new Product({
    imagePath:"https://cdn.vox-cdn.com/thumbor/KVL_vfr0qeQFKd6j3FFRSGv6n8w=/0x0:940x529/920x0/filters:focal(0x0:940x529):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19339727/90residentevil7.jpg",
    title:'Resident Evil 7',
    description:'Capcoms return',
    price:30
}),
new Product({
    imagePath:"https://cdn.vox-cdn.com/thumbor/heIHHkAyBbGmRf97D4eJ4yV2Ir8=/0x0:940x529/920x0/filters:focal(0x0:940x529):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19339719/83papersplease.jpg",
    title:'Papers Please',
    description:'You cant enter this country :(',
    price:30
}),
new Product({
    imagePath:"https://cdn.vox-cdn.com/thumbor/klYKTyq9oAu26plIUwf2Et7HQQQ=/0x0:940x529/920x0/filters:focal(0x0:940x529):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19339710/75beatsaber.jpg",
    title:'Beat Saber',
    description:'Best exprience of VR',
    price:30
}),
new Product({
    imagePath:"https://cdn.vox-cdn.com/thumbor/7zWAbw95WjgSUL37kBpbuQdSUuk=/0x0:920x468/920x0/filters:focal(0x0:920x468):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19339707/72masseffect2.jpg",
    title:'Mass Effect 2',
    description:'Best RPG-FPS',
    price:30
})
]

let done=0;
for(let i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++
        if(done==products.length){
            exit()
        }
    })
}

function exit(){
    mongoose.disconnect()
}
