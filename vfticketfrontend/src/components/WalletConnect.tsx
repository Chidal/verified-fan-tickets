import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export default function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();

  const handleConnect = async () => {
    try {
      await connect({ connector: new InjectedConnector() });
      // Mock AIR Kit initialization
      console.log('AIR Account initialized for:', address);
    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {isConnected ? (
        <p className="text-green-500">Connected: {address?.slice(0, 6)}...</p>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Connect with AIR Account
        </button>
      )}
    </div>
  );
}