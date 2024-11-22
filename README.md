<p align="center">
  <img src="./public/MK_star.png" alt="Logo du projet" width="400">
</p>

# 🚗 Mario Kart Pathfinding Challenge

**Créez le chemin le plus rapide à travers les circuits les plus complexes !**

Bienvenue, ingénieur(e) en optimisation ! Ce projet consiste à développer un algorithme performant capable de résoudre des problèmes de cheminement à travers des cartes complexes. Le but ? Trouver le chemin le plus court, quel que soit l'obstacle.

## 🏆 Objectifs
- Analyser une carte et la modéliser sous forme de graphe.
- Implémenter des algorithmes performants pour trouver le chemin optimal.
- Optimiser le code pour maximiser la vitesse d'exécution.
- Utiliser TypeScript pour une structure claire et typée.

## 📚 Structure du Projet

📂 resources/
  ├── simple.map : Une carte facile pour commencer.  
  ├── complex.map : Un défi modéré avec plus d'obstacles.  
  ├── hard.map : Pour les experts en algorithmes !  

📂 lib/
  ├── index.lib.ts : Contient les fonctions principales, y compris l'algorithme utilisé (ex. BFS).
  
📄 index.ts


## ⚙️ Installation et Lancement
### 1. Pré-requis
Assurez-vous que les outils suivants sont installés sur votre machine :

- Node.js : Version 16 ou plus récente.
- TypeScript : Version 5 ou plus récente.

### 2. **Installation**
1. **Cloner le dépôt** :
```bash
  git clone <url_du_dépôt>
  cd <nom_du_projet>
```
2. **Installez les dépendances :**
```bash
npm install
```

### **3. Lancer le projet**
En mode développement :
```bash
  ts-node ./index.ts <map-path>
```
En mode production :
```bash
  npm start
```

## **🛠️ Fonctionnalités**

**1. Chargement de cartes :**
  Les cartes sont des fichiers .map contenant des obstacles, des points de départ et d'arrivée.  
**2. Recherche de chemin :**
  Trouve le chemin le plus court à travers les obstacles grâce à un algorithme optimisé.  
**3. Résultats clairs :**
  Renvoie les coordonnées des points successifs du chemin au format : y:x y:x ....  

## 🗺️ Format des Fichiers .map

* Exemple :
```plaintext
  oo..E
  o..o.
  .o..o
  .So..
  .....
```

* Légende :
  S : Point de départ.  
  E : Point d'arrivée.  
  o : Obstacle (non traversable).  
  . : Zone traversable.  

## 🔍 Algorithme Utilisé

**BFS *(Breadth-First Search)***
* Adapté pour trouver le chemin le plus court dans un graphe non pondéré.
* Explore chaque niveau de voisins avant de passer au suivant.

Optimisations :
* Utilisation d'une file pour minimiser les coûts de mémoire.
* Gestion efficace des coordonnées pour limiter les calculs inutiles.


## 🌟 Ressources Utilisées
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/fr)
- [ts-node](https://github.com/TypeStrong/ts-node)


# 🏎️ Bonne chance et que le chemin le plus court soit avec vous ! 🚀
