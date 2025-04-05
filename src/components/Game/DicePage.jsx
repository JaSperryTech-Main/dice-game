import { usePlayer } from '@contexts/PlayerContext';
import { useDice } from '@contexts/DiceContext.jsx';
import Roll from 'roll';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

const roll = new Roll();

const DicePage = () => {
  const { player, addGold } = usePlayer();
  const { dice } = useDice();
  const [isRolling, setIsRolling] = useState(false);
  const diceRefs = useRef([]);

  // Reset refs when dice change
  useEffect(() => {
    diceRefs.current = player.dices.map((_, i) => diceRefs.current[i] || null);
  }, [player.dices]);

  const onRoll = async () => {
    if (isRolling) return;
    setIsRolling(true);

    const currentDices = [...player.dices];
    const currentRollSpeed = player.upgrades.rollSpeed || 0;

    // Generate results
    const randomResults = currentDices.map((diceType) => {
      const diceConfig = dice[diceType] || { sides: 1, multiplier: 1 };
      let result = 1;

      try {
        result = roll.roll(`1d${diceConfig.sides}`).result;
      } catch (err) {
        console.error(`Error rolling dice ${diceType}:`, err);
      }

      return {
        diceType,
        result,
        finalResult: result * diceConfig.multiplier,
        sides: diceConfig.sides,
      };
    });

    const totalGold = randomResults.reduce(
      (sum, { finalResult }) => sum + finalResult,
      0
    );

    // Animate dice rolls
    const animationPromises = currentDices.map((_, index) => {
      return new Promise((resolve) => {
        const diceElement =
          diceRefs.current[index]?.querySelector('.dice-text');
        if (!diceElement) {
          resolve();
          return;
        }

        let rollingDone = false;
        const sides = randomResults[index].sides;

        // Apply animation class
        diceElement.classList.add('rolling');

        // Rolling animation
        const rollInterval = setInterval(() => {
          if (rollingDone) return;
          diceElement.textContent = Math.floor(Math.random() * sides) + 1;
        }, 50);

        const baseDuration = Math.random() * (5 - 2) + 2;
        const speedReduction = Math.min(
          0.5 * currentRollSpeed * 1000,
          baseDuration * 1000 - 500
        );
        const duration = Math.max(500, baseDuration * 1000 - speedReduction);

        setTimeout(() => {
          rollingDone = true;
          clearInterval(rollInterval);
          diceElement.classList.remove('rolling');
          diceElement.textContent = randomResults[index].result;
          resolve();
        }, duration);
      });
    });

    await Promise.all(animationPromises);
    addGold(totalGold);

    // Show toast notification
    toast.success(`🎲 You earned ${totalGold} gold!`, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'light',
    });

    setIsRolling(false);
  };

  const rarityColors = {
    common: 'border-gray-400 text-gray-600',
    uncommon: 'border-green-500 text-green-500',
    rare: 'border-blue-500 text-blue-500',
    epic: 'border-purple-500 text-purple-500',
    legendary: 'border-yellow-500 text-yellow-500',
  };

  const sortedDices = [...player.dices].sort((a, b) => {
    const aData = dice[a] || { multiplier: 1, sides: 6 };
    const bData = dice[b] || { multiplier: 1, sides: 6 };

    if (bData.multiplier !== aData.multiplier) {
      return bData.multiplier - aData.multiplier;
    }
    return bData.sides - aData.sides;
  });

  return (
    <div className="flex content-center items-center h-screen w-[66vw] flex-col relative">
      <div className="grid grid-cols-5 gap-x-[5vh] gap-y-[5vw] w-[85%] min-h-[66vh] justify-items-center mt-[5vh] mb-[15vh] overflow-y-auto p-2.5">
        {sortedDices.map((diceType, index) => {
          const diceConfig = dice[diceType] || { multiplier: 1, sides: 6 };

          return (
            <div
              key={`dice-${diceType}-${index}`}
              ref={(el) => (diceRefs.current[index] = el)}
              role="button"
              aria-label={`Dice: d${diceConfig.sides} x${diceConfig.multiplier}`}
              className={`dice w-[120px] h-[120px] bg-white border-2 ${
                rarityColors[diceConfig.id || 'common']
              } flex justify-center items-center text-[50px] font-bold rounded-[15px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer relative ${
                isRolling ? 'pointer-events-none opacity-70' : ''
              }`}
            >
              <p className="dice-text">1</p>
              <div className="absolute bottom-2 right-2 text-[16px] font-semibold text-gray-600">
                x{diceConfig.multiplier}
              </div>
              <div className="absolute top-2 left-2 text-[14px] font-semibold text-gray-600">
                d{diceConfig.sides}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={onRoll}
        disabled={isRolling}
        aria-label="Roll Dice"
        className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 px-8 py-4 text-lg cursor-pointer border-none rounded-full transition-all duration-300 ease-in-out ${
          isRolling
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
      >
        {isRolling ? `Rolling...` : 'Roll Dice'}
      </button>
    </div>
  );
};

export default DicePage;
