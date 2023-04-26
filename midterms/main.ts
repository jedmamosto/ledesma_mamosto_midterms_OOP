import * as reader from 'readline-sync';
import { Clothing } from './classes/Clothing';
import { Tops } from './classes/Tops';
import { Bottoms } from './classes/Bottoms';

console.log(`A long time ago...
In the days of the past...
Long before time...
There were the TOPS and the BOTTOMS! And they fought.
Then they fought...
Even to this day.
`);

console.log(`Choose your character: \n 
(1) Red Uniqlo Shirt [HP: 1250, Mana: 250, Basic Attack: 90]\n
(2) Blue Tuxedo [HP: 1500, Mana: 100, Basic Attack: 75]\n
(3) Levy's Jeans [HP: 1300, Mana: 120, Basic Attack: 80]\n
(4) Adidas Shorts [HP: 900, Mana: 200, Basic Attack: 110]\n
`);

const playerChar1 = Number(reader.question('Player 1 Character: '));
const playerChar2 = Number(reader.question('Player 2 Character: '));

let player1: Clothing = new Tops('Player 1', '01A', '04/23/2003', 'red', 90, 1250, 1250, 250, 250, 'small', 'cotton', 'Uniqlo', 0, false, false);
let player2: Clothing = new Tops('Player 2', '01A', '04/23/2003', 'red', 90, 1250, 1250, 250, 250, 'small', 'cotton', 'Uniqlo', 0, false, false);

