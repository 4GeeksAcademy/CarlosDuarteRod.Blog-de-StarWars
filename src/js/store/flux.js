const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorite: (title) => {
				setStore({favorites: [...getStore().favorites, title]})
			},
			removeFavorite: (id) => {
				setStore({favorites: getStore().favorites.filter((item, i) => {
					return i != id;
					})})
			},
			getUsers: async () => {
				const url = "https://www.swapi.tech/api/people"
				const request = {
					method: "GET"
				}

				if (localStorage.getItem("usersLocal") === null) {

					const response = await fetch(url,request);
					if (response.ok) {
						const data = await response.json();	
						localStorage.setItem('usersLocal', JSON.stringify(data))}
					else { "Error" }
				}
			},
			getPlanets: async () => {
				const url = "https://www.swapi.tech/api/planets"
				const request = {
					method: "GET"
				}

				if (localStorage.getItem("planetsLocal") === null) {

					const response = await fetch(url,request);
					if (response.ok) {
						const data = await response.json();	
						localStorage.setItem('planetsLocal', JSON.stringify(data))}
					else { "Error" }
				}
			}
		}
	};
};

export default getState;
