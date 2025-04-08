import { useContext, useState, useEffect } from 'react';
import { createContext } from 'react';
import { UPGRADE_MAX_LIMITS } from './UpgradeContext';

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

// Helper function to clamp upgrade values to their max
const clampUpgrade = (upgrade, value) => {
  const max = UPGRADE_MAX_LIMITS[upgrade];
  return max !== undefined ? Math.min(value, max) : value;
};

// Helper function to clamp all upgrades in a player object
const clampAllUpgrades = (player) => {
  if (!player?.upgrades) return player;

  for (const upgrade in player.upgrades) {
    player.upgrades[upgrade] = clampUpgrade(upgrade, player.upgrades[upgrade]);
  }

  return player;
};

// Helper function to load from localStorage
const loadPlayer = () => {
  try {
    const savedData = localStorage.getItem('playerData');
    const player = savedData ? JSON.parse(savedData) : null;
    return clampAllUpgrades(player);
  } catch (error) {
    console.error('Failed to parse player data:', error);
    return null;
  }
};

// Helper function to save to localStorage
const savePlayer = (player) => {
  try {
    const clampedPlayer = clampAllUpgrades({ ...player }); // Optional: clone before clamping
    localStorage.setItem('playerData', JSON.stringify(clampedPlayer));
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

  const formatGold = (amount) => {
    if (amount < 1000) return amount.toString();

    const suffixes = [
      '',
      'K',
      'M',
      'B',
      'T',
      'Qa',
      'Qi',
      'Sx',
      'Sp',
      'Oc',
      'No',
      'Dc',
    ];
    const tier = Math.floor(Math.log10(amount) / 3);
    const suffix = suffixes[tier] || '';
    const scale = Math.pow(10, tier * 3);
    const scaled = amount / scale;

    return scaled.toFixed(2).replace(/\.00$/, '') + suffix;
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
        formatGold,
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
