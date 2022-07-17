import { MyInjection, SetStorageKey } from "../decors/decors";

// @MyInjection('p')
export class StorageService{
   public storageKey: any;

  constructor() {
    console.log('CONSTRUCTOR', this.storageKey)
  }

  runMe(c:any) {
    console.log('runMe => ', c , this.storageKey);
  }
}
