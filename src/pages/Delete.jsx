import React, { useState } from 'react';
import './Delete.css'; // Import your CSS file
import { supabase } from '../config/supabaseClient';

function Delete() {
  const initialFormData = {
    product_id: '',
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

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', formData.product_id)
        .eq('user_id', formData.seller_id);

        const { errorD } = await supabase
        .from('bid')
        .delete()
        .eq('product_id', formData.product_id);

        const { errorE } = await supabase
        .from('transaction')
        .delete()
        .eq('product_id', formData.product_id);

        const { errorD } = await supabase
        .from('bid')
        .delete()
        .eq('product_id', formData.product_id);
        const { errorE } = await supabase
        .from('transaction')
        .delete()
        .eq('product_id', formData.product_id);

      if (error) {
        throw error;
      }

      console.log('Product deleted successfully!');
      alert('Product deleted successfully!');
      // Reset form after successful deletion
      setFormData({ ...initialFormData });
    } catch (error) {
      console.error('Error deleting product:', error);
      setFormError('Error deleting the product');
    }
  };

  return (
    <div className="Delete-main">
      <div className="rcontainer">
        <div className="text">
          DELETE A PRODUCT
        </div>
        <form action="#">
          <div className="form-row">
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
                name="seller_id"
                value={formData.seller_id}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
              <label htmlFor="">Seller ID</label>
            </div>
          </div>
          <div className="form-row submit-btn">
            <div className="input-data">
              <div className="inner"></div>
              <input type="submit" value="submit" className='sub-btn' onClick={handleDelete} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Delete;
