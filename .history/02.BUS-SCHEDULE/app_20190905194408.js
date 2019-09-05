function solve() {
    let baseUrl = `https://judgetests.firebaseio.com/schedule/`;
    let currentStopId = 'depot';
    let currentStop = '';

    function depart() {
        let url = baseUrl + currentStopId + '.json';
        fetch(url)
            .then(request => request.json())
            .then((data) => loadStop(data))
    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    function loadStop(data) {
        console.log(data);
    }

    return {
        depart,
        arrive
    };
}

let result = solve();