import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersListComponent } from './components/users-list/users-list.component';

import { HttpClientModule } from '@angular/common/http';

import { PairsPipe } from './pipes/pairs.pipe';

import { usersReducer } from './state/users.reducer';
import { collectionReducer } from './state/collection.reducer';

@NgModule({
  declarations: [AppComponent, UsersListComponent, PairsPipe],
  imports: [BrowserModule, HttpClientModule, StoreDevtoolsModule, StoreModule.forRoot({ users: usersReducer, collection: collectionReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
