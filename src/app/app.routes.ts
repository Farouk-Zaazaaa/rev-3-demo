import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MobileComponent } from './mobile/mobile.component';
import { TabletComponent } from './tablet/tablet.component';
import { IpadComponent } from './ipad/ipad.component';
import { DesktopComponent } from './desktop/desktop.component';

export const routes: Routes = [
    {path: "" , redirectTo: "home" , pathMatch : "full"},

    {path: "home" , component: HomeComponent},
    {path: "contact" , component: ContactComponent},
    {path : "about" , component: AboutComponent , children: [
        {path: "mobile" , component: MobileComponent},
        {path: "tablet" , component: TabletComponent},
        {path: "ipad" , component: IpadComponent},
        {path: "desktop" , component: DesktopComponent},
    ]},

    {path: "**" , component : NotfoundComponent},
];
