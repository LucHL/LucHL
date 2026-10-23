# SiteWab - Plateforme de Communication en Temps Réel

**SiteWab** est une application web sécurisé de messagerie et de collaboration construite avec une architecture découplée (Frontend React/TypeScript et Backend Node.js/Express).

---

## Architecture Globale

``` 
+-------------------------------------------------------------------+
|                    Client (Navigateur / Mobile)                   |
+-------------------------------------------------------------------+
                                  |                                  
                        Tailscale Funnel (HTTPS)                     
                                  |                                  
                                  v                                  
+-------------------------------------------------------------------+
|                           Serveur Linux                           |
|                                                                   |
|  +---------------------------+     +---------------------------+  |
|  |     Frontend (React)      |     |     Backend (Express)     |  |
|  |     Docker (Port 3000)    |     |     Docker (Port 5000)    |  |
|  +---------------------------+     +---------------------------+  |
|                                                  |                |
|                                                  v                |
|                                        +-------------------+      |
|                                        |  Database (Mongo) |      |
|                                        +-------------------+      |
+-------------------------------------------------------------------+
```

---

# Frontend

Le frontend est développé en **React avec TypeScript** et bundlé via **Create React App**. Il propose une interface réactive et moderne pour la gestion des salons de discussion et des messages.

## Utilisateur

La gestion de l'authentification et du profil utilisateur repose sur un stockage sécurisé des jetons d'accès.

### Création de compte
* Formulaire d'inscription dynamique avec validation des champs en temps réel.
* Hachage des mots de passe géré côté serveur.
* Validation d'unicité de l'adresse e-mail et du nom d'utilisateur.

### Connexion
* Authentification via identifiants (e-mail/mot de passe).
* Réception et stockage du token JWT (cookie HttpOnly).
* Redirection automatique vers le tableau de bord principal après validation.

![Register](/projects/sitewab/register.png)
![login](/projects/sitewab/login.png)

---

## Channel

Les salons permettent de structurer les échanges par thématiques ou par équipes.

![Channel](/projects/sitewab/channel.png)

### Ajouter des utilisateurs
* Recherche dynamique d'utilisateurs par nom ou identifiant.
* Modale de sélection pour ajouter un ou plusieurs membres à un salon existant.
* Notification en temps réel de l'ajout pour les utilisateurs concernés.

![AddUser](/projects/sitewab/add-user.png)

### Supprimer des utilisateurs
* Gestion des rôles (Administrateur du canal / Membre).
* Interface de gestion des membres permettant l'exclusion d'un utilisateur.
* Mise à jour instantanée de la liste des participants.

---

## Message

Module principal de messagerie en temps réel s'appuyant sur WebSockets / Socket.IO.

### Fonctions principales
* **Envoyer :** Saisie textuelle avec prise en charge des émojis et envoi instantané.
* **Modifier :** Édition en ligne des messages envoyés par l'auteur avec mention *(modifié)*.
* **Supprimer :** Suppression d'un message avec mise à jour immédiate dans la vue des autres utilisateurs.

### Enrichissement du contenu
* **Gifs :** Intégration d'un sélecteur de GIFs (Giphy API) pour animer les conversations.
* **Images :** Prévisualisation avant envoi et affichage sous forme de galerie interactive dans le fil de discussion.

![conv](/projects/sitewab/conv.png)

---

## Fonctionnalités Futures

* **Appel téléphonique / Vidéo :** Intégration de LiveKit pour les communications vocales en direct.
* **Téléchargement de documents :** Gestion des pièces jointes avec suivi de la progression d'envoi.
* **Prévisualisation multi-formats :** Lecteur intégré pour les fichiers sonores (`.mp3`), vidéo (`.mp4`) et visionneuse de documents (`.pdf`).

---

# Backend

Le backend est développé en **TypeScript avec Node.js et Express**. Il fournit une API REST robuste et gère les liaisons temps réel.

## Sécurité

### Authentification JWT (JSON Web Token)
* Génération de tokens signés lors de la connexion.
* Middleware d'authentification interceptant toutes les routes protégées (`/api/*`).
* Gestion du rafraîchissement des tokens et expiration sécurisée.

---

## Infrastructure & Exposition (Tailscale)

L'infrastructure s'appuie sur **Tailscale Funnel** pour exposer l'application de façon sécurisée à travers un domaine unifié sans gestion complexe de certificats SSL externes.

* **Isolation Docker :** Les conteneurs communiquent au sein d'un réseau interne Docker, seul l'hôte Linux relaie le trafic public via Tailscale.


> **Page en création**  
> Cette page est actuellement en construction. De nouvelles sections et extraits de code seront ajoutés très prochainement !
