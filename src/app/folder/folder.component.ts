import { Component, Input, OnInit } from '@angular/core';
import { IFolderStructure } from './folder.interface';
import { FolderService } from './folder.data.service';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-folder',
  standalone: true,
  imports: [CommonModule,FileUploadComponent,FormsModule],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.css'
})
export class FolderComponent implements OnInit {
  public path:string[]=[];
  public folderStructure:IFolderStructure={folders:[],files:[]};
  public newFolder:string="";
  constructor(private folderDataService:FolderService){

  }
  ngOnInit(): void {
    this.getFolderStructure();
  }

  private getFolderStructure(){
    this.folderDataService.getFolder(this.path).subscribe((folder)=>{
      this.folderStructure=folder;
    });
  }

  public back(){
    if(this.path.length>=1)
      {
        this.path.pop();
        this.getFolderStructure();
      }
  }
  public createNewFolder(){
    this.folderDataService.createNewFolder(this.newFolder,this.path).subscribe(response => {
      console.log('Folder created successfully:');
      this.getFolderStructure();
    }, error => {
      console.error('Error creating folder:', error);
    });
  }

  public changeFolder(name:string){
    this.path.push(name);
    console.log(this.path);
    this.getFolderStructure();
  }
  public newFileUploaded(){
    console.log("Here");
    this.getFolderStructure();
  }
}
