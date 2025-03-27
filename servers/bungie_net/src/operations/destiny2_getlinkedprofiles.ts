import { z } from "zod"

export const toolName = `destiny2_getlinkedprofiles`
export const toolDescription = `Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/{membershipType}/Profile/{membershipId}/LinkedProfiles/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "getAllMemberships": z.boolean().describe("(optional) if set to 'true', all memberships regardless of whether they're obscured by overrides will be returned. Normal privacy restrictions on account linking will still apply no matter what.").optional() }).optional(), "path": z.object({ "membershipId": z.number().int().describe("The ID of the membership whose linked Destiny accounts you want returned. Make sure your membership ID matches its Membership Type: don't pass us a PSN membership ID and the XBox membership type, it's not going to work!"), "membershipType": z.number().int().describe("The type for the membership whose linked Destiny accounts you want returned.") }).optional() }).shape