import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input ({required: true}) message = '';
  counter = signal(0);
  counterRef: number | undefined;
  constructor()
  {
    //Antes de renderizar
    //No utilizar ni hacer metodos asíncronos en esta sección
    console.log('constructor creado');
    console.log('-'.repeat(10));

  }

  ngOnChanges(changes: SimpleChanges)
  {
    //Antes y durante el renderizado
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes); //Para mostrar los cambios
    const duration = changes['duration'];
    if(duration && duration.currentValue != duration.previousValue)
    {
      this.doSomething();
    }
  }

  ngOnInit()
  {
    //Despues de renderizar el componentes
    //Permite cosas asíncronas
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('Duration state:', this.duration)
    console.log('Message state:', this.message)
    this.counterRef = window.setInterval(()=>{
      console.log('run interval');
      this.counter.update(statePrev => statePrev +1);
    }, 1000)

  }

  ngAfterViewInit()
  { //Este componente se ve después de renderizarse y para ver o saber si los componentes externos
    //ya se rendirizaron
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));

  }

  ngOnDestroy()
  {
    //Visualiza cuando se "destruye" el componente
    console.log('ngDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething()
  {
    console.log('change duration')
  }
}
