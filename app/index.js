var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
    render: function() {
        return (
            <img src={this.props.imageURL} style={{height: 100, width: 100}}/>
        )
    }
});

var ProfileLink = React.createClass({
    render: function() {
        return (
            <div>
                <a href={"https://www.github.com/" + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
});

var ProfileName = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
});

var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic imageUrl={this.props.imageUrl}/>
                <ProfileName name={this.props.name}/>
                <ProfileLink username={this.props.username}/>
            </div>
        )
    }
});

ReactDOM.render(
    <Avatar name="Ximena Lasserre" imageUrl="http://images.gr-assets.com/users/1311714506p6/5378745.jpg" username="missx"/>,
    document.getElementById('app')
);