function getInfo() {
    let inputValue = document.getElementById('stopId').value;
    let url = `https://judgetests.firebaseio.com/businfo/${inputValue}.json`;

    fetch(url)
        .then((info) => info.json())
        .then((data) => {
            document.getElementById('stopName').textContent = data.name;
            document.getElementById('buses').innerHTML = '';

            let buses = Object.entries(data.buses);

            for (let [busNum, busTime] of buses) {
                let listItem = document.createElement('li');
                listItem.textContent = `Bus ${busNum} arrives in ${busTime} minutes`;
                document.getElementById('buses').appendChild(listItem);
            }
            document.getElementById('stopId').value = '';
        })
        .catch(error => {
            document.getElementById('stopName').textContent = 'Error';
        })
}