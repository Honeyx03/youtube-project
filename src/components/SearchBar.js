import "./SearchBar.css";

export default function SearchBar({handleSearchChange, showMessage}) {

  return (
    <div>
        <div className="search-bar">
            <form onSubmit={handleSearchChange}>
                <label htmlFor="searchVideo">
                <input type="text" id="searchVideo" placeholder="Search..."/>
                </label>
                <input type="submit" value="Submit" className="button1"/>
            </form>
        </div>
        {showMessage && (
        <div>  
          <div className="message">
            <p>No search results yet, please make a search.</p>
          </div>
        </div>
      )}
    </div>
  );
}
