//FRONTEND SE REQ RECEIVE KRTA HAI AND CORRECT SERVICE KO BHEJTA HAI
import { Controller, Post, Body } from '@nestjs/common'; //NESTJS ke spcl tools
import { AuthService } from './auth.service'; //message forwarder

//controller be like service bhai aaja help karo
@Controller('auth') //@controller=yeh file api routes handle krega, ab /auth ke saare routes will be /auth/...
export class AuthController { //auth related routes ka group
  constructor(private authService: AuthService) {} //controller koservice de douse krne ke liye

  @Post('register')//POST requests handle krega [post=send/save data], frontend register page mein that fetch ..../auth/register yeh is controller tak aara
  register(@Body() body: any) { //body=frontend data i.e. email,password,name idhar milega, frontend ka json yaha aata hai
    return this.authService.register(body.name, body.email, body.password); //controller to service>yeh user register krdo
  }

  @Post('login') //post/auth/login , frontend ke login pe tha fetch..../auth/login yeh yaha aara
  login(@Body() body: any) { //frontend data aaya
    return this.authService.login(body.email, body.password); //controller to serive>check kr bhai user valid hai ya nahi
  }
}

/*
MAIN THING TO UNDERSTAND

Controller khud:
❌ DB save nahi karta
❌ token generate nahi karta
❌ password check nahi karta

Sirf:
✅ request receive karta hai
✅ service ko bhejta hai
✅ response return karta hai
*/

/*
Frontend:
“Hello backend register this user”

↓

Controller:
“Okay wait 😭”
“Service bhai please handle this”
*/