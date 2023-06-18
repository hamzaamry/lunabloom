import React, { useState} from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

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
    <div>
      <form>
        <label>Your domain/ business</label>
        <input
          type="text"
          name="domain"
          onChange={(e) => {
            setDomain(e.target.value);
          }}
          value={domain}
          required
        />

        <label>A brief description of business</label>
        <input
          type="text"
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          required
        />

        <label>
          Do you have any products to promote ? If so, what are they ?
        </label>
        <input
          type="text"
          name="products"
          onChange={(e) => {
            setProducts(e.target.value);
          }}
          value={products}
          required
        />

        <label>Your goal ( What are your goals for creating content? )</label>
        <input
          type="text"
          name="goals"
          onChange={(e) => {
            setGoals(e.target.value);
          }}
          value={goals}
          required
        />

        <label>Your resources ( staff, tools,etc )</label>
        <input
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
            type="submit"
            className="submit-btn"
            value="Submit"
            onClick={submitHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
