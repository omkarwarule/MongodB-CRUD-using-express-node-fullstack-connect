import { Component } from '@angular/core';
import { OmkarService } from './omkar.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[OmkarService]
})
export class AppComponent implements OnInit
{
   public dataf:any;
   constructor(private obj:OmkarService)
   {
    
   }
   ngOnInit()
   {
      this.obj.getBatches().subscribe(data=>
        {
          this.dataf=data;
        })
   }
}
