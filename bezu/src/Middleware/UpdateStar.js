export var UpdateStar = function (node, user, state) {
    const action = "star"
    fetch('http://13.60.106.234:3001/mid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({action, node, user, state})
    })
}