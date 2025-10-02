import { useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { generateZKP } from '@/lib/zkp';

interface TicketPurchaseProps {
  eventId: string;
  tokenURI: string;
}

export default function TicketPurchase({ eventId, tokenURI }: TicketPurchaseProps) {
  const [proof, setProof] = useState<Uint8Array | null>(null);
  const [loading, setLoading] = useState(false);

  const generateProof = async () => {
    setLoading(true);
    try {
      const zkp = await generateZKP({ credentialType: 'fan-loyalty', threshold: 5 });
      setProof(zkp.proof);
    } catch (error) {
      console.error('ZKP generation failed:', error);
    }
    setLoading(false);
  };

  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_TICKET_CONTRACT_ADDRESS as `0x${string}`, // Set in .env
    abi: [
      {
        name: 'mintTicket',
        type: 'function',
        inputs: [
          { name: 'to', type: 'address' },
          { name: 'tokenURI', type: 'string' },
          { name: 'proof', type: 'bytes' },
          { name: 'input', type: 'bytes32' },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
      },
    ],
    functionName: 'mintTicket',
    args: ['0x...USER_ADDRESS', tokenURI, proof, '0x...INPUT_HASH'], // Replace with dynamic values
  });

  const { write } = useContractWrite(config);

  return (
    <div className="mt-4">
      <button
        onClick={generateProof}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-2"
      >
        {loading ? 'Generating Proof...' : 'Verify Fan Status'}
      </button>
      <button
        onClick={() => write?.()}
        disabled={!proof}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-500"
      >
        Buy Ticket
      </button>
    </div>
  );
}