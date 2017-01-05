import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { CategoryService } from './category.service';

@Component({
    templateUrl : './category-detail.component.html',
    providers: [CategoryService] 
})
export class CategoryDetailComponent implements OnInit {
    category: any;
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _categoryService: CategoryService) {}

    ngOnInit(): void {
        this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getCategory(id);
            }
        );
    }   

    getCategory(id: number) {
        this._categoryService.getCategory(id).subscribe(
            category => this.category = category,
            error => this.errorMessage
        )
    }         



}