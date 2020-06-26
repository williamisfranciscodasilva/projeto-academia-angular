import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from './../movie.model';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movie: Movie = {
  Title: " ",
  Year: " ",
  Genre: " ",
  Director: " ",
  Writer: " ",
  Actors: " ",
  Plot: " "
}
  constructor(
    private movieService: MovieService,
    private router: Router
) { }

  ngOnInit(): void {
  }

  createMovie(): void {
      this.movieService.create(this.movie).subscribe(() => {
      this.movieService.showMessage('Filme criado com sucesso!')
      this.router.navigate(['/filmes'])
  })

}

cancel(): void {
    this.router.navigate(['/filmes'])
}


}
