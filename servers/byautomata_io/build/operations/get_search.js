import { z } from "zod";
export const toolName = `get_search`;
export const toolDescription = `Send search terms to receive the most relevant companies along with text snippets.`;
export const baseUrl = `https://api.byautomata.io`;
export const path = `/search`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "terms": z.string().describe("We provide information about related companies based on the search terms you provide. Separate search terms with commas. Ex. https://api.byautomata.io/search?link=cloud+computing,enterprise,security"), "page": z.string().describe("Page number of search results. Ex. https://api.byautomata.io/search?page=0&link=cloud+computing,enterprise,security") }).optional() }).shape;
