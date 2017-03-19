/*
 * Angular
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common'

/*
 * Services
 */
import {SpotifyService} from '../../services/spotify.service'

@Component({
  selector: 'artist',
  template: `
    <div *ngIf="artist">
        <h1>{{artist.name}}</h1>
        
        <p>
            <img src="{{ artist.images[0].url }}" alt="">
        </p>
        
        <p><a href (click)="back()">Back</a></p>
    </div>  `,
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: string
  artist: Object

  constructor(private spotify: SpotifyService,
              private route: ActivatedRoute,
              private location: Location) {
    this.route
      .params
      .subscribe((params) => {
        this.id = params['id']
      })
  }

  ngOnInit(): void {
    this.spotify
      .getArtist(this.id)
      .subscribe((res: any) => this.renderArtist(res))
  }

  back(): void {
    this.location.back()
  }

  renderArtist(res: any): void {
    this.artist = res
  }
}

