var React = require('react');

var Card = React.createClass({
  render: function() {
    return (
      <div className="card" key={this.props.id}>
        <div className="card-description">{this.props.description}</div>
        <button onClick={() => this.props.onDelClick(this.props.id)}>-</button>
      </div>
    );
  },
});

module.exports = Card;
