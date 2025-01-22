import { createClient } from "next-sanity";

const client = createClient({
    projectId: "j0x90tj1", // Ensure fallback to an empty string
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10",
  });
  

// Fetch data from Sanity
export async function sanityFetch({ query, params = {}}: { query: string; params?: any }) {
  return await  client.fetch(query, params)
}

