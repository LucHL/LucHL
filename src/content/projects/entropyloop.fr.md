# Entropy Loop

Jeu vidéo de type deck-building auto-battler. En tant que lead technique, je pilote l'architecture logicielle, la mise en place des mécaniques de combat automatisé avec des unités 3D et l'optimisation des performances.
Ce projet est réaliser avec mon équipe composé de 6 personnes.

## Logo

![Capture du jeu](/projects/entropy-loop/entropyloop-logo.png)

## Implémentation & Code

Voici un aperçu de la logique de résolution des vagues de combat implémentée en C# :

```csharp
public void ResolveCombat(List<Unit> units) {
    foreach (var unit in units) {
        unit.EvaluateTarget();
    }
}
