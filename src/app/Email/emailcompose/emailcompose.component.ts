import { Component, OnInit } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'app-emailcompose',
  templateUrl: './emailcompose.component.html',
  styleUrls: ['./emailcompose.component.css']
})
export class EmailcomposeComponent implements OnInit {

  constructor(){

  }
  
ngOnInit(): void {
  const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        ['clean']
      ]
    }
  });
}
}
