import { algoliasearch } from "algoliasearch";

export const algoliaClient = () => {
    const appID = process.env.ALGOLIA_APP_ID;
    // API key with `addObject` and `editSettings` ACL
    const apiKey = process.env.ALGOLIA_SEARCH_KEY;
    const indexName = process.env.ALGOLIA_SEARCH_INDEX;
    
    if (!appID || !apiKey) {
        throw new Error("Algolia app ID and API key must be defined");
    }
    const client = algoliasearch(appID, apiKey);
    return client
}

export const algoliaWriteClient = () => {
    const appID = process.env.ALGOLIA_APP_ID;
    // API key with `addObject` and `editSettings` ACL
    const apiKey = process.env.ALGOLIA_WRITE_KEY;
    const indexName = process.env.ALGOLIA_SEARCH_INDEX;
    
    if (!appID || !apiKey) {
        throw new Error("Algolia app ID and API key must be defined");
    }
    const client = algoliasearch(appID, apiKey);
    return client
}