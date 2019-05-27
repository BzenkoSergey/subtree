import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'team1',
		pathMatch: 'full'
	},
	{
		path: 'team1',
		loadChildren: './teams/team1.module#Team1WrapperModule'
	},
	{
		path: 'team2',
		loadChildren: './teams/team2.module#Team2WrapperModule'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}