if (playerChar1 === 1) { // player 1 chooses 1
  if (playerChar2 === 1) { // player 2 chooses 1
    player1 = new Tops('Red Uniqlo Shirt', '01A', '04/23/2003', 'red', 90, 1250, 1250, 250, 250, 'small', 'cotton', 'Uniqlo', 0, false, false);
    player2 = new Tops('Red Uniqlo Shirt', '01A', '04/23/2003', 'red', 90, 1250, 1250, 250, 250, 'small', 'cotton', 'Uniqlo', 0, false, false);
  } else if (playerChar2 === 2) { // player 2 chooses 2
    player1 = new Tops('Red Uniqlo Shirt', '01A', '04/23/2003', 'red', 90, 1250, 1250, 250, 250, 'small', 'cotton', 'Uniqlo', 0, false, false);
    player2 = new Tops('Blue Tuxedo', '01B', '08/13/2000', 'blue', 75, 1500, 1500, 100, 100, 'medium', 'synthetic', 'Guess', 0, true, true);
  } else if (playerChar2 === 3) { // player 2 chooses 3
    player1 = new Tops('Red Uniqlo Shirt', '01A', '04/23/2003', 'red', 90, 1250, 1250, 250, 250, 'small', 'cotton', 'Uniqlo', 0, false, false);
    player2 = new Bottoms('Levy Jeans', '01C', '01/07/1998', 'blue', 80, 1300, 1300, 120, 120, 'medium', 'jeans', "Levy's", 0, true, true);
  } else if (playerChar2 === 4) { // player 2 chooses 4
    player1 = new Tops('Red Uniqlo Shirt', '01A', '04/23/2003', 'red', 90, 1250, 1250, 250, 250, 'small', 'cotton', 'Uniqlo', 0, false, false);
    player2 = new Bottoms('Adidas Shorts', '01D', '02/07/2007', 'black', 110, 900, 900, 200, 200, 'small', 'synthetic', 'Adidas', 0, false, false);
  }
} else if (playerChar1 === 2) { // player 1 chooses 2
  if (playerChar2 === 1) { // player 2 chooses 1
    player1 = new Tops('Blue Tuxedo', '01B', '08/13/2000', 'blue', 75, 1500, 1500, 100, 100, 'medium', 'synthetic', 'Guess', 0, true, true);
    player2 = new Tops('Red Uniqlo Shirt', '01A', '04/23/2003', 'red', 90, 1250, 1250, 250, 250, 'small', 'cotton', 'Uniqlo', 0, false, false);
  } else if (playerChar2 === 2) { // player 2 chooses 2
    player1 = new Tops('Blue Tuxedo', '01B', '08/13/2000', 'blue', 75, 1500, 1500, 100, 100, 'medium', 'synthetic', 'Guess', 0, true, true);
    player2 = new Tops('Blue Tuxedo', '01B', '08/13/2000', 'blue', 75, 1500, 1500, 100, 100, 'medium', 'synthetic', 'Guess', 0, true, true);
  } else if (playerChar2 === 3) { // player 2 chooses 3
    player1 = new Tops('Blue Tuxedo', '01B', '08/13/2000', 'blue', 75, 1500, 1500, 100, 100, 'medium', 'synthetic', 'Guess', 0, true, true);
    player2 = new Bottoms('Levy Jeans', '01C', '01/07/1998', 'blue', 80, 1300, 1300, 120, 120, 'medium', 'jeans', "Levy's", 0, true, true);
  } else if (playerChar2 === 4) { // player 2 chooses 4
    player1 = new Tops('Blue Tuxedo', '01B', '08/13/2000', 'blue', 75, 1500, 1500, 100, 100, 'medium', 'synthetic', 'Guess', 0, true, true);
    player2 = new Bottoms('Adidas Shorts', '01D', '02/07/2007', 'black', 110, 900, 900, 200, 200, 'small', 'synthetic', 'Adidas', 0, false, false);
  }
} else if (playerChar1 === 3) { // player 1 chooses 3
  if (playerChar2 === 1) { // player 2 chooses 1
    player1 = new Bottoms('Levy Jeans', '01C', '01/07/1998', 'blue', 80, 1300, 1300, 120, 120, 'medium', 'jeans', "Levy's", 0, true, true);
    player2 = new Tops('Red Uniqlo Shirt', '01A', '04/23/2003', 'red', 90, 1250, 1250, 250, 250, 'small', 'cotton', 'Uniqlo', 0, false, false);
  } else if (playerChar2 === 2) { // player 2 chooses 2
    player1 = new Bottoms('Levy Jeans', '01C', '01/07/1998', 'blue', 80, 1300, 1300, 120, 120, 'medium', 'jeans', "Levy's", 0, true, true);
    player2 = new Tops('Blue Tuxedo', '01B', '08/13/2000', 'blue', 75, 1500, 1500, 100, 100, 'medium', 'synthetic', 'Guess', 0, true, true);
  } else if (playerChar2 === 3) { // player 2 chooses 3
    player1 = new Bottoms('Levy Jeans', '01C', '01/07/1998', 'blue', 80, 1300, 1300, 120, 120, 'medium', 'jeans', "Levy's", 0, true, true);
    player2 = new Bottoms('Levy Jeans', '01C', '01/07/1998', 'blue', 80, 1300, 1300, 120, 120, 'medium', 'jeans', "Levy's", 0, true, true);
  } else if (playerChar2 === 4) { // player 2 chooses 4
    player1 = new Bottoms('Levy Jeans', '01C', '01/07/1998', 'blue', 80, 1300, 1300, 120, 120, 'medium', 'jeans', "Levy's", 0, true, true);
    player2 = new Bottoms('Adidas Shorts', '01D', '02/07/2007', 'black', 110, 900, 900, 200, 200, 'small', 'synthetic', 'Adidas', 0, false, false);
  }
} else if (playerChar1 === 4) { // player 1 chooses 4
  if (playerChar2 === 1) { // player 2 chooses 1
    player1 = new Bottoms('Adidas Shorts', '01D', '02/07/2007', 'black', 110, 900, 900, 200, 200, 'small', 'synthetic', 'Adidas', 0, false, false);
    player2 = new Tops('Red Uniqlo Shirt', '01A', '04/23/2003', 'red', 90, 1250, 1250, 250, 250, 'small', 'cotton', 'Uniqlo', 0, false, false);
  } else if (playerChar2 === 2) { // player 2 chooses 2
    player1 = new Bottoms('Adidas Shorts', '01D', '02/07/2007', 'black', 110, 900, 900, 200, 200, 'small', 'synthetic', 'Adidas', 0, false, false);
    player2 = new Tops('Blue Tuxedo', '01B', '08/13/2000', 'blue', 75, 1500, 1500, 100, 100, 'medium', 'synthetic', 'Guess', 0, true, true);
  } else if (playerChar2 === 3) { // player 2 chooses 3
    player1 = new Bottoms('Adidas Shorts', '01D', '02/07/2007', 'black', 110, 900, 900, 200, 200, 'small', 'synthetic', 'Adidas', 0, false, false);
    player2 = new Bottoms('Levy Jeans', '01C', '01/07/1998', 'blue', 80, 1300, 1300, 120, 120, 'medium', 'jeans', "Levy's", 0, true, true);
  } else if (playerChar2 === 4) { // player 2 chooses 4
    player1 = new Bottoms('Adidas Shorts', '01D', '02/07/2007', 'black', 110, 900, 900, 200, 200, 'small', 'synthetic', 'Adidas', 0, false, false);
    player2 = new Bottoms('Adidas Shorts', '01D', '02/07/2007', 'black', 110, 900, 900, 200, 200, 'small', 'synthetic', 'Adidas', 0, false, false);
  }
}

