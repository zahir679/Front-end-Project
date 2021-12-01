import {useState, useEffect} from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import './Components.css'



const labels = {
  1: 'Dreadful',
  2: 'Poor',
  3: 'Okay',
  4: 'Very Good',
  5: 'Incredible',
};
const ReviewForm = ({restaurants}) =>{

  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
 

    return(
    <form >
    <div className="reviewPageForm"> 
    <h2>Thanks for visiting, please leave a review for the selected Restaurant using the slider and comment field below!</h2>
    <select>
      {restaurants.map(restaurant =>(
        <option  value={restaurant.id} label={restaurant.restaurantName}> </option>)
      )}
    </select>
    <div className="slider">

     {/* ============================================== Rating mui stuff */}

    
    <Rating
          name="hover-feedback"
          value={value}
          precision={1}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          icon={<FastfoodIcon  />}
          emptyIcon={<FastfoodIcon style={{ opacity: 0.55 }} fontSize="inherit"/>}
          
    />

        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}


        {/* ====================================================== */}
        </div>

    <p>Leave a Comment:</p><input type="text"/>
    <input type="submit" value="submit" />
    </div>
    </form>
    )
}

export default ReviewForm;
