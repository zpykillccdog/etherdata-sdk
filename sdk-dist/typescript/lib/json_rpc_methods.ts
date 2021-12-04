import axios from "axios";
export interface SyncingResponseSyncObject {
  startingBlock: number;
  currentBlock: number;
  highestBlock: number;
}

export interface SyncingResponse {
  syncObject: SyncingResponseSyncObject;
  syncStatus: boolean;
}

export interface Object {
  from: string;
  to: string | undefined;
  gas: string | undefined;
  gasPrice: string | undefined;
  value: string | undefined;
  data: string;
  nonce: string | undefined;
}

export interface Object {
  from: string;
  to: string | undefined;
  gas: string | undefined;
  gasPrice: string | undefined;
  value: string | undefined;
  data: string;
  nonce: string | undefined;
}

export interface Object {
  from: string;
  to: string;
  gas: string | undefined;
  gasPrice: string | undefined;
  value: string | undefined;
  data: string | undefined;
}

export interface Object {
  from: string;
  to: string;
  gas: string | undefined;
  gasPrice: string | undefined;
  value: string | undefined;
  data: string | undefined;
}

export interface GetBlockByHashResponseObject {
  number: string;
  hash: string;
  parnetHash: string;
  nonce: string;
  sha3Uncles: string;
  logsBloom: string;
  transactionsRoot: string;
  miner: string;
  difficulty: string;
  totalDifficulty: string;
  extraData: string;
  size: string;
  gasLimit: string;
  gasUsed: string;
  timestamp: string;
  transaction: string[];
  uncles: string[];
}

export interface GetBlockByNumberResponseObject {
  number: string;
  hash: string;
  parnetHash: string;
  nonce: string;
  sha3Uncles: string;
  logsBloom: string;
  transactionsRoot: string;
  miner: string;
  difficulty: string;
  totalDifficulty: string;
  extraData: string;
  size: string;
  gasLimit: string;
  gasUsed: string;
  timestamp: string;
  transaction: string[];
  uncles: string[];
}

export interface GetTransactionByHashResponseObject {
  blockHash: string;
  blockNumber: string;
  from: string;
  gas: string;
  gasParice: string;
  hash: string;
  input: string;
  nonce: string;
  to: string;
  transactionIndex: string;
  value: string;
  v: string;
  r: string;
  s: string;
}

export interface GetTransactionByHashAndIndexResponseObject {
  data: any;
}

export interface GetTransactionByBlockNumberAndIndexResponseObject {
  data: any;
}

export interface GetTransactionReceiptResponseObject {
  transactionHash: string;
  transactionIndex: string;
  blockHash: string;
  blockNumber: string;
  from: string;
  to: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  contractAddress: string;
  logs: string[];
  logsBloom: string;
  root: string;
  status: string;
}

export interface GetUncleByBlockHashAndIndexResponseObject {
  data: any;
}

export interface GetUncleByBlockNumberAndIndexResponseObject {
  data: any;
}

export interface Object {
  fromBlock: string | undefined;
  toBlock: string | undefined;
  address: string | undefined;
  topics: string | undefined[] | undefined;
}

export interface Array {
  removed: boolean;
  logIndex: string;
  transactionIndex: string;
  transactionHash: string;
  blockHash: string;
  blockNumber: string;
  address: string;
  data: string;
  topics: string[];
}

export interface Object {
  fromBlock: string | undefined;
  toBlock: string | undefined;
  address: string | undefined;
  topics: string | undefined[] | undefined;
  blockhash: string | undefined;
}

/**
 * different methods to perform etd control
 */
export class Json_rpc_methods {
  baseURL: string;
  port?: number;
  url: string;

