
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    let color = "#" + Math.floor(Math.random() * 13756).toString(16)
    let textColor = "#" + Math.floor(Math.random() * 4257).toString(16)
    document.body.style.backgroundColor = color
    document.querySelector('.name').innerHTML = color
    // document.querySelector('.name').style.color = textColor

    console.log(color.toString(16));

})