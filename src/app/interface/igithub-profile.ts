export interface IGithubProfile {
    name: string;
    login: string;
    followers: number;
    following: number;
    html_url: string;
    public_repos: number;
    avatar_url: string;
    bio?: string;
    company?: string;
    location?: string;
}
