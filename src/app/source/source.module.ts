import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { SourceComponent } from './source/source.component';
import { AddSourceComponent } from './add-source/add-source.component';
import { SourceListComponent } from './source-list/source-list.component';
import { SourceDataService } from './source-data.service';
import { RouterModule } from '@angular/router';
import { SourceDetailComponent } from './source-detail/source-detail.component';
import { SourceResolver } from './source-resolver.service';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatExpansionModule } from '@angular/material';

const routes = [
  { path: 'list', component: SourceListComponent },
  { path: 'add', component: AddSourceComponent },
  { path: ':id', component: SourceDetailComponent,
    resolve: { source: SourceResolver} }
]

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatExpansionModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SourceComponent,
    AddSourceComponent,
    SourceListComponent,
    SourceDetailComponent,
  ],
  providers: [ 
    SourceDataService,
    SourceResolver 
  ]
})
export class SourceModule { }
