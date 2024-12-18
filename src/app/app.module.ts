import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterTitlePipe } from './pipes/filter-title.pipe';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArchiveComponent } from './archive/archive.component';
import { AddAlbumsComponent } from './add-albums/add-albums.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ListPhotosComponentComponent } from './list-photos-component/list-photos-component.component';

const routes: Routes = [
  { path: 'Albums', component: AlbumsComponent},
  { path: 'Archive', component: ArchiveComponent},
  { path: 'AddAlbums', component: AddAlbumsComponent},
  {path:'home',component: HomeComponentComponent},
  {path: 'photos/:id', component: ListPhotosComponentComponent },
  {path:'',redirectTo:'/home',pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    AlbumsComponent,
    ArchiveComponent,
    AddAlbumsComponent,
    HomeComponentComponent,
    ListPhotosComponentComponent
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
