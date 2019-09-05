function getInfo() {
    let inputValue = document.getElementById('stopId').value;
    let url = `https://judgetests.firebaseio.com/businfo/${inputValue}.json`;

    fetch(url)
        .then((info) => info.json())
        .then((data) => {
            document.getElementById('stopName').textContent = data.name;
        })
}