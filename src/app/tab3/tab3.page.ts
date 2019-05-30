import { Component } from '@angular/core';
import { Property } from '../models';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  properties: Array<Property> = [];

  constructor(
    private navCtrl: NavController,
    private propertyService: PropertyService
  ) {
    console.log(this.propertyService);
    this.propertyService.getAllProperties();
    this.properties = this.propertyService.properties;

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
