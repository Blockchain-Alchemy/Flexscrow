# Flexscrow
[![](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE)

Extensible Escrow system for Gaming Rewards on Tezos

### Live Demo

https://flexscrow.netlify.app/

### White Paper

https://app.gitbook.com/o/aTWt2obfN1vNq08b4M9B/s/jqAvpLnkm8KsKyP709L8/

### Concept
We created the most flexiable and re-usable escrow system that gives gamers an expereince they expect. Flexscrow provides the ideal solution for many types of games - It enables rewards in single-player, multi-player, MMOs and even special cases like horse betting.

### UI and UX

Flexcrow uses best practices in UX, by implementing the [MUI  framework](https://mui.com/) in react and optimized Unity framework. 

### Components
- Game Layer (Unity, react, next)
- Server Layer (node)
- Smart Contract Layer (Michelson)

### Smart Contracts

Mainnet:
- Escrow: "KT1R2Uo6Q3o4emoPekgbEPs2eQMpqXfravSC"
- uUSD: "KT1XRPEPXbZK25r3Htzp2o1x7xdMMmfocKNW"

JAKARTANET Testnet:
- Escrow: "KT1QqTCsHghND8gfeG55w2pWCskZpFFgjVCV"
- uUSD: "KT1Xf83TTyDDxYxr1x2jKFjHXcCsD4RSnaE5"


### System Diagram

![Flexcrow Flow Chart](https://user-images.githubusercontent.com/2120817/205564205-d8d43651-c144-4402-9f5c-949bae064286.jpg)

### Limitations, Potential Risks and Security Questions

Flexscrow is vulnerable to JS injection, this vulnarability is solved with our [Metaverse Anti-Cheat Tool](https://github.com/Blockchain-Alchemy/Metaverse-Anti-Cheat)

### Prequisites
The following dependencies are required to run Flexscrow:

| Dependency | Version             |
| ---------- | ------------------- |
| Node       | `v12.18.4` or above |
