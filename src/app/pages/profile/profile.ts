import { Component, inject, input, InputSignal, signal } from '@angular/core';
import { GithubApi } from '../../services/github-api';
import { NotProfile } from './components/not-profile/not-profile';
import { SuccessProfile } from './components/success-profile/success-profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NotProfile, SuccessProfile],
  templateUrl: './profile.html',
})
export class Profile {
  private gitHubService: GithubApi = inject(GithubApi);
  private user: string = 'PablinkiDev';
  public usuarioGithub = signal<any | null>(null);
  public reposGithub = signal<any | null>(null);

  ngOnInit() {
    this.gitHubService.getUser(this.user, this.usuarioGithub);
    this.gitHubService.getRepos(this.user, this.reposGithub);
  }
}
