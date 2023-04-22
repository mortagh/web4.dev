from node:18.13.0 as build-deps

# definir le dossier de travail
WORKDIR /usr/src/app

# copier le fichier package.json
COPY package*.json ./

# installer les dépendances
RUN npm install

# copier le reste des fichiers
COPY . .

# exposer le port 4200
EXPOSE 4200

from build-deps as build
CMD ["npm", "run", "build"]


from build-deps as dev
# lancer l'application
CMD ["npm", "run", "dev"]

from nginx as prod
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf