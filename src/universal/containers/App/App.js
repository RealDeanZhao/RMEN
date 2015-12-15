import * as React from 'react';
import { connect } from 'react-redux';
import * as AllComponments from '../../components';
import * as RBS from 'react-bootstrap';

class App extends React.Component {

  render(){
    return (
      <RBS.Grid>
        <RBS.Row>
          <RBS.Col xs={6} md={2}></RBS.Col>
          <RBS.Col xs={6} md={8}>
            <AllComponments.GameBoxes gameBoxes = {[{id: 1, title: "a"}, {id: 2, title: "b"}]} />
          </RBS.Col>
          <RBS.Col xs={6} md={2}></RBS.Col>
        </RBS.Row>
      </RBS.Grid>
    );
  };
}

export default connect()(App);
