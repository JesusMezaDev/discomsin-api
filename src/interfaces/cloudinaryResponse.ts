export interface CloudinaryResponse {
    resources:            Resource[];
    rate_limit_allowed:   number;
    rate_limit_reset_at:  string;
    rate_limit_remaining: number;
}

export interface Resource {
    asset_id:      string;
    public_id:     string;
    format:        string;
    version:       number;
    resource_type: string;
    type:          string;
    created_at:    string;
    bytes:         number;
    width:         number;
    height:        number;
    folder:        string;
    access_mode:   string;
    url:           string;
    secure_url:    string;
}

export interface ImagesResponse {
    public_id:     string;
    format:        string;
    folder:        string;
    url:           string;
    secure_url:    string;
}