import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import {
  HttpClientModule
} from "@angular/common/http";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { YelpServiceProvider } from "../providers/yelp-service/yelp-service";
import { CuisineServiceProvider } from "../providers/cuisine-service/cuisine-service";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    YelpServiceProvider,
    CuisineServiceProvider,
    Geolocation
  ]
})
export class AppModule {}
