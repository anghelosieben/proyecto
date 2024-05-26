import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  
  namePokemon!: string|null;
  tipo:string="";
  name:string="";
  habilidades:string="";
  nro:number=0;
  img:string="";
  constructor(private pokemonService: PokemonService, private route:ActivatedRoute){
  }
  ngOnInit() {
    console.log("**************Esto es el view**************");
    this.namePokemon = this.route.snapshot.params['name'];
    console.log(this.namePokemon);
    this.searhPokemon();    
  }
  searhPokemon(){
    this.habilidades ="";
    console.log("searching pokemon"+this.namePokemon);
    this.pokemonService.searchPokemon(this.namePokemon!).subscribe((res: any) => {
      console.log(res);
      this.img=res.sprites.front_default;
      this.tipo = res.types[0].type.name;
      this.name = res.name;
      this.nro = res.order;
      res.abilities.forEach((ability:any,index:number ) =>{
        console.log(ability.ability.name,index);
          this.habilidades =this.habilidades+", "+res.abilities[index].ability.name;
        });
      
      console.log(this.tipo);
    });
  }
}
