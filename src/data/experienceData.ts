export interface Experience {
    id: string;
    company: string;
    logoUrl?: string;
    stack: string[];
}

export const experiences: Experience[] = [
    {
        id: "el2i",
        company: "EL2I",
        logoUrl: "/logos/el2i.png",
        stack: ["PHP", "Laravel", "HTML", "CSS", "JavaScript"]
    },
    {
        id: "epitech2",
        company: "EPITECH STRASBOURG",
        logoUrl: "/logos/epitech.png",
        stack: ["C", "C++", "Docker", "Public Speaking", "Mentoring", "Event Management"]
    },
    {
        id: "epitech",
        company: "EPITECH STRASBOURG",
        logoUrl: "/logos/epitech.png",
        stack: ["C", "C++", "Docker", "Public Speaking", "Mentoring", "Event Management"]
    },
    {
        id: "mbinformatique",
        company: "MB Informatique",
        logoUrl: "/logos/mbinformatique.png",
        stack: ["PHP", "HTML", "CSS", "JavaScript"]
    },
];
