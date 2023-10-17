

const Searchbar = () => {
    
    return (
        <div>
            <form>
                <input 
                    className='border border-black px-2.5 py-1.5 w-80' 
                    type="text"
                />
                <input 
                    type="submit" 
                    value='Search'
                    className="px-2.5 py-1.5 bg-gray-300"
                />
            </form>
        </div>
    );
};

export default Searchbar;