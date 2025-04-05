import { useState, useEffect } from 'react';
import { usePlayer } from '@contexts/PlayerContext.jsx';
import { useUpgrade } from '@contexts/UpgradeContext.jsx';
import { usePacks } from '@contexts/PackContext.jsx';
import { toast } from 'react-toastify';

const DisplayBar = () => {
  const { player, removeGold, addDice, getUpgrades, addUpgrade } = usePlayer();
  const { upgrades } = useUpgrade();
  const { Packs } = usePacks();
  const [activePage, setActivePage] = useState('upgrades');
  const [disabledPack, setDisabledPack] = useState(null);
  const [upgradesState, setUpgradesState] = useState({});

  const handleBuyUpgrade = (id, amount = 1) => {
    const upgrade = upgrades.find((u) => u.id === id);
    if (!upgrade) {
      console.error(`Upgrade ${id} not found.`);
      return;
    }

    if (upgrade.max <= upgradesState[id]) {
      toast.warn(`❌ ${upgrade.title} is already at maximum level!`, {
        position: 'top-right',
        autoClose: 1000,
        pauseOnHover: false,
        hideProgressBar: true,
      });
      return;
    }

    const currentCount = upgradesState[id] || 0;
    const totalCost = upgrade.cost * (currentCount + 1);

    if (player.gold >= totalCost) {
      removeGold(totalCost);
      addUpgrade(id, amount);
      setUpgradesState((prev) => ({
        ...prev,
        [id]: currentCount + 1,
      }));
      setUpgradesState(getUpgrades());

      toast.success(
        `🆙 ${upgrade.title} upgraded to level ${currentCount + 1}!`,
        {
          position: 'top-right',
          autoClose: 1000,
          pauseOnHover: false,
          hideProgressBar: true,
        }
      );
    } else {
      toast.error(
        `💰 You need ${totalCost - player.gold} more gold for ${upgrade.title}`,
        {
          position: 'top-right',
          autoClose: 1000,
          pauseOnHover: false,
          hideProgressBar: true,
        }
      );
    }
  };

  const handleOpenPack = (packName, packInstance) => {
    if (player.gold >= packInstance.cost) {
      removeGold(packInstance.cost);
      const item = packInstance.chooseItem();
      addDice(item);
      setDisabledPack(packName);

      toast.success(`🎁 Opened ${packName} and got a new ${item} die!`, {
        position: 'top-right',
        autoClose: 1000,
        pauseOnHover: false,
        hideProgressBar: true,
      });

      setTimeout(() => setDisabledPack(null), 250);
    } else {
      toast.error(
        `💰 You need ${
          packInstance.cost - player.gold
        } more gold to open ${packName}`,
        {
          position: 'top-right',
          autoClose: 1000,
          pauseOnHover: false,
          hideProgressBar: true,
        }
      );
    }
  };

  useEffect(() => {
    setUpgradesState(getUpgrades());
  }, [player.upgrades]);

  return (
    <aside className="w-[33vw] h-screen p-5 box-border bg-[#f8f8f8] flex flex-col text-center">
      {/* Gold + Tabs */}
      <div className="w-full flex justify-between items-center mb-5">
        <p className="text-lg font-semibold">Gold: {player.gold.toFixed(0)}</p>
        <div className="flex gap-2">
          <button
            onClick={() => setActivePage('upgrades')}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
          >
            Upgrades
          </button>
          <button
            onClick={() => setActivePage('packs')}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
          >
            Packs
          </button>
        </div>
      </div>

      {activePage === 'upgrades' && (
        <div className="flex flex-col overflow-y-auto max-h-full pr-2">
          {/* Available Upgrades - Vertical List */}
          <div className="space-y-5 mr-5">
            {upgrades.map((upgrade) => {
              const currentCount = upgradesState[upgrade.id] || 0;
              const nextCost = upgrade.cost * (currentCount + 1);
              const isMaxed = currentCount >= upgrade.max;
              const isAffordable = player.gold >= nextCost;
              const isDisabled = isMaxed || !isAffordable;
              const label = isMaxed
                ? 'Max'
                : currentCount > 0
                ? 'Upgrade'
                : 'Buy';

              return (
                <div
                  key={upgrade.id}
                  className={`grid grid-cols-2 grid-rows-2 gap-3 p-5 border rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <h2 className="col-start-1 row-start-1 self-start justify-self-start text-xl font-semibold text-gray-800">
                    {upgrade.title}
                    <p>
                      {currentCount > 0 &&
                        `(Lv. ${currentCount} / Lv. ${upgrade.max})`}
                    </p>
                  </h2>
                  <h4 className="col-start-2 row-start-1 self-start justify-self-end text-md text-gray-700">
                    Cost: {nextCost}
                  </h4>
                  <p className="col-start-1 row-start-2 self-end justify-self-start text-sm text-gray-500">
                    {upgrade.description}
                  </p>
                  <button
                    onClick={() => handleBuyUpgrade(upgrade.id)}
                    className={`
    col-start-2 row-start-2 self-end justify-self-end 
    px-4 py-2 rounded-lg shadow-md transition-all duration-200
    ${
      isDisabled
        ? 'bg-blue-300 cursor-not-allowed'
        : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
    }
    text-white
  `}
                    disabled={isDisabled}
                  >
                    {label}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Packs Section */}
      {activePage === 'packs' && (
        <div className="h-full overflow-y-auto flex flex-col gap-4 p-2 rounded">
          {Object.entries(Packs).map(([packName, packInstance]) => {
            const isAffordable = player.gold >= packInstance.cost;
            const isDisabled = !isAffordable || disabledPack === packName;
            const buttonClass = isDisabled
              ? 'bg-green-300 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 cursor-pointer';

            const label =
              disabledPack === packName ? 'Opened!' : `Open ${packName}`;

            return (
              <div
                key={packName}
                className="grid grid-cols-1 gap-2 p-4 border rounded bg-white shadow"
              >
                <h2 className="text-xl font-bold">{packName}</h2>
                <p className="text-gray-700">Cost: {packInstance.cost} coins</p>
                <button
                  className={`${buttonClass} text-black px-4 py-2 rounded`}
                  onClick={() => handleOpenPack(packName, packInstance)}
                  disabled={isDisabled}
                >
                  {label}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </aside>
  );
};

export default DisplayBar;
