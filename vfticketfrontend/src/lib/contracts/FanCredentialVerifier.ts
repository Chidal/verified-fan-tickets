import { Abi } from 'abitype';

export const fanCredentialVerifierABI: Abi = [
  {
    inputs: [
      { name: '_zkpVerifier', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      { name: 'proof', type: 'bytes' },
      { name: 'input', type: 'bytes32' },
    ],
    name: 'verifyProof',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
];