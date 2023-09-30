let changeColor = document.getElementById("button").addEventListener('click', () => {
    document.getElementById("canvas").style.backgroundColor =  colorChanger();

})
function colorChanger(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red} ,${green} , ${blue})`;

}