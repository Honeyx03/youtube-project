import "./SearchBar.css";

export default function SearchBar({handleSearchChange}) {

  return (
    <div>
        <div className="input-group mb-3">
            <form onSubmit={handleSearchChange}>
                <label htmlFor="searchVideo">
                <input type="text" id="searchVideo" placeholder="Search..."/>
                </label>
                <input type="submit" value="Submit" className="btn"/>
            </form>
        </div>
    </div>
  );
}
