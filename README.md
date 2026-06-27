# Maison des Pierres

Page d'accueil statique pour `mdespierres.com`.

## Fichiers a publier

- `index.html`
- `styles.css`
- `script.js`
- `.nojekyll`
- `CNAME`
- `assets/favicon.svg`
- `assets/maison-des-pierres-logo.svg`

Ces fichiers peuvent etre deposes tels quels a la racine de l'hebergement du
domaine. Aucune base de donnees ni application serveur n'est necessaire.

## Publication GitHub Pages

- `.nojekyll` indique a GitHub Pages de publier les fichiers statiques sans traitement Jekyll.
- `CNAME` prepare le domaine personnalise `mdespierres.com`.
- L'activation de GitHub Pages pourra ensuite se faire depuis GitHub, en choisissant la branche `main` et le dossier racine.

## Deploiement OVH par GitHub Actions

Le fichier `.github/workflows/deploy-ovh.yml` prepare un deploiement automatique vers OVH en SFTP apres chaque mise a jour de la branche `main`.

Le deploiement reste ignore tant que ces secrets GitHub ne sont pas renseignes :

- `OVH_SFTP_HOST`
- `OVH_SFTP_USER`
- `OVH_SFTP_PASSWORD`
- `OVH_REMOTE_DIR`

Sur l'hebergement OVH actuel, le dossier public du site est `www`.

## Points faciles a modifier

- L'adresse e-mail principale est actuellement `cognac@mdpierre.com`.
- Le lien de decouverte pointe vers `https://cognac-leopold-croizet.com/`.
- Le texte de bas de page contient l'avertissement sanitaire.
- Le visuel principal est genere en CSS pour rester leger.
- Le logo web est exporte en SVG vers `assets/maison-des-pierres-logo.svg`.
