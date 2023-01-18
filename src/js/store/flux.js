const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			locations: [],
			episodes: [],
			favorites: []
		},
		actions: {
			getCharacters: async () => {
				const response = await fetch("https://rickandmortyapi.com/api/character");
				const data = await response.json();
				setStore({characters: data.results})
			},
			getLocations: async () => {
				const response = await fetch("https://rickandmortyapi.com/api/location");
				const data = await response.json();
				setStore({locations: data.results})
			},
			getEpisodes: async () => {
				const response = await fetch("https://rickandmortyapi.com/api/episode");
				const data = await response.json();
				setStore({episodes: data.results})
			},
			setFavorites: (name) => {
				const store = getStore();
				if( !store.favorites.includes(name)){
					setStore({favorites: [...store.favorites, name]});
				}else{
					setStore({favorites: store.favorites.filter((favName)=> favName != name)});
				}
			}
		}
	};
};

export default getState;
