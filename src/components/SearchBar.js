
export default function SearchBar({handleSearchChange}) {

  return (
    <div>
        <div className="input-group mb-3">
            <form onSubmit={handleSearchChange}>
                <label htmlFor="searchVideo">
                <input type="text" id="searchVideo"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </div>
  );
}
