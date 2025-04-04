import { createContext, useContext, useState } from 'react';

class Pack {
  constructor(table = [], cost) {
    this._table = table;
    this._cost = cost;
  }

  get cost() {
    return this._cost;
  }

  addItem(item, weight = 1, quantity = Number.POSITIVE_INFINITY) {
    weight = isNaN(Number(weight)) || weight <= 0 ? 1 : Number(weight);
    quantity = isNaN(Number(quantity))
      ? Number.POSITIVE_INFINITY
      : Math.max(0, Number(quantity));
    this._table.push({ item, weight, quantity });
  }

  chooseItem() {
    if (this._table.length === 0) return null;

    let totalWeight = this._table.reduce(
      (sum, entry) => sum + (entry.quantity > 0 ? entry.weight : 0),
      0
    );
    if (totalWeight === 0) return null;

    let randomNumber = Math.random() * totalWeight;
    let accumulatedWeight = 0;

    for (const entry of this._table) {
      if (entry.quantity <= 0) continue;

      accumulatedWeight += entry.weight;
      if (randomNumber < accumulatedWeight) {
        entry.quantity--;
        return entry.item;
      }
    }

    return null;
  }

  clearItems() {
    this._table = [];
  }
}

// Initialize packs:
const initialPacks = () => {
  // Normal Pack (Common - Cheap with basic odds)
  const normalPack = new Pack([], 5); // Base price: 5 coins
  normalPack.addItem('Normal_D1', 600); // Common
  normalPack.addItem('Normal_D2', 250);
  normalPack.addItem('Normal_D3', 100);
  normalPack.addItem('Normal_D4', 40);
  normalPack.addItem('Normal_D5', 8);
  normalPack.addItem('Normal_D6', 2); // Rarest (0.2% chance)

  // Uncommon Pack (Slightly better - Mid-price)
  const uncommonPack = new Pack([], 50); // Base price: 50 coins
  uncommonPack.addItem('Uncommon_D1', 500);
  uncommonPack.addItem('Uncommon_D2', 300);
  uncommonPack.addItem('Uncommon_D3', 150);
  uncommonPack.addItem('Uncommon_D4', 60);
  uncommonPack.addItem('Uncommon_D5', 15);
  uncommonPack.addItem('Uncommon_D6', 5); // Rare (0.5% chance)

  // Rare Pack (Better rewards - Higher price)
  const rarePack = new Pack([], 200); // Base price: 200 coins
  rarePack.addItem('Rare_D1', 400); // Common
  rarePack.addItem('Rare_D2', 250);
  rarePack.addItem('Rare_D3', 200);
  rarePack.addItem('Rare_D4', 100);
  rarePack.addItem('Rare_D5', 30);
  rarePack.addItem('Rare_D6', 10); // Rare (1% chance)

  // Epic Pack (High-tier - Expensive)
  const epicPack = new Pack([], 750); // Base price: 750 coins
  epicPack.addItem('Epic_D1', 300);
  epicPack.addItem('Epic_D2', 200);
  epicPack.addItem('Epic_D3', 150);
  epicPack.addItem('Epic_D4', 80);
  epicPack.addItem('Epic_D5', 40);
  epicPack.addItem('Epic_D6', 15); // Very rare (2% chance)

  // Legendary Pack (Best rewards - Very expensive)
  const legendaryPack = new Pack([], 2500); // Base price: 2500 coins
  legendaryPack.addItem('Legendary_D1', 200);
  legendaryPack.addItem('Legendary_D2', 150);
  legendaryPack.addItem('Legendary_D3', 120);
  legendaryPack.addItem('Legendary_D4', 70);
  legendaryPack.addItem('Legendary_D5', 35);
  legendaryPack.addItem('Legendary_D6', 10); // Ultra-rare (2% chance)

  return {
    'Normal Pack': normalPack,
    'Uncommon Pack': uncommonPack,
    'Rare Pack': rarePack,
    'Epic Pack': epicPack,
    'Legendary Pack': legendaryPack,
  };
};

// Create context:
const PackContext = createContext();

export const PackProvider = ({ children }) => {
  const [Packs] = useState(initialPacks());

  return (
    <PackContext.Provider value={{ Packs }}>{children}</PackContext.Provider>
  );
};

export const usePacks = () => useContext(PackContext);
