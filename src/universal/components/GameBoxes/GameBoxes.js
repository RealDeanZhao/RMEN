import * as React from 'react';
import * as AllComponments from '../';
import * as RBS from 'react-bootstrap';

class GameBoxes extends React.Component {

  render(){
    const {gameBoxes} = this.props;
    return (
      <div>
        <RBS.Panel collapsible defaultExpanded header="12yue3ri">
          {gameBoxes.map((gameBox) =>(<div>
            <AllComponments.GameBox key={gameBox.id} title={gameBox.title} />
          </div>))}
        </RBS.Panel>
      </div>
    );
  }
}

export default GameBoxes;
