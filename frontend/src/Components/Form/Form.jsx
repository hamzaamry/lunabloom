import React, { useState} from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Stack , Box , Typography } from '@mui/material';

import '../Styles/Form.css'

const Form = () => {
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState("");
  const [goals, setGoals] = useState("");
  const [resources, setResources] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit !");

    try {
      const formData = {
        domain,
        description,
        products,
        goals,
        resources,
      };

      // Make a POST request to the backend
      await axios.post("http://localhost:5000/api/users/results", formData);
      console.log("Data sent to the backend successfully!")
      navigate("/results");
    } catch (error) {
      // Handle error
      console.error(error); 
      toast.error("Something went wrong.");
    }
  };
  return (
      <Stack 
        mt={10}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="center"
        spacing={{ sm: 2, md: 4 , lg: 8 }} 
      >
        <Box
        
        >
          <Typography  
            style={{
              color:'white',
              fontSize: 48 ,
              fontFamily: 'Argentum Sans' ,
              fontStyle: 'normal' ,
              fontWeight: 800 ,
              lineHeight: '41px' ,
              letterSpacing: '-2.16px' ,
              flexDirection: 'column' ,
              width: '30%', 
              marginBottom: '20px'
            }}
          >
            Tell us about yourself
          </Typography>
          <Typography
             style={{
              color:'white',
              fontSize: 20 ,
              fontFamily: 'Inter' ,
              fontStyle: 'normal' ,
              fontWeight: 300 ,
              lineHeight: '30px' ,
              letterSpacing: '-1.16px' ,
              flexDirection: 'column' ,
              width: '30%', 

            }}
          >
            So we can understand your motives and help you along the way
          </Typography>
        </Box>
        <Box>
    
      <form className="desc-form">
        <label className="desc-label" > Your domain/ business</label>
        <input
          className="desc-input"
          type="text"
          name="domain"
          onChange={(e) => {
            setDomain(e.target.value);
          }}
          value={domain}
          required
        />

        <label className="desc-label" >A brief description of business</label>
        <input
          className="desc-input"
          type="text"
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          required
        />

        <label className="desc-label" >
          Do you have any products to promote ? If so, what are they ?
        </label>
        <input
          className="desc-input"
          type="text"
          name="products"
          onChange={(e) => {
            setProducts(e.target.value);
          }}
          value={products}
          required
        />

        <label className="desc-label" >Your goal ( What are your goals for creating content? )</label>
        <input
          className="desc-input"
          type="text"
          name="goals"
          onChange={(e) => {
            setGoals(e.target.value);
          }}
          value={goals}
          required
        />

        <label className="desc-label" >Your resources ( staff, tools,etc )</label>
        <input
        className="desc-input"
          type="text"
          name="resources"
          onChange={(e) => {
            setResources(e.target.value);
          }}
          value={resources}
          required
        />
        
      

        <div className="button-container">
          <input
            className="desc-btn"
            type="submit"
            value="Submit"
            onClick={submitHandler}
          />
           
        </div>
      </form>

      </Box>
      </Stack>
  );
};

export default Form;
