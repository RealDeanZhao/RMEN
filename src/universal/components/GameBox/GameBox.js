import * as React from 'react';
import * as RBS from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';

export default class GameBox extends React.Component {
  render(){
    const {key} = this.props;
    let title = generateGameBoxTitle('a', 'b', ['c', 'd']);
    return (
      <div>
        <RBS.Panel collapsible defaultExpanded header={title}>

        </RBS.Panel>
      </div>
    )
    // <RBS.ListGroup  componentClass="ul" className='col-md-4'>
    //   <RBS.ListGroupItem>123</RBS.ListGroupItem>
    //   <RBS.ListGroupItem>24</RBS.ListGroupItem>
    //   <RBS.ListGroupItem>3</RBS.ListGroupItem>
    // </RBS.ListGroup>
    // <RBS.ListGroup  componentClass="ul" className='col-md-4'>
    //   <RBS.ListGroupItem>1</RBS.ListGroupItem>
    //   <RBS.ListGroupItem>2</RBS.ListGroupItem>
    //   <RBS.ListGroupItem>3</RBS.ListGroupItem>
    // </RBS.ListGroup>
    // <RBS.ListGroup  componentClass="ul" className='col-md-4'>
    //   <RBS.ListGroupItem>1</RBS.ListGroupItem>
    //   <RBS.ListGroupItem>2</RBS.ListGroupItem>
    //   <RBS.ListGroupItem>3</RBS.ListGroupItem>
    // </RBS.ListGroup>
  }
}

const generateGameBoxTitle = (time, league, teams) => {
  let title = time + ' ' + league + ' ';
  _.forEach(teams, function(team, key){
     if (key !== teams.length) {
       title += team + ' vs ';
     }
  });
  return title;
 };
