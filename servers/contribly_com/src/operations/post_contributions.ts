import { z } from "zod"

export const toolName = `post_contributions`
export const toolDescription = `Create a new contribution`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/contributions`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "body": z.object({ "assignment": z.object({ "allowsAnonymousContributions": z.boolean().optional(), "callToAction": z.string().describe("An optional call to action specific to this assignment. ie. Submit your snow pictures.").optional(), "cover": z.object({ "artifacts": z.array(z.object({ "contentLength": z.number().optional(), "contentType": z.string().optional(), "height": z.number().optional(), "label": z.string().optional(), "url": z.string().optional(), "width": z.number().optional() })).optional(), "id": z.string().optional(), "media": z.object({ "duration": z.number().optional(), "id": z.string().optional(), "place": z.object({ "country": z.string().optional(), "geohash": z.string().optional(), "google": z.string().optional(), "latLong": z.object({ "latitude": z.number().optional(), "longitude": z.number().optional() }).optional(), "name": z.string().optional(), "osm": z.object({ "osmId": z.number().optional(), "osmType": z.string().optional() }).optional() }).optional(), "type": z.string().optional() }).optional() }).optional(), "created": z.string().datetime({ offset: true }).optional(), "description": z.string().optional(), "embargo": z.string().datetime({ offset: true }).optional(), "ends": z.string().datetime({ offset: true }).optional(), "featured": z.boolean().optional(), "id": z.string().optional(), "mediaRequired": z.boolean().optional(), "moderator": z.string().describe("Optional credential id of the moderator who owns this particular assignment.").optional(), "name": z.string().optional(), "open": z.boolean().describe("Helper value. Is this assignment currently open? Based on the value of the ends field.").optional(), "receiptMessage": z.string().describe("An optional assignment specific message to be displayed on successful contribution submission. For example, this might be used to inform contributors of assignment specific moderation time frames.").optional(), "starts": z.string().datetime({ offset: true }).optional(), "tags": z.array(z.object({ "colour": z.string().describe("Optional HTML hexcode colour").optional(), "id": z.string(), "name": z.string(), "tagSet": z.object({ "id": z.string(), "name": z.string() }).optional(), "urlWords": z.string().optional() })).optional(), "urlWords": z.string().optional(), "webUrl": z.string().optional() }).optional(), "attribution": z.string().describe("The public attribution for this contribution. This will be the display name of the registered user or the contributor's first and last name if they provided them while making a non authenticated contribution. A blank attribution field indicates and anonymous contribution.").optional(), "body": z.string().optional(), "created": z.string().datetime({ offset: true }).optional(), "headline": z.string().optional(), "id": z.string().optional(), "mediaUsages": z.array(z.object({ "artifacts": z.array(z.object({ "contentLength": z.number().optional(), "contentType": z.string().optional(), "height": z.number().optional(), "label": z.string().optional(), "url": z.string().optional(), "width": z.number().optional() })).optional(), "id": z.string().optional(), "media": z.object({ "duration": z.number().optional(), "id": z.string().optional(), "place": z.object({ "country": z.string().optional(), "geohash": z.string().optional(), "google": z.string().optional(), "latLong": z.object({ "latitude": z.number().optional(), "longitude": z.number().optional() }).optional(), "name": z.string().optional(), "osm": z.object({ "osmId": z.number().optional(), "osmType": z.string().optional() }).optional() }).optional(), "type": z.string().optional() }).optional() })).optional(), "moderationHistory": z.array(z.object({ "action": z.object({ "id": z.string(), "label": z.string(), "resultingState": z.object({ "id": z.string(), "label": z.string(), "public": z.boolean() }) }).optional(), "date": z.string().datetime({ offset: true }), "notes": z.string().optional() })).optional(), "place": z.object({ "country": z.string().optional(), "geohash": z.string().optional(), "google": z.string().optional(), "latLong": z.object({ "latitude": z.number().optional(), "longitude": z.number().optional() }).optional(), "name": z.string().optional(), "osm": z.object({ "osmId": z.number().optional(), "osmType": z.string().optional() }).optional() }).optional(), "urlWords": z.string().optional(), "via": z.object({ "authority": z.object({ "client": z.object({ "id": z.string().optional(), "name": z.string().optional() }).optional(), "id": z.string().optional(), "user": z.object({ "bio": z.string().optional(), "displayName": z.string().optional(), "id": z.string().optional(), "registered": z.string().datetime({ offset: true }).optional(), "username": z.string().optional() }).optional() }).optional(), "ipAddress": z.string().optional(), "ipAddressPlace": z.object({ "country": z.string().optional(), "geohash": z.string().optional(), "google": z.string().optional(), "latLong": z.object({ "latitude": z.number().optional(), "longitude": z.number().optional() }).optional(), "name": z.string().optional(), "osm": z.object({ "osmId": z.number().optional(), "osmType": z.string().optional() }).optional() }).optional() }).optional() }).optional() }).shape