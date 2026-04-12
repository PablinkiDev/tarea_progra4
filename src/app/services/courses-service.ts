import { Injectable } from '@angular/core';
import { ICourse } from '../interface/icourse';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: Array<ICourse> = [
    {
      id: '1',
      titulo: "Backend Escalable",
      subtitulo: "Domina el framework NestJS para construir APIs robustas.",
      precio: 139,
      imagen: "backend-course.webp",
      textoLink: "Ver curso",
      link: "",
    },
    { 
      id: '2',
      titulo: "Bases de Datos NoSQL",
      subtitulo: "Gestión eficiente de datos modernos con MongoDB",
      precio: 129,
      imagen: "nosql-course.webp",
      textoLink: "Saber más",
      link: ""
    },
    { 
      id: '3',
      titulo: "Agile & Productividad",
      subtitulo: "Aplicá Metodologías Agiles para equipos de alto rendimiento.",
      precio: 99,
      imagen: "agile-course.webp",
      textoLink: "Ver programa",
      link: ""
    },
    { 
      id: '4',
      titulo: "Java",
      subtitulo: "Aprendé Java desde cero y construí aplicaciones sólidas con buenas prácticas.",
      precio: 159,
      imagen: "java-course.webp",
      textoLink: "Inscribirme",
      link: ""
    },
    { 
      id: '5',
      titulo: "Figma & UX/UI",
      subtitulo: "Diseñá interfaces atractivas y mejorá la experiencia de usuario con Figma.",
      precio: 119,
      imagen: "figma-course.webp",
      textoLink: "Más información",
      link: ""
    },
    { 
      id: '6',
      titulo: "Engineer Prompt",
      subtitulo: "Aprendé a crear prompts efectivos para potenciar tu trabajo con inteligencia artificial.",
      precio: 199,
      imagen: "ia-course.webp",
      textoLink: "Acceder curso",
      link: ""
    }

  ]

  getCourses() {
    return this.courses
  }
}
