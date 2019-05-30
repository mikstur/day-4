import { Injectable } from '@angular/core';
import { Property } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public properties: Array<Property> = [];

  constructor() { }

  getAllProperties() {
    this.properties = [];

    let property1 = new Property();
    property1.id = 1;
    property1.name = "One";

    let property2 = new Property();
    property2.id = 2;
    property2.name = "Two";

    this.properties.push(property1);
    this.properties.push(property2);
  }

  // Returns null if not found.
  findPropertyById(id: number): Property {
    let foundProperty: Property = null;

    this.properties.forEach(
      (property: Property) => {
        if (property.id == id) {
          foundProperty = property;
        }
      }
    );

    return foundProperty;
  }

}
