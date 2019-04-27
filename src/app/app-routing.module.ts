import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ChiSiamoComponent} from './chi-siamo/chi-siamo.component';
import {MissionComponent} from './mission/mission.component';
import {FondatoriComponent} from './fondatori/fondatori.component';
import {StatutoComponent} from './statuto/statuto.component';
import {ViaggiComponent} from './viaggi/viaggi.component';
import {EditoriaComponent} from './editoria/editoria.component';
import {ProssimiEventiComponent} from './prossimi-eventi/prossimi-eventi.component';
import {PrimaveraEstateComponent} from './primavera-estate/primavera-estate.component';
import {AutunnoInvernoComponent} from './autunno-inverno/autunno-inverno.component';
import {NewsStampaComponent} from './news-stampa/news-stampa.component';
import {ContattiComponent} from './contatti/contatti.component';
import {LaMausoleaComponent} from './la-mausolea/la-mausolea.component';
import {CucinaMacroMediterraneaComponent} from './cucina-macro-mediterranea/cucina-macro-mediterranea.component';
import {RespiroDellaTerraComponent} from './respiro-della-terra/respiro-della-terra.component';
import {GrandeViaDeiPiccoliComponent} from './grande-via-dei-piccoli/grande-via-dei-piccoli.component';
import {MasterComponent} from './master/master.component';
import {LaGuidaNomadeComponent} from './la-guida-nomade/la-guida-nomade.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'chi-siamo', component: ChiSiamoComponent},
  {path: 'mission', component: MissionComponent},
  {path: 'fondatori', component: FondatoriComponent},
  {path: 'statuto', component: StatutoComponent},
  {path: 'viaggi', component: ViaggiComponent},
  {path: 'editoria', component: EditoriaComponent},
  {path: 'prossimi-eventi', component: ProssimiEventiComponent},
  {path: 'eventi-primavera-estate', component: PrimaveraEstateComponent},
  {path: 'eventi-autunno-inverno', component: AutunnoInvernoComponent},
  {path: 'news-stampa', component: NewsStampaComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'la-mausolea', component: LaMausoleaComponent},
  {path: 'la-cucina-macro-mediterranea', component: CucinaMacroMediterraneaComponent},
  {path: 'il-respiro-della-terra', component: RespiroDellaTerraComponent},
  {path: 'la-grande-via-dei-piccoli', component: GrandeViaDeiPiccoliComponent},
  {path: 'master', component: MasterComponent},
  {path: 'la-guida-nomade', component: LaGuidaNomadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
