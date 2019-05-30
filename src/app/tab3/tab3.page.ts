import { Component } from '@angular/core';
import { Property } from '../models';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  properties: Array<Property> = [];

  constructor(
    private navCtrl: NavController
  ) {

    let property1 = new Property();
    property1.id = 1;
    property1.name = "One";

    let property2 = new Property();
    property2.id = 2;
    property2.name = "Two";

    this.properties.push(property1);
    this.properties.push(property2);

  }

  navToProperty(property: Property) {
    // Another way of calling this
    // let navOptions: NavigationOptions = {
    //   queryParams: {
    //     q: "ionic",
    //     propertyName: property.name
    //   }
    // };
    // this.navCtrl.navigateForward("property-details", navOptions);

    this.navCtrl
      .navigateForward("property-details", {
        queryParams: {
          q: "ionic",
          propertyName: property.name,
          propertyId: property.id
        }
      });
  }

}
