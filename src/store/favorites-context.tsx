import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup: any) => {},
    removeFavorite: (meetupId: any) => {},
    itemIsFavorites: (meetupId: any) => {}
});

export const FavoritesContextProvider = (props: any) => {
    const [userFavorites, setuserFavorites] = useState([]);

    const addFavoriteHandler = (favoriteMeetup: any) => {
        setuserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }
    const removeFavoriteHandler = (meetupId: any) => {
        setuserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetupId);
        })
    }
    const itemIsFavoriteHandler = (meetupId: any) => {
        return userFavorites.some(() => meetupId === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorites: itemIsFavoriteHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}