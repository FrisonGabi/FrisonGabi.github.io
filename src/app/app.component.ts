import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    from_name:['',Validators.required],
    user_email:['',[Validators.required, Validators.email]],
    message:['',Validators.required]
  })

  menuActive:boolean = false

  constructor( private fb:FormBuilder){}
  
  ngOnInit(): void {
    //alert('Page in progress')
  }

  menu() {
    this.menuActive = !this.menuActive
    console.log(this.menuActive);
    
  }

  campoValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  enviar(e: Event) {
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }
    e.preventDefault();
    emailjs.sendForm('service_36j68sa', 'template_vzr26zo',e.target as HTMLFormElement,'KXFlRxAJSKScn4LxA')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    this.miFormulario.reset()
  }


  about() {
    document.getElementById('about')?.scrollIntoView({behavior:'smooth'})
  }
  skills() {
    document.getElementById('skills')?.scrollIntoView({behavior:'smooth'})
  }
  portfolio() {
    document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'})
  }
  contact() {
    document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})
  }




}
