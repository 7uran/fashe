import { createClient } from "@sanity/client";

const client = createClient({
    projectId: process.env.NEXT_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_SANITY_DATASET,
    token: process.env.NEXT_SANITY_TOKEN,
    useCdn: false,
});

export default client;
