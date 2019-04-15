import React, {
  Component
} from 'react';

import Button from '@material/react-button'
import '@material/react-button/dist/button.css'

import {
  Cell,
  Grid,
  Row
} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

class App extends Component {
  render() {
    return (
      <div>
<div>
<TopAppBar
        title='Miami, FL'
        
        navigationIcon={<MaterialIcon
          icon='menu'
          onClick={() => console.log('click')}
        />}
        actionItems={[<MaterialIcon key='item' icon='bookmark' />]}
      />
      
</div>
<Grid>
        <Row>
          <Cell columns={4}><MaterialIcon icon='menu' /></Cell>
          <Cell columns={4}><Button>
        Click Me!
      </Button></Cell>
          <Cell columns={4}>StarCraft</Cell>
        </Row>
        <Row>
          <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}>Tennis</Cell>
          <Cell desktopColumns={4} order={3} phoneColumns={4} tabletColumns={4}>Cricket</Cell>
          <Cell desktopColumns={4} order={1} phoneColumns={4} tabletColumns={4}>StarCraft</Cell>
        </Row>
        <Row>
          <Cell columns={4}>
            <Row>
              <Cell desktopColumns={8} phoneColumns={2} tabletColumns={5}>Tennis</Cell>
              <Cell desktopColumns={4} phoneColumns={2} tabletColumns={3}>Cricket</Cell>
            </Row>
          </Cell>
          <Cell columns={4}> - </Cell>
          <Cell columns={4}> - </Cell>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;