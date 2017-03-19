import {Routes} from "@angular/router";
import {SearchComponent} from "./components/search/search.component";
import {ArtistComponent} from "./components/artist/artist.component";
import {TrackComponent} from "./components/track/track.component";
import {AlbumComponent} from "./components/album/album.component";

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
];
