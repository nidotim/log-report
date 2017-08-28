/**
 * New typescript file
 */
import {Tables} from '../model/tables';
import {TablesData} from '../mock/tables-mock';

export class TablesService {

  getTables(): Promise<Tables[]> {
    // return Promise.resolve(TablesData);
    return new Promise<Tables[]>(resolve =>
      setTimeout(() => resolve(TablesData), 2000)
    );
  }
}
