import React, { useState } from 'react';
import './Update.css'; // Import your CSS file
import Updateimg from "../assets/Create.png"
import { supabase } from '../config/supabaseClient';


function Update() {

  const initialFormData = {
    img_url: '',
    min_price: '',
    seller_id: '',
    productName: '',
    description: '',
    product_id:''
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
      console.log("FORM DATA;",formData)
      const { error } = await supabase.from('products').update([
        {
          img: formData.img_url,
          min_price: formData.min_price,
          user_id: formData.seller_id,
          productname: formData.productName,
          desc: formData.description,
        },
      ]).eq('id', formData.product_id)
      .select()
      ; // Use the ID of the product to update

      if (error) {
        throw error;
      }

      console.log('Product updated successfully!');
      // Reset form after successful update
      setFormData({ ...initialFormData });
    } catch (error) {
      console.error('Error updating product:', error);
      setFormError('Error updating the product');
    }
  };



  return (
    <div className="Delete-main">
      <div className="lcontainer">
        <img src={Updateimg} alt="no img" />
      </div>
      <div className="rcontainer">
      <div className="text">
        UPDATE A PRODUCT
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
            name="seller_id"
            value={formData.seller_id}
            onChange={handleChange}
            required
          />
            <div className="underline"></div>
            <label htmlFor="">Seller ID</label>
          </div>
          <div className="input-data">
          <input
            type="text"
            name="product_id"
            value={formData.product_id}
            onChange={handleChange}
            required
          />
            <div className="underline"></div>
            <label htmlFor="">Product ID</label>
          </div>
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
            <label htmlFor="">Description </label>
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

export default Update;
