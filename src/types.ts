export type Env = {
    r2_pub: R2Bucket,
    r2_projectsStash: R2Bucket
};

export interface SiteConfig {
    /**
     * Name of the site
     */
    name: string;
    /**
     * The Cloudflare R2 bucket binding for this directory listing site.
     */
    bucket: R2Bucket;
    desp: {
        [path: string]: string;
    };
    /**
     * If true, the directory listing will decode the URI components of the object names.
     * This is useful if your object names contain special characters that need to be displayed correctly.
     * @default false
     */
    decodeURI?: boolean;
    /**
     * Legal information to display at the bottom of the page.
     * This can be used to provide copyright information, terms of service, etc.
     * It will be rendered as raw HTML.
     */
    legalInfo?: string;
    showPoweredBy?: boolean;
    /**
     * The URL to the favicon in PNG format to use for this site.
     * If not provided, the default Cloudflare R2 icon will be used.
     */
    favicon?: string;
    /**
     * Enabling it may disrupte the normal reading of existing object.
     * By default, r2-dir-list will not list directory if the request path is a object to prevent disrupting
     * the normal reading of existing object. Enabling this will allow r2-dir-list to list directory even if the
     * request path is a 0-byte object. Do not use them unless you know what you are doing!
     * @default false
     */
    dangerousOverwriteZeroByteObject?: boolean;
}
