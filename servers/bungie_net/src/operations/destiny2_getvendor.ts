import { z } from "zod"

export const toolName = `destiny2_getvendor`
export const toolDescription = `Get the details of a specific Vendor.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/{vendorHash}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "characterId": z.number().int().describe("The Destiny Character ID of the character for whom we're getting vendor info."), "destinyMembershipId": z.number().int().describe("Destiny membership ID of another user. You may be denied."), "membershipType": z.number().int().describe("A valid non-BungieNet membership type."), "vendorHash": z.number().int().describe("The Hash identifier of the Vendor to be returned.") }).optional(), "query": z.object({ "components": z.array(z.number().int().describe("Represents the possible components that can be returned from Destiny \"Get\" calls such as GetProfile, GetCharacter, GetVendor etc...\r\nWhen making one of these requests, you will pass one or more of these components as a comma separated list in the \"?components=\" querystring parameter. For instance, if you want baseline Profile data, Character Data, and character progressions, you would pass \"?components=Profiles,Characters,CharacterProgressions\" You may use either the numerical or string values.")).describe("A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.").optional() }).optional() }).shape