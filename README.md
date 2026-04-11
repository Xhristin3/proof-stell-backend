# 🖥️ ProofStell Backend API

Backend services for the ProofStell decentralized document verification platform.

---

## 🌍 Overview

The backend acts as a bridge between the frontend and the Stellar blockchain.

It handles:

* Document hashing
* Smart contract interaction
* Metadata storage
* Verification logic

---

## 🚀 Core Features

### 📄 Document Processing

* Generate SHA256 hashes from uploaded documents
* Ensure consistent hashing for verification

---

### 🔗 Blockchain Interaction

* Communicate with Soroban smart contracts
* Register and verify document hashes

---

### 🗄️ Metadata Storage

* Store document metadata in PostgreSQL
* Track issuers, timestamps, and ownership

---

### 🔎 Verification Service

* Accept document uploads
* Return verification results:

  * Verified
  * Not Found
  * Revoked

---

## 🏗️ Architecture

```
Frontend (Next.js)
        ↓
Backend API (NestJS)
        ↓
Soroban Smart Contract
        ↓
Stellar Network
```

---

## 🛠️ Tech Stack

* NestJS
* PostgreSQL
* Prisma ORM
* Stellar SDK
* Multer (file handling)
* Crypto (SHA256 hashing)

---

## 📁 Project Structure

```bash
src/
├── documents/
├── issuers/
├── verification/
├── soroban/
├── prisma/
└── utils/
```

---

## 🔗 API Endpoints

### Issue Document

```http
POST /documents/issue
```

---

### Verify Document

```http
POST /verify
```

---

### Revoke Document

```http
POST /documents/revoke
```

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Run server

```bash
npm run start:dev
```

---

## 🔐 Environment Variables

```env
DATABASE_URL=
SOROBAN_RPC_URL=
STELLAR_NETWORK=
CONTRACT_ADDRESS=
```

---

## 🔐 Security

* Hash-based verification
* Input validation
* Issuer authorization
* Secure blockchain interaction

---

## 🎯 Goals

* Provide reliable verification services
* Ensure accurate blockchain interaction
* Maintain secure document processing

---

**ProofStell Backend — Powering decentralized verification.**
