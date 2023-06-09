import { Clothing } from '../classes/Clothing';

export interface ClothFighters {
  getCoolInfo(): void;
  getCharInfo(): void;
  basicAttack(opponent: Clothing): void; // deal damage to your opponent
  trickShot(opponent: Clothing): void // 30% chance to deal 2.5x damage to your opponent
  basicDefend(opponent: Clothing): void; // 70% chance to block your opponent (damage received minus 50%)
  ironUp(useMana: number): void // convert mana into attack (half the mana)
  fold(opponent: Clothing): void // 40% chance to evade your opponent (completely nullify damage received)
  repair(): void // regenerates 10% of your hp
  wash(): void // regenerates 25% of your mana
  taunt(): void; // logs a message - does nothing really but to provoke
  specialSkill(opponent: Clothing): void;
  /*
  parry(): void; // 25% chance to return opponents attack back at them
  */
}
