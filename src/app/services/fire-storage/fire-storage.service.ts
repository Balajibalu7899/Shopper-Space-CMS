import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {

  constructor(private afStorage: AngularFireStorage) { }

  async upload(path: string, file: File) {
    return new Promise((resolve, reject) => {
      const filePath = `${path}/${file.name}`;
      const afRef = this.afStorage.ref(filePath);
      const task = this.afStorage.upload(filePath, file)
      task.snapshotChanges().pipe(
        finalize(async () => {
          let downloadURL = await afRef.getDownloadURL().toPromise();
          resolve(downloadURL);
        })
      ).subscribe()
    })
  }

  publicUpload(path: string, file: any) {
    return new Promise(async (resolve) => {
      const bucket = this.afStorage.storage.app.storage('shopper-space-public');
      const fileRef = bucket.ref(path);
      await fileRef.put(file);
      console.log('done');
      resolve('done');
    })
  }
}
