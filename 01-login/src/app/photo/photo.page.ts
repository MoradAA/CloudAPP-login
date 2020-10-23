import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {

  constructor(private router:Router,public photoService: PhotoService) { }

  ngOnInit() {
  }

  addPhotoToGallery() 
  {
    this.photoService.addNewToGallery();
  }

}
