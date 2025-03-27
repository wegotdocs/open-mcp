import { z } from "zod";
export const toolName = `get_contentpro_search`;
export const toolDescription = `Send search terms to receive the most relevant articles and companies.`;
export const baseUrl = `https://api.byautomata.io`;
export const path = `/contentpro-search`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "terms": z.string().describe("We provide information about related companies and articles based on the search terms you provide. Separate search terms with commas. Ex. https://api.byautomata.io/contentpro-search?terms=cloud+computing,enterprise,security") }).optional() }).shape;
