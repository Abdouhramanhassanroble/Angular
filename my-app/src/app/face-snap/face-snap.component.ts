import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date; 
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Ibrahim';
    this.description = 'Habite a Evry';
    this.createdDate = new Date();
    this.snaps = 6;  
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = 'Oh, Snap !';
  }
  onSnap() {
    if(this.buttonText === 'Oh, Snap !'){
      this.snaps++;
      this.buttonText = ' Oops, un Snap !';
    } else {
      this.snaps--;
      this.buttonText = ' Oh, Snap !';
    }
    
  }
}
