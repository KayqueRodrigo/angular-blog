import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent implements OnInit {

  photoCover:string = ""
  contentTitle:string= ""
  contentDescription:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( valeu =>
      this.id = valeu.get("id")
    )
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(
                          article => article.id === id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.discription
    this.photoCover = result.photoCover
  }
}
