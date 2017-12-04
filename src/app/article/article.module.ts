import { ArticleComponent } from './article/article.component';
import { ArticleDataService } from './article-data.service';
import { ArticleListComponent } from './article-list/article-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatGridListModule, MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
  
const routes = [
  { path: 'list', component: ArticleListComponent },
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
    MatGridListModule,
    MatExpansionModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent
  ],
  providers: [
    ArticleDataService
  ]
})
export class ArticleModule { }
