var app = {
    view : function(){
        var ajax = new XMLHttpRequest();
        var me = this;
        ajax.onreadystatechange() = function (){
            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    
                }
            }
        }
        
        
    },
    register : function(){
        var me = this;
        var form = '<div style="margin-left:30%;margin-right:30%;" class="page-content vertical-align-center text-center">'
                +'<div class="brand">'
      +'<img class="brand-img" src="assets/images/logo.png" alt="...">'
        +'<h2 class="brand-text">Remark</h2>'
        +'</div>'
      +'<p>Sign up to find interesting thing</p>'
      +'<form method="post" role="form" autocomplete="off">'
      +'<div class="form-group form-material floating">'
      +'<input class="form-control empty" id="inputName" name="name" type="text">'
          +'<label class="floating-label" for="inputName">Name</label>'
        +'</div>'
        +'<div class="form-group form-material floating">'
          +'<input class="form-control" id="inputEmail" name="email" type="email">'
          +'<label class="floating-label" for="inputEmail">Email</label>'
        +'</div>'
        +'<div class="form-group form-material floating">'
          +'<input class="form-control" id="inputPassword" name="password" type="password">'
          +'<label class="floating-label" for="inputPassword">Password</label>'
        +'</div>'
        +'<div class="form-group form-material floating">'
          +'<input class="form-control empty" id="inputPasswordCheck" name="passwordCheck" type="password">'
          +'<label class="floating-label" for="inputPasswordCheck">Retype Password</label>'
        +'</div>'
        +'<button type="submit" class="btn btn-primary btn-block waves-effect waves-light">Register</button>'
      +'</form>'
      +'<p>Have account already? Please go to <a href="login.html">Sign In</a></p>'

      +'<footer class="page-copyright page-copyright-inverse">'
        +'<p>WEBSITE BY amazingSurge</p>'
        +'<p>© 2016. All RIGHT RESERVED.</p>'
        +'<div class="social">'
          +'<a href="javascript:void(0)">'
            +'<i class="icon bd-twitter" aria-hidden="true"></i>'
          +'</a>'
          +'<a href="javascript:void(0)">'
            +'<i class="icon bd-facebook" aria-hidden="true"></i>'
          +'</a>'
          +'<a href="javascript:void(0)">'
            +'<i class="icon bd-dribbble" aria-hidden="true"></i>'
          +'</a>'
        +'</div>'
      +'</footer>'
    +'</div>';
    
    document.getElementById('ajax-content').innerHTML = form;
    }
};


