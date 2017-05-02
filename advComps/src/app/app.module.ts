import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PopupDirective } from './directives/popup.directive';
import { ContentProjection } from './directives/content-projection.directive'

import { AppComponent } from './components/root/app.component';
import { InlineStyleComponent } from './components/styles/inline-style/inline-style.component';
import { StylesComponent } from './components/styles/styles.component';
import { ExternalStyleComponent } from './components/styles/external-style/external-style.component';
import { NativeEncapsulationComponent } from './components/styles/native-encapsulation/native-encapsulation.component';
import { NoEncapsulationComponent } from './components/styles/no-encapsulation/no-encapsulation.component';
import { HostForPopupComponent } from './components/host-for-popup/host-for-popup.component';
import { TabsExampleComponent } from './components/tabs-example/tabs-example.component';
import { TabComponent } from './components/tabs-example/tab/tab.component';
import { TabsetComponent } from './components/tabs-example/tabset/tabset.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineStyleComponent,
    StylesComponent,
    ExternalStyleComponent,
    NativeEncapsulationComponent,
    NoEncapsulationComponent,
    HostForPopupComponent,
    PopupDirective,
    ContentProjection,
    TabsExampleComponent,
    TabComponent,
    TabsetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//todo: continue with 'Lifecycle Hooks' p.450
