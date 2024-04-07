import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@products/pages/list/list.component').then(m => m.ListComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./domains/info/pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'product/:id',
        loadComponent: () => import('@products/pages/product-detail/product-detail.component') //Esto se puede
        //porque en el componente product-detail-component.ts defini el export como default para esa clase 
    },
    {
        path: '**',
        loadComponent: () => import('./domains/info/pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
