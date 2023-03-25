export const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    'Всі',
    'М`ясні',
    'Рибні',
    'Вегетаріанські',
    'Гриль',
    'Гострі',
  ];

  return (
    <div className='categories'>
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
