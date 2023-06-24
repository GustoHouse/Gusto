import './global.scss';
import Grid from './Components/Grid/Grid';
import Headline from './Components/Headline/Headline';
import ThisIsTheWay from './Components/ThisIsTheWay/ThisIsTheWay';
import Services from './Components/Services/Services';

function Gusto() {
  return (
    <div>
      <Headline />
      <ThisIsTheWay />
      <Services />
      <Grid />
    </div>
  );
}

export default Gusto;