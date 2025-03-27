import { z } from "zod"

export const toolName = `post_assignments`
export const toolDescription = `Create a new assignment`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/assignments`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "allowsAnonymousContributions": z.boolean().optional(), "cover": z.object({ "artifacts": z.array(z.object({ "contentLength": z.number().optional(), "contentType": z.string().optional(), "height": z.number().optional(), "label": z.string().optional(), "url": z.string().optional(), "width": z.number().optional() })).optional(), "id": z.string().optional(), "media": z.object({ "duration": z.number().optional(), "id": z.string().optional(), "place": z.object({ "country": z.string().optional(), "geohash": z.string().optional(), "google": z.string().optional(), "latLong": z.object({ "latitude": z.number().optional(), "longitude": z.number().optional() }).optional(), "name": z.string().optional(), "osm": z.object({ "osmId": z.number().optional(), "osmType": z.string().optional() }).optional() }).optional(), "type": z.string().optional() }).optional() }).optional(), "description": z.string().optional(), "embargo": z.string().datetime({ offset: true }).optional(), "ends": z.string().datetime({ offset: true }).optional(), "featured": z.boolean().optional(), "id": z.string().optional(), "mediaRequired": z.boolean().optional(), "moderator": z.string().describe("Optional credential id of the login which will moderator this assignment.").optional(), "name": z.string(), "receiptMessage": z.string().describe("An optional assignment specific message to be displayed on successful contribution submission. For example, this might be used to inform contributors of assignment specific moderation time frames.").optional(), "starts": z.string().datetime({ offset: true }).optional(), "tags": z.array(z.object({ "colour": z.string().describe("Optional HTML hexcode colour").optional(), "id": z.string(), "name": z.string(), "tagSet": z.object({ "id": z.string(), "name": z.string() }).optional(), "urlWords": z.string().optional() })).optional(), "urlWords": z.string().optional() }).optional() }).shape