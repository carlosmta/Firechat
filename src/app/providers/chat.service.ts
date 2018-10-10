import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import * as firebase from 'firebase';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(private afs: AngularFirestore,
              public afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe( user => {
      console.log('Estado del usuario: ', user);

      if (!user) {
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;

      });
    }

  login(proveedor: string) {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(5) );
    return this.itemsCollection.valueChanges()
           .map( (mensajes: Mensaje[]) => {
                console.log(mensajes);

                this.chats = [];
                for (const mensaje of mensajes) {
                  this.chats.unshift(mensaje);
                }

                return this.chats;
           });
  }

  agregarMensaje( texto: string) {
    const mensaje: Mensaje = {
      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date().getTime()
    };
    return this.itemsCollection.add( mensaje );
  }

}
