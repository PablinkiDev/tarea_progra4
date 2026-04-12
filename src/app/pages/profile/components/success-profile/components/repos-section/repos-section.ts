import { Component, input } from '@angular/core';
import { IGithubRepos } from '../../../../../../interface/igithub-repos';

@Component({
  selector: 'app-repos-section',
  imports: [],
  templateUrl: './repos-section.html',
})
export class ReposSection {
  public repos = input.required<IGithubRepos[]>();

  ngOnDestroy() {
    console.log(this.repos())
  }
}
