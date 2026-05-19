//BACKEND KA SECURITY GATEKEEPER
import { Injectable } from '@nestjs/common'; //THIS CLASS CAN BE USED ANYWHERE
import { AuthGuard } from '@nestjs/passport'; //NESTJS BUILT IN SECURITY SYSTEM

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {} //USE JWT STRATEGY TO PROTECT ROUTES