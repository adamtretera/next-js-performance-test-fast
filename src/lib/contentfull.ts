import { createClient } from "contentful";
const client = createClient({
    space: "wunm0mcz9dra",
    accessToken:"1XEAb5Cludct4oE5Tkfow26HQlbV-umQVvnXlC5ECuY"
});
export async function getAllItems() {
    const res = await client.getEntries({ content_type: "project" });
    return res.items;
}

