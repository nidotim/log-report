
import {Types} from '../model/types';

export const TypesData: Types[] = [
  {
    name: 'ErrorCount',
    displayName: 'Error Count',
    sql:
    `select errorCode, count(1) as total
from $table
where requestTime >= '$fromDate' and requestTime < '$toDate'
group by errorCode
order by total desc
`
  },
  {
    name: 'AllError',
    displayName: 'All Error',
    'sql':
    `select node,funcCodeUri,deviceOs,appVersion,did,tid,errorCode,errorMsg,requestTime
from $table
where errorCode is not null
and requestTime >= '$fromDate' and requestTime < '$toDate'
order by requestTime
limit 10000`
  },
  {
    name: 'ByErrorCode',
    displayName: 'By Error Code',
    'sql':
    `select node,funcCodeUri,cookie,deviceOs,appVersion,did,tid,errorCode,errorMsg,requestTime
from $table
where errorCode =
and requestTime >= '$fromDate' and requestTime < '$toDate'
order by requestTime
limit 10000`
  },
  {
    name: 'ByLoginSession',
    displayName: 'By LoginSession',
    'sql':
    `select node,funcCodeUri,deviceOs,appVersion,did,tid,errorCode,errorMsg
from $table
where cookie like '%%'
and requestTime >= '$fromDate' and requestTime < '$toDate'
order by requestTime
limit 10000`
  },
  {
    name: 'ByApi',
    displayName: 'By Api',
    'sql':
    `select node,funcCodeUri,deviceOs,appVersion,did,tid,errorCode,requestTime,responseTime,duration
from $table
where funcCodeUri=''
and requestTime >= '$fromDate' and requestTime < '$toDate'
order by duration desc
limit 10000`
  },
  {
    name: 'ByTime',
    displayName: 'By Time',
    'sql':
    `select node,funcCodeUri,deviceOs,appVersion,did,tid,errorCode,requestTime,responseTime,duration
from $table
where requestTime >= '$fromDate' and requestTime < '$toDate'
order by node, requestTime
limit 10000`
  }, {
    name: 'ByDidCount',
    displayName: 'By Did Count',
    'sql':
    `select did, count(1) as total
from $table
where requestTime >= '$fromDate' and requestTime < '$toDate'
group by did
order by total desc
`
  },
  {
    name: 'ByTidCount',
    displayName: 'By Tid Count',
    'sql':
    `select tid, count(1) as total
from $table
where requestTime >= '$fromDate' and requestTime < '$toDate'
group by tid
order by total desc
`
  },
  {
    name: 'ByDid',
    displayName: 'By Did',
    'sql':
    `select node, apiName, eventType, eventId, did, tid, receiver, requestTime, notifParams
from $table
where requestTime >= '$fromDate' and requestTime < '$toDate'
and did = ''
order by requestTime
`
  },
  {
    name: 'ByTid',
    displayName: 'By Tid',
    'sql':
    `select node, apiName, eventType, eventId, did, tid, receiver, requestTime, notifParams
from $table
where requestTime >= '$fromDate' and requestTime < '$toDate'
and tid = ''
order by requestTime
`
  }
];
