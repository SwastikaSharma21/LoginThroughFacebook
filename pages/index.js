import { useEffect } from 'react';

function loadFacebookSDK(){
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2899189933706013',
      xfbml      : true,
      version    : 'v13.0'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   <>
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0&appId=2899189933706013&autoLogAppEvents=1" nonce="Av2XGwjU"></script>
   </>
   
  
}


export default function Home() {

  useEffect(() =>{
    loadFacebookSDK();
  }, []) ;

  return (
    <div>
        <h1>I am the default page.</h1>
        <p>I am rendered autmatically if my <br/> name is index and i am at Pages folder. Easy in next right</p>
        <h1>Login to my app through Facebook</h1>
        
        
        <div class="fb-login-button" 
             data-width="" 
             data-size="large" 
             data-button-type="login_with" 
             data-layout="default" 
             data-auto-logout-link="true" 
             data-use-continue-as="true">
        </div>
        
    </div>
  )
}
