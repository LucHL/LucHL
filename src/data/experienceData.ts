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
        id: "epitech",
        company: "EPITECH Strasbourg",
        logoUrl: "/logos/epitech.png",
        stack: ["C", "C++"]
    },
    {
        id: "epitech",
        company: "EPITECH Strasbourg",
        logoUrl: "/logos/epitech.png",
        stack: ["C", "C++"]
    },
    {
        id: "mbinformatique",
        company: "MB Informatique",
        logoUrl: "/logos/mbinformatique.png",
        stack: ["PHP", "HTML", "CSS", "JavaScript"]
    },
];
