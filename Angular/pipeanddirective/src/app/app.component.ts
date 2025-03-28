import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  debounceTime,
  interval,
  map,
  Observable,
  of,
  Subscription,
  take,
  tap,
  throttleTime,
} from 'rxjs';

interface Todo {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pipeanddirective';
  datastream$: Observable<any> = of(1, '2', true, [67, 2], 23);
  sbp = new Subscription();
  url = 'https://jsonplaceholder.typicode.com/todos';
  private http = inject(HttpClient);

  // constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Todo[]>(this.url)
      .pipe(
        map((todos: Todo[]) => {
          return todos.map((todo: Todo) => {
            return todo.title;
          });
        })
      )
      .subscribe((todos) => {
        console.log(todos);
      }); // ['title', 'title' ....]

    // this.sbp.add(
    //   this.datastream$.subscribe((data) => {
    //     console.log('obs: ', data);
    //   })
    // );
    // this.sbp.add(
    //   interval(1000) // 0, 1, 2, 3...
    //     .pipe(
    //       take(10),
    //       map((num) => {
    //         return num + ' hello';
    //       }),
    //       tap((d) => {
    //         console.log('1st tap: ', d);
    //       }),
    //       map((num) => {
    //         return num + ' world';
    //       }),
    //       tap((d) => {
    //         console.log('2nd tap: ', d);
    //       })
    //     )
    //     .subscribe((data) => {
    //       console.log(data);
    //     })
    // );
    // Promise.resolve(3).then((data) => {
    //   console.log('promise: ', data);
    // });
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }
}

// rxjs
// lazy eagur
// unsubscribe
// stream
