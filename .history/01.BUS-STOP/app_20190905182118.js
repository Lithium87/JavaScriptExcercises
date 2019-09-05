function getInfo() {
    let inputValue = document.getElementById('stopId').value;
    let url = `https://judgetests.firebaseio.com/businfo/${inputValue}.json`;
    console.log(url);
}