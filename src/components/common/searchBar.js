const SearchBar = ({ value, onChange }) => {
  return (
    <span style={{ marginRight: 5 }}>
      <span>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          onChange={(e) => onChange(e.currentTarget.value)}
          value={value}
          type="text"
          placeholder="Search for Employee"
        />
      </span>
    </span>
  );
};

export default SearchBar;
