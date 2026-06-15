# C-liaCare
=======
# CœliaCare

Site informatif de PFE sur la maladie cœliaque avec assistant chatbot limité aux questions sur la maladie cœliaque, le gluten et le régime sans gluten.

## Installation

```bash
npm install
```

## Configuration du chatbot

Créez un fichier `.env` à la racine du projet :

```env
GROQ_API_KEY=gsk_votre_cle_api_ici
GROQ_MODEL=llama-3.3-70b-versatile
```

La clé API reste côté serveur dans `server.js`; elle n'est pas exposée dans le navigateur.

## Lancer le site

```bash
npm run dev
```

Ouvrez ensuite :

```text
http://localhost:5173
```

## Vérification

```bash
npm run build
npm audit --omit=dev
```

## Hebergement sur Render

1. Creez un repository GitHub et poussez ce projet.
2. Sur Render, creez un nouveau Web Service depuis ce repository.
3. Render detectera `render.yaml`.
4. Ajoutez `GROQ_API_KEY` dans les variables d'environnement Render.
5. Lancez le deployement puis envoyez l'URL publique a votre ami.
