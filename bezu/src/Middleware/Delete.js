export var Delete = function (id, type) {
    const action = "delete_" + type;
    fetch('http://13.60.106.234:3001/operator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, id })
    })
}