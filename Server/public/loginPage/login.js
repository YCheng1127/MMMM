//FB login
      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = '//connect.facebook.net/en_US/sdk.js'
        fjs.parentNode.insertBefore(js, fjs)
      }(document, 'script', 'facebook-jssdk'))

      // This is called with the results from from FB.getLoginStatus().
      function statusChangeCallback(response) {
        console.log('statusChangeCallback')
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          testAPI();
        } else if (response.status === 'not_authorized') {
          // The person is logged into Facebook, but not your app.
          document.getElementById('status').innerHTML = 'Please log into this app.'
        } else {
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
          document.getElementById('status').innerHTML = 'Please log into Facebook.'
        }
      }

      // This function is called when someone finishes with the Login
      // Button.  See the onlogin handler attached to it in the sample
      // code below.
      function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response)
        })
      }
//443361516108430
      window.fbAsyncInit = function() {
        FB.init({
          appId  : '443361516108430',
          cookie : true,   // enable cookies to allow the server to access
                           // the session
          version: 'v2.5', // use graph api version 2.5
          xfbml  : true,   // parse social plugins on this page
        })

        // Now that we've initialized the JavaScript SDK, we call
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.
        /*
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response)
        })*/

      }

    

      // Here we run a very simple test of the Graph API after login is
      // successful.  See statusChangeCallback() for when this call is made.
      function testAPI() {
        console.log('Welcome!  Fetching your information.... ')
          FB.api('/me?fields=name,email,picture,friends' , function(response) {
          document.getElementById('status').innerHTML =
                    'Thanks for logging in, ' + response.name + '!';
          console.log(`Successful login for: ${response.name}`);
          console.log(response);
          /*console.log(response.summary);*/
          document.getElementById('picture').innerHTML=`<img id="face" src='http://graph.facebook.com/${response.id}/picture?type=large'  />`
          /*console.log(JSON.stringify(response));*/
          console.log(response.friends.data[0].name) ;     
          console.log(response.friends.data.length);
            //ajax for FB login 傳送名字到後端
            $.ajax({
                method: "post",
                url: "../FBcatchuser",
                data:{
                  username:`${response.name}`,
                  id: `${response.id}`,
                  friends: response.friends.data
      
                },
                success:function(data){
                  console.log(data);//得到使用者資料，或是得到建立好的資料
                }

            })
            //傳送完成

          })

        /*FB.api('/me/taggable_friends', function(response){
          console.log("Hello"+ response);
        
        })*/  

      }

      var logout = function(){
        FB.logout(function(response){
          
          statusChangeCallback(response);
          if(response.status !== 'connected'){
            document.getElementById('status').innerHTML = 'GoodBye';
            setTimeout(function(){
              document.getElementById('status').innerHTML = 'Please log in';
            },2000);
           /* document.getElementById("loginbutton").style.display = "block";*/
            document.getElementById("logoutbutton").style.display = "none";
            document.getElementById("FBlogin").style.display = "block";
          }    
        });        
      };

     var login = function(){
        FB.login(function(response){

          statusChangeCallback(response);
          
          if(response.status==='connected'){
           /* document.getElementById("loginbutton").style.display = "none";*/
            document.getElementById("logoutbutton").style.display = "block";
            document.getElementById("FBlogin").style.display = "none";
          }
        },{scope: 'public_profile,email,user_friends'})
     }

   /*     
  //login by enter name
   var loginenter = function(){
           
      //ajax for FB login 傳送名字到後端
      $.ajax({
          method: "post",
          url: "../catchuser",
          data:{
             username: $("#logintable input[name='username']").val(),
             password: $("#logintable input[name='password']").val(),
          },
          success:function(data){
             console.log("name send");

          }
      })
      //傳送完成
    
      $("#logintable input[name='username']").value="";
      $("#logintable input[name='password']").value="";
   }*/

