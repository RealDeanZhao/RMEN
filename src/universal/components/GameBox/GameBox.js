import * as React from 'react';
import * as RBS from 'react-bootstrap';
import { connect } from 'react-redux';

export default class GameBox extends React.Component {
  render(){
    const {title, text, key} = this.props;
    return (
      <div>
        <RBS.Panel collapsible defaultExpanded header={title}>
            <RBS.ListGroup  componentClass="ul" className='col-md-4'>
              <RBS.ListGroupItem>1</RBS.ListGroupItem>
              <RBS.ListGroupItem>2</RBS.ListGroupItem>
              <RBS.ListGroupItem>3</RBS.ListGroupItem>
            </RBS.ListGroup>
            <RBS.ListGroup  componentClass="ul" className='col-md-4'>
              <RBS.ListGroupItem>1</RBS.ListGroupItem>
              <RBS.ListGroupItem>2</RBS.ListGroupItem>
              <RBS.ListGroupItem>3</RBS.ListGroupItem>
            </RBS.ListGroup>
            <RBS.ListGroup  componentClass="ul" className='col-md-4'>
              <RBS.ListGroupItem>1</RBS.ListGroupItem>
              <RBS.ListGroupItem>2</RBS.ListGroupItem>
              <RBS.ListGroupItem>3</RBS.ListGroupItem>
            </RBS.ListGroup>
        </RBS.Panel>
      </div>
    )
  }
}
