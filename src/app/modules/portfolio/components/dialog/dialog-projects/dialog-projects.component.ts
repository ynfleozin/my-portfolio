import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interface/IProjects.interface';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef,  } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../../../../shared/shared.module';


@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects){

  }
  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
      this.getData.set(this._data);
  }

  public closeModal(){
    return this._dialogRef.close();
  }
}
