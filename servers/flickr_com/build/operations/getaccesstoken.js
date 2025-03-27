import { z } from "zod";
export const toolName = `getaccesstoken`;
export const toolDescription = `Returns an access token`;
export const baseUrl = `https://api.flickr.com/services`;
export const path = `/oauth/access_token`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "oauth_consumer_key": z.string(), "oauth_nonce": z.string(), "oauth_timestamp": z.string().regex(new RegExp("^[0-9]+$")), "oauth_signature_method": z.string(), "oauth_version": z.string(), "oauth_signature": z.string(), "oauth_verifier": z.string(), "oauth_token": z.string() }).optional() }).shape;
