/*création module avec routage👍
ng g m nom_du_module --routing --module=app
création d’un composant sous un module
ng g c Nmodule/Ncomposant
il faut exporter les composant déclarer dans le module li sna3neh :
  exports: [
    NavBarComponentComponent,
    HomeComponentComponent,
    FooterComponentComponent
]
importer le module dans app.module
dans app.component.html :
<div class="wrapper">
<app-nav-bar-component></app-nav-bar-component>
<router-outlet></router-outlet>
<app-footer-component></app-footer-component>
</div>

gestion des route dans app.routing 👍
{ path: 'home', component: HomeComponentComponent },
ou bien si lazy loaded:
étape1: dans le fichier de routage ta3 

module el masnou3 👍
{path:'',component:ListReservationsComponentComponent} 
étape2: fi app-routing:
{path: 'MesReservation',
  loadChildren: () =>
import('./reservation-module/reservation-module.module').then(((m) => m.ReservationModuleModule)),},
marra loula :Nomdossier ta3 module
marra thenia : Nom module 
redirection toujours vers home:
{path:'',redirectTo:'/home',pathMatch: 'full'},
path inexistant 👍
{path:'**' ,component:NotFoundComponentComponent}

dans navbar.html:
<nav>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="display: flex;">
            <li class="nav-item">
                <a class="nav-link active" routerLink="home">Accueil</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" routerLink="MesReservation">Mes réservations</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" routerLink="menu/add">Ajouter un menu</a>
            </li>
        </ul>
    </div>
</nav>
création d’un formulaire 👍
<div class="container">
    <div class="row">
   <form #f="ngForm">
            <div class="mb-3">
                <h1>Menu à proposer</h1>
                <label>Title : </label>
                <input type="text" class="form-control" name="title" [(ngModel)]="menu.title" #title="ngModel"
                    required minlength="3">
                <div *ngIf="title.invalid && (title.dirty || title.touched)" class="text-danger">
                    <div *ngIf="title.errors?.['required']">Le titre est requis.</div>
                    <div *ngIf="title.errors?.['minlength']">Le titre doit contenir au moins 3 caractères.</div>
                </div>
            </div>
            <div class="mb-3">
                <label>Description :</label>
                <input type="text" class="form-control" name="description" [(ngModel)]="menu.description"
                    #description="ngModel" required minlength="10">
                <div *ngIf="description.invalid && (description.dirty || description.touched)" class="text-danger">
                    <div *ngIf="description.errors?.['required']">La description est requise.</div>
                    <div *ngIf="description.errors?.['minlength']">La description doit contenir au moins 10 caractères.</div>
                </div>
            </div>
            <div class="mb-3">
                <input type="submit" [disabled]="f.invalid" value="Submit" class="btn btn-primary">
            </div>
        </form>
    </div>
</div>


dans le module il faut importer 👍
FormsModule
et il faut crier une instance dans le ts 
menu: Menu = new Menu();
CRUD BackEnd:
1crier le service consumer avec port 4000
2 crier le fichier db.json sous backend
{"menu":[]}
3 dans le terminal : cd backend
 json-server-auth db.json --port 4000
4 importer fi module: HttpClientModule
ajouter 👍
etape 1 : dans le ts👍
constructor( private _consumer: ConsumerService, private r:Router){}
  menu: Menu = new Menu();
  add() {
    this.menu.approved = false;
    this.menu.mark=0;
    this._consumer.add<Menu>('menu', this.menu).subscribe({
      next: () => this.r.navigate(['/home']),
      error :(e) => console.log(e)
    })}
dans le html:(click)="add()"
afficher list:

dans le fichier ts 🙂
menus: Menu[] = [];
  subscribers!: Subscription;
  constructor(private _consumer: ConsumerService) {}
  ngOnInit(): void {
    this.subscribers = this._consumer.fetch<Menu[]>('menu').subscribe({
      next: (data) => (this.menus = data),
      error: (e) => console.log(e),
    });}
dans le html:
<div style="margin-bottom: 20px;">
    <ng-container *ngFor="let c of menus">
        <ng-container *ngIf="c.approved">
            <h2>{{ c.title }}</h2>
      <img [src]="c.image" class="img-fluid h-50 w-75">   
        <br/>
         <button [routerLink]="['/details',       c.id]">Détail</button>
            <button >réservé</button>
        </ng-container>
    </ng-container>
</div>

affichage détail composant:
étape1: ajout route dans app-routing 
{path: 'details/:id', component: MenuDetailsComponentComponent },
étape2 : ajouter ce button lil list fi html
<button [routerLink]="['/details', c.id]">Détail</button>
étape3 : dans le ts du composant détail:
 subscriber!: Subscription;
  menu: Menu = new Menu();
  constructor(private _consumer: ConsumerService,
    private route: ActivatedRoute ) {}
  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
    if (id) {this.fetchMenuDetails(+id);}}
  fetchMenuDetails(id: number): void {
    this.subscriber = this._consumer.fetch('menu', id).subscribe({
      next: (data) => (this.menu = data as Menu), // Stocker le menu récupéré
      error: (e) => console.log(e)
      });}
  ngOnDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();}}

      étape4 : dans le html du composant détail:
<div *ngIf="menu">
    <h1>{{ menu.title }}</h1>
    <img [src]="menu.image" alt="{{ menu.title }}" class="img-fluid h-50 w-75" />
    <p>Description : {{ menu.description }}</p>
    <button routerLink="/">Retour</button>
  </div>
Delet componant 👍
dans le html 👍
<button   (click)="deleteMenu(c.id)">delet</button>
dans le ts 👍
  deleteMenu(id: number) {
    this._consumer.remove<Menu>('menu', id).subscribe({
      next: () => this.menus = this.menus.filter((c) => c.id != id),
      error: (e) => console.



      Affichage conditionnel 
<!-- Affichage conditionnel de la note -->
<h2 *ngIf="menu.mark === 0; else showMark">
    Aucune note n’est attribuée à ce menu
  </h2>
  <ng-template #showMark>
    <h2>Note : {{ menu.mark }}</h2>
  </ng-template>
Les pipe
ng g p pipes/Npipe
il faut être standalone puis importer win t7eb 🙂
dans le pipe il faut avoir 👍
@Pipe({
  name: 'filterT',
  standalone: true})

 transform(value: any[], ch:string): any[] {
    if (ch == '') return value;
    return value.filter((e)=>e.title.toLowerCase() == ch.toLowerCase())}
puis l’importer dans le module li t7ebou
fi html
    Search: <input class="form-control" style="margin-bottom:30px" name="title" [(ngModel)]="title">
    <div class="row">
    <ng-container *ngFor="let c of menus| filterT:title">


*/