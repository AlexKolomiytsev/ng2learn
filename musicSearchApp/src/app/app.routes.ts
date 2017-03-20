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
import {SearchComponent} from "./components/search/search.component";
import {ArtistComponent} from "./components/artist/artist.component";
import {TrackComponent} from "./components/track/track.component";
import {AlbumComponent} from "./components/album/album.component";
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent, canActivate: [LoggedInGuard]},
  {path: 'artists/:id', component: ArtistComponent, canActivate: [LoggedInGuard]},
  {path: 'tracks/:id', component: TrackComponent, canActivate: [LoggedInGuard]},
  {path: 'albums/:id', component: AlbumComponent, canActivate: [LoggedInGuard]},
  {path: 'login', component: LoginComponent}
];
