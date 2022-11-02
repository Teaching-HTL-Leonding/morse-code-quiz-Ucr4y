import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncodeComponent } from './encode/encode.component';
import { DecodeComponent } from './decode/decode.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/encode' },
  { path: 'encode', component: EncodeComponent },
  { path: 'decode', component: DecodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
