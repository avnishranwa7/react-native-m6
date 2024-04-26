import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  toggleFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favIds, setFavIds] = useState([]);

  function toggleFavorite(id) {
    setFavIds((prev) => {
      if (prev.includes(id)) return prev.filter((mealId) => mealId !== id);

      return [...prev, id];
    });
  }

  const value = { ids: favIds, toggleFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
