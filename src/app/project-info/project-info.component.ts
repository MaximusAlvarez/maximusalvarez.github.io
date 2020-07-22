import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { faGit, faGitAlt } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<ProjectInfoComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  faGit = faGitAlt;
  ngOnInit(): void {
  }

}