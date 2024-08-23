let h2 = document.querySelector("h2")
h2.innerHTML="Form"
h2.style.fontSize = "30px"

let lists = document.querySelectorAll("li")
lists.forEach((item,index) => {
    if((index +1) % 2 ===0) {
        item.style.background = "azure"
    }else {
        item.style.background = "aquamarine"
    }
})