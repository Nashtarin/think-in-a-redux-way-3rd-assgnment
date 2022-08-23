import React, { useState } from 'react';
import search from '../../images/search.svg'
import { useDispatch } from "react-redux";
import { titleSelect } from '../../redux/blogs/actions';
import Header from '../Header/Header';
import CardGrid from '../CardGrid/CardGrid';

const SearchBar = () => {
    const [input,setInput]=useState('')
    const debounce=(fn,delay)=>{
        console.log(fn,delay)
        let timeoutId;
        return function () {
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
              fn();
             
            }, delay);
          };

    }
    function ebounce(e){
        setInput(()=>e.target.value)

    }
   
    const handleInput=(e)=>{
        
            setInput(e.target.value)
     
        
        
        
       
    }


    
    console.log(input)
    return (
        <>
        <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                onChange={handleInput}
               
            />
            <img
                className="inline h-6 cursor-pointer"
                src={search}
                alt="Search"
                // onClick={handlesearch}
            />
        </div>
        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
           
        <Header/>
        <CardGrid input={input}/>
        </section>
        </>
    );
};

export default SearchBar;