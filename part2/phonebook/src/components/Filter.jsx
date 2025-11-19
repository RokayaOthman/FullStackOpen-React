const FilterSearch = ({newSearch, handleSearchChange}) => {
    // this will make a search field to input a substring that would be looked for to outputted
    return (
       <div>
        filter shown with <input value={newSearch} type='search' onChange={handleSearchChange}/>
       </div>
    );
};

export default FilterSearch;

