import { Component } from '@angular/core';
import { Album } from '../models/Album';
import { Subscription } from 'rxjs';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  f !: Boolean;
hide() {
f :true;
}

  albums: Album[] = [];
  subscribers!: Subscription;
  constructor(private _consumer: ConsumerService) {}
  ngOnInit(): void {
    this.subscribers = this._consumer.fetch<Album[]>('album').subscribe({
      next: (data) => (this.albums = data),
      error: (e) => console.log(e),
    });}


    deleteMenu(id: number) {
      this._consumer.remove<Album>('album', id).subscribe({
        next: () => this.albums = this.albums.filter((c) => c.id != id),
        error: (e) => console.log(e) }) }

}
