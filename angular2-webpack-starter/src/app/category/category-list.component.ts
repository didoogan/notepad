import { Component, OnInit } from '@angular/core';

import { CategoryService } from './category.service';

@Component({
    // selector: 'category',
    templateUrl: './category-list.component.html',
    providers: [CategoryService]
    // template: `
    //     <h2>Component List: </h2>
    //     <h3>Dich detected</h3>
    // `
})
export class CategoryComponent implements OnInit {
    categoryes: any[];
    errorMessage: string;

    constructor(private _categoryService: CategoryService) {}
    ngOnInit(): void {
        this._categoryService.getCategoryes()
            .subscribe(categoryes => this.categoryes=categoryes,
            error => this.errorMessage=<any>error);
    }
}