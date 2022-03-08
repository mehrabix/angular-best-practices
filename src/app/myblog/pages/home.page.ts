import { Component, OnInit } from '@angular/core';
import { _galleryListModel } from '../models/home.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
})
export class HomePage implements OnInit {
    
    
    constructor() { }
    ngOnInit(): void { }

    
    _galleryList:_galleryListModel[] = [
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },
        {
            title: 'Gallery 1',
            image:'https://picsum.photos/300/300',
            router:['/gallery']
        },

    ]
}
