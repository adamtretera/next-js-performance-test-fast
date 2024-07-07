import { createClient } from "contentful";
const client = createClient({
    space: "wunm0mcz9dra",
    accessToken:process.env.CONTENTFUL_ACCESS_TOKEN || ""
});
export async function getAllItems() {
    const res = await client.getEntries({ content_type: "project" });
    return res.items;
}

