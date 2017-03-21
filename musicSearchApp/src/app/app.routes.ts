/*
 * Angular imports
 */
import {Routes} from "@angular/router";

/*
 * Guards
 */
import {LoggedInGuard} from './guards/loggedIn.guard'

/*
 * Components
 */
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {TrackComponent} from './components/track/track.component';
import {AlbumComponent} from './components/album/album.component';
import {LoginComponent} from './components/login/login.component';
import {ProductsComponent} from './components/products/products.component';

/*
 * Child routes
 */
import {routes as ProductsRoutes} from './components/products/products.component'

/*
 * Routes
 */
export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'search', component: SearchComponent, canActivate: [LoggedInGuard]},
  {path: 'artists/:id', component: ArtistComponent, canActivate: [LoggedInGuard]},
  {path: 'tracks/:id', component: TrackComponent, canActivate: [LoggedInGuard]},
  {path: 'albums/:id', component: AlbumComponent, canActivate: [LoggedInGuard]},
  {path: 'products', component: ProductsComponent, children: ProductsRoutes, canActivate: [LoggedInGuard]}
];
