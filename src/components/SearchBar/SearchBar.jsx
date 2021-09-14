import {
  SearchBars,
  SearchForms,
  SearchFormButton,
  SearchFormBtnLabel,
  SearchFormInput,
} from "./SearchBar.styled";

export const SearchBar = ({ onSeacrh }) => {
  return (
    <SearchBars>
      <SearchForms
        onSubmit={(e) => {
          e.preventDefault();
          onSeacrh(e.target.elements.name.value);
        }}
      >
        <SearchFormButton type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="name"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForms>
    </SearchBars>
  );
};

export default SearchBar;
