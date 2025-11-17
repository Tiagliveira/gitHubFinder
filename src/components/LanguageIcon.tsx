import type { SimpleIcon } from 'simple-icons';
import * as icons from 'simple-icons';

interface IconResult {
    title: string;
    hex: string;
    svg: string;
    source: string;
    slug: string;
}

const languageToSlugMap: Record<string, string> = {
    'JavaScript': 'javascript',
    'TypeScript': 'typescript',
    'Python': 'python',
    'Java': 'java',
    'C++': 'cplusplus',
    'C#': 'csharp',
    'Go': 'go',
    'Ruby': 'ruby',
    'PHP': 'php',
    'Shell': 'gnubash',
    'HTML': 'html5',
    'CSS': 'css3',
    'Swift': 'swift',
    'Kotlin': 'kotlin',
    'Rust': 'rust',
    'Dart': 'dart',
    'Scala': 'scala',
    'Objective-C': 'apple',
    'C': 'c'
};

export function getIconByLanguage(language: string | null): IconResult | null {
    if (!language) return null;

    const slug = languageToSlugMap[language];
    if (!slug) return null;

    const allIcons = Object.values(icons) as SimpleIcon[];
    const icon = allIcons.find((icon) => icon.slug === slug.toLowerCase());

    if (!icon) return null;

    return {
        title: icon.title,
        hex: icon.hex,
        svg: icon.svg,
        source: icon.source,
        slug: icon.slug
    };
}