const btn = document.querySelector("button")
const diceImgContainer = document.querySelector(".dice-img")
const audio = document.querySelector(".audio")
const h1=document.querySelector("h1")
const diceImg = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]


btn.addEventListener("click", () => {
    audio.play()
    h1.innerText="Demo text"
  

    diceImgContainer.classList.add("active")

    const random1 = Math.floor(Math.random() * 6)
    const random2 = Math.floor(Math.random() * 6)
    
    
    btn.setAttribute("disabled","disabled")
    
    setTimeout(() => {
        h1.innerText=`${random1+1}:${random2+1}`
        btn.removeAttribute("disabled")

        diceImgContainer.classList.remove("active")
        diceImgContainer.children[0].setAttribute("src", `img/${diceImg[random1]}`)
        diceImgContainer.children[1].setAttribute("src", `img/${diceImg[random2]}`)
        
    }, 2000);
})


