import { Component, OnInit } from "@angular/core";
import { MlbService } from "./mlb.service";
import { MlbScore } from "./mlb-score.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-mlb",
  templateUrl: "./mlb.component.html",
  styleUrls: ["./mlb.component.scss"]
})
export class MlbComponent implements OnInit {
  scores$: Observable<MlbScore[]> = this.mlbService.getMlbScores();

  constructor(private mlbService: MlbService) {}

  ngOnInit() {
    this.getAllScores();
  }

  getAllScores() {
    // this.mlbService.getMlbScores().subscribe(res => {
    //   this.scores = res;
    // });
  }
}
