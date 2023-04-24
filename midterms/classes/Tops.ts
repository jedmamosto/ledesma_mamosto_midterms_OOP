/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { Clothing } from './Clothing';

export class Tops extends Clothing {
  private _isLongSleeved: boolean;

  constructor(
    productName: string,
    productID: string,
    manufactureDate: string,
    color: string,
    price: number,
    hp: number,
    maxHp: number,
    mana: number,
    maxMana: number,
    size: string,
    material: string,
    brand: string,
    isLongSleeved: boolean,
    nextRoundBoost: number,
  ) {
    super(
      productName,
      productID,
      manufactureDate,
      color,
      price,
      hp,
      maxHp,
      mana,
      maxMana,
      size,
      material,
      brand,
      nextRoundBoost,
    );
    this._isLongSleeved = isLongSleeved;
  }

  // getters and setters

  get productID(): string {
    return this._productID;
  }

  set productID(newProductID: string) {
    this._productID = newProductID;
  }

  get manufactureID(): string {
    return this._manufactureDate;
  }

  set manufactureID(newManufactureDate: string) {
    this._manufactureDate = newManufactureDate;
  }

  get color(): string {
    return this._color;
  }

  set color(newColor: string) {
    this._color = newColor;
  }

  get price(): number {
    return this._price;
  }

  set price(newPrice: number) {
    this._price = newPrice;
  }

  get size(): string {
    return this._size;
  }

  set size(newSize: string) {
    this._size = newSize;
  }

  get material(): string {
    return this._material;
  }

  set material(newMaterial: string) {
    this._material = newMaterial;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(newBrand: string) {
    this._brand = newBrand;
  }

  get nextRoundBoost(): number {
    return this._nextRoundBoost;
  }

  set nextRoundBoost(newBoost: number) {
    this._nextRoundBoost = newBoost;
  }

  get isLongSleeved(): boolean {
    return this._isLongSleeved;
  }

  set isLongSleeved(changeLongSleeve: boolean) {
    this._isLongSleeved = changeLongSleeve;
  }

  // instance methods from parent class

  getCoolInfo(): void {
    console.log(`${this.productName} costs PHP ${this.price}. It was made on ${this.manufactureDate} with a product ID of ${this.productID}.`);
  }

  getCharInfo(): void {
    console.log(`${this.productName} stats: \n- HP: ${this.hp}\n- Mana: ${this.mana}\n- Basic Attack: ${this.price}`);
  }

  // overridden methods

  basicAttack(opponent: Clothing): void {
    let damage = this.price;
    // if their attack is boosted - turn this into a function?
    if (this.nextRoundBoost !== 0) {
      damage += this.nextRoundBoost;
      this.nextRoundBoost = 0; // boost reset
    }
    opponent.hp -= damage;
    console.log(`${this.productName} dealt ${damage} damage!`);
    console.log(`${opponent.productName} has ${opponent.hp} hp remaining.`);
  }

  trickShot(opponent: Clothing): void {
    const chance = Math.random();
    if (chance <= 0.3) {
      let damage = this.price * 2.5;
      // if their attack is boosted
      if (this.nextRoundBoost !== 0) {
        damage += this.nextRoundBoost;
        this.nextRoundBoost = 0; // boost reset
      }
      opponent.hp -= damage;
      console.log(`${this.productName} dealt ${damage} damage with a trick shot!`);
      console.log(`${opponent.productName} has ${opponent.hp} hp remaining.`);
    } else {
      console.log(`Oof! ${this.productName} missed the trick shot.`);
    }
  }

  basicDefend(opponent: Clothing): void {
    const chance = Math.random();
    const blockedDamage = opponent.price * 0.5;
    const damage = opponent.price;
    if (chance <= 0.7) {
      this.hp -= blockedDamage;
      console.log(`${this.productName} successfully blocked ${opponent.productName}'s attack. You received ${blockedDamage} damage.`);
      console.log(`${this.productName} has ${this.hp} hp remaining.`);
    } else {
      this.hp -= damage;
      console.log(`${this.productName} failed to block ${opponent.productName}. ${this.productName} received ${damage} damage.`);
      console.log(`${this.productName} has ${this.hp} hp remaining.`);
    }
  }

  chargeUp(useMana: number): void {
    if (useMana > this.mana) {
      console.log(`${this.productName} do not have enough mana to charge up!`);
    } else {
      this.mana -= useMana;
      this.nextRoundBoost = useMana * 0.5; // boost in damage is half the mana used
      console.log(`${this.productName} charged up and added ${this.nextRoundBoost} damage for the next round!`);
      console.log(`${this.productName} only has ${this.mana} mana left.`);
    }
  }

  dodge(opponent: Clothing): void {
    const chance = Math.random();
    if (chance <= 0.4) {
      console.log(`${this.productName} has completely dodged ${opponent.productName}'s attack!`);
    } else {
      const damage = opponent.price + 20;
      this.hp -= damage;
      console.log(`${this.productName} failed to dodge ${opponent.productName}'s attack and tripped. ${this.productName} received ${damage} damage.`);
      console.log(`${this.productName} has ${this.hp} hp remaining.`);
    }
  }

  repair(): void {
    const regenAmount = Math.ceil(this.maxHp * 0.1);
    this.hp = Math.min(this.hp + regenAmount, this.maxHp);
    console.log(`${this.productName} regenerated to ${this.hp} hp.`);
  }
}
