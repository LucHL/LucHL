# Entropy Loop

**Entropy Loop** est un jeu vidéo 3D combinant **Deck-Building** et **Auto-Battler** (inspiré des mécaniques de Teamfight Tactics).

Réalisé dans le cadre d'un projet de fin d'études au sein d'une équipe de 6 développeurs, nous avons relevé le défi d'assurer nous-mêmes la Direction Artistique (DA) et la création d'assets 3D, des domaines que nous ne maîtrisions pas initialement, afin d'élargir notre champ de compétences.

En tant que Lead Technique sur ce projet, j'ai piloté l'architecture logicielle globale, la mise en place des systèmes de combat automatisés, le développement des mécaniques de jeu et l'optimisation des performances 3D sous Unity.

## Logo

![logo](/projects/entropy-loop/entropyloop-logo.png)

---

## Fonctionnement du Jeu

**Boucle de Jeu (Auto-Battler & Deck-Building):** À la manière de *TFT*, le joueur constitue son armée en amont et durant les phases de préparation grâce à son deck de cartes. Une fois la phase de combat lancée, les unités affrontent automatiquement les vagues ennemies.

---

# Entités & Direction Artistique

Face à l'absence d'artistes spécialisés dans l'équipe, nous avons opté pour une direction artistique **Low-Poly**, nous permettant de produire un ensemble d'unités et de décors cohérents tout en conservant une bonne lisibilité en combat.

## Exemple: Le Deck Nain

Présentation du deck des Nains et du modèle 3D conçu en interne sur Blender:

![nain](/projects/entropy-loop/model3D-nain.png)

## Choix de deck & Progression

Le joueur peut débloquer et sélectionner différents archétypes de decks au fil de sa progression dans le jeu. Chaque deck propose une synergie et un style de jeu uniques.

![listDeck](/projects/entropy-loop/list-deck.png)

---

# Map

La carte de chaque niveau est entièrement **générée de manière procédurale**.

Aucun préfabriqué de terrain n'est posé à la main: l'ensemble de la topographie, des obstacles et de la structure de la carte repose sur des **calculs et formules mathématiques** exécutés au chargement. Cela garantit une rejouabilité infinie et des environnements uniques à chaque partie.

![map1](/projects/entropy-loop/map1.png)

---

# Tester le jeu

Retrouvez les dernières versions builds et exécutables du projet directement sur le dépôt GitHub: [Télécharger](https://github.com/LucHL/Entropy-Loop/releases)


> **Page en création**  
> Cette page est actuellement en construction. De nouvelles sections et extraits de code seront ajoutés très prochainement !
