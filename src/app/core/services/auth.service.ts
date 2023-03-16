import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { LoginData } from '../interfaces/login-data.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }

  login({email, password}: LoginData){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register({email, password}: LoginData){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }
}
