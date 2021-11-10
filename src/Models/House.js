export class House {
  constructor(houseData = {}) {
    this.id = houseData.id
    this.bedrooms = houseData.bedrooms
    this.bathrooms = houseData.bathrooms
    this.year = houseData.year
    this.description = houseData.description
    this.price = houseData.price
    this.levels = houseData.levels
    this.imgUrl = houseData.imgUrl
    this.creatorId = houseData.creatorId
    this.creator = houseData.creator || {}
  }
}