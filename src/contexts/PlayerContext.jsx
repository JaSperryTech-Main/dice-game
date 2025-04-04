import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

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

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(createPlayer());

  const addGold = (amount) => {
    setPlayer((prev) => ({
      ...prev,
      gold: prev.gold + amount,
    }));
  };

  const removeGold = (amount) => {
    setPlayer((prev) => ({
      ...prev,
      gold: prev.gold - amount,
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
        [upgrade]: prev.upgrades[upgrade] - amount,
      },
    }));
  };

  const setUpgrade = (upgrade, amount) => {
    setPlayer((prev) => ({
      ...prev,
      upgrades: {
        ...prev.upgrades,
        [upgrade]: (prev.upgrades[upgrade] = amount),
      },
    }));
  };

  const mergeDice = (diceId) => {
    setPlayer((prev) => {
      const diceCount = prev.dices.filter((dice) => dice === diceId).length;

      if (diceCount < 4) {
        console.log('Not enough dice to merge!');
        return prev;
      }

      const diceTiers = ['Normal', 'Uncommon', 'Rare', 'Epic', 'Legendary'];
      const match = diceId.match(
        /(Normal|Uncommon|Rare|Epic|Legendary)_D(\d+)/
      );
    });
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
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
