import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { MissionComponent } from './mission/mission.component';
import { FondatoriComponent } from './fondatori/fondatori.component';
import { StatutoComponent } from './statuto/statuto.component';
import { ViaggiComponent } from './viaggi/viaggi.component';
import { EditoriaComponent } from './editoria/editoria.component';
import { ProssimiEventiComponent } from './prossimi-eventi/prossimi-eventi.component';
import { PrimaveraEstateComponent } from './primavera-estate/primavera-estate.component';
import { AutunnoInvernoComponent } from './autunno-inverno/autunno-inverno.component';
import { NewsStampaComponent } from './news-stampa/news-stampa.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HeaderSiteComponent } from './header-site/header-site.component';
import { LaMausoleaComponent } from './la-mausolea/la-mausolea.component';
import { CucinaMacroMediterraneaComponent } from './cucina-macro-mediterranea/cucina-macro-mediterranea.component';
import { RespiroDellaTerraComponent } from './respiro-della-terra/respiro-della-terra.component';
import { GrandeViaDeiPiccoliComponent } from './grande-via-dei-piccoli/grande-via-dei-piccoli.component';
import { MasterComponent } from './master/master.component';
import { LaGuidaNomadeComponent } from './la-guida-nomade/la-guida-nomade.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    
    AppRoutingModule,
    
    AppModule,
    
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
