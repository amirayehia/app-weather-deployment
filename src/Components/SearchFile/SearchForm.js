import './SearchForm.module.css'
const Search = (props) => {
    const onChangeHandler = (event) => {
        if (event.nativeEvent.data && (event.target.value.length >=  3 || event.target.value.length == 1)) {
            console.log(event.target.value)
            props.searchByCity(event.target.value)
        }

    }

    return (
        <form onSubmit={(event) => { event.preventDefault() }}>
            <input placeholder='search' onChange={onChangeHandler} />
        </form>


    )
}
export default Search;