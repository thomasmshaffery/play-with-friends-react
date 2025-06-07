function Search({ query, setQuery }) {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Friend ID goes here!"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
export default Search;
