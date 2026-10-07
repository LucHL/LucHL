export interface Project {
    id: string;
    title: string;
    stack: string[];
    githubUrl?: string;
    isPrivate?: boolean;
}

export const projects: Project[] = [
    {
        id: "entropyloop",
        title: "ENTROPY LOOP",
        stack: ["Unity", "C#"],
        githubUrl: "https://github.com/LuchL/Entropy-Loop",
        isPrivate: false,
    },
    {
        id: "eclipse",
        title: "ECLIPSE",
        stack: ["Unity", "C#", "Ollama (IA locale)"],
        githubUrl: "https://github.com/LuchL/Eclipse",
        isPrivate: false,
    },
    {
        id: "sitewab",
        title: "SITEWAB",
        stack: ["React Native", "TypeScript", "Express", "Tailscale"],
        isPrivate: true,
    },
];
