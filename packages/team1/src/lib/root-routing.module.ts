import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Team1Component } from './root.component';

const routes: Routes = [
	{
		path: '',
		component: Team1Component
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})

export class Team1RoutingModule {}
