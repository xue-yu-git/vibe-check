import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
	const [query, setQuery] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (query.trim()) {
			onSearch(query);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="e.g., 'a cozy game like Stardew Valley'"
			/>
			<button type='submit'>Find</button>
		</form>
	);
};

export default SearchBar;
