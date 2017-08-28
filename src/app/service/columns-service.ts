
import {Columns} from '../model/columns';
import {ColumnsData} from '../mock/columns-mock';

export class ColumnsService {

  getColumns(tableName: string): Columns[] {
    return ColumnsData;
  }

}
