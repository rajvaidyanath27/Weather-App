import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

function SearchBox() {
    let[city, setCity] = useState(" ");

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        evt.preventDefault
    }
    return(
        <div className='SearchBox'>
         <h3>Search for your city weather</h3>
         <form>
         <TextField id="city" label="City Name" variant="outlined" value={city} />
         <br></br>
         <br></br>
         <Button variant="contained" type="submit">Search</Button>

         </form>
        </div>
    )
}

export default SearchBox;