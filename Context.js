 import {useState,useEffect, createContext} from "react";

 export const FeedContext = createContext();

const Context = ({ children }) => {
	const [feed, setFeed] = useState([]);

	useEffect(() => {
		fetch("http://157.230.11.142:5000/presentbox/00000000?text=Something%20Something%20Something&is_closed=true")
			.then(response => response.json())
			.then(data => setFeed(data))
			.catch(function(error) {
				console.log(
					"There has been a problem with your fetch operation: " + error.message
				);
				// ADD THIS THROW error
				throw error;
			}); 
			console.log(feed);
		

	}, []);
 
return (
	<FeedContext.Provider value={feed}>
		{children}
	</FeedContext.Provider>
);
}

export default Context;