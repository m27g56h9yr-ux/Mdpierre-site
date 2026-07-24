# Maison des Pierres

Page d'accueil statique pour `mdpierre.com`.

## Fichiers a publier

- `index.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `.nojekyll`
- `CNAME`
- `assets/favicon.svg`
- `assets/maison-des-pierres-logo-original.png`

Ces fichiers peuvent etre deposes tels quels a la racine de l'hebergement du
domaine. Aucune base de donnees ni application serveur n'est necessaire.

## Publication GitHub Pages

- `.nojekyll` indique a GitHub Pages de publier les fichiers statiques sans traitement Jekyll.
- `CNAME` prepare le domaine personnalise `mdpierre.com`.
- L'activation de GitHub Pages pourra ensuite se faire depuis GitHub, en choisissant la branche `main` et le dossier racine.

## Deploiement OVH par GitHub Actions

Le fichier `.github/workflows/deploy-ovh.yml` prepare un deploiement automatique vers OVH en SFTP apres chaque mise a jour de la branche `main`.

Le deploiement reste ignore tant que ce secret GitHub n'est pas renseigne :

- `OVH_SFTP_PASSWORD`

Sur l'hebergement OVH actuel, le dossier public du site est `www`, avec l'utilisateur
SFTP `mdpierrech` et le serveur `ftp.cluster121.hosting.ovh.net`.

## Politique MTA-STS

Le fragment `.github/ops/mta-sts/Caddyfile.fragment` publie une politique MTA-STS en
mode `testing` pour les trois serveurs MX OVH. La politique est servie par le
reverse proxy Maison des Pierres, independamment de l'hebergement statique
gratuit qui ne permet pas d'ajouter un quatrieme hote.

L'URL publique doit rester
`https://mta-sts.mdpierre.com/.well-known/mta-sts.txt`, sans redirection et avec
un certificat TLS valide pour `mta-sts.mdpierre.com`. Toute modification du
contenu impose de changer aussi l'identifiant du TXT `_mta-sts.mdpierre.com`.

## Points faciles a modifier

- L'adresse e-mail principale est actuellement `cognac@mdpierre.com`.
- Les liens de marque pointent vers `https://cognac-leopold-croizet.com/` et
  `https://cognac-esprit-organic.com/`.
- Le texte de bas de page contient l'avertissement sanitaire.
- Les photos sont servies depuis les deux sites de marque deja publies.
- Le logo principal utilise `assets/maison-des-pierres-logo-original.png`, export web recadre du document original `Maison2.ai`.
- Le referencement repose sur les balises meta de `index.html`, les donnees structurees JSON-LD, `robots.txt`, `sitemap.xml` et `llms.txt`.
