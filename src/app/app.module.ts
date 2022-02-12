import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { DataService } from './shared/data.service';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService , DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
