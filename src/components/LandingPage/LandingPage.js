
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import { getAllCategories } from '../../api/category';

import './Lp.css';

const LandingPage = () => {

  const [categories, setCategories] = useState();

  const init = async () => {

    const result = await getAllCategories();
    setCategories(result.data);
    console.log(result.data);

  }

  useEffect(() => {

    init();
  }, [])



  return (
    <>
      <Navbar />
      <div className="home container">
        <div className="row">
          <div className="col-12">
            <h2 className="home-title">Greetings to our Shopping Hub!</h2>
          </div>
          <div className="col-12">
            <div className="category-list">
              <div className="category-item" >
                <Link to="/products" >All Products</Link>
              </div>
              {categories?.map(category => (
                <>
                  {console.log("AM I HERE??", category.id)}
                  <div className="category-item" key={category.id}>
                    <Link to={`/products${category.id ? `?categoryId=${category.id}&name=${category.name}` : ''}`} className="text-white">{category.name}</Link>
                  </div>
                </>
              )
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="category-title ">Select a category to start shopping</div>
          </div>
        </div>
        
      </div>
      
      <div className="text-light fixed-bottom w-100" style={{"background-color": "#ecf0f1"}}>
            <div className="my-auto p-2">
            <h6 className="text-center text-dark my-auto">
            
        © Copyright 2023 Built with ♡ by Lawanu Borthakur
    
            </h6>
            </div>
            
        </div>
    </>
  )

}

export default LandingPage