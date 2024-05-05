import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFolderStructure } from "./folder.interface";

@Injectable({
    providedIn:"root"
})
export class FolderService{
    private baseUrl='http://localhost:8080';
    constructor(private http:HttpClient){}

    public getFolder(path:string[]):Observable<IFolderStructure>{
        const headers = { 'content-type': 'application/json'}  ;
        const body=JSON.stringify({path:path});
        console.log("Calling");
        return this.http.post<IFolderStructure>(`${this.baseUrl}/folderStructure`,body,{'headers':headers});
    }
    public createNewFolder(newFolder:string,path:string[]){
        const headers = { 'content-type': 'application/json'}  ;
        const body=JSON.stringify({path:path,folder:newFolder});
        console.log("CAlling");
        return this.http.post(`${this.baseUrl}/createFolder`,body,{'headers':headers});
    }
}