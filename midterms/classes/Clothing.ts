/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { ClothFighters } from '../interfaces/ClothFighters'

export abstract class Clothing implements ClothFighters {
  public productName: string; // char name

  protected _productID: string; // cool info

  protected _manufactureDate: string; // cool info

  protected _color: string; // cool info

  protected _price: number; // attack damage - char info

  public hp: number; // hp - char info

  public maxHp: number; // max hp

  public mana: number; // mana - consume mana to boost attack - char info

  public maxMana: number; // max mana

  protected _size: string; // boosts attack damage depending on size - works as an upgrade

  protected _material: string; // boosts hp depending on type of material - works as an upgrade

  protected _brand: string; // boosts mana depending on brand - works as an upgrade

  protected _nextRoundBoost: number; // adds damage for the next round

  // add an attribute that users can use to upgrade?

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
    nextRoundBoost: number,
  ) {
    this.productName = productName;
    this._productID = productID;
    this._manufactureDate = manufactureDate;
    this._color = color;
    this._price = price;
    this.hp = hp;
    this.maxHp = maxHp;
    this.mana = mana;
    this.maxMana = maxMana;
    this._size = size;
    this._material = material;
    this._brand = brand;
    this._nextRoundBoost = nextRoundBoost;
  }

  // getters and setters

  get productID(): string {
    return this._productID;
  }

  set productID(newProductID: string) {
    this._productID = newProductID;
  }

  get manufactureDate(): string {
    return this._manufactureDate;
  }

  set manufactureDate(newManufactureDate: string) {
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

  // instance methods

  getCoolInfo(): void {
    console.log(`${this.productName} costs PHP ${this.price}. It was made on ${this.manufactureDate} with a product ID of ${this.productID}. Size of ${this.size}, material of ${this.material}, brand of ${this.brand}.`);
  }

  getCharInfo(): void {
    console.log(`${this.productName} stats: \n- HP: ${this.hp}\n- Mana: ${this.mana}\n- Basic Attack: ${this.price}`);
  }

  basicAttack(opponent: Clothing): void {
    const damage = this.price;
    opponent.hp -= damage;
    console.log(`${this.productName} dealt ${damage} damage!`);
    console.log(`${opponent.productName} has ${opponent.hp} hp remaining.`);
  }

  trickShot(opponent: Clothing): void {
    console.log('This will grant a chance to deal bonus damage to opponent.');
  }

  basicDefend(opponent: Clothing): void {
    console.log('This will grant a chance to defend (receive less damage) from an opponent.');
  }

  ironUp(useMana: number): void {
    console.log('This will use up mana to boost next attack.');
  }

  fold(opponent: Clothing): void {
    console.log('This will make player dodge the attack (100% nullify).');
  }

  repair(): void {
    const regenAmount = Math.ceil(this.maxHp * 0.1);
    this.hp = Math.min(this.hp + regenAmount, this.maxHp);
    console.log(`${this.productName} regenerated to ${this.hp} hp.`);
  }

  wash(): void {
    const regenAmount = Math.ceil(this.maxMana * 0.25);
    this.mana = Math.min(this.mana + regenAmount, this.maxMana);
    console.log(`${this.productName} regenerated to ${this.mana} mana.`);
  }

  taunt(opponent?: Clothing, addedInsult?: string): void {
    console.log('This will do nothing. (Mentally affects the enemy)');
  }

  specialSkill(opponent: Clothing): void {
    console.log('This will launch a special skill.');
  }
}
