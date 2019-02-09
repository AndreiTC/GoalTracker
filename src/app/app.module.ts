import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInComponent } from './modules/log-in/log-in.component';
import { LogInService } from './modules/log-in/log-in.service';
import { JwtInterceptor } from './shared/helpers/jwt.interceptor';
import { ErrorInterceptor } from './shared/helpers/error.interceptor';
import { AppComponent } from './modules/app/app.component';
import { MainModule } from './modules/main/main.module';

@NgModule({
  declarations: [
    LogInComponent,
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MainModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    LogInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
