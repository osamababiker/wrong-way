import * as PIXI from 'pixi.js' 
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import SKY from './assets/sky.png';
import CAR from './assets/cars/car_center.png';
import ROAD from './assets/road.png';
import SIDEROADlEFT from './assets/sideroad_left.png';
import SIDEROADRIGHT from './assets/sideroad_right.png';
import MOUNTAINlEFT from './assets/mountain_left.png';
import MOUNTAINRIGHT from './assets/mountain_right.png';
import './App.css';

function App() {

  const app = new PIXI.Application();
  document.body.appendChild(app.view);
  // create a new Sprite from an image path
  const mountain_left = PIXI.Sprite.from(MOUNTAINlEFT);

  app.stage.addChild(mountain_left);
  app.ticker.add((delta) => {
     mountain_left.position.y += 0.1 * delta;
  });


  return (
    <Container maxWidth="sm">
      <Box
        component="img"
        sx={{
          position: 'absolute',
          width: '100%',
          top: '0',
          left: '0'}} alt="road" src={SKY}/>

      <Box
        component="img"
        sx={{
          position: 'absolute',
          width: '200px',
          bottom: '0',
          margin: "25px 15px 25px 150px",
          zIndex: "999"}} alt="car"src={CAR}/>

        <Box component="img"
          sx={{
            position: 'absolute',
            width: '100%',
            bottom: '0',
            left: "0",}} alt="road" src={ROAD}/>

        <Box  component="img"
          sx={{
            position: 'absolute',
            width: "250px",
            bottom: "0",
            left: "0",
            marginBottom: "80px",
            marginLeft: "0px"}} alt="side road left" src={SIDEROADlEFT}/>

        <Box  component="img"
          sx={{
            position: 'absolute',
            width: "200px",
            bottom: "0",
            left: "0",
            marginBottom: "200px",
            marginLeft: "250px"}} alt="mountin left" src={MOUNTAINlEFT}/>

        <Box component="img"
          sx={{
            position: 'absolute',
            width: "250px",
            bottom: "0",
            right: "0",
            marginBottom: "150px",
            marginRight: "250px"}} alt="side road left" src={SIDEROADRIGHT}/>

        <Box component="img"
          sx={{
            position: 'absolute',
            width: "200px",
            bottom: "0",
            right: "0",
            marginBottom: "200px",
            marginRight: "350px"}} alt="mountin left" src={MOUNTAINRIGHT}/>
    </Container>
  );
}

export default App;






