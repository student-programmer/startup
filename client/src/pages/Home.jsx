import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import Category from '../components/Category/Category';
import { fetchCategory } from '../http/userAPI';
import { Context } from '../index';

const Home = observer(() => {
  const { category } = useContext(Context);
  useEffect(() => {
    fetchCategory().then((data) => category.setCategory(data));
}, []);
  return (
    <div>
      <Category/>
    </div>
  )
})

export default Home