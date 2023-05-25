# Bienvenue sur Meme4.dev

Un projet fictif d'une platform de création de meme.

Avec une API en Node.js et Express et un Front en Vue.js et Tailwind.  

Tout le projet est sur __Docker__  

## Présentation

   ### Frontend  
   Cette application comporte une arborescence de 4 pages :  
   - `/login` Une page de connexion  
   - `/` Une page d'accueil avec tous les memes  
   - `/creation` Une page de création de meme  
   - `/tag` Une page d'ajout de tag et d'affichage des tags  
        
   ### Backend  
   L'API comporte 5 endpoints :  
   - `/memes` Retourne l’ensemble des chemins vers les memes  
   - `/memes/create` Création d’un même  
   - `/memes/delete` Suppression d’un meme  
   - `/auth` Connexion à l’interface  
   - `/tags` Création d’un tag, suppression d'un tag et Retourne l’ensemble des chemins vers les tags  


## installation
Ouvrir un terminal

1. NPM install  
    a. se placer dans le dossier "backend" et faire la commande :  

        npm i
    
    b. __faire la même commande dans le dossier frontend__  
 
  
2. aller à la racine et faire la commande :  

    ```
    docker compose up -d --build
    ```


3. Aller sur Minio (http://localhost:9001/browser)  
    a. Pour la connexion à Minio :  
    - Utilisateur : `minio-root-user`  
    - Mot de passe : `minio-root-password`  
    
    b. Créer un bucket nommé `memes-bucket`

    c. Aller sur le bucket et le mettre en `public`

__Et voilà l'installation est terminée.__

## Liens d'accès

- Front : http://localhost:5173/  
    Pour la connexion au front :  
    - Utilisateur : `admin`  
    - Mot de passe : `admin`  

- API : http://localhost:3000/

- Minio pour les images : http://localhost:9001/browser  
    Pour la connexion à Minio :  
    - Utilisateur : `minio-root-user`  
    - Mot de passe : `minio-root-password`  

- Phpmyadmin : http://localhost:8080  
    Pour la connexion à Phpmyadmin :  
    - Utilisateur : `minio-root-user`  
    - Mot de passe : `minio-root-password`  

- Mysql : http://localhost:3306
