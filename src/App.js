import './App.css';
import { Cards } from './componens/Cards/Cards';

const cards = [
  {
    cardImg: <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg" class="card-img-top" alt="girl-in-black-glases"></img>,
    cardTitle: "Девушка в темных очках",
    cardText: "Картина неизвестного художника 'Девущка в темных очках'",
    cardLinkText: "Написать художнику"
  },
  {
    cardTitle: "Макет визитной карточки",
    cardText: "Один из макетов визитной карточки, который за небольшую стоимость вы можете заказать у нашего сервиса",
    cardLinkText: "Связаться с дизайнером"
  }]

function App() {
  return (
    <div className="App">
      <Cards cards={cards}></Cards>
    </div>
  );
}

export default App;
