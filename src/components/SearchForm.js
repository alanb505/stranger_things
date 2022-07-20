const SearchForm = (props) => {
  const onChange = (event) => {
    const value = event.target.value
    props.setSearchTerm(value)
  } 
   return <div>
        <input onChange = {onChange} type = "search" name = "search" placeholder="search"></input>
    </div>
}

export default SearchForm;