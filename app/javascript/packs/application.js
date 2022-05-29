// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require trix
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"


import "trix"
import "@rails/actiontext"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

<style>
@import url(resrt.css);
</style>

// inside app/frontend/packs/application.js

// Add this line
import '../js/bootstrap_js_files.js'

//toastr javascript
global.toastr = require("toastr")
import "../packs/application"
//javascript
setTimeout(function() {
           toastr.options = {
              "closeButton": true,
              "debug": false,
              "progressBar": true,
              "positionClass": "toast-top-right",
              "onclick": null,
              "showDuration": "500",
              "hideDuration": "1000",
              "timeOut": "5000",
              "extendedTimeOut": "1000",
              "showEasing": "linear",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"
            };

        },1000);

require("trix")
require("@rails/actiontext")
