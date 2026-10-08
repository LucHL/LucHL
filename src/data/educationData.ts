export interface Education {
    id: string;
    schoolName: string;
    logoUrl?: string;
    stack?: string[];
}

export const educations: Education[] = [
    {
        id: "epitech",
        schoolName: "EPITECH Strasbourg",
        logoUrl: "/logos/epitech.png",
        stack: ["C", "C++", "Python", "ASM x86_64", "React", "TypeScript", "Unity", "C#", "Blender"],
    },
    {
        id: "inha",
        schoolName: "Inha University (South Korea)",
        logoUrl: "/logos/inha.svg",
        stack: ["C", "C++", "Python", "ESP32", "Embedded Systems", "Collaboration", "Intercultural Projects"],
    },
    {
        id: "ionisstm",
        schoolName: "IONIS STM",
        logoUrl: "/logos/ionisstm.png",
        stack: ["Public Speaking", "Mentoring", "Event Facilitation", "Leadership"],
    },
    {
        id: "lla",
        schoolName: "Lycée Louis Armand",
        logoUrl: "/logos/lla.png",
        stack: ["Electronics", "Electrical Engineering", "Scientific Rigor"],
    },
];
