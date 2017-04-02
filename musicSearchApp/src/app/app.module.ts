/*
 * Angular imports
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

/*
 * Components
 */
import {RootComponent} from './components/root/root.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {TrackComponent} from './components/track/track.component';
import {AlbumComponent} from './components/album/album.component'
import {LoginComponent} from './components/login/login.component';

/*
 * Components` modules
 */
import {ProductsComponentModule} from './components/products/products.component';

/*
 * Services
 */
import {SPOTIFY_PROVIDERS} from './services/spotify.service';
import {AUTH_PROVIDERS} from './services/auth.service'

/*
 * Services
 */
import {LoggedInGuard} from './guards/loggedIn.guard'

/*
 * Routes
 */
import {routes} from './app.routes';

/*
 * ngModule
 */
@NgModule({
  declarations: [
    RootComponent,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ProductsComponentModule
  ],
  providers: [
    SPOTIFY_PROVIDERS,
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}
