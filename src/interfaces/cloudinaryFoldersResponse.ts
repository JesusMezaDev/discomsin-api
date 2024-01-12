export interface CloudinaryFoldersResponse {
    folders:              Folder[];
    next_cursor:          null;
    total_count:          number;
    rate_limit_allowed:   number;
    rate_limit_reset_at:  string;
    rate_limit_remaining: number;
}

export interface Folder {
    name: string;
    path: string;
}