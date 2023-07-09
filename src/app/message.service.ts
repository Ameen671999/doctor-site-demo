import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./appointment";
import swal from "sweetalert2";

@Injectable()
export class MessageService {
  constructor(private httpClient: HttpClient) {}

  postProfile(postData) {
    // console.log("data_value");
    // console.log(postData)
    this.httpClient
      .post("https://ancient-savannah-93783.herokuapp.com/meds/", postData)
      .subscribe(
        data => {
          console.log("Notification sent successfully.", data);
          swal("Our representative will be contacting you soon.");
          // swal(
          //   "Please call +91-89460 93329; +91-99404 06367 and confirm your appointment"
          // );
        },
        error => {
          console.log("Error", error);
          swal(
            "Please call +91-89460 93329; +91-99404 06367 and confirm your appointment"
          );
        }
      );
  }

  postProduct(postData) {
    // console.log("data_value");
    // console.log(postData)
    this.httpClient
      .post("https://ancient-savannah-93783.herokuapp.com/meds/order", postData)
      .subscribe(
        data => {
          console.log("Order details sent successfully.", data);
          swal("Our representative will be contacting you soon.");
        
        },
        error => {
          console.log("Error", error);
          swal(
            "Please call +91-89460 93329; +91-99404 06367 and confirm your appointment"
          );
        }
      );
  }
}
