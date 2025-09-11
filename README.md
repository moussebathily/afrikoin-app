# 🌍 Bienvenue sur **AfriKoin App**

> La première plateforme panafricaine de petites annonces, avec **intelligence artificielle intégrée**, publication vocale, modération automatique, traduction multilingue et géolocalisation en temps réel.

---

## 🔗 Lien du projet

* **URL GitHub** : [AfriKoin App](https://github.com/moussebathily/afrikoin-app)
* **Site Web** : [https://afrikoin.online](https://afrikoin.online)

## 🧪 Stack technologique

| Catégorie       | Technologies clés                               |
| --------------- | ----------------------------------------------- |
| Frontend Web    | React, TypeScript, Vite, Tailwind, shadcn/ui    |
| App Mobile      | React Native, Expo, EAS Build (Android)         |
| Backend & Cloud | Supabase, Vercel, GitHub Actions                |
| IA intégrée     | GPT-4o (modération, assistant, traduction)      |
| Multilingue     | 🇫🇷 🇬🇧 🇧🇫 🇲🇱 Bambara, Mooré, Wolof, etc. |

## 🚀 Fonctionnalités principales

* 📝 Création et publication d’annonces avec images & vidéos
* 🎙️ Publication vocale (reconnaissance vocale intégrée)
* 🤖 Modération automatique (texte + médias)
* 📍 Géolocalisation dynamique des annonces
* 🌐 Traduction automatique des contenus
* 🛡️ Système de vérification utilisateur (KYC)
* 🗂️ Recherche intelligente par filtre, catégorie, distance

## 🔧 Démarrage local (Web & Mobile)

```bash
# 1. Cloner le repo
https://github.com/moussebathily/afrikoin-app.git
cd afrikoin-app

# 2. Installer les dépendances
npm install

# 3. Lancer le site Web local
npm run dev

# 4. Générer l’app Android (.aab)
eas build --platform android --profile production
```

📌 *Node.js v18+ recommandé. Utilisez `nvm` si nécessaire.*

## 📁 Structure & fichiers

| Fichier / Dossier     | Description                               |
| --------------------- | ----------------------------------------- |
| `eas.json`            | Profils EAS pour production / preview     |
| `app.config.js`       | Config globale pour Expo / app mobile     |
| `tsconfig.json`       | Configuration TypeScript commune          |
| `.github/workflows/`  | Actions GitHub CI/CD automatiques         |
| `keystore.properties` | Config signature Android (via .gitignore) |

## 🧱 Structure du projet

```
afrikoin-app/
├── src/               # Code source (React / React Native)
│   ├── components/
│   └── ...
├── public/            # Fichiers statiques pour le web
├── tailwind.config.ts # Config Tailwind CSS
└── ...
```

## ✅ Bonnes pratiques

- Exécuter `npm run lint` avant chaque commit.
- Préférer les imports ES modules (`import`) plutôt que `require`.
- Organiser le code dans `src/components` pour favoriser la réutilisation.
- Utiliser un fichier `.env` pour les variables sensibles (non commité).

## 📦 Build & Déploiement

### 🌐 Web (React)

* Hébergé sur : [https://afrikoin.online](https://afrikoin.online)
* Déploiement Vercel automatique

### 📱 Mobile (Android)

* Build `.aab` via `eas build`
* Déploiement Play Store par `upload-google-play`
* Version actuelle : **1.2.2**
* Signature avec : `afrikoin-release-key.jks`

## 🔄 CI/CD GitHub

* ✅ Build & tag automatique via `workflow_dispatch`
* ✅ Upload Play Store (production uniquement)
* ✅ Génération automatique du `CHANGELOG.md`

## 📊 Badges GitHub

![Build Production](https://github.com/moussebathily/afrikoin-app/actions/workflows/build-deploy.yml/badge.svg)
![Build Staging](https://github.com/moussebathily/afrikoin-app/actions/workflows/build-staging.yml/badge.svg)

## 👤 Auteur & contact

* **Mousse Bathily** — développeur principal
* 📧 [bathilymousse24@gmail.com](mailto:bathilymousse24@gmail.com)
* 📍 Afrique (Mali) & diaspora

---

> "AfriKoin, c’est publier et acheter partout en Afrique en toute sécurité."

