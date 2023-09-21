import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {environment} from 'src/environments/environment.development';
import {exe} from "../utils/toPromise";
import {ProjectLanguage} from "../models/gitHub-data";

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  observable: Observable<any> | undefined
  projectData: ProjectLanguage[] = [];
  gitHubToken: string = environment.GIT_HUB_TOKEN;
  private apiUrl:string = 'https://api.github.com';
  private headers: HttpHeaders = new HttpHeaders({
    "Accept": "application/vnd.github.v3+json",
    Authorization: this.gitHubToken
  });

  constructor(private http: HttpClient) {
  }

  getRepositoriesAsPromise(username: string): Promise<any> {
    const url: string = `${this.apiUrl}/users/${username}/repos/languages`;
    this.observable = this.http.get(url, {headers: this.headers})
    return exe(this.observable) // returns a promise
  }


  getRepositoriesAsObservable(username: string): Observable<ProjectLanguage[]> {
    const url: string = `${this.apiUrl}/users/${username}/repos`;
    // prvi return vrne observable in potem lahko pokličeš subscribe v componenti, čene vrne undefined
    return this.http.get<any>(url, {headers: this.headers}).pipe(
      tap(response => {
        console.log(response, 'initial reponses before transform')
      }),
      map((response: ProjectLanguage[]) => {
        // drugi return pošlje narejene objekte iz map v tap in ta jih sprejme in nafila v array
        return response.map(repo => (
            {
              name: repo.name,
              language:repo.language,
              html_url: repo.html_url,
              id: repo.id,
            }
          )
        )
      }),
      tap(transformData => {
        this.projectData.push(...transformData);
      })
    )
  }
}
