export type ReposProps = {
    login: string;
    id: number;
    html_url: string;
    name:string;
    stargazers_count:number;
    topics?: string;
    language: string | null;
    icons: string
}