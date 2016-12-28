var React = require('react');

var puke = function(obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}
function ConfirmBattle(props) {
    return props.isLoading === true
        ? <p> Loading! </p>
        : <p> Confirm Battle: {puke(props)}</p>
}

module.exports = ConfirmBattle;