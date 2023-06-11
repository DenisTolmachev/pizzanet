import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://641c6665b556e431a86db242.mockapi.io/items/' + id
        );
        setPizza(data);
      } catch (error) {
        alert('Помилка при отриманні піци');
        navigate('/');
      }
    }
    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return 'Завантаження...';
  }

  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt='' />
      <h2> {pizza.title}</h2>

      <h4>{pizza.price} ₴</h4>
    </div>
  );
};
