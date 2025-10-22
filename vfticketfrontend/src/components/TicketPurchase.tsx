// import { useState } from 'react';
// import { useContractWrite, usePrepareContractWrite } from 'wagmi'; // Commented out
// import { generateZKP } from '@/lib/zkp'; // Commented out

interface TicketPurchaseProps {
  eventId: string;
  tokenURI: string;
}

export default function TicketPurchase({ eventId, tokenURI }: TicketPurchaseProps) {
  // const [proof, setProof] = useState<Uint8Array | null>(null);
  // const [loading, setLoading] = useState(false);

  // const generateProof = async () => {
  //   setLoading(true);
  //   try {
  //     const zkp = await generateZKP({ credentialType: 'fan-loyalty', threshold: 5 });
  //     setProof(zkp.proof);
  //   } catch (error) {
  //     console.error('ZKP generation failed:', error);
  //   }
  //   setLoading(false);
  // };

  // const { config } = usePrepareContractWrite({
  //   address: process.env.NEXT_PUBLIC_TICKET_CONTRACT_ADDRESS as `0x${string}`,
  //   abi: [
  //     {
  //       name: 'mintTicket',
  //       type: 'function',
  //       inputs: [
  //         { name: 'to', type: 'address' },
  //         { name: 'tokenURI', type: 'string' },
  //         { name: 'proof', type: 'bytes' },
  //         { name: 'input', type: 'bytes32' },
  //       ],
  //       outputs: [],
  //       stateMutability: 'nonpayable',
  //     },
  //   ],
  //   functionName: 'mintTicket',
  //   args: ['0x...USER_ADDRESS', tokenURI, proof, '0x...INPUT_HASH'],
  // });

  // const { write } = useContractWrite(config);

  return (
    <div className="mt-6">
      {/* <button
        onClick={generateProof}
        disabled={loading}
        className="btn btn-primary mr-4"
      >
        {loading ? 'Generating Proof...' : 'Verify Fan Status'}
      </button>
      <button
        onClick={() => write?.()}
        disabled={!proof}
        className="btn btn-secondary"
      >
        Buy Ticket
      </button> */}
      <p className="text-moca-gray italic font-medium">Ticket purchase mocked for now</p>
    </div>
  );
}