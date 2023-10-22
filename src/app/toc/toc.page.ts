import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {

  public chapter1 = [
    {
      title: "Chapter 1 | A Normal Day",
      url: "/chapter1"
    }
  ];

  public chapter2 = [
   
    {
      title: "Chapter 2 | Prophecy",
      url: "/chapter2"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
