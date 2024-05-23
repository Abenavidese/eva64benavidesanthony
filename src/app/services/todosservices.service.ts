import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
import { Todoapps } from '../domain/todoapps';

@Injectable({
  providedIn: 'root'
})
export class TodosservicesService {


  mensajes: string[] = []


  constructor(private firestore : Firestore) { }

  addTodos(todoapps: Todoapps){
    addDoc(collection(this.firestore, 'todoactivity'), Object.assign({}, todoapps))
  }

  getTodos(){
    return getDocs(query(collection(this.firestore, 'todoactivity')))
  }
  clear(){
    this.mensajes = []
  }

  add(todoapps: string){
    this.mensajes.push(todoapps)
  }
}
