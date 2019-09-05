function getInfo() {
    let inputValue = document.getElementById('stopID').value;
    let url = `https://judgetests.firebaseio.com/businfo/${inputValue}.json`;
    console.log(url);
}