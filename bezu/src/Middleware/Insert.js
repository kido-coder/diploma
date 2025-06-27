export var Insert = function (action, array) {
    fetch('http://13.60.106.234:3001/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({action, array})
    })
}