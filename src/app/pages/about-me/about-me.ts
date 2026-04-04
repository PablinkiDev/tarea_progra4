import { Component } from '@angular/core';
import { HeroInstructor } from './components/hero-instructor/hero-instructor';
import { InfoInstructor } from './components/info-instructor/info-instructor';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [HeroInstructor, InfoInstructor],
  templateUrl: './about-me.html',
})
export class AboutMe {}
