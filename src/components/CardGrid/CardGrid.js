import React from 'react';
import SingleCard from './SingleCard';
import { useSelector,useDispatch } from "react-redux";

const CardGrid = ({input}) => {
    const blogs=useSelector(state=>state.blogs)
   
    return (
        <div
        className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
    >
      { blogs.filter(each=>each.title.toLowerCase().search(input.toLowerCase())!==-1).map(blog=><SingleCard blog={blog} key={blog.id}/>)}
      
          </div>
    );
};

export default CardGrid;