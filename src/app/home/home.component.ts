import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public datastore: DatastoreService) { }

  pageTitle: string = "GIG MANAGER";

  concerts = this.datastore.getConcerts();
  listConcerts: string[] = [];

  ngOnInit(): void {
    this.listConcerts = [];
    this.concerts.sort((a, b) => {
      return <any>new Date(a.date) - <any>new Date(b.date);
    });

    this.concerts.forEach(item => {
      let date = new Date(item.date)
      console.log(this.listConcerts.length)
      if ((date > new Date()) && (this.listConcerts.length < 5)){
        this.listConcerts.push((date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " - " + item.venue)
      }
    })
    console.log(this.listConcerts)

  }

}
