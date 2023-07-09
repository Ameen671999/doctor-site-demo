import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    swal({
      title: "Get a quick appointment from Dr.Aleem",
      text: "",
      type: "info",
      showConfirmButton: true,
      showCancelButton: true
    }).then((result) => {
      if(result.value){
        this.router.navigate(["/appointment"]);
      }else {
        this.router.navigate(["/"]);
      }
    });;
  }

}