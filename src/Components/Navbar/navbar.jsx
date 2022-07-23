import "./navbar.css";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [offerTitle, setOfferTitle] = useState(true);
  const [value, setValue] = React.useState(null);

  const filter = createFilterOptions();
  const bag = useSelector((store) => store.bag);
  const cartProducts=useSelector((store)=>store.cartProducts)
  useEffect(() => {
    const changeTitle = setInterval(() => {
      setOfferTitle((prev) => {
        setOfferTitle(!prev);
      });
    }, 1000);
    return () => clearInterval(changeTitle);
  }, []);

  const topSearches = [
    { title: "Cosmetics" },
    { title: "Face Masks" },
    { title: "Naturals" },
    { title: "Lipstick" },
    { title: "Hand Sanitizers" },
  ];

  return (
    <div id='navbar'>
      <div className='offer_banner'>
        <div className='offer_title'>
          {offerTitle === true
            ? "BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals"
            : ""}
            
        </div>
        <div className='offer_banner_tabs'>
          <div className='br'>
            <a href=''>
              <div>
                <SmartphoneIcon />
              </div>
              <div className='banner_links'>Get App</div>
            </a>
          </div>
          <div className='br'>
            <a href=''>
              <div>
                <PlaceOutlinedIcon />
              </div>
              <div className='banner_links'>Store & Events</div>
            </a>
          </div>
          <div className='br'>
            <a href=''>
              <div>
                <CardGiftcardIcon />
              </div>
              <div className='banner_links'>Gift Card</div>
            </a>
          </div>
          <div className='help'>
            <a href=''>
              <div>
                <HelpOutlineOutlinedIcon />
              </div>
              <div className='banner_links'>Help</div>
            </a>
          </div>
        </div>
      </div>
      <div id='searchBar'>
        <div className='searchbar'>
          <div className='lsb'>
            <div>
   <img src="https://dypdvfcjkqkg2.cloudfront.net/large/2531992-8633.png"
   alt="image" style={{width:"180px", height:"65px"}} />
            </div>
            <div className='get_by'>
              <div>
                <p>Categories</p>
              </div>
              <div>
                <p>Brands</p>
              </div>
              <div>
                <p>Fashion</p>
              </div>
              <div>
                <p>Beauty Advice</p>
              </div>
              <div>
                <p>Networks</p>
              </div>
            </div>
          </div>
          <div className='rsb'>
            <div className='search_input '>
              {" "}
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  if (typeof newValue === "string") {
                    setValue({
                      title: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                      title: newValue.inputValue,
                    });
                  } else {
                    setValue(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some(
                    (option) => inputValue === option.title
                  );
                  if (inputValue !== "" && !isExisting) {
                    filtered.push({
                      inputValue,
                      title: `Add "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id='free-solo-with-text-demo'
                options={topSearches}
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === "string") {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.title;
                }}
                renderOption={(props, option) => (
                  <li {...props}>{option.title}</li>
                )}
                sx={{ width: 250 }}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} label='Search on Glamified' size='small' />
                )}
              />
            </div>
            <div className='account_gifts'>
              <Link to={"/signin"}>
                <div
                  className='account' style={{textDecoration:"none" , color:"black"}}>
                  <div>
                    <AccountCircleOutlinedIcon />
                  </div>
                  <div style={{textDecoration:"none" , color:"black"}}>Account</div>
                </div>
              </Link>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <g fill='none' fill-rule='evenodd'>
                    <path fill='#FFF' fill-opacity='0' d='M0 0h24v24H0z'></path>
                    <path
                      fill='#fc2779'
                      fill-rule='nonzero'
                      d='M6.783 2.837c1.286-1.015 3.155-.871 4.21.306.548.509.959 1.228 1.271 2.114.45-.892.983-1.591 1.633-2.041l.137-.096a3.192 3.192 0 014.196.626c1.088 1.302.967 3.227-.25 4.36-.128.127-.27.248-.424.361h2.362c.95.043 1.727.807 1.772 1.815l-.003 1.703c-.08.993-.927 1.747-1.887 1.71h-.074v6.039a1.723 1.723 0 01-1.49 1.634l-.147.013H6.539a1.72 1.72 0 01-1.649-1.796v-5.89c-.985.025-1.82-.733-1.89-1.785v-1.66c.017-.494.231-.96.595-1.295a1.816 1.816 0 011.295-.489h2.755c-.546-.316-.961-.674-1.252-1.069a3.134 3.134 0 01.233-4.427zm11.064 10.868H6.78v5.786h11.067v-5.786zm-12.958-3.35l-.002 1.451 14.912-.001.001-1.449-14.911-.001zM16.78 4.957A1.303 1.303 0 0015 4.75l-.146.11c-.392.327-.78.927-1.123 1.721-.111.258-.214.527-.308.802l-.13.403.26-.02c1.523-.132 2.497-.475 3.026-.938l.089-.083a1.302 1.302 0 00.112-1.788zm-7.229-.585a1.243 1.243 0 00-1.661.003c-.511.46-.552 1.247-.036 1.826l.081.102c.438.504 1.317.957 2.758 1.28l.219.046-.056-.32a11.227 11.227 0 00-.125-.575l-.11-.417c-.243-.834-.56-1.46-.973-1.85z'
                    ></path>
                  </g>
                </svg>
              </div>
              <div>
                <div
                  style={{
                    margin: "0px 0px -15px 10px",
                    paddingLeft: "6px",
                    border: "1px solid #fc2779 ",
                    textAlign: "centre",
                    backgroundColor: "#fc2779",
                    color: "white",
                    width: "12px",
                    height: "20px",
                    borderRadius: "50%",
                  }}
                >
                  {cartProducts.length}
                </div>
                <Link to={"/checkout"}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5 7.2H16.2V6.9C16.3 4.5 14.4 2.5 12 2.5C9.6 2.6 7.8 4.5 7.8 6.9V7.2H3.5C2.9 7.2 2.5 7.6 2.5 8.2V16.4C2.5 19.2 4.7 21.4 7.5 21.4H16.5C19.3 21.4 21.5 19.2 21.5 16.4V8.2C21.5 7.7 21.1 7.2 20.5 7.2ZM9.3 6.9C9.3 5.4 10.5 4.1 12 4C13.5 4.1 14.7 5.4 14.7 6.9V7.2H9.3V6.9ZM20 16.5C20 18.4 18.4 20 16.5 20H7.5C5.6 20 4 18.4 4 16.5V8.7H7.8V10.7C7.6 10.9 7.5 11.2 7.5 11.4C7.5 12 8 12.4 8.5 12.4C9 12.4 9.5 11.9 9.5 11.4C9.5 11.1 9.4 10.9 9.2 10.7V8.7H14.6V10.6C14.4 10.8 14.3 11.1 14.3 11.4C14.3 12 14.7 12.5 15.3 12.5C15.9 12.5 16.4 12.1 16.4 11.5C16.4 11.2 16.3 11 16.1 10.8V8.8H20V16.5Z'
                      fill='black'
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
