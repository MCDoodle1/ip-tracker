import arrowRight from '../images/icon-arrow.svg';


export default function Search({ handleChange, handleSubmit, loaded, isValid, inputValue }) {    

    return (
        loaded && 
        <form className='search' onSubmit={handleSubmit}>
            <label className='search__bar'>
                <input
                type="text"
                onChange={handleChange} 
                placeholder={'Search for any IP address or domain'}
                />
            </label>
            <button className='search__button' type='submit'>
                <img src={arrowRight} alt="Black button with white arrow to start search" />
            </button>
            {inputValue && !isValid && <p>Enter a valid IP Address!</p>}
        </form>
    )
    
};

/* IP Addresses for testing: 

185.51.134.229
89.149.139.222
141.98.11.105
13.107.21.239
171.79.149.67
176.123.5.89
81.204.200.124
192.212.174.101
208.67.222.222


*/
  