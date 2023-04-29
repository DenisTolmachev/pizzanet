import emptyCartImg from '../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';

export const CartEmpty = () => {
  return (
    <div className='cart cart--empty'>
      <h2>
        Кошик порожній <span>😕</span>
      </h2>
      <p>
        Скоріш за все, ви не замовляли ще піцу.
        <br />
        Для того, щоб замовити піцу, перейди на головну сторінку.
      </p>
      <img src={emptyCartImg} alt='Empty cart' />
      <Link to='/' className='button button--black'>
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
};
