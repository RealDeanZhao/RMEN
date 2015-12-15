import * as React from 'react';
import * as AllComponments from '../';
import * as RBS from 'react-bootstrap';
import _ from 'lodash';

class GameBoxes extends React.Component {

  render(){
    const {gameBoxes} = this.props;
    return (
      <div>
        <RBS.Panel collapsible defaultExpanded header="12yue3ri">
          {_.map(gameBoxes,  gameBox =>
            <AllComponments.GameBox key={gameBox.id} title={gameBox.title} />
          )}
        </RBS.Panel>
      </div>
    );
  }
}

export default GameBoxes;
