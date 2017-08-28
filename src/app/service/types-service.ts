/**
 * New typescript file
 */

import {Types} from '../model/types';
import {TypesData} from '../mock/types-mock';


export class TypesService {

  getTypes(): Promise<Types[]> {
    return this.getTypesData();
    // return this.getTypesSlowly();
  }

  getTypesData(): Promise<Types[]> {
    return Promise.resolve(TypesData);
  }

  getTypesSlowly(): Promise<Types[]> {
    return new Promise<Types[]>(resolve =>
      setTimeout(() => resolve(this.getTypesData()), 2000)
    );
  }
}
