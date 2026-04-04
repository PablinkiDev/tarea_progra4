import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Topics } from './components/topics/topics';

@Component({
  selector: 'app-welcome',
  imports: [Hero, Topics],
  templateUrl: './welcome.html',
})
export class Welcome {}