  constructor(baseURL: string, port?: number) {
    this.baseURL = baseURL;
    this.port = port;
    this.url = port ? `${baseURL}:${port}` : baseURL;
  }
  /**
   * Returns the current etdereum protocol version
   * @return version The current etdereum protocol version
   */
  async protocalVersion(): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_protocalVersion",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the current block number
   * @return blockNumber The current blockNumber
   */
  async blockNumber(): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_blockNumber",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns an object with data about the sync status or false
   * @return syncObject return this ONLY when syncing
   * @return syncStatus return this ONLY when not syncing
   */
  async syncing(): Promise<SyncingResponse> {
    let response = await axios.post(this.url, {
      method: "etd_syncing",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the client coinbase address
   * @return coinbase The client coinbase address
   */
  async coinbase(): Promise<any> {
    let response = await axios.post(this.url, {
      method: "etd_coinbase",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns true if client is actively mining new blocks
   * @return isMining True if client is actively mining new blocks.
   */
  async mining(): Promise<boolean> {
    let response = await axios.post(this.url, {
      method: "etd_mining",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the number of hashes per second that the node is mining with
   * @return hashrate The number of hashes per second that the node is mining with
   */
  async hashrate(): Promise<any> {
    let response = await axios.post(this.url, {
      method: "etd_hashrate",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the current price per gas in wei
   * @return gasPrice The current price per gas in wei (8049999872 Wei in the example)
   */
  async gasPrice(): Promise<any> {
    let response = await axios.post(this.url, {
      method: "etd_gasPrice",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns a list of addresses owned by client
   * @return addressAccount The array of accouts
   */
  async accounts(): Promise<any[]> {
    let response = await axios.post(this.url, {
      method: "etd_accounts",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the balance of the account of given address
   * @param address DATA, 20 Bytes - address to check for balance
   * @param tag QUANTITY_TAG - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return balance QUANTITY - integer of the current balance in wei.
   */
  async getBalance(address: string, tag: string): Promise<number> {
    let response = await axios.post(this.url, {
      method: "etd_getBalance",
      params: [address, tag],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the value from a storage position at a given address
   * @param address DATA, 20 Bytes - address of the storage.
   * @param position The integer of the position in the storage.
   * @param tag QUANTITY_TAG - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return valur The value at this storage position.
   */
  async getStorageAt(address: any, position: any, tag: string): Promise<any> {
    let response = await axios.post(this.url, {
      method: "etd_getStorageAt",
      params: [address, position, tag],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the number of transactions sent from an address
   * @param address The address.
   * @param state QUANTITY_TAG - integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return number The number of transactions send from this address.
   */
  async getTransactionCount(address: any, state: string): Promise<number> {
    let response = await axios.post(this.url, {
      method: "etd_getTransactionCount",
      params: [address, state],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the number of transactions in a block from a block matching the given block hash
   * @param data 20 Bytes - The address
   * @param QUANTITY_TAG integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return QUANTITY The integer of the number of transactions send from this address.
   */
  async getTransactionCountByHash(
    data: string,
    QUANTITY_TAG: string
  ): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_getTransactionCountByHash",
      params: [data, QUANTITY_TAG],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the number of transactions in a block from a block matching the given block hash
   * @param DATA 32 Bytes - The hash of a block
   * @return QUANTITY The integer of the number of transactions in this block.
   */
  async getBlockTransactionCountByHash(DATA: string): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_getBlockTransactionCountByHash",
      params: [DATA],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the number of transactions in a block matching the given block number
   * @param QUANTITY_TAG The integer of a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, see the default block parameter
   * @return QUANTITY The integer of the number of transactions in this block.
   */
  async getBlockTransactionCountByNumber(
    QUANTITY_TAG: string
  ): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_getBlockTransactionCountByNumber",
      params: [QUANTITY_TAG],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the number of uncles in a block from a block matching the given block hash
   * @param DATA 32 Bytes - The hash of a block
   * @return QUANTITY_TAG The integer of the number of uncles in this block.
   */
  async getUncleCountByBlockHash(DATA: string): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_getUncleCountByBlockHash",
      params: [DATA],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the number of uncles in a block from a block matching the given block number
   * @param QUANTITY_TAG The integer of a block number, or the string “latest”, “earliest” or “pending”, see the default block parameter
   * @return QUANTITY The integer of the number of uncles in this block.
   */
  async getUncleCountByBlockNumber(QUANTITY_TAG: string): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_getUncleCountByBlockNumber",
      params: [QUANTITY_TAG],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns code at a given address
   * @param DATA 20 Byter - The address
   * @param QUANTITY_TAG The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return DATA The code from the given address.
   */
  async getCode(DATA: string, QUANTITY_TAG: string): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_code",
      params: [DATA, QUANTITY_TAG],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
* The sign method calculates an etdereum specific signature with sign(keccak256(&quot;\x19etdereum Signed Message:\n&quot; + len(message) + message)))
* 
By adding a prefix to the message makes the calculated signature recognisable as an etdereum specific signature
*  This prevents misuse where a malicious DApp can sign arbitrary data (e
* g
*  transaction) and use the signature to impersonate the victim
* 
Note the address to sign with must be unlocked
* @param a 20 Bytes - The address
* @param b N Bytes - The message to sign
* @return value The signature
*/
  async sign(a: string, b: string): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_sign",
      params: [a, b],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Signs a transaction that can be submitted to the network at a later time using with etd_sendRawTransaction
   * @param Object The transaction object
   * @return DATA The signed transaction object.
   */
  async signTransaction(Object: Object): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_signTransaction",
      params: [Object],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Creates new message call transaction or a contract creation, if the data field contains code
   * @param Object The transaction object
   * @return DATA 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use etd_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
   */
  async sendTranscation(Object: Object): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_sendTranscation",
      params: [Object],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Creates new message call transaction or a contract creation for signed transactions
   * @param DATA The signed transaction data.
   * @return DATA 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available. Use etd_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.
   */
  async sendRawTransaction(DATA: string): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_sendRawTransaction",
      params: [DATA],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Executes a new message call immediately without creating a transaction on the block chain
   * @param Object The transaction object
   * @param QUANTITY_TAG The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter.
   * @return DATA The return value of executed contract.
   */
  async call(Object: Object, QUANTITY_TAG: string): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_call",
      params: [Object, QUANTITY_TAG],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Generates and returns an estimate of how much gas is necessary to allow the transaction to complete
   *  The transaction will not be added to the blockchain
   *  Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance
   * @param Object The transaction object
   * @param QUANTITY_TAG The integer block number, or the string &quot;latest&quot;, &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter.
   * @return QUANTITY The amount of gas used.
   */
  async estimateGas(Object: Object, QUANTITY_TAG: string): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_estimateGas",
      params: [Object, QUANTITY_TAG],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns information about a block by hash
   * @param DATA 32 Bytes - Hash of a block.
   * @param Bool If true it returns the full transaction objects, if false only the hashes of the transactions.
   * @return Object A block object, or null when no block was found
   */
  async getBlockByHash(
    DATA: string,
    Bool: boolean
  ): Promise<GetBlockByHashResponseObject> {
    let response = await axios.post(this.url, {
      method: "etd_getBlockByHash",
      params: [DATA, Bool],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns information about a block by block number
   * @param QUANTITY_TAG The integer of a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
   * @param Bool If true it returns the full transaction objects, if false only the hashes of the transactions.
   * @return Object A block object, or null when no block was found
   */
  async getBlockByNumber(
    QUANTITY_TAG: string,
    Bool: boolean
  ): Promise<GetBlockByNumberResponseObject> {
    let response = await axios.post(this.url, {
      method: "etd_getBlockByNumber",
      params: [QUANTITY_TAG, Bool],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the information about a transaction requested by transaction hash
   * @param DATA 32 Bytes - hash of a transaction
   * @return Object A transaction object, or null when no transaction was found
   */
  async getTransactionByHash(
    DATA: string
  ): Promise<GetTransactionByHashResponseObject> {
    let response = await axios.post(this.url, {
      method: "etd_getTransactionByHash",
      params: [DATA],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns information about a transaction by block hash and transaction index position
   * @param DATA 32 Bytes - hash of a block.
   * @param QUANTITY The integer of the transaction index position.
   * @return Object See etd_getTransactionByHash
   */
  async getTransactionByHashAndIndex(
    DATA: string,
    QUANTITY: string
  ): Promise<GetTransactionByHashAndIndexResponseObject> {
    let response = await axios.post(this.url, {
      method: "etd_getTransactionByHashAndIndex",
      params: [DATA, QUANTITY],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns information about a transaction by block number and transaction index position
   * @param QUANTITY_TAG a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
   * @param QUANTITY The transaction index position.
   * @return Object See etd_getTransactionByHash
   */
  async getTransactionByBlockNumberAndIndex(
    QUANTITY_TAG: string,
    QUANTITY: string
  ): Promise<GetTransactionByBlockNumberAndIndexResponseObject> {
    let response = await axios.post(this.url, {
      method: "etd_getTransactionByBlockNumberAndIndex",
      params: [QUANTITY_TAG, QUANTITY],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the receipt of a transaction by transaction hash
   *  Note That the receipt is not available for pending transactions
   * @param DATA 32 Bytes - hash of a transaction
   * @return Object A transaction receipt object, or null when no receipt was found
   */
  async getTransactionReceipt(
    DATA: string
  ): Promise<GetTransactionReceiptResponseObject> {
    let response = await axios.post(this.url, {
      method: "etd_getTransactionReceipt",
      params: [DATA],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * eturns information about a uncle of a block by hash and uncle index position
   * @param DATA 32 Bytes - The hash of a block.
   * @param QUANTITY The uncle’s index position.
   * @return Object See etd_getTransactionByHash Note - An uncle doesn’t contain individual transactions.
   */
  async getUncleByBlockHashAndIndex(
    DATA: string,
    QUANTITY: string
  ): Promise<GetUncleByBlockHashAndIndexResponseObject> {
    let response = await axios.post(this.url, {
      method: "etd_getUncleByBlockHashAndIndex",
      params: [DATA, QUANTITY],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns information about a uncle of a block by number and uncle index position
   * @param QUANTITY_TAG a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
   * @param QUANTITY the uncle’s index position.
   * @return Object See etd_getTransactionByHash Note - An uncle doesn’t contain individual transactions.
   */
  async getUncleByBlockNumberAndIndex(
    QUANTITY_TAG: string,
    QUANTITY: string
  ): Promise<GetUncleByBlockNumberAndIndexResponseObject> {
    let response = await axios.post(this.url, {
      method: "etd_getUncleByBlockNumberAndIndex",
      params: [QUANTITY_TAG, QUANTITY],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns a list of available compilers in the client
   * @return Array Array of available compilers.
   */
  async getCompliers(): Promise<string[]> {
    let response = await axios.post(this.url, {
      method: "etd_getCompliers",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns compiled solidity code
   * @param String The source code.
   * @return DATA The compiled source code.
   */
  async compileSolidity(String: string): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_compileSolidity",
      params: [String],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns compiled LLL code
   * @param String The source code.
   * @return DATA The compiled source code.
   */
  async complpieLLL(String: string): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_complpieLLL",
      params: [String],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns compiled serpent code
   * @param String The source code.
   * @return DATA The compiled source code.
   */
  async complieSerpent(String: string): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_complieSerpent",
      params: [String],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
* Creates a filter object, based on filter options, to notify when the state changes (logs)
*  To check if the state has changed, call etd_getFilterChanges
* 
A note on specifying topic filters Topics are order-dependent
*  A transaction with a log with topics [A, B] will be matched by the following topic filters
-[] “anything” -[A] “A in first position (and anything after)” -[null, B] “anything in first position AND B in second position (and anything after)” -[A, B] “A in first position AND B in second position (and anything after)” -[[A, B], [A, B]] “(A OR B) in first position AND (A OR B) in second position (and anything after)”
* @param Object The filter options
* @return QUANTITY A filter id.
*/
  async newFilter(Object: Object): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_newFilter",
      params: [Object],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Creates a filter in the node, to notify when a new block arrives
   *  To check if the state has changed, call etd_getFilterChanges
   * @return QUANTITY A filter id.
   */
  async newBlockFilter(): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_newBlockFilter",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Creates a filter in the node, to notify when new pending transactions arrive
   *  To check if the state has changed, call etd_getFilterChanges
   * @return QUANTITY A filter id.
   */
  async newPendingTransactionFilter(): Promise<string> {
    let response = await axios.post(this.url, {
      method: "etd_newPendingTransactionFilter",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Uninstalls a filter with given id
   *  Should always be called when watch is no longer needed
   *  Additonally Filters timeout when they aren’t requested with etd_getFilterChanges
   *  for a period of time
   * @param QUANTITY The filter id.
   * @return Bool true if the filter was successfully uninstalled, otherwise false.
   */
  async uninstallFilter(QUANTITY: string): Promise<boolean> {
    let response = await axios.post(this.url, {
      method: "etd_uninstallFilter",
      params: [QUANTITY],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Polling method for a filter, which returns an array of logs which occurred since last poll
   * @param QUANTITY The filter id.
   * @return Array Array of log objects, or an empty array if nothing has changed since last poll. For filters created with etd_newBlockFilter the return are block hashes (DATA, 32 Bytes), e.g. [&quot;0x3454645634534...&quot;]. For filters created with etd_newPendingTransactionFilter the return are transaction hashes (DATA, 32 Bytes), e.g. [&quot;0x6345343454645...&quot;].
   */
  async getFilterChanges(QUANTITY: string): Promise<Array[]> {
    let response = await axios.post(this.url, {
      method: "etd_getFilterChanges",
      params: [QUANTITY],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns an array of all logs matching filter with given id
   * @param QUANTITY The filter id.
   * @return Array See etd_getFilterChanges.
   */
  async getFilterLogs(QUANTITY: string): Promise<any[]> {
    let response = await axios.post(this.url, {
      method: "etd_getFilterLogs",
      params: [QUANTITY],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns an array of all logs matching a given filter object
   * @param Object The filter options
   * @return Array See etd_getFilterChanges.
   */
  async getLogs(Object: Object): Promise<any[]> {
    let response = await axios.post(this.url, {
      method: "etd_getLogs",
      params: [Object],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Returns the hash of the current block, the seedHash, and the boundary condition to be met (“target”)
   * @return Array Array with the following properties -DATA, 32 Bytes - current block header pow-hash -DATA, 32 Bytes - the seed hash used for the DAG. -DATA, 32 Bytes - the boundary condition (“target”), 2^256  difficulty.
   */
  async getWork(): Promise<string[]> {
    let response = await axios.post(this.url, {
      method: "etd_getWork",
      params: undefined,
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Used for submitting a proof-of-work solution
   * @param a 8 Bytes - The nonce found (64 bits)
   * @param b 32 Bytes - The header’s pow-hash (256 bits)
   * @param c 32 Bytes - The mix digest (256 bits)
   * @return Bool returns true if the provided solution is valid, otherwise false.
   */
  async submitWork(a: string, b: string, c: string): Promise<boolean> {
    let response = await axios.post(this.url, {
      method: "etd_submitWork",
      params: [a, b, c],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }

  /**
   * Used for submitting mining hashrate
   * @param Hashrate A hexadecimal string representation (32 bytes) of the hash rate
   * @param ID String - A random hexadecimal(32 bytes) ID identifying the client
   * @return Bool Returns `true` if submitting went through succesfully and `false` otherwise.
   */
  async submitHashrate(Hashrate: string, ID: string): Promise<boolean> {
    let response = await axios.post(this.url, {
      method: "etd_submitHashrate",
      params: [Hashrate, ID],
      jsonrpc: "2.0",
      id: 1,
    });

    return response.data.result;
  }
}
