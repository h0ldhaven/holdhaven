<div align="center">
    <img src="./public/images/png/profil.png" style="width: 10rem" alt="website logo">
    <h1>🌐 holdhaven.fr</h1>
</div>

<div align="center">
    <img style="margin: 0 1em" src="https://img.shields.io/badge/node-24.4.1-5FA04E?logo=nodedotjs&style=for-the-badge" alt="Node 24.4.1">
    <img style="margin: 0 1em" src="https://img.shields.io/badge/react-19.1.1-61DAFB?logo=react&style=for-the-badge" alt="React 19.1.1">
    <img style="margin: 0 1em" src="https://img.shields.io/badge/typescript-5.7.2-3178C6?logo=typescript&style=for-the-badge&logoColor=white" alt="TypeScript 5.7.2">
    <img src="https://img.shields.io/badge/vite-6.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 6.3.1"/>
    <img src="https://img.shields.io/badge/eslint-9.22.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"/>
    <img src="https://img.shields.io/badge/tailwindcss-4.1.4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
    <img src="https://img.shields.io/badge/react-icons-5.5.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Icons"/>
</div>

<div align="center">

  [![Commit CI - Main](https://img.shields.io/github/actions/workflow/status/h0ldhaven/holdhaven/commit-ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/h0ldhaven/holdhaven/actions)
  [![Commit CI - Dev](https://img.shields.io/github/actions/workflow/status/h0ldhaven/holdhaven/commit-ci.yml?branch=dev&style=for-the-badge&logo=github)](https://github.com/h0ldhaven/holdhaven/actions)
  [![Release](https://img.shields.io/github/v/release/h0ldhaven/holdhaven?style=for-the-badge&logo=github)](https://github.com/h0ldhaven/holdhaven/releases)

</div>

---

<div align="center">
    <img src="https://img.shields.io/badge/website-online-brightgreen?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website Online"/>
    <img src="https://img.shields.io/badge/hosted%20on-OVH-123F6D?style=for-the-badge&logo=ovh&logoColor=white" alt="Hosted on OVH"/>
</div>

---

**Holdhaven.fr** est mon application personnelle, développée avec React et TypeScript, et propulsée par Vite.  
Elle me sert à la fois de vitrine pour présenter mes compétences en développement web et de terrain de jeu pour tester de nouvelles technologies ou fonctionnalités. 🚀


---

## 🖥️ Démo

- Production : [https://holdhaven.fr](https://holdhaven.fr)  
- Préproduction : [https://dev.holdhaven.fr](https://dev.holdhaven.fr)  

---

## ⚙️ Commands & Setup

### 1️⃣ Cloner et installer le projet
Pour démarrer le projet en local, clonez le repo puis installez les dépendances :
```sh
$ git clone https://github.com/h0ldhaven/holdhaven.git
cd holdhaven
npm install
```

### 2️⃣ ESLint Rules
Pour maintenir un code propre et cohérent, voici les règles appliquées :
- TypeScript eslint recommended rules
- Indentation : 4 espaces
- Trailing semicolon : obligatoire
- Quotes : single (les template strings sont autorisées)
- prefer-const : désactivé temporairement pour certaines méthodes manquantes

Avant de commit, il est recommandé de vérifier le code avec ESLint :
```sh
$ npm run lint
```
Cette commande analysera tous les fichiers et vous donnera des warnings pour :
- Variables non utilisées
- Mauvais style d’indentation
- Quotes incorrectes
- Semicolons manquants

### 3️⃣ Lancer le projet en développement
Pour travailler en local avec hot-reload automatique :
```sh
npm run dev
```
Chaque modification dans le code sera automatiquement reflétée dans le navigateur sans avoir besoin de refresh.

### 4️⃣ Build du projet
Pour générer la version de production optimisée :
```sh
$ npm run build
```
Le dossier dist/ contiendra la version prête à être déployée sur votre serveur.

### 5️⃣ Preview de la build
Pour tester localement la build optimisée avant déploiement :
```sh
$ npm run preview
```
Cette commande servira le contenu de dist/ localement avec un serveur statique léger.

---

<div align="center">
  <img src="https://img.shields.io/badge/Made with ❤️ by H0ldhaven-333?style=for-the-badge" alt="Made with Love by holdhaven">
</div>
