import { Injectable } from '@angular/core';

// this gives typescript awareness of the 'toastr' variable which is... assumed to exist in the scripts we included in /angular.json
// https://github.com/CodeSeven/toastr 
declare let toastr:any;

@Injectable()
export class ToastrService {
    // wrap each of its four methods 
    // could call the parent method here anything; it's just important that we call 'success()' on the toastr object
    success(message:string, title?:string) {
        toastr.success(message, title);
    }
    info(message:string, title?:string) {
        toastr.info(message, title);
    }
    warning(message:string, title?:string) {
        toastr.warning(message, title);
    }
    error(message:string, title?:string) {
        toastr.error(message, title);
    }
}