import css from "./SearchForm.module.css"

const SearchForm = ({ onSearchMovie }) => {
  return (
    <form className={css.form} onSubmit={(event) => { event.preventDefault(); onSearchMovie(event.target.search.value); event.target.reset() }}>
      <input className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="search"
      />
      <button className={css.searchBtn} type="submit">Search</button>
    </form>
  )
}

export default SearchForm