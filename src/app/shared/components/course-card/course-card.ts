import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
})
export class CourseCard {
  titulo: InputSignal<string> = input('');
  subtitulo: InputSignal<string> = input('');
  imagen: InputSignal<string> = input('');
  textoLink: InputSignal<string> = input('');
  link: InputSignal<string> = input('');
}
