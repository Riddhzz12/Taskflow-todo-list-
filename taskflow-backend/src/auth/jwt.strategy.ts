//JOH TOKEN AAYA WOH REAL YA FAKE CHECK KRTA HAI
import { Injectable } from '@nestjs/common'; //THIS CLASS BE USED IN NESTJS SYSTEM
import { PassportStrategy } from '@nestjs/passport'; //LOGIN SYSTEM KA ENGINE
import { ExtractJwt, Strategy } from 'passport-jwt'; //EXTRAJWT=TOKEN KAHA SE MILEGA? , STRATEGY=TOKEN VERIFY KRNE KA RULE SYSTEM

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { //JWT VERIFICATION SYSTEM
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //YAHA SE TOKEN EXTRACT HOGA
      ignoreExpiration: false, //EXPIRED TOKEN REJECT KRO
      secretOrKey: 'supersecretkey', //SAME AS AUTHMODULE BECAUSE LOGIN>TOKEN GENEARATE AND STRATEGY DONO KO SAME KEY CHAIYE
    });
  }

  async validate(payload: any) {
    console.log("jwt payload:",payload);//PAYLOAD=TOKEN KE ANDAR KA DATA
    return {
      id: payload.id, 
      email: payload.email,
    }; //TOKEN SAHI HAI,YEH USER HAI
  }
}

