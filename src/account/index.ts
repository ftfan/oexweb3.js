import * as utils from '../utils';

export async function getNonce(accountName: string) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getNonce', params: [accountName], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getAssetInfoById(assetId: number) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getAssetInfoByID', params: [assetId], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getAssetInfoByName(assetName: string) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getAssetInfoByName', params: [assetName], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getAccountNumber() {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getAccountNumber', params: [], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getAccountByName(accountName: string) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getAccountByName', params: [accountName], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getAccountById(accountId: number) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getAccountByID', params: [accountId], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getAccountExByName(accountName: string) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getAccountExByName', params: [accountName], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getAccountExById(accountId: number) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getAccountExByID', params: [accountId], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function isAccountExist(accountName: string) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_accountIsExist', params: [accountName], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getAccountBalanceById(accountName: string, balanceId: number) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getAccountBalanceById', params: [accountName, balanceId], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getCode(accountName: string) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getCode', params: [accountName], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getAccountBalanceByTime(accountName: string, assetId: number, bIncludeSubAsset: any, time) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getAccountBalanceByTime', params: [accountName, assetId, bIncludeSubAsset, time], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getAssetAmountByTime(assetId, time) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getAssetAmountByTime', params: [assetId, time], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getLastestSnapshotTime() {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getSnapshotLast', params: [], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export async function getSnapshotByTime(whichOne, time) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0', method: 'account_getSnapshotTime', params: [whichOne, time], id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export default {
  getNonce,
  getAssetInfoById,
  getAssetInfoByName,
  getAccountNumber,
  getAccountByName,
  getAccountById,
  getAccountExByName,
  getAccountExById,
  isAccountExist,
  getAccountBalanceById,
  getCode,
  getAccountBalanceByTime,
};
