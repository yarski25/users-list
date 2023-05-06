import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { usersReducer } from './state/users.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { PairsPipe } from './pipes/pairs.pipe';
//import { collectionReducer } from './state/collection.reducer';

@NgModule({
  declarations: [AppComponent, 
                 UsersListComponent,
                 PairsPipe],
  imports: [BrowserModule,
            HttpClientModule,
            StoreModule.forRoot({ users: usersReducer }),
            StoreDevtoolsModule.instrument({maxAge: 25})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
