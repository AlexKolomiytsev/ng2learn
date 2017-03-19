/*
 * Angular imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

/*
 * Components
 */
import { RootComponent } from './components/root/root.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TrackComponent } from './components/track/track.component';
import { AlbumComponent } from './components/album/album.component'

/*
 * Services
 */
import { SPOTIFY_PROVIDERS } from './services/spotify.service';


import { routes } from './app.routes'

@NgModule({
  declarations: [
    RootComponent,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SPOTIFY_PROVIDERS
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
