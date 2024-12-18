import { Component } from '@angular/core';
import { Album } from '../models/Album';
import { ConsumerService } from '../services/consumer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {
  albums: Album[] = [];
  subscribers!: Subscription;
  constructor(private _consumer: ConsumerService) {}
  ngOnInit(): void {
    this.subscribers = this._consumer.fetch<Album[]>('album').subscribe({
      next: (data) => (this.albums = data),
      error: (e) => console.log(e),
    });}
}
