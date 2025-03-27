import { z } from "zod"

export const toolName = `destiny2_getpublicvendors`
export const toolDescription = `Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/Vendors/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "components": z.array(z.number().int().describe("Represents the possible components that can be returned from Destiny \"Get\" calls such as GetProfile, GetCharacter, GetVendor etc...\r\nWhen making one of these requests, you will pass one or more of these components as a comma separated list in the \"?components=\" querystring parameter. For instance, if you want baseline Profile data, Character Data, and character progressions, you would pass \"?components=Profiles,Characters,CharacterProgressions\" You may use either the numerical or string values.")).describe("A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.").optional() }).optional() }).shape