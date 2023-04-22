
from node:18.13.0 as build-deps

# definir le dossier de travail
WORKDIR /usr/src/app

# copier le fichier package.json
COPY package*.json ./

# installer les dépendances
RUN npm install

# copier le reste des fichiers
COPY . .

# exposer le port 3000
EXPOSE 3000


from build-deps as build
# lancer l'application
CMD ["npm", "start"]


from build-deps as dev
# lancer l'application
CMD ["npm", "run", "dev"]



