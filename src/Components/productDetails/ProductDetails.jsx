import { useSelector, useDispatch } from "react-redux";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { bag, addProduct } from "../../Redux/action"
import Navbar from "../Navbar/navbar";
import { Footer } from "../Footer/footer";

export const ProductDetails = () => {
  
  const [discount, setDiscount] = useState("");
  const [reviews, setReviews] = useState("");
  const [ratings, setRatings] = useState("");
  
  const details = useSelector((store) => store.productDetails);
  const bag1 = useSelector((store) => store.cartProducts)
  
  const dispatch = useDispatch();
  const dis = Math.round(((+details.mrp - +details.price) / +details.mrp) * 100);
  const rev = Math.floor(Math.random() * 100000);
  const rat = Math.floor(Math.random() * 1000000);
  
  var date = new Date();
  date.setDate(date.getDate() + 10);
  useEffect(() => {
    setDiscount(dis);
    setReviews(rev);
    setRatings(rat);
  }, []);
  const addToBag = () => {
    dispatch(addProduct(details))
    alert("Item added Successfully")
  }
  return (
    <div id="main" style={{marginTop:"-20px"}}>
      <Navbar></Navbar>
      <div className="flex container1">
        <div id="imageDiv">
          <div id="mainImg">
            <img src={details.image} alt="" id="mainImage" />
          </div>
        </div>
        <div id="right">
          <div id="details">
            <div id="name">{details.name}</div>
            <div>
              <span>
                {details.rating >= 4 ? (
                  <span>
                   </span>
                ) : details.rating >= 3 ? (
                  <span>
                   
                  </span>
                ) : details.rating >= 2 ? (
                  <span>
                   </span>
                ) : (
                  <span>
                   </span>
                )}
                <span>{details.rating}/5 </span>
              </span>
              <span> {ratings} ratings </span> & <span>{reviews} reviews</span>{" "}
              <span>Q&As</span>
            </div>
            <div>
              <span>
                MRP:
                <span style={{ textDecoration: "line-through" }}>
                  ₹{details.mrp}
                </span>
              </span>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                ₹{details.price}
              </span>{" "}
              <span>{discount}% Off</span>
            </div>
            <div>inclusive of all taxes</div>
            <div className="flex pinDiv">
              <div id="AddToBag">
                <button onClick={addToBag}>Add to Bag</button>
              </div>
             </div>
          </div>
          <div id="genuine">
            <img src="https://i.imgur.com/QwzVWFt.png" alt="" />
            <img src="https://i.imgur.com/GlgXkzr.png" alt="" />
            <img src="https://i.imgur.com/Zhy0dBc.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
