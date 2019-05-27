import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibModule } from '@harmony102/foo';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,

		LibModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}
