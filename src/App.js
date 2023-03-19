import './scss/app.scss';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';

export const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Всі піци</h2>
          <div className='content__items'>
            <PizzaBlock title='Неаполітана' price={140} />
            <PizzaBlock title='Чотири сири' price={155} />
            <PizzaBlock title='Молінара' price={145} />
            <PizzaBlock title='Поло' price={150} />
            <PizzaBlock title='Вегетаріано' price={130} />
            <PizzaBlock title='Палермо' price={140} />
            <PizzaBlock title='Цезар' price={155} />
            <PizzaBlock title='Д`явола' price={140} />
            <PizzaBlock title='Пеппероні' price={140} />
            <PizzaBlock title='Гавайська' price={145} />
            <PizzaBlock title='Карбонара' price={150} />
          </div>
        </div>
      </div>
    </div>
  );
};
