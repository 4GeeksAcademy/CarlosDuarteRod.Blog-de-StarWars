const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
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
