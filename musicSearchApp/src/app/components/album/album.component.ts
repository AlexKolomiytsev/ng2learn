/*
 * Angular
 */
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common'
import {ActivatedRoute} from '@angular/router'

/*
 * Services
 */
import {SpotifyService} from '../../services/spotify.service'

@Component({
  selector: 'album',
  styleUrls: ['./album.component.scss'],
  template: `
    <div *ngIf="album">
        <h1>{{album.name}}</h1>
        <h2>{{album.artists[0].name}}</h2>
        
        <p>
            <img src="{{album.images[1].url}}">    
        </p>
        
        <h3>Tracks</h3>
        <ol>
            <li *ngFor="let t of album.tracks.items">
                <a [routerLink]="['/tracks', t.id]">
                    {{ t.name }}
                </a>
            </li>
        </ol>
        
        <p><a (click)="back()">Back</a></p>
    </div>
    `
})
export class AlbumComponent implements OnInit {
  id: string
  album: Object


  constructor(private spotify: SpotifyService,
              private route: ActivatedRoute,
              private location: Location) {
    this.route
      .params
      .subscribe((params) => {
        this.id = params['id']
      })
  }

  ngOnInit() {
    this.spotify
      .getAlbum(this.id)
      .subscribe((res: any) => this.renderAlbum(res))
  }

  back(): void {
    this.location.back()
  }

  renderAlbum(res: any): void {
    this.album = res
  }

}
