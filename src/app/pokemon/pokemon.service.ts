import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  vUrl='https://pokeapi.co/api/v2/pokemon/';
  constructor(private http:HttpClient) { }

  searchPokemon(pokemon:string):Observable<any>{
    console.log("searching pokemon");
    return this.http.get(this.vUrl+pokemon)
  }

}
