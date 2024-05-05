import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  
  @Input() folderPath:string[]=[]
  @Output() uploadFileEvent=new EventEmitter();
  constructor(private fileUploadService:FileUploadService){}
  
  public onFileSelected(event:any):void{
    const file:File=event.target.files[0];
    this.uploadFile(file);
  }
  public uploadFile(file:File):void{
    this.fileUploadService.uploadFile(file,this.folderPath).subscribe((response)=>{
      console.log("This is the ",response.msg);
      this.uploadFileEvent.emit();
    })
  }
}
