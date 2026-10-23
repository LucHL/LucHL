# Eclipse

Eclipse is an open-world RPG developed in Unity, built around a living, reactive, and autonomous simulation. Unlike traditional role-playing games where the universe is static and entirely centered around the player's actions, Eclipse opts for a persistent and independent world. The player is merely an actor among others within a moving society: **if they are not present during a major event, a conflict, or a political turning point, the world continues to evolve and history unfolds without them**.

---

## Entities

### Entity Slicing

The game features a dynamic and interactive combat system based on real-time physical slicing. Through the use of EzySlice, a left-click allows players to physically cleave entities and destructible meshes at the point of contact, providing direct and visceral visual feedback during combat.

![slice](/projects/eclipse/slice.png)

### Entity Inspection

Every character in the world possesses a rich and structured identity. By holding or performing a right-click (`OnRightClick`), the player can target an entity to open an inspection panel (`EntityInspectorUI`). This view details the individual's background:

**Base Identity:** First name, last name, age, gender, race (Human, Elf, Dwarf, Orc, Goblin, etc.), and home village.

**Social Status & Profession:** Social class (ranging from peasantry to nobility), military status (Civic, Soldier, Knight), and occupation.

**Relations and Family:** Strict kinship ties (parents, children, siblings) and a global relational matrix (`NPCRelation`) including a quantifiable affinity score from 0 to 100 as well as a link type (`Acquaintance`, `Friend`, `Enemy`, etc.).

![inspector](/projects/eclipse/inspector.png)

### Artificial Intelligence & Local LLM (Ollama / LLamaSharp)

To breathe life into NPCs, the project moves away from the traditional text chatbot model in favor of a **hybrid agentic model**.

Local Inference: Utilizing **LLamaSharp** with a lightweight GGUF format model (Llama 3.2) executed directly on the player's local machine.

**Dynamic Contextual Prompts:** Each entity generates a unique system prompt injecting its identity traits, faction (`FactionSystem`), occupation, and current affinity score toward the player.

**Structured JSON Responses:** The LLM does more than just chat; it returns a JSON object containing its dialogue line, the impact on affinity, and an intent flag (`isHostile`).

### Global Data and Interactions

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

> **Page Under Construction**  
> This page is currently under construction. New sections and code snippets will be added very soon!
