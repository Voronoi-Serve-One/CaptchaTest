


const tapos = new Audio("img/tapos.mp3");





const imageSource ={
    evil1: "img/evil1.jpg",
    evil2: "img/evil2.jpg",
    evil3: "img/evil3.jpg",
    evil4: "img/evil4.jpg",
    good1: "img/good1.jpg",
    good2: "img/good2.jpg",
    good3: "img/good3.jpg",
    good4: "img/good4.jpg",
    good5: "img/good5.jpg"
}
const start = document.querySelector(".subtitle");
const container = document.querySelector(".container");
const passed = document.querySelector(".passed");
const imageKeys = Object.keys(imageSource);
const imageValues = Object.values(imageSource);
const submit = document.querySelector(".submit")
const note = document.querySelector(".note")
const jumsc = document.querySelector(".jumpscare")
const right = ["evil1","evil2","evil3","evil4"];
const answer = [];

const images = document.querySelectorAll(".image");
const gridBox = document.querySelector(".grid-box")
function randomNumber(){
    const random = Math.floor(Math.random()*images.length);
    return random;
}
let indexArr = []
for(let i = 0;i<images.length;i++){
    let randomIndex = randomNumber();
    while(indexArr.includes(randomIndex)){
        randomIndex = randomNumber();
    }
    indexArr.push(randomIndex)
    console.log(indexArr)
}
for(let i = 0; i<indexArr.length;i++){
    images[i].src = imageValues[indexArr[i]];
}

let evil = [];
let good = [];
let counter = 0
gridBox.addEventListener("click",(e)=>{
    const target = e.target;
    console.log(target)
    if(target.classList.contains("image")){
        for(let i = 0; i<imageValues.length;i++){
            if(target.getAttribute("src") == imageValues[i]){
                target.parentNode.classList.toggle("selected")
                if(imageKeys[i].includes("evil")){
                    if(!evil.includes(imageKeys[i])){
                        evil.push(imageKeys[i]);
                        counter++
                        
                    }
                    else{
                        evil.splice(evil.indexOf(imageKeys[i]),1)
                        counter--
                    }
                    console.log(evil)
                }
                else if(imageKeys[i].includes("good")){
                    if(!good.includes(imageKeys[i])){
                        good.push(imageKeys[i]);
                        counter++
                    }
                    else{
                        good.splice(good.indexOf(imageKeys[i]),1)
                        counter--
                    }
                    console.log(good)
                    
                }
            }
        }
    }

})
const wrong = new Audio('img/sound.mp3');
const correct = new Audio('img/correct.mp3')
const bone =new Audio('img/badbone.mp3');
const crack = new Audio('img/crack.mp3');
const love = new Audio('img/love.mp3')
function scare(){
    rand = Math.floor(Math.random()*Object.keys(jumpscares).length);
    console.log(rand);
    bone.volume = 1.0;
    if (rand == 7) {
        wrong.pause();
        wrong.currentTime = 0;
        bone.pause();
        bone.currentTime = 0;
        bone.play();

    }
    else if(rand == 3){
        wrong.pause();
        wrong.currentTime = 0;
        love.pause();
        love.currentTime = 0;
        love.play();
    }
    else if(rand == 4){
        wrong.pause();
        wrong.currentTime = 0;
        crack.pause();
        crack.currentTime = 0;
        crack.play();
    }
    else {
        bone.pause();
        bone.currentTime = 0;
        wrong.pause();
        wrong.currentTime = 0;
        wrong.play();  
    }
    jumsc.src = Object.values(jumpscares)[rand];
    
    jumsc.classList.remove("sur");
    void submit.offsetWidth;
    jumsc.classList.add("sur");
    
}
function ri(){
    correct.cloneNode(true).play()
    jumsc.src = "img/skeldev.jpg"
    jumsc.classList.remove("sur");
    void submit.offsetWidth;
    jumsc.classList.add("sur");
    note.classList.remove('right')
}
submit.addEventListener("click",()=>{
    submit.disabled = true;
    setTimeout(()=>{
        submit.disabled = false;
    },2000)
    if(counter<4){
        note.innerText = "Please Select All Matching"
        scare()    
    }
    else if(good.length>0){
        note.innerText = "Try Again"
        scare()
    }
    else{
        passed.classList.add("complete");
        passed.addEventListener("click",()=>{
        passed.classList.remove("complete");
        })
        
        note.innerText = "";
        ri()
    }
})


const correctscare ={
    corr: "img/detec.jpg",
}
const jumpscares = {
    jump1: "img/jumpscare.png",
    jump2: "img/jawbone.jpg",
    jump3: "img/femur.jpg",
    jump4: "img/var1.jpg",
    jump5: "img/var2.jpg",
    jump6: "img/speed.jpg",
    jump7: "img/cinema.jpg",
    jump8: "img/sigma.jpg"
}


start.addEventListener("click",()=>{
    tapos.play();
    container.style.display = "block"
    start.style.display = "none";
})