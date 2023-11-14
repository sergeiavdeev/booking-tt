import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import { ResourceComponent } from "./components/resource/resource.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'resources', component: ResourceComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
