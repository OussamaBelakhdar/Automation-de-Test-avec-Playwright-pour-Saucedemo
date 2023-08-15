# Automation-de-Test-avec-Playwright-pour-Saucedemo
Description du Projet : Automation de Tests avec Playwright pour Saucedemo
Objectif :
Ce projet vise à automatiser les tests de l'interface utilisateur du site web Saucedemo en utilisant le framework Playwright. Il simule des actions utilisateur typiques, telles que la connexion, l'ajout d'articles au panier, et la déconnexion, tout en vérifiant que le site réagit comme prévu.

Caractéristiques Principales :

Navigation : Le script navigue automatiquement vers la page de connexion de Saucedemo.
Simulation d'Actions Utilisateur : Il simule des actions telles que la saisie du nom d'utilisateur et du mot de passe, l'ajout d'articles au panier, et la déconnexion.
Assertions : À chaque étape clé, des vérifications (ou assertions) sont effectuées pour s'assurer que le site web réagit comme prévu.
Portabilité : Grâce à Playwright, ce script peut être exécuté sur différents navigateurs avec peu ou pas de modifications.

Technologies Utilisées :

Playwright : Un framework d'automatisation des tests qui permet de simuler des actions utilisateur dans des navigateurs web.
JavaScript : Le langage de programmation utilisé pour écrire le script d'automatisation.

Prérequis :
Node.js
npm
Installation :
Clonez le dépôt :
git clone [URL_DU_DEPOT]
Accédez au répertoire du projet :
cd [NOM_DU_REPERTOIRE]
Installez les dépendances :
npm install
Exécution des tests :
Lancez les tests :
npx playwright test
Détails du test :
Le script automatisé effectue les actions suivantes sur le site saucedemo.com :

- Se connecte en utilisant les identifiants standard_user et secret_sauce.
- Ajoute plusieurs articles au panier.
- Poursuit le processus de commande.
- Remplit les détails de l'expédition.
- Termine la commande.
- Se déconnecte.


Contribution :
Les contributions à ce projet sont les bienvenues ! Que vous souhaitiez ajouter des fonctionnalités, corriger des bugs ou améliorer la documentation, n'hésitez pas à créer une pull request.
