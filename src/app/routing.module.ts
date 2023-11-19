import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { ResourceComponent } from "./components/resource/resource.component";
import { MainComponent } from "./components/main/main.component";
import { TrainingComponent } from "./components/training/training.component";
import { TournamentComponent } from "./components/tournament/tournament.component";
import { RentComponent } from "./components/rent/rent.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'services', component: ResourceComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'tournament', component: TournamentComponent},
  {path: 'rent', component: RentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
