import { Component } from '@angular/core';
import { Album } from '../models/Album';
import { ConsumerService } from '../services/consumer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-albums',
  templateUrl: './add-albums.component.html',
  styleUrls: ['./add-albums.component.css']
})
export class AddAlbumsComponent {

  constructor( private _consumer: ConsumerService, private r:Router){}
  album: Album = new Album();
  add() {
  this.album.archived = 0;
  this.album.creationDate=new Date;
    this._consumer.add<Album>('album', this.album).subscribe({
      next: () => this.r.navigate(['/Albums']),
      error :(e) => console.log(e)
    })}

}
