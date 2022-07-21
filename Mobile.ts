export class Mobile {
  private name: string;
  private model: string;
  private trademark: string;
  private sdSize: string;
  private color: string;
  private is5G: boolean;
  private cameraNumber: number;
  private price: number;

  constructor(
    name: string,
    model: string,
    trademark: string,
    sdSize: string,
    color: string,
    is5g: boolean,
    cameraNumber: number,
    price: number
  ) {
    this.name = name;
    this.model = model;
    this.trademark = trademark;
    this.sdSize = sdSize;
    this.color = color;
    this.is5G = is5g;
    this.cameraNumber = cameraNumber;
    this.price = price;
  }

  public print():void{
    for(let prop in this){
      switch (prop) {
        case "name":
          console.log(`The characteristics of the mobile ${this.name} are: \n`);
          break;
        case "model":
        case "trademark":
        case "sdSize":
        case "color":
        case "is5G":
        case "cameraNumber":
        case "price":
          console.log(`${prop}: ${eval('this.' + prop)}`);
          break; 
      }
    }
    console.log('');
  }

  public getName(): string {
    return this.name;
  }
  public setName(value: string) {
    this.name = value;
  }

  public getModel(): string {
    return this.model;
  }
  public setModel(value: string) {
    this.model = value;
  }

  public getTrademark(): string {
    return this.trademark;
  }
  public setTrademark(value: string) {
    this.trademark = value;
  }

  public getSdSize(): String {
    return this.sdSize;
  }
  public seSdSize(value: string) {
    this.sdSize = value;
  }

  public getColor(): string {
    return this.color;
  }
  public setColor(value: string) {
    this.color = value;
  }

  public getIs5G(): boolean {
    return this.is5G;
  }
  public setIs5G(value: boolean) {
    this.is5G = value;
  }

  public geCameraNumber(): number {
    return this.cameraNumber;
  }
  public setCameraNumber(value: number) {
    this.cameraNumber = value;
  }

  public getPrice(): number {
    return this.price;
  }
  public setPrice(value: number) {
    this.price = value;
  }
}
