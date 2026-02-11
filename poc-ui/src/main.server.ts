import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app/app';

export default function bootstrap(context: any) {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideServerRendering()
    ]
  });
}
