export interface CloudinaryImagesResponse {
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
    context?:      Context;
}

export interface Context {
    custom:        Custom;
}

export interface Custom {
    alt:            string;
    caption:        string;
}

export interface ImagesResponse {
    folder:        string;
    format:        string;
    info?:         Info;
    public_id:     string;
    secure_url:    string;
    url:           string;
}

export interface Info {
    description:   string;
    title:         string;
}