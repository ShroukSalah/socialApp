import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-create-post',
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent implements AfterViewInit{
 ngAfterViewInit(): void {
    initFlowbite();
  }

}
