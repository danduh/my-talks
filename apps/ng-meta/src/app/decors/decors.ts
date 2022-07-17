import "reflect-metadata"
import { StorageService } from "../services/storage-service";

export function MyInjection(c: any){

  return function (target: any){
    console.log("MyInjection ===> ", target.name);
    target.prototype.storageKey = "SETTED"
    setTimeout(() => {
      const t = Reflect.getMetadata("storageKeys", target);

      console.log("TimeOut", t);
    }, 0);
    target.prototype.storageKey = "SETTED"
    console.log(target.prototype);
    console.log("MyInjection <=== ");
    return target
  };
}

export function SetStorageKey(){
  return function (target: any, key: any){
    const descr = Object.getOwnPropertyDescriptor(target, key)
    console.log(descr)
    console.log("SetStorageKey ===> ", target);
    setTimeout(() => {
      const t = Reflect.getMetadata("storageKeys", target);
      console.log("TimeOut2", t);
    }, 1);

    console.log("SetStorageKey <== ");
  };
}


export function InjectWithConf(config: any){
  return function (target: any, methodKey: string|symbol, parameterIndex: number): any{
    if (!Reflect.hasMetadata("storageKeys", StorageService)) {
      Reflect.defineMetadata("storageKeys", {}, StorageService);
    }

    let metadata: any = Reflect.getMetadata("storageKeys", StorageService);
    metadata[target.name] = config;

    Reflect.defineMetadata("storageKeys", metadata, StorageService);
    console.log("InjectWithConfINN", target.constructor.prototype);

    StorageService.prototype.storageKey = config
    target.prototype.testService2 = new StorageService();

    // target.prototype.testService.prototype.storageKey = config
    console.log(target.prototype.testService2.runMe('rrr'))
  };
}
