<div align="center">
    <img src="./public/images/png/profil.png" style="width: 10rem" alt="website logo">
    <h1>🌐 holdhaven.fr</h1>
</div>

<div align="center">
    <img style="margin: 0 1em" src="https://img.shields.io/badge/node-24.4.1-5FA04E?logo=nodedotjs&style=for-the-badge" alt="Node 24.4.1">
    <img style="margin: 0 1em" src="https://img.shields.io/badge/react-19.1.1-61DAFB?logo=react&style=for-the-badge" alt="React 19.1.1">
    <img style="margin: 0 1em" src="https://img.shields.io/badge/typescript-5.7.2-3178C6?logo=typescript&style=for-the-badge&logoColor=white" alt="TypeScript 5.7.2">
    <img src="https://img.shields.io/badge/vite-6.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 6.3.1"/>
</div>

<div align="center">

  [![Commit CI - Main](https://img.shields.io/github/actions/workflow/status/h0ldhaven/holdhaven/commit-ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/h0ldhaven/holdhaven/actions)
  [![Commit CI - Dev](https://img.shields.io/github/actions/workflow/status/h0ldhaven/holdhaven/commit-ci.yml?branch=dev&style=for-the-badge&logo=github)](https://github.com/h0ldhaven/holdhaven/actions)
  [![Release](https://img.shields.io/github/v/release/h0ldhaven/holdhaven?style=for-the-badge&logo=github)](https://github.com/h0ldhaven/holdhaven/releases)

</div>

---

<div align="center">
  <img src="https://img.shields.io/badge/website-online-brightgreen?style=for-the-badge&logo=firefoxbrowser&logoColor=white" alt="Website Online"/>
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

<h2>How to install</h2>

#### Clone the Project :
```sh
$ git clone https://github.com/h0ldhaven/holdhaven.git
```
## Eslint Rules :
- Typescipt eslint recommended rules
- Indentation width: **4 space**
- Trailing semicolon: **required**
- Prefer const: **off** *(Temporary due to missing methods)*
- Quotes: **single** *(Magic quotes are allowed if template string)*

In order to keep a clean code base, devs might use eslint before commits

---

### Commands

```sh
npm run dev
```
This command will start the project in dev mode, each modification will be updates on save

It allows the devs to create without having to refresh the pages each time

```sh
$ npm run lint
```
This command will check each file for eslint rules violation such as double quotes, unused variables or wrong indentation width and raise warnings


```sh
$ npm run build
```

This will allow devs to have a built version to export it or see if the project is correctly build
**If you want to be really sure that the project can be built in prod or preprod follow these instructions**
1. Create a ``.env.local`` in the main folder which will be ignored in the commit
2. In this ``.env.local`` add ``CI=true``
3. Now run ``npm run build``

<div align="center">
  <img src="https://img.shields.io/badge/Made with ❤️ by H0ldhaven-333?style=for-the-badge" alt="Made with Love by holdhaven">
</div>
