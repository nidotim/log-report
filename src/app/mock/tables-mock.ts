/**
 * New typescript file
 */
import {Tables} from '../model/tables';

export const TablesData: Tables[] = [
  {
    tableName: 'ifl_RestApiLogProd',
    displayName: 'Rest Api Prod',
    types: ['ErrorCount', 'AllError', 'ByErrorCode', 'ByLoginSession', 'ByApi', 'ByTime']
  },
  {
    tableName: 'ifl_RestApiLogStag',
    displayName: 'Rest Api Stag',
    types: ['ErrorCount', 'AllError', 'ByErrorCode', 'ByLoginSession', 'ByApi', 'ByTime']
  },
  {
    tableName: 'ifl_ErlLogProd',
    displayName: 'Erl Log Prod',
    types: ['ByDidCount', 'ByTidCount', 'ByTid', 'ByDid']
  },
  {
    tableName: 'ifl_ErlLogStag',
    displayName: 'Erl Log Stag',
    types: ['ByDidCount', 'ByTidCount', 'ByTid', 'ByDid']
  }
];
