# Lurn

Prototype web mobile avec trois écrans volontairement vides : Cours, Réviser, Profil.

## Structure

- `dist/index.html` : cadre commun et identité Lurn.
- `dist/app.js` : navigation existante par hash, sans autre fonctionnalité.
- `dist/screens/` : trois écrans indépendants.
- `dist/components/screen.js` et `icons.js` : cadre d'écran et icônes partagés.
- `dist/styles.css` : design system global et styles des écrans.

Aucune dépendance ni compilation. Pour lancer en local : `python3 -m http.server 8000 --directory dist`.

## Design system

Les couleurs, ombres, rayons et espacements sont centralisés en variables CSS dans `:root`. Les primitives `.surface-card`, `.surface-card--soft`, `.pill`, `.pill--active` et `.action-button` sont disponibles pour de futurs écrans, mais ne sont pas affichées actuellement. Le fond lavande/bleu/crème, le logo typographique, les titres et la navigation flottante constituent l'identité partagée.

Les écrans n'affichent que leur titre. Aucune donnée, contenu de cours, révision, profil ou autre fonctionnalité n'est encore implémenté.
