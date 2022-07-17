import React from 'react';
import './_Posts.scss';
import PostsList from '../PostsList/PostsList';
import PropTypes from 'prop-types';

const Posts = ({postsTitle}) => {
  const postsListPreview = [
    {
      id: 1,
      title: '15 полезных однострочных выражений JavaScript',
      description: 'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners',
    },
    {
      id: 2,
      title: 'Полиморфизм простыми словами',
      description: 'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё',
    },
    {
      id: 3,
      title: 'Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)',
      description: 'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron)',
    },
    {
      id: 4,
      title: '8 практичных хитростей веб-разработчика применить немедленно!',
      description: 'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately',
    },
    {
      id: 5,
      title: 'Насколько JavaScript сильный?',
      description: 'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?',
    },
    {
      id: 6,
      title: 'Изучите CSS-переменные за 5 минут',
      description: 'Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes',
    },
    {
      id: 7,
      title: 'Создание MEVN-приложения (Часть 1/2)',
      description: 'Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)',
    },
    {
      id: 8,
      title: 'Реактивность Vue.js',
      description: 'Реактивность фреймворка Vue.js и использование метода Vue.set',
    },
    {
      id: 9,
      title: 'Микроптимизации производительности и JavaScript',
      description: 'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…',
    },
    {
      id: 10,
      title: 'Девшахта-подкаст',
      description: '#108: Производительность кода — это важнейший критерий качества?',
    },
    {
      id: 11,
      title: 'Одна из самых красивых идей в информатике: Y-Combinator',
      description: 'Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”',
    },
    {
      id: 12,
      title: 'Начало работы с Node.js',
      description: 'Node Hero: Глава 1',
    },
  ];

  return (
    <section className="posts">
      <div className="container">
        <h1>{postsTitle}</h1>

        <PostsList postsListPreview={postsListPreview}/>
      </div>
    </section>
  )
}

Posts.propTypes = {
  postsTitle: PropTypes.string.isRequired,
};

export default Posts;
