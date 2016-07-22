var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var List = require('../js/list');
var renderer = TestUtils.createRenderer();

describe('List component', function() {
  it('Should contain the correct className', function() {
    renderer.render(<List />);
    var result = renderer.getRenderOutput();
    result.props.className.should.equal('list');
    result.type.should.equal('div');
  });
  it('Should contain the correct children', function() {
    renderer.render(<List title="listTitle" value="titleValue" cards="card1" />);
    var result = renderer.getRenderOutput();
    result.props.children.length.should.equal(3);
    var title = result.props.children[0];
    title.props.className.should.equal('list-title');
    title.props.children.should.equal("listTitle")
    title.type.should.equal('div');
    var cardHolder = result.props.children[1];
    cardHolder.props.className.should.equal('card-holder');
    cardHolder.props.children.should.equal('card1');
    var form = result.props.children[2];
    form.type.should.equal('form');
    form.props.children.length.should.equal(2);
    console.log(form.props.children[0].props, "---children.props");
    form.props.children[0].props.value.should.equal('titleValue');
    form.props.children[0].type.should.equal('input');
    form.props.children[1].type.should.equal('button');
    });


})
