import './global.scss';
import Grid from './Components/Grid/Grid';
import Header from './Components/Header/Header';
import Headline from './Components/Headline/Headline';
import ThisIsTheWay from './Components/ThisIsTheWay/ThisIsTheWay';
import Services from './Components/Services/Services';
import Design from './Components/Design/Design';
import Pricing from './Components/Pricing/Pricing';
import Questions from './Components/Questions/Questions';
import Talk from './Components/Talk/Talk';

function Gusto() {
  return (
    <div>
      <Header />
      <Headline />
      <ThisIsTheWay />
      <Services />
      <Design />
      <Pricing />
      <Questions />
      <Talk />
      <Grid />
    </div>
  );
}

export default Gusto;