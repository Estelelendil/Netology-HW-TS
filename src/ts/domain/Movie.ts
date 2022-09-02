import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
      readonly year:number,
      readonly country: string,
      readonly tagline: string,
      readonly genre: string,

      readonly id: number,
      readonly name: string,
      readonly author: string,
      readonly price: number,
  ) { }
}
