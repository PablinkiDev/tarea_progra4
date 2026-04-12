import { Component, input } from '@angular/core';
import { IGithubProfile } from '../../../../interface/igithub-profile';
import { StatBadge } from './components/stat-badge/stat-badge';
import { RouterLink } from "@angular/router";
import { IGithubRepos } from '../../../../interface/igithub-repos';
import { ReposSection } from "./components/repos-section/repos-section";

@Component({
  selector: 'app-success-profile',
  imports: [StatBadge, ReposSection],
  templateUrl: './success-profile.html',
})
export class SuccessProfile {
  public profile = input.required<IGithubProfile>();
  public repos = input.required<IGithubRepos[]>();
}
