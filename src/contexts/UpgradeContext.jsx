import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const UpgradeContext = createContext();

export const UPGRADE_MAX_LIMITS = {
  rollSpeed: 10,
  autoRoll: 50,
};

const createUpgrade = (initialState = []) => [
  ...[
    {
      id: 'rollSpeed',
      title: 'Roll Speed',
      cost: 1,
      description: 'Desceases Roll Speed',
      max: UPGRADE_MAX_LIMITS.rollSpeed,
    },
    {
      id: 'autoRoll',
      title: 'Auto Roll',
      cost: 1,
      description: 'Auto Roll',
      max: UPGRADE_MAX_LIMITS.autoRoll,
    },
    {
      id: 'doubleRoll',
      title: 'Double Roll',
      cost: 8,
      description: 'Rolls all dice twice and picks the better result',
      max: 0,
    },
  ],
  ...initialState,
];

export const UpgradeProvider = ({ children }) => {
  const [upgrades] = useState(createUpgrade());

  return (
    <UpgradeContext.Provider value={{ upgrades }}>
      {children}
    </UpgradeContext.Provider>
  );
};

export const useUpgrade = () => useContext(UpgradeContext);
