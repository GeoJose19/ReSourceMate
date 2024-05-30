import React, { useState } from 'react';
import './Create.css'; // Import your CSS file
import createimg from "../assets/create.png"
import { supabase } from '../config/supabaseClient';
import { useNavigate } from 'react-router-dom';

function Create() {

  const navigate=useNavigate()

  const initialFormData = {
    img_url: '',
    min_price: '',
    seller_id: '',
    productName: '',
    description: '',
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [formError, setFormError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('email', user.email);
  
        if (error) {
          throw error;
        }
  
        if (data && data.length > 0) {
          const userID = data[0].id;
  
          const { data: insertedData, error: insertError } = await supabase
            .from('products')
            .insert([
              {
                img: formData.img_url,
                min_price: formData.min_price,
                user_id: userID,
                productname: formData.productName,
                desc: formData.description,
              },
            ]);
            console.log("GOing to seller")
            navigate('/seller')
          setFormData({ ...initialFormData });
          
          
  
          if (insertError) {
            throw insertError;
          }
  
          if (insertedData) {
            console.log('Data inserted:', insertedData);
            // Clear form after successful submission
           
            
          }
        }
      }
    } catch (error) {
      console.error('Error inserting data:', error);
      setFormError('Error submitting the form');
    }
    
  };
  



  return (
    <div className="create-main">
      <div className="lcontainer">
        <img src={createimg} alt="no img" />
      </div>
      <div className="rcontainer">
      <div className="text">
        SELL A PRODUCT
      </div>
      <form action="#">
        <div className="form-row">
          <div className="input-data">
          <input
            type="text"
            name="img_url"
            value={formData.img_url}
            onChange={handleChange}
            required
          />
            <div className="underline"></div>
            <label htmlFor="">Image(URL)</label>
          </div>
          <div className="input-data">
          <input
            type="text"
            name="min_price"
            value={formData.min_price}
            onChange={handleChange}
            required
          />
            <div className="underline"></div>
            <label htmlFor="">Minimum Price</label>
          </div>
        </div>
        <div className="form-row">
          
          <div className="input-data">
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
            <div className="underline"></div>
            <label htmlFor="">Product Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
          <textarea
            rows="4" // Set number of rows
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
          ></textarea>
            <br />
            <div className="underline"></div>
            <label htmlFor="">Description(Quantity mandatory*) </label>
            <br />
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="submit" className='sub-btn' onClick={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
    
  );
}

export default Create;
