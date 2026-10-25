# Eclipse

Eclipse est un RPG en monde ouvert développé sous Unity, conçu autour d'une simulation vivante, réactive et autonome. Contrairement aux jeux de rôle traditionnels où l'univers est figé et entièrement centré sur les actions du joueur, Eclipse fait le choix d'un monde persistant et indépendant. Le joueur n'est qu'un acteur parmi d'autres au sein d'une société en mouvement: **s'il n'est pas présent lors d'un événement marquant, d'un conflit ou d'un tournant politique, le monde continue d'évoluer et l'histoire se déroule sans lui.**

---

## Entitée

![entity](/projects/eclipse/entity.png)
*Sur cette capture d'écran, on peut y voir un PNJ qui a été généré. Sur le coté droite, il s'agit de l'épée (placeholder) du jour qui a été modélisé rapidement sur Blender*

### Découpage des Entités (Slicing)

Le jeu intègre un système de combat dynamique et interactif basé sur la découpe physique en temps réel. Grâce à l'utilisation de EzySlice, un clic gauche de la souris permet de trancher les entités et les meshes destructibles au point de contact, offrant un retour visuel direct et viscéral lors des affrontements.

![slice](/projects/eclipse/slice.png)

### Inspection des Entités

Chaque personnage du monde possède une identité riche et structurée. En maintenant ou effectuant un clic droit (`OnRightClick`), le joueur peut cibler une entité pour ouvrir un panneau d'inspection (`EntityInspectorUI`). Cette vue expose en détail l'arrière-plan de l'individu :

**Identité de base:** Prénom, nom, âge, genre, race (Humain, Elfe, Nain, Orque, Gobelin, etc.) et village d'origine.

**Statut social & Profession:** Classe sociale (de la paysannerie à la noblesse), statut militaire (Civil, Soldat, Chevalier) et métier.

**Relations et Famille:** Liens de parenté stricts (parents, enfants, fratrie) et matrice relationnelle globale (`NPCRelation`) incluant un score d'affinité quantifiable de 0 à 100 ainsi qu'un type de lien (`Acquaintance`, `Friend`, `Enemy` ...).

![inspector](/projects/eclipse/inspector.png)

### Intelligence Artificielle et LLM Local (Ollama / LLamaSharp)

Pour insuffler de la vie aux PNJ, le projet abandonne le modèle du chatbot textuel classique au profit d'un **modèle agentique hybride**.

**Inférence locale:** Utilisation de **LLamaSharp** avec un modèle léger au format GGUF (Llama 3.2) exécuté directement en local sur la machine du joueur.

**Prompts contextuels dynamiques:** Chaque entité génère un prompt système unique injectant ses traits identitaires, sa faction (`FactionSystem`), son métier et son score d'affinité actuel envers le joueur.

**Réponses structurées en JSON:** Le LLM ne se contente pas de bavarder, il renvoie un objet JSON contenant sa réplique, l'impact sur l'affinité et une balise d'intention (isHostile).

### Données et Interactions Globales

```C#
public enum RelationType
{
    // Just meet
    Acquaintance,

    // Family
    Father,
    Mother,
    Son,
    Daughter,
    Brother,
    Sister,

    Grandfather,
    Grandmother,
    Grandson,
    Granddaughter,
    Uncle,
    Aunt,
    Cousin,

    // Friend / Romance
    Friend,
    Crush,
    Fiance,
    Spouse,

    // Hostility
    Enemy,
}

public enum Jobs
{
    // Army
    Soldier,

    // ...
}

public enum SocialClass
{
    // Lower-Middle Class / Lower Class
    Serf,
    Peasant,
    Beggar,
    Outcast,

    // Middle Class / Artisans
    Tradesman,
    Merchant,
    Clergy,
    Soldier,

    // Upper Class / Nobility
    Nobility,
    Royalt
}

public enum MilitaryStatus
{
    Civic,          // Civil
    Soldier,
    Knight,
    Commander
}

public enum Race
{
    // Peaceful
    Elf,

    // Neutral
    Human,
    Dwarf,

    // Non-Peaceful
    Orc,
    Goblin,
    Undead,
    Demon
}

public enum Gender
{
    Male,
    Female
}


public static class FactionSystem
{
    public enum Faction
    {
        Civilian,   // Peaceful NPCs
        Guards,     // Can attack monster
        Monsters, // Gobelins, Orc...
        Bandits     // Attack civils and guards
    }

    /// <summary>
    /// Return TRUE if the 'factionB' is hostile toward 'factionA'
    /// </summary>
    public static bool IsHostile(Faction factionA, Faction factionB)
    {
        if (factionA == factionB)
            return false;

        return factionA switch {
            Faction.Monsters => factionB == Faction.Civilian || factionB == Faction.Guards || factionB == Faction.Bandits,
            Faction.Guards => factionB == Faction.Monsters || factionB == Faction.Bandits,
            Faction.Civilian => false,
            Faction.Bandits => factionB == Faction.Civilian || factionB == Faction.Guards,
            _ => false,
        };
    }
}

[System.Serializable]
public class NPCRelation
{
    public string targetNPCId;
    public RelationType relationType;

    [Range(0, 100)]
    int affinityScore = 50; // neutral
}

[System.Serializable]
public class NPCIdentity
{
    [Header("Base Info")]
    public string npcId = null;     // ID unique (e.g. "npc_0001_d4ds65cs")
    public string firstName = null;
    public string familyName = null;
    public int age;
    public bool isAlive = true;

    [Header("Position & World")]
    public Vector3 position;
    public Vector3 rotation;
    public string homeVillage;   // (e.g. "village_Name")
    public string currentVillage;

    [Header("Characteristic")]
    public Race race;
    public FactionSystem.Faction faction;
    public Gender gender;
    public string religion;
    public MilitaryStatus militaryStatus;
    public SocialClass socialClass;
    public Jobs jobs;

    [Header("Relations & Family")]
    public string fatherId;
    public string motherId;
    public string partner;
    public List<string> childrenIds = new();
    public List<NPCRelation> relations = new();
}
```

> **Page en création**  
> Cette page est actuellement en construction. De nouvelles sections et extraits de code seront ajoutés très prochainement !
