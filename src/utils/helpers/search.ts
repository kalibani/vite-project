export const useSearch = (query: string, options: Array<{title: String, author: String}>) :  Object | String | any => {
	return options.filter((option) => {
		return (
			option.title
				.toLowerCase()
				.indexOf(query.toLowerCase()) != -1
		);
	});
}