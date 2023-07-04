let allBoldItems

getBold_items()
function getBold_items() {
    allBoldItems = document.getElementsByTagName("strong")
}

function highlight() {
    getBold_items();
    for (const boldItem of allBoldItems) {
        boldItem.style.color = "blue"
    }
}
highlight()

function returnNormal() {
    getBold_items()
    for (const item of allBoldItems) {
        item.style.color = "black"
    }
}
returnNormal()

const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight)
paragraph.addEventListener("mouseout", returnNormal)

