var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/card');
var renderer = TestUtils.createRenderer();

describe('Card Component', function() {
  it('Should contain the correct className',  function() {
    renderer.render(<Card />);
    var result = renderer.getRenderOutput();
    result.props.className.should.equal('card');
  });
  it('Should contain the correct children', function() {
    renderer.render(<Card description="card1" id="1"/>);
    var result = renderer.getRenderOutput();
    result.props.children.length.should.equal(2);

    var div = result.props.children[0];
    div.type.should.equal('div');
    div.props.className.should.equal('card-description');
    div.props.children.should.equal('card1');
    var button = result.props.children[1];
    button.type.should.equal('button');
  });


});
