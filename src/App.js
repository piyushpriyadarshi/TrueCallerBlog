import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Section from './components/Section/Category';
import Post from './components/Post/Post';
import Posts from './components/Post/Posts';
import axios from 'axios';
import Carousel from './components/Carousel/Carousel';
import Loading from './components/Section/Loading';

import { getAllPosts, getAllCategories } from './Services/ApiServices';
const App = () => {
  const [stateObj, setStateObj] = useState(() => {
    return [
      {
        featured_image: '',
        content: '',
        title: '',
        categories: {
          BusinessHacks: { name: '' },
          Tech: { name: '' },
        },
      },
    ];
  });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(() => {
    return 1;
  });

  const [categoryObj, setCategoryObj] = useState({});
  useEffect(() => {
    async function fetchCategory() {
      try {
        const categories = await getAllCategories();
        setCategoryObj(categories.data.categories);
      } catch (error) {}
    }
    async function fectPosts() {
      const postsData = await getAllPosts();
      try {
        setStateObj(postsData.data.posts);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategory();
    fectPosts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [loading, setLoading] = useState(false);

  function handleCategoryChange(category) {
    setSelectedCategory(category.name);
  }
  function getNumberOfPages() {
    return stateObj.length / 5;
  }
  function generatePaginationButtons() {
    const num = getNumberOfPages();
    let arr = [];
    for (let index = 0; index < num; index++) {
      arr[index] = index + 1;
    }
    let element = (
      <ul class="pagination pagination-lg">
        {arr.map((elem) => {
          if (elem === currentPage) {
            return (
              <li class="page-item active">
                <button
                  class="page-link"
                  onClick={() => handlePageChange(elem)}
                >
                  {elem}
                </button>
              </li>
            );
          }
          return (
            <li class="page-item">
              <button class="page-link" onClick={() => handlePageChange(elem)}>
                {elem}
              </button>
            </li>
          );
        })}
      </ul>
    );
    return element;
  }
  const startIndex = (currentPage - 1) * 5;
  const lastIndex = startIndex + 5;
  const arr = stateObj.slice(startIndex, lastIndex);
  if (loading) {
    return (
      <>
        <Carousel></Carousel>
        <div class="container-fluid" style={{ border: '2px solid yellow' }}>
          <div class="row">
            <div class="col-sm-12 col-md-3">
              <div class="sticky-top">
                <Section
                  categories={categoryObj}
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                ></Section>
              </div>
            </div>
            <div class="col-md-6" style={{ border: '2px solid red' }}>
              <h3>
                Showing all {stateObj.length} Posts in {selectedCategory}
              </h3>
              {arr.map((post) => {
                return (
                  <Post
                    headerImageUrl={post.featured_image}
                    content={post.content}
                    title={post.title}
                    categories={post.categories}
                    id={post.ID}
                    author={post.author.name}
                    modifiedTime={post.modified}
                  ></Post>
                );
              })}
              {generatePaginationButtons()}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Loading></Loading>;
  }
};

export default App;
