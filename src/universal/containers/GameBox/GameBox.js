import * as React from 'react';
import * as RBS from 'react-bootstrap';
import { connect } from 'react-redux';

class GameBox extends React.Component {
  render(){
    const {title, text} = this.props;
    return (
      <div>
        <RBS.Panel collapsible defaultExpanded header="Panel heading">
          Some default panel content here.
          <RBS.ListGroup fill>
            <RBS.ListGroupItem>Item 1</RBS.ListGroupItem>
            <RBS.ListGroupItem>Item 2</RBS.ListGroupItem>
            <RBS.ListGroupItem>&hellip;</RBS.ListGroupItem>
          </RBS.ListGroup>
          Some more panel content here.
      </RBS.Panel>
    </div>
    )
  }
}

export default GameBox;
