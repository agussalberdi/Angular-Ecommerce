import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable()
export class ToDoService {
    toDoList: AngularFireList<any>;

    constructor(private firebaseDB: AngularFireDatabase) {}

    getToDoList() {
        this.toDoList = this.firebaseDB.list('titles');
        return this.toDoList;
    }

    addTitle(title: string) {
        this.toDoList.push({
            title,
            isChecked: false
        });
    }

    checkOrUncheckTitle($key: string, flag: boolean) {
        this.toDoList.update($key, { isChecked: !flag });
    }

    removeTitle($key: string) {
        this.toDoList.remove($key);
    }
}