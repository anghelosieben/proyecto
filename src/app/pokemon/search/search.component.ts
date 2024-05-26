import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  namePokemon: string = "";
  tipo:string="";
  name:string="";
  habilidades:string="";
  nro:number=0;
  sw=false;
  constructor(private pokemonService: PokemonService){
  }
  ngOnInit() {
    
  }
  searhPokemon(){
    this.habilidades ="";
    console.log("searching pokemon"+this.namePokemon);
    this.pokemonService.searchPokemon(this.namePokemon).subscribe((res: any) => {
      console.log("######"+res.status+"######");

      this.tipo = res.types[0].type.name;
      this.name = res.name;
      this.nro = res.order;
      res.abilities.forEach((ability:any,index:number ) =>{
        console.log(ability.ability.name,index);
          this.habilidades =this.habilidades+res.abilities[index].ability.name+", ";
        });
      
      console.log(this.tipo);
      if (res.name != "") {
        console.log('El Pokémon no existe.');
        this.sw=true;
      } else {
        console.log('Ocurrió un error al verificar la existencia del Pokémon.');
      }
    });
    
      
  
  }
}
