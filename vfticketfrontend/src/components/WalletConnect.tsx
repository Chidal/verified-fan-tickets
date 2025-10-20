// import { useAccount, useConnect } from 'wagmi'; // Commented out
// import { InjectedConnector } from 'wagmi/connectors'; // Commented out

export default function WalletConnect() {
  // const { address, isConnected } = useAccount();
  // const { connect } = useConnect();

  // const handleConnect = async () => {
  //   try {
  //     await connect({ connector: new InjectedConnector() });
  //     console.log('AIR Account initialized for:', address);
  //   } catch (error) {
  //     console.error('Connection failed:', error);
  //   }
  // };

  return (
    <div className="flex items-center space-x-4">
      {/* {isConnected ? (
        <p className="text-moca-green font-medium">Connected: {address?.slice(0, 6)}...</p>
      ) : (
        <button
          onClick={handleConnect}
          className="btn btn-primary"
        >
          Connect with AIR Account
        </button>
      )} */}
      <p className="text-moca-gray font-medium">Wallet connection</p>
    </div>
  );
}