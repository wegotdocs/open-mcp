import { z } from "zod"

export const toolName = `get_similar`
export const toolDescription = `Send a company website to receive a list of companies related to them.`
export const baseUrl = `https://api.byautomata.io`
export const path = `/similar`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "link": z.string().describe("We'll provide information about related companies based on the site you provide. If a LinkedIn page is sent, we will try to identify the company related to the page. Ex. https://api.byautomata.io/similar?link=ibm.com"), "page": z.string().describe("Page number of search results. Ex. https://api.byautomata.io/similar?link=ibm.com&page=1") }).optional() }).shape