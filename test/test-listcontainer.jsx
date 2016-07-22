var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var List = require('../js/list');

var Listcontainer = require('../js/listcontainer');
var renderer = TestUtils.createRenderer();

describe('Listcontainer component', function() {
  it('Renders HTML', function() {
    renderer.render(<Listcontainer title="listContainer"/>);
    var result = renderer.getRenderOutput();
    console.log(result, "<<< result");
    result.props.title.should.equal();
  });
});
