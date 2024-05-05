import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IMessage } from "../common/common.interface";

@Injectable({providedIn:"root"})

export class FileUploadService{
    constructor(private http:HttpClient)
    {}
    private baseUrl='http://localhost:8080';

    public uploadFile(file:File,folderPath:string[]):Observable<IMessage>{
        const formData:FormData=new FormData();
        formData.append('file',file,file.name);
        formData.append('folderPath', JSON.stringify(folderPath))
        return this.http.post<IMessage>(`${this.baseUrl}/upload`,formData);
    }
}