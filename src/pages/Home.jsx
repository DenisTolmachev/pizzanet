import { Categories } from '../components/Categories';
import { Sort, sortList } from '../components/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { useContext, useEffect, useRef, useState } from 'react';
import { Pagination } from '../components/Pagination/Pagination';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  initialState,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from '../redux/slices/filterSlice';
import axios from 'axios';
import qs from 'qs';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sort, currentPage } = useSelector(state => state.filter);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = id => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = number => {
    dispatch(setCurrentPage(number));
  };

  const fetchPizzas = async () => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    const res = await axios.get(
      `https://641c6665b556e431a86db242.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    setItems(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort.sortProperty, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      if (Object.values(params).join() === Object.values(initialState).join()) {
        fetchPizzas();
      }

      const sort = sortList.find(
        obj => obj.sortProperty === params.sortProperty
      );

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map(obj => (
    <PizzaBlock
      key={obj.id}
      id={obj.id}
      title={obj.title}
      price={obj.price}
      imageUrl={obj.imageUrl}
      sizes={obj.sizes}
      types={obj.types}
    />
  ));
  const skeleton = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className='content__title'>Всі піци</h2>
      <div className='content__items'>{isLoading ? skeleton : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
