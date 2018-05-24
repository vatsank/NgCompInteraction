import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentFactory } from '@angular/core';
import { PizzaComponent } from './pizza/pizza.component';
import { PastaComponent } from './pasta/pasta.component';

@Injectable()
export class CompadderService {

  factory: ComponentFactory<any>;
  viewRef: ViewContainerRef;
  constructor(private factResolver: ComponentFactoryResolver) { }

    setViewContainerRef(view: ViewContainerRef){

      this.viewRef = view;
    }

    addComponent(type: string){

      this.viewRef.detach(0);

       if (type === 'pizza') {
      this.factory = 
        this.factResolver.resolveComponentFactory(PizzaComponent);
       } else {
        this.factory = this.factResolver.resolveComponentFactory(PastaComponent);
          }
       this.viewRef.createComponent(this.factory);

    }
}
