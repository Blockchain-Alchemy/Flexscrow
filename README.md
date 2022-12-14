# Flexscrow
[![](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE)

### Summary

This is a robust, flexible and scalable solution that allows secure and transparent escrow transactions, such as hold and give rewards.

![Flexcrow_Demo](https://user-images.githubusercontent.com/2120817/205573560-178b0c03-1d64-46ae-afb1-74577e1625f3.gif)

### Live Demo

https://flexscrow.netlify.app/ 

This is an implementation of Flexcrow with a simple racing game. It has been tested on testnet and is now deployed on mainnet. It requires 1 tez to play, and the winner gets 2 tez.

### White Paper

https://blockchain-alchemy.gitbook.io/flexscrow-whitepaper/

### Concept
We created the most flexible and reusable escrow system that gives gamers an experience they expect. Flexscrow provides the ideal solution for many types of games - It enables rewards in single-player, multi-player, MMOs and even special cases like horse betting.

### UI and UX

Flexcrow uses best practices in UX by implementing the [MUI  framework](https://mui.com/) in react and optimized Unity framework. 

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

Flexscrow is vulnerable to JS injection, this vulnerability is solved with our [Metaverse Anti-Cheat Tool](https://github.com/Blockchain-Alchemy/Metaverse-Anti-Cheat)

### Prerequisites
The following dependencies are required to run Flexscrow:

| Dependency | Version             |
| ---------- | ------------------- |
| Node       | `v12.18.4` or above |

### Maintain Support and Future Plans
Flexcrow is created to be the escorow system we'll be using for all our projects. Some projects that will implement Flexcrow are:
- [PiXLtez](https://github.com/PiXLtez/PiXL-Public)
- [Tez Run](https://github.com/Blockchain-Alchemy/Tez-Run-Public)
