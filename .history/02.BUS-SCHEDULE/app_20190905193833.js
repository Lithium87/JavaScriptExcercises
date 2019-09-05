function solve() {
    let baseUrl = `https://judgetests.firebaseio.com/schedule/`;
    let currentStopId = 'depot';
    let currentStop = '';

    function depart() {
        let url = baseUrl + currentStopId + '.json';
        fetch(url)
            .then(data => console.log(data.json()));
    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();