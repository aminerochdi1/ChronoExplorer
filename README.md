# [Chrono Explorer Angular - Bootstrap 4 UI Kit]

**Bootstrap 4 support**

Chrono Explorer est une application web interactive développée avec **Angular** et **Node.js** qui permet aux utilisateurs d’explorer des événements historiques à travers une **ligne du temps visuelle**, de commenter, et de gérer leur profil personnel.

---

## ✨ Fonctionnalités principales

- 📆 **Ligne du temps interactive** : tous les événements sont classés chronologiquement, avec images et descriptions.
- 🔍 **Recherche avancée** : par titre, lieu, date, ou catégorie (histoire, science, politique, etc.).
- 🧾 **Fiches d’événements détaillées** : description complète, image, date, lieu, commentaires.
- 🧑‍💼 **Authentification utilisateur** : inscription, connexion, modification du profil.
- 💬 **Système de commentaires** : les utilisateurs peuvent commenter chaque événement.
- 🎨 **Interface moderne et responsive** : design immersif avec fonds visuels liés à l’art ou à l’histoire.

---

## 🧠 Technologies utilisées

| Frontend         | Backend         | Autres                    |
|------------------|-----------------|---------------------------|
| Angular 15+      | Node.js + Express | MySQL (base de données)   |
| HTML / SCSS      | Bcrypt (hashing) | Compodoc (documentation) |
| Bootstrap Icons  | JWT (optionnel)  |                           |

---

## Structure du projet

```bash
-- USERS
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

-- EVENTS
CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  event_date DATETIME NOT NULL,
  location VARCHAR(255) NOT NULL,
  image_path VARCHAR(255),
  category VARCHAR(100)
) ENGINE=InnoDB;

-- COMMENTS
CREATE TABLE IF NOT EXISTS comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  event_id INT NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
) ENGINE=InnoDB;
```

## 📁 Structure du projet
- will add it later


---

## 🔐 Authentification

- Utilisateurs créent un compte
- Mots de passe hashés avec `bcrypt`
- Données stockées dans MySQL
- Gestion du profil possible (édition, logout)

---

## 🧪 Lancer le projet en local

### 1. Cloner le repo

```bash
git clone https://github.com/aminerochdi1/ChronoExplorer.git
cd ChronoExplorer
```







