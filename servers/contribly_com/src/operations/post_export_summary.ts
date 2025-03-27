import { z } from "zod"

export const toolName = `post_export_summary`
export const toolDescription = `Export contributions preflight summary.`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/export-summary`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "assignment": z.string().describe("Restrict results to contributions submitted to this assignment.").optional(), "country": z.string().describe("Limit results to contributions which have a publicly visible location within the given country (specified by two letter country code).").optional(), "createdBefore": z.string().datetime({ offset: true }).describe("Limit results to contributions created before this date time.").optional(), "createdAfter": z.string().datetime({ offset: true }).describe("Limit results to contributions created after this date time.").optional(), "geohash": z.string().describe("Restrict results to contributions which have specified a location which falls within this geohash (or comma seperated list of multiple geohashes)").optional(), "hasLocation": z.boolean().describe("Restrict results to contributions which have a publicly visible location.").optional(), "latLong": z.string().describe("Limit results to contributions with location near this latitude and longitude (comma seperated lat/long pair). Also see radius").optional(), "radius": z.number().describe("When limiting result by location with the latLong parameter, specify the radius in kilometers.").optional(), "mediaType": z.string().describe("Restrict results to contributions which include a media file of the given type (ie. image / video)").optional(), "ownedBy": z.string().describe("Restrict results to contributions which are fall under the jurisdiction by this user.").optional(), "q": z.string().describe("Restrict results to contributions whose headline text matches this keyword.").optional(), "urlWords": z.string().describe("Locate a specific contribution by URL words").optional(), "user": z.string().describe("Restrict results to contributions by this user identified by id.").optional() }).optional() }).shape