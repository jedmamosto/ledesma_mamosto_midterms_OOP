import * as reader from 'readline-sync';
import { Clothing } from './classes/Clothing';
import { Tops } from './classes/Tops';
import { Bottoms } from './classes/Bottoms';

const topFighter: Clothing = new Tops('Player 1', '01A', '04/23/2003', 'red', 100, 1000, 1000, 250, 250, 'small', 'cotton', 'Uniqlo', false, 0);
const topFighter2: Clothing = new Tops('Player 2', '01A', '04/23/2003', 'red', 100, 1000, 1000, 250, 250, 'small', 'cotton', 'Uniqlo', false, 0);

while (topFighter.hp > 0 || topFighter2.hp > 0) {
  console.log('Player 1 Move:');
  const userMove1: number = Number(reader.question('(0) Exit \n(1) Basic Attack \n(2) Defend \n(3) Trick Shot! (30% chance to deal 2.5x damage) \n(4) Charge Up! (boost attack for next round) \n(5) Dodge (40% chance to ignore damage) \n(6) Repair (heal for 10% of max HP) \n'));
  console.log();

  // exit - turn into function?

  if (userMove1 === 0) {
    break;
  }

  console.log('Player 2 Move:');
  const userMove2: number = Number(reader.question('(0) Exit \n(1) Basic Attack \n(2) Defend \n(3) Trick Shot! (30% chance to deal 2.5x damage) \n(4) Charge Up! (boost attack for next round) \n(5) Dodge (40% chance to ignore damage) \n(6) Repair (heal for 10% of max HP) \n'));
  console.log();

  // exit

  if (userMove2 === 0) {
    break;
  }

  if (userMove1 === 1) { // player 1 basicAttack()
    if (userMove2 === 1) { // player 2 also chooses to attack back
      topFighter.basicAttack(topFighter2);
      console.log();
      topFighter2.basicAttack(topFighter);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    } else if (userMove2 === 2) { // player 2 chooses to defend
      topFighter2.basicDefend(topFighter);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    } else if (userMove2 === 3) { // player 2 chooses to trickShot
      topFighter.basicAttack(topFighter2);
      console.log();
      topFighter2.trickShot(topFighter);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    } else if (userMove2 === 4) { // player 2 chooses to chargeUp
      topFighter.basicAttack(topFighter2);
      const useMana: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      topFighter2.chargeUp(useMana);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    } else if (userMove2 === 5) { // player 2 dodge
      topFighter2.dodge(topFighter);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    } else if (userMove2 === 6) { // player 2 repair
      topFighter.basicAttack(topFighter2);
      topFighter2.repair();
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    }
  } else if (userMove1 === 2) { // player 1 basicDefend()
    if (userMove2 === 1) { // player 2 chooses to attack
      topFighter.basicDefend(topFighter2);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 2) { // player 2 also defends
      console.log('Nobody attacked this round.');
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 3) { // player 2 trickShot ignores defend
      topFighter2.trickShot(topFighter);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 4) { // player 2 choose to charge up
      const useMana: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      topFighter2.chargeUp(useMana);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    } else if (userMove2 === 5) { // player 2 dodge
      console.log('Nobody attacked this round.');
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 6) { // player 2 repair
      topFighter2.repair();
      console.log();
      console.log('Nobody attacked this round.');
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    }
  } else if (userMove1 === 3) { // player 1 chooses to trickshot
    if (userMove2 === 1) { // player 2 chooses to attack
      topFighter.trickShot(topFighter2);
      topFighter2.basicAttack(topFighter);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 2) { // player 2 defends
      topFighter.trickShot(topFighter2);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 3) { // player 2 trickShot
      topFighter.trickShot(topFighter2);
      topFighter2.trickShot(topFighter);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 4) { // player 2 charge up
      topFighter.trickShot(topFighter2);
      const useMana: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      topFighter2.chargeUp(useMana);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    } else if (userMove2 === 5) { // player 2 dodge
      topFighter.trickShot(topFighter2);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 6) { // player 2 repair
      topFighter.trickShot(topFighter2);
      topFighter2.repair();
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    }
  } else if (userMove1 === 4) { // player 1 charge up
    if (userMove2 === 1) { // player 2 chooses to attack
      const useMana: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      topFighter.chargeUp(useMana);
      topFighter2.basicAttack(topFighter);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 2) { // player 2 defends
      const useMana: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      topFighter.chargeUp(useMana);
      console.log('Nobody attacked this round.');
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 3) { // player 2 trickShot
      const useMana: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      topFighter.chargeUp(useMana);
      topFighter2.trickShot(topFighter);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 4) { // player 2 charge up
      const useMana1: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      topFighter.chargeUp(useMana1);
      const useMana2: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      topFighter2.chargeUp(useMana2);
      console.log();
      console.log('Nobody attacked this round.');
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    } else if (userMove2 === 5) { // player 2 dodge
      const useMana1: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      topFighter.chargeUp(useMana1);
      console.log();
      console.log('Nobody attacked this round.');
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 6) { // player 2 repair
      const useMana1: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      topFighter.chargeUp(useMana1);
      console.log();
      topFighter2.repair();
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    }
  } else if (userMove1 === 5) { // player 1 dodge
    if (userMove2 === 1) { // player 2 chooses to attack
      topFighter.dodge(topFighter2);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 2) { // player 2 defends
      console.log('Nobody attacked this round.');
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 3) { // player 2 trickShot
      topFighter2.trickShot(topFighter);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 4) { // player 2 charge up
      const useMana2: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      topFighter2.chargeUp(useMana2);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    } else if (userMove2 === 5) { // player 2 dodge
      console.log('Nobody attacked this round.');
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 6) { // player 2 repair
      topFighter2.repair();
      console.log();
      console.log('Nobody attacked this round.');
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    }
  } else if (userMove1 === 6) { // player 1 repair
    if (userMove2 === 1) { // player 2 chooses to attack
      topFighter2.repair();
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 2) { // player 2 defends
      topFighter2.repair();
      console.log();
      console.log('Nobody attacked this round.');
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 3) { // player 2 trickShot
      topFighter2.repair();
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 4) { // player 2 charge up
      topFighter2.repair();
      console.log();
      const useMana2: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      topFighter2.chargeUp(useMana2);
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    } else if (userMove2 === 5) { // player 2 dodge
      topFighter2.repair();
      console.log();
      console.log('Nobody attacked this round.');
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
    } else if (userMove2 === 6) { // player 2 repair
      topFighter.repair();
      topFighter2.repair();
      console.log();
      console.log('Nobody attacked this round.');
      console.log();
      // check stats
      topFighter.getCharInfo();
      topFighter2.getCharInfo();
      console.log();
    }
  }
  console.log();
}
