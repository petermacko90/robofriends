import React from 'react';

interface ISearchBoxProps {
	searchValue: string;
	searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchValue, searchChange }: ISearchBoxProps) => {
	return (
		<div className="pa2">
			<input
				aria-label="Search Robots"
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="search robots"
				value={searchValue}
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;
