import { Abi } from 'abitype';

export const verifiedFanTicketsABI: Abi = [
  {
    inputs: [
      { name: '_verifierContract', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'tokenURI', type: 'string' },
      { name: 'proof', type: 'bytes' },
      { name: 'input', type: 'bytes32' },
    ],
    name: 'mintTicket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
      { name: 'batchSize', type: 'uint256' },
    ],
    name: '_beforeTokenTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];