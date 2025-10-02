# Verified Fan Tickets DApp 🎟️

Welcome to the **Verified Fan Tickets DApp**, an innovative solution built for the **Moca Network Buildathon** 

This decentralized application (DApp) on **Moca Chain** prevents scalping and bot-driven ticket resales by gating purchases to verified fans using **zero-knowledge proofs (ZKPs)**. It leverages **Moca Network’s AIR Credential Services** for portable fan badges and cross-chain relaying, ensuring fair access and rewarding loyalty with exclusive perks.

## 🚀 What It Does

The **Verified Fan Tickets DApp** restricts ticket purchases to users with **Moca-verified fan credentials** (e.g., past attendance or merchandise ownership proofs).

* Uses **ZKPs** to ensure privacy.
* Issues **portable fan badges** via AIR Credential Services.
* Supports **cross-chain verification** with Animoca Brands’ gaming partners.
* Rewards loyal fans with **exclusive perks**, creating a fairer entertainment ecosystem.

---

## ✨ Features

* **ZKP-Gated Purchases** → Verifies fan eligibility without revealing sensitive data.
* **Soulbound NFTs** → Non-transferable tickets to prevent scalping.
* **AIR Credential Badges** → Portable proofs of fandom across apps and chains.
* **Cross-Chain Relaying** → Integration with Animoca’s 570+ portfolio companies.
* **User-Friendly UI** → Built with Next.js + TailwindCSS.
* **Testnet Deployable** → Runs on **Moca Chain testnet**.

---

## 🎯 The Problem It Solves

Scalping and bots inflate ticket prices, excluding genuine fans and cutting artist/venue revenues. Centralized ticketing systems fail to verify fandom, while Web3 lacks robust identity layers.

This DApp:

* Uses **Moca’s privacy-preserving identity infrastructure**.
* Ensures **fair access** to events.
* Protects **revenue**.
* Builds a **loyal, verified fan base** across entertainment + gaming ecosystems.

---

## 🛠 Tech Stack

* **Frontend:** Next.js, TypeScript, TailwindCSS, Wagmi, viem
* **Blockchain:** Solidity, Hardhat, Moca Chain (testnet)
* **Identity:** `@moca-network/air-kit` (mocked, awaiting official SDK)
* **Privacy:** zk-SNARKs (via circom/Semaphore, mocked)
* **Storage:** IPFS (planned for token metadata)

---

## ⚡ Installation

### Prerequisites

* Node.js (v18+)
* npm or yarn
* MetaMask (or compatible wallet)
* Moca Chain testnet RPC access

### Steps

#### Clone the Repository

```bash
git clone https://github.com/Chidal/verified-fan-tickets.git
cd verified-fan-tickets
```

#### Install Frontend Dependencies

```bash
npm install
```

#### Configure Environment

Create `.env.local` in root:

```env
NEXT_PUBLIC_TICKET_CONTRACT_ADDRESS=0x...TICKET_CONTRACT_ADDRESS
```

Replace with deployed contract address.

#### Backend Setup (Contracts)

```bash
cd contracts
npm install --save-dev hardhat @nomiclabs/hardhat-ethers ethers
```

Configure `hardhat.config.ts`:

```ts
networks: {
  moca-testnet: {
    url: "https://rpc.mocachain-testnet.org",
    accounts: ["PRIVATE_KEY"],
  },
}
```

Compile & Deploy:

```bash
npx hardhat compile
npx hardhat run scripts/deploy.ts --network moca-testnet
```

Update `.env.local` with deployed address.

---

## 🖥 Usage

Run frontend:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

* Connect wallet via **"Connect with AIR Account"**
* Browse events, verify fan status (mock ZKP), and mint soulbound NFT ticket
* View fan badges in profile

💡 **Moca Testnet:** Configure wallet + request test $MOCA tokens from organizers.

---

## 🏗 How We Built It

* **Frontend:** Next.js + TailwindCSS, Wagmi for wallet integration
* **Smart Contracts:** Solidity (VerifiedFanTickets.sol + FanCredentialVerifier.sol), deployed with Hardhat
* **Identity:** Mocked AIR Kit SDK + ZKP verification
* **Timeline:**

  * Days 1-2 → Setup
  * Days 3-5 → Core features
  * Days 6-10 → Testing + polish

---

## 🧩 Challenges We Faced

* SDK unavailable → Mocked AIR Kit
* ZKP simulation without identity oracle
* Enforcing soulbound NFT logic
* Mocking cross-chain relaying for Animoca ecosystem

---

## 📚 What We Learned

* Practical ZKP integration (circom + Semaphore basics)
* Cross-chain relaying design patterns
* Optimized Web3 UI/UX with Next.js + Wagmi
* Hands-on with decentralized identity systems

---

## 🔮 What's Next

* **Wave 2** → Gamified loyalty system ($MOCA rewards + Animoca integrations)
* **Wave 3** → Artist/Venue dashboards for ticket control & analytics
* **Long-Term** → Live event partnerships, ZKP optimization, VC support at Token 2049
