import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Topics } from './components/topics/topics';
import { ProductCard } from './components/product-card/product-card';
import { OtherCourses } from './components/other-courses/other-courses';

@Component({
  selector: 'app-welcome',
  imports: [Hero, Topics, ProductCard, OtherCourses],
  templateUrl: './welcome.html',
})
export class Welcome {}
