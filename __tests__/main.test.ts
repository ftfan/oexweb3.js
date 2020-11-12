import oex from '../src';

describe('test some function', () => {
  // Read more about fake timers
  // http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  jest.useFakeTimers();

  const NodeAddr = 'https://testnet-bj.oexchain.com';

  // Act before assertions
  beforeAll(async () => {
    await oex.utils.setProvider(NodeAddr);
    jest.runOnlyPendingTimers();
  });

  it('oex.action.readContract', async () => {
    const contract = 'd4a5c7ce81d3';
    const id = await oex.action.readContract(
      'aaabbbccc00001',
      contract,
      {
        funcName: 'owner',
        types: [],
        values: [],
      },
      'latest'
    );

    const account = await oex.account.getAccountByName('aaabbbccc00001');
    expect(parseInt(id)).toBe(account.accountID);
  });
});
