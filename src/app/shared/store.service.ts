import { Injectable } from '@angular/core';
import { Kindergarden } from './interfaces/Kindergarden';
import { Child, ChildResponse } from './interfaces/Child';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  
  public children: ChildResponse[] = []
}
