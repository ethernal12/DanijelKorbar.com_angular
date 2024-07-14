import {Component, OnInit, SimpleChanges} from '@angular/core';
import {slideInAnimation} from 'src/app/animations/animations';
import {GithubApiService} from 'src/app/services/github-api.service';
import {environment} from 'src/environments/environment.development';
import {map} from "rxjs";
import {ProjectLanguage} from "../../models/gitHub-data";

@Component({
  selector: 'app-github-respositories',
  templateUrl: './github-respositories.component.html',
  styleUrls: ['./github-respositories.component.scss'],
  animations: [slideInAnimation],
})

export class GithubRespositoriesComponent implements OnInit {
  // vsi programski jeziki, lahko narediš tudi zunaj v utils array in črpaš iz tam
  availableLanguages: string[] = [
    'All languages', 'Python', 'JavaScript', 'Vue', 'TypeScript'

  ];
  selectedLanguage: string | undefined;
  repositories: ProjectLanguage[] = [];
  defaultVisibleIndex = 0;


  constructor(private gitHubApiService: GithubApiService) {
  }

  onMouseEnter(index: number) {
    this.defaultVisibleIndex = index;
  }

  // async je zaradi možnega promisa...
  async ngOnInit(): Promise<void> {
    console.log('on init triggered')
    // for promises
    // try {
    //   this.repositories = await this.gitHubApiService.getRepositoriesAsPromise(this.gitHubUser);
    // } catch (error) {
    //   console.log('Error catching repos', error);
    // }

    this.gitHubApiService.getRepositoriesAsObservable('ethernal12').subscribe(data => {
      this.repositories = data;
      console.log(this.repositories, 'responses from service after transform');


    })
  }

  onLanguageSelectionChange(): void {

    this.gitHubApiService.getRepositoriesAsObservable('ethernal12').subscribe(data => {
      console.log(data)
      if (this.selectedLanguage) {
        this.repositories = data.filter(repo => repo.language === this.selectedLanguage);

      }
      if (this.selectedLanguage === 'All languages') {
        this.repositories = data;
      }

    })
  }

  protected readonly onmouseleave = onmouseleave;

}
