import { useContext, useState, useEffect } from 'react';
import { createContext } from 'react';

const PlayerContext = createContext();

const createPlayer = (initialState = {}) => ({
  ...{
    dices: ['Normal_D1'],
    totalRolls: 0,
    gold: 0,
    upgrades: {},
  },
  ...initialState,
});

// Helper function to load from localStorage
const loadPlayer = () => {
  try {
    const savedData = localStorage.getItem('playerData');
    return savedData ? JSON.parse(savedData) : null;
  } catch (error) {
    console.error('Failed to parse player data:', error);
    return null;
  }
};

// Helper function to save to localStorage
const savePlayer = (player) => {
  try {
    localStorage.setItem('playerData', JSON.stringify(player));
  } catch (error) {
    console.error('Failed to save player data:', error);
  }
};

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(() => {
    const savedPlayer = loadPlayer();
    return savedPlayer ? createPlayer(savedPlayer) : createPlayer();
  });

  // Save to localStorage whenever player changes
  useEffect(() => {
    savePlayer(player);
  }, [player]);

  // All your existing player methods remain the same
  const addGold = (amount) => {
    setPlayer((prev) => ({
      ...prev,
      gold: prev.gold + amount,
    }));
  };

  const removeGold = (amount) => {
    setPlayer((prev) => ({
      ...prev,
      gold: Math.max(0, prev.gold - amount), // Prevent negative gold
    }));
  };

  const addDice = (id) => {
    setPlayer((prev) => ({
      ...prev,
      dices: [...prev.dices, id],
    }));
  };

  const removeDice = (id) => {
    setPlayer((prev) => ({
      ...prev,
      dices: prev.dices.filter((dice) => dice !== id),
    }));
  };

  const getUpgrades = () => player.upgrades;

  const getUpgrade = (upgrade) => player.upgrades[upgrade];

  const addUpgrade = (upgrade, amount) => {
    setPlayer((prev) => ({
      ...prev,
      upgrades: {
        ...prev.upgrades,
        [upgrade]: (prev.upgrades[upgrade] || 0) + amount,
      },
    }));
  };

  const removeUpgrade = (upgrade, amount) => {
    setPlayer((prev) => ({
      ...prev,
      upgrades: {
        ...prev.upgrades,
        [upgrade]: Math.max(0, (prev.upgrades[upgrade] || 0) - amount),
      },
    }));
  };

  const setUpgrade = (upgrade, amount) => {
    setPlayer((prev) => ({
      ...prev,
      upgrades: {
        ...prev.upgrades,
        [upgrade]: amount,
      },
    }));
  };

  // Add a reset function
  const resetPlayer = () => {
    if (window.confirm('Are you sure you want to reset all progress?')) {
      setPlayer(createPlayer());
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        player,
        addGold,
        removeGold,
        addDice,
        removeDice,
        getUpgrades,
        getUpgrade,
        addUpgrade,
        removeUpgrade,
        setUpgrade,
        resetPlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
