import { z } from "zod";
export const toolName = `getphotoexifbyid`;
export const toolDescription = `Retrieves a list of EXIF/TIFF/GPS tags for a given photo. The calling user must have permission to view the photo.`;
export const baseUrl = `https://api.flickr.com/services`;
export const path = `/rest?method=flickr.photos.getExif`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "photo_id": z.string().regex(new RegExp("^[0-9]+$")), "secret": z.string().optional() }).optional() }).shape;
