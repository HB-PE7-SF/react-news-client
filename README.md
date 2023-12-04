# Exemple client ReactJS

## Pré-requis

- [NodeJS](https://nodejs.org)

## Installation

```bash
npm i
```

## Configuration

Dans un fichier `.env.local`, inscrire les variables d'environnement suivantes :

```env
VITE_API_ENTRYPOINT=http://localhost:8000/api
VITE_API_KEY=xxxxxxxxxxxxxxxxxxx
```

## Démarrage

```bash
npm run dev
```

> Attention, bien penser à lancer son serveur d'API (Symfony) pour que les appels API fonctionnent correctement

## Avertissement

Cette application est une application de démonstration de requête d'API depuis un client ReactJS.

Le jeton d'API utilisé ici est exposé côté client. Idéalement, il serait préférable d'effectuer un rendu côté serveur afin de ne pas exposer cette clé d'API. Pour ce faire, on peut utiliser un framework ReactJS, par exemple.

Plus d'informations :

- [NextJS](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [GatsbyJS](https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/)