console.log();
player1.getCharInfo();
console.log();
player1.getCoolInfo();
console.log();
player2.getCharInfo();
console.log();
player2.getCoolInfo();
console.log();

function checkStats(): void {
  console.log();
  // check stats
  player1.getCharInfo();
  player2.getCharInfo();
  console.log();
}

while (true) {
  if (player1.hp <= 0) {
    console.log(`${player2.productName} has won! It's a victory!`);
    break;
  } else if (player2.hp <= 0) {
    console.log(`${player1.productName} has won! It's a victory!`);
    break;
  }

  console.log('Player 1 Move:');
  const userMove1: number = Number(reader.question('(0) Exit \n(1) Basic Attack \n(2) Defend \n(3) Trick Shot! (30% chance to deal 2.5x damage) \n(4) Get Ironed! (boost attack for next round) \n(5) Fold (40% chance to ignore damage) \n(6) Repair (heal for 10% of max HP) \n(7) Wash (regen mana 25% of max mana) \n(8) Taunt \n(9) Special Ability \n'));
  console.log();

  // exit - turn into function?

  if (userMove1 === 0) {
    break;
  }

  console.log('Player 2 Move:');
  const userMove2: number = Number(reader.question('(0) Exit \n(1) Basic Attack \n(2) Defend \n(3) Trick Shot! (30% chance to deal 2.5x damage) \n(4) Get Ironed! (boost attack for next round) \n(5) Fold (40% chance to ignore damage) \n(6) Repair (heal for 10% of max HP) \n(7) Wash (regen mana 25% of max mana) \n(8) Taunt \n(9) Special Ability \n'));
  console.log();

  // exit

  if (userMove2 === 0) {
    break;
  }

  if (userMove1 === 1) { // player 1 basicAttack()
    if (userMove2 === 1) { // player 2 also chooses to attack back
      player1.basicAttack(player2);
      console.log();
      player2.basicAttack(player1);
      checkStats();
    } else if (userMove2 === 2) { // player 2 chooses to defend
      player2.basicDefend(player1);
      checkStats();
    } else if (userMove2 === 3) { // player 2 chooses to trickShot
      player1.basicAttack(player2);
      console.log();
      player2.trickShot(player1);
      checkStats();
    } else if (userMove2 === 4) { // player 2 chooses to ironUp
      player1.basicAttack(player2);
      const useMana: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player2.ironUp(useMana);
      checkStats();
    } else if (userMove2 === 5) { // player 2 fold
      player2.fold(player1);
      checkStats();
    } else if (userMove2 === 6) { // player 2 repair
      player1.basicAttack(player2);
      player2.repair();
      checkStats();
    } else if (userMove2 === 7) { // player 2 wash
      player1.basicAttack(player2);
      player2.wash();
      checkStats();
    } else if (userMove2 === 8) { // player 2 taunt
      player1.basicAttack(player2);
      const tauntDesire2 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire2.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player2.taunt(player1, tauntInput);
      } else {
        player2.taunt();
      }
      checkStats();
    } else if (userMove2 === 9) { // player 2 special skill
      player1.basicAttack(player2);
      player2.specialSkill(player1);
      checkStats();
    }
  } else if (userMove1 === 2) { // player 1 basicDefend()
    if (userMove2 === 1) { // player 2 chooses to attack
      player1.basicDefend(player2);
      checkStats();
    } else if (userMove2 === 2) { // player 2 also defends
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 3) { // player 2 trickShot ignores defend
      player2.trickShot(player1);
      checkStats();
    } else if (userMove2 === 4) { // player 2 choose to iron up
      const useMana: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player2.ironUp(useMana);
      console.log();
      checkStats();
    } else if (userMove2 === 5) { // player 2 fold
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 6) { // player 2 repair
      player2.repair();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 7) { // player 2 wash
      player2.wash();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 8) { // player 2 taunt
      const tauntDesire2 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire2.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player2.taunt(player1, tauntInput);
      } else {
        player2.taunt();
      }
      checkStats();
    } else if (userMove2 === 9) { // player 2 special skill
      player2.specialSkill(player1);
      checkStats();
    }
  } else if (userMove1 === 3) { // player 1 chooses to trickshot
    if (userMove2 === 1) { // player 2 chooses to attack
      player1.trickShot(player2);
      player2.basicAttack(player1);
      checkStats();
    } else if (userMove2 === 2) { // player 2 defends
      player1.trickShot(player2);
      checkStats();
    } else if (userMove2 === 3) { // player 2 trickShot
      player1.trickShot(player2);
      player2.trickShot(player1);
      checkStats();
    } else if (userMove2 === 4) { // player 2 iron up
      player1.trickShot(player2);
      const useMana: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player2.ironUp(useMana);
      checkStats();
    } else if (userMove2 === 5) { // player 2 fold
      player1.trickShot(player2);
      checkStats();
    } else if (userMove2 === 6) { // player 2 repair
      player1.trickShot(player2);
      player2.repair();
      checkStats();
    } else if (userMove2 === 7) { // player 2 wash
      player1.trickShot(player2);
      player2.wash();
      checkStats();
    } else if (userMove2 === 8) { // player 2 taunt
      player1.trickShot(player2);
      const tauntDesire2 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire2.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player2.taunt(player1, tauntInput);
      } else {
        player2.taunt();
      }
      checkStats();
    } else if (userMove2 === 9) { // player 2 special skill
      player1.trickShot(player2);
      player2.specialSkill(player1);
      checkStats();
    }
  } else if (userMove1 === 4) { // player 1 iron up
    if (userMove2 === 1) { // player 2 chooses to attack
      const useMana: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player1.ironUp(useMana);
      player2.basicAttack(player1);
      checkStats();
    } else if (userMove2 === 2) { // player 2 defends
      const useMana: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player1.ironUp(useMana);
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 3) { // player 2 trickShot
      const useMana: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player1.ironUp(useMana);
      player2.trickShot(player1);
      checkStats();
    } else if (userMove2 === 4) { // player 2 iron up
      const useMana1: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player1.ironUp(useMana1);
      const useMana2: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player2.ironUp(useMana2);
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 5) { // player 2 fold
      const useMana1: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player1.ironUp(useMana1);
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 6) { // player 2 repair
      const useMana1: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player1.ironUp(useMana1);
      console.log();
      player2.repair();
      checkStats();
    } else if (userMove2 === 7) { // player 2 wash
      const useMana1: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player1.ironUp(useMana1);
      player2.wash();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 8) { // player 2 taunt
      const useMana1: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player1.ironUp(useMana1);
      const tauntDesire2 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire2.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player2.taunt(player1, tauntInput);
      } else {
        player2.taunt();
      }
      checkStats();
    } else if (userMove2 === 9) { // player 2 special skill
      const useMana1: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player1.ironUp(useMana1);
      player2.specialSkill(player1);
      checkStats();
    }
  } else if (userMove1 === 5) { // player 1 fold
    if (userMove2 === 1) { // player 2 chooses to attack
      player1.fold(player2);
      checkStats();
    } else if (userMove2 === 2) { // player 2 defends
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 3) { // player 2 trickShot
      player2.trickShot(player1);
      checkStats();
    } else if (userMove2 === 4) { // player 2 iron up
      const useMana2: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player2.ironUp(useMana2);
      console.log();
      checkStats();
    } else if (userMove2 === 5) { // player 2 fold
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 6) { // player 2 repair
      player2.repair();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 7) { // player 2 wash
      player2.wash();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 8) { // player 2 taunt
      const tauntDesire2 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire2.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player2.taunt(player1, tauntInput);
      } else {
        player2.taunt();
      }
      checkStats();
    } else if (userMove2 === 9) { // player 2 special skill
      player2.specialSkill(player1);
      checkStats();
    }
  } else if (userMove1 === 6) { // player 1 repair
    if (userMove2 === 1) { // player 2 chooses to attack
      player1.repair();
      player2.basicAttack(player1);
      checkStats();
    } else if (userMove2 === 2) { // player 2 defends
      player1.repair();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 3) { // player 2 trickShot
      player1.repair();
      player2.trickShot(player1);
      checkStats();
    } else if (userMove2 === 4) { // player 2 iron up
      player1.repair();
      console.log();
      const useMana2: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player2.ironUp(useMana2);
      console.log();
      checkStats();
    } else if (userMove2 === 5) { // player 2 fold
      player1.repair();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 6) { // player 2 repair
      player1.repair();
      player2.repair();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 7) { // player 2 wash
      player1.repair();
      player2.wash();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 8) { // player 2 taunt
      player1.repair();
      const tauntDesire2 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire2.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player2.taunt(player1, tauntInput);
      } else {
        player2.taunt();
      }
      checkStats();
    } else if (userMove2 === 9) { // player 2 special skill
      player1.repair();
      player2.specialSkill(player1);
      checkStats();
    }
  } else if (userMove1 === 7) { // player 1 wash
    if (userMove2 === 1) { // player 2 chooses to attack
      player2.repair();
      player1.basicAttack(player2);
      checkStats();
    } else if (userMove2 === 2) { // player 2 defends
      player1.wash();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 3) { // player 2 trickShot
      player1.wash();
      player2.trickShot(player1);
      checkStats();
    } else if (userMove2 === 4) { // player 2 iron up
      player1.wash();
      console.log();
      const useMana2: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player2.ironUp(useMana2);
      console.log();
      checkStats();
    } else if (userMove2 === 5) { // player 2 fold
      player1.wash();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 6) { // player 2 repair
      player1.wash();
      player2.repair();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 7) { // player 2 wash
      player1.wash();
      player2.wash();
      console.log();
      console.log('Nobody attacked this round.');
      checkStats();
    } else if (userMove2 === 8) { // player 2 taunt
      player1.wash();
      const tauntDesire2 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire2.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player2.taunt(player1, tauntInput);
      } else {
        player2.taunt();
      }
      checkStats();
    } else if (userMove2 === 9) { // player 2 special skill
      player1.wash();
      player2.specialSkill(player1);
      checkStats();
    }
  } else if (userMove1 === 8) { // player 1 taunt
    if (userMove2 === 1) { // player 2 chooses to attack
      const tauntDesire1 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire1.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player1.taunt(player2, tauntInput);
      } else {
        player1.taunt();
      }
      player2.basicAttack(player1);
      checkStats();
    } else if (userMove2 === 2) { // player 2 defends
      const tauntDesire1 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire1.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player1.taunt(player2, tauntInput);
      } else {
        player1.taunt();
      }
      checkStats();
    } else if (userMove2 === 3) { // player 2 trickShot
      const tauntDesire1 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire1.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player1.taunt(player2, tauntInput);
      } else {
        player1.taunt();
      }
      player2.trickShot(player1);
      checkStats();
    } else if (userMove2 === 4) { // player 2 iron up
      const tauntDesire1 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire1.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player1.taunt(player2, tauntInput);
      } else {
        player1.taunt();
      }
      console.log();
      const useMana2: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player2.ironUp(useMana2);
      console.log();
      checkStats();
    } else if (userMove2 === 5) { // player 2 fold
      const tauntDesire1 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire1.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player1.taunt(player2, tauntInput);
      } else {
        player1.taunt();
      }
      checkStats();
    } else if (userMove2 === 6) { // player 2 repair
      const tauntDesire1 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire1.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player1.taunt(player2, tauntInput);
      } else {
        player1.taunt();
      }
      player2.repair();
      checkStats();
    } else if (userMove2 === 7) { // player 2 wash
      const tauntDesire1 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire1.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player1.taunt(player2, tauntInput);
      } else {
        player1.taunt();
      }
      player2.wash();
      checkStats();
    } else if (userMove2 === 8) { // player 2 taunt
      const tauntDesire1 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire1.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player1.taunt(player2, tauntInput);
      } else {
        player1.taunt();
      }
      const tauntDesire2 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire2.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player2.taunt(player1, tauntInput);
      } else {
        player2.taunt();
      }
      checkStats();
    } else if (userMove2 === 9) { // player 2 special skill
      const tauntDesire1 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire1.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player1.taunt(player2, tauntInput);
      } else {
        player1.taunt();
      }
      console.log();
      player2.specialSkill(player1);
      checkStats();
    }
  } else if (userMove1 === 9) { // player 1 special skill
    if (userMove2 === 1) { // player 2 chooses to attack
      player1.specialSkill(player2);
      player1.basicAttack(player2);
      checkStats();
    } else if (userMove2 === 2) { // player 2 defends
      player1.specialSkill(player2);
      checkStats();
    } else if (userMove2 === 3) { // player 2 trickShot
      player1.specialSkill(player2);
      player2.trickShot(player1);
      checkStats();
    } else if (userMove2 === 4) { // player 2 iron up
      player1.specialSkill(player2);
      console.log();
      const useMana2: number = Number(reader.question('Input mana to convert into attack (half of mana): '));
      player2.ironUp(useMana2);
      console.log();
      checkStats();
    } else if (userMove2 === 5) { // player 2 fold
      player1.specialSkill(player2);
      checkStats();
    } else if (userMove2 === 6) { // player 2 repair
      player1.specialSkill(player2);
      player2.repair();
      checkStats();
    } else if (userMove2 === 7) { // player 2 wash
      player1.specialSkill(player2);
      player2.wash();
      checkStats();
    } else if (userMove2 === 8) { // player 2 taunt
      player1.specialSkill(player2);
      const tauntDesire2 = reader.question('Do you want to say something? [costs 10 mana] (Y/N) ');
      if (tauntDesire2.toUpperCase() === 'Y') {
        const tauntInput = reader.question('What do you want to say? ');
        player2.taunt(player1, tauntInput);
      } else {
        player2.taunt();
      }
      checkStats();
    } else if (userMove2 === 9) { // player 2 special skill
      player1.specialSkill(player2);
      player2.specialSkill(player1);
      checkStats();
    }
  }
  console.log();
}
