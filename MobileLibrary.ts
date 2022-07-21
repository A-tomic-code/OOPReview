import { Mobile } from "./Mobile";

export class MobileLibrary {
  private name: string;
  private location: string;
  private mobiles: Mobile[];
  private totalPrice: number;

  constructor(name: string, location: string, mobiles: Mobile[]) {
    this.name = name;
    this.location = location;
    this.mobiles = mobiles;
    this.totalPriceCalculation();
  }

  public printLibrary() {
    console.log('This is all my mobiles:');

    for (let i = 0; i < this.mobiles.length; i++) {
        this.mobiles[i].print()
    }

    console.log(`Price overall: ${this.getTotalPrice()}`);
  }

  private totalPriceCalculation(): void {
    let total: number = 0;

    for (let i = 0; i < this.mobiles.length; i++) {
      total += this.mobiles[i].getPrice();
    }

    this.setTotalPrice(total);
  }

  /////////////////////////////////////
  //         GETTER Y SETTER         //
  /////////////////////////////////////

  public getName(): string {
    return this.name;
  }
  public setName(value: string) {
    this.name = value;
  }

  public geLocation(): string {
    return this.location;
  }
  public setLocation(value: string) {
    this.location = value;
  }

  public getMobiles(): Mobile[] {
    return this.mobiles;
  }
  public setMobiles(value: Mobile[]) {
    this.mobiles = value;
  }

  public getTotalPrice(): number {
    return this.totalPrice;
  }
  public setTotalPrice(value: number) {
    this.totalPrice = value;
  }
}
