import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "title": z.string().nullable().optional(),
  "sortTitle": z.string().nullable().optional(),
  "tmdbId": z.number().int().optional(),
  "images": z.array(z.object({ "coverType": z.enum(["unknown","poster","banner","fanart","screenshot","headshot","clearlogo"]).optional(), "url": z.string().nullable().optional(), "remoteUrl": z.string().nullable().optional() }).strict()).nullable().optional(),
  "overview": z.string().nullable().optional(),
  "monitored": z.boolean().optional(),
  "rootFolderPath": z.string().nullable().optional(),
  "qualityProfileId": z.number().int().optional(),
  "searchOnAdd": z.boolean().optional(),
  "minimumAvailability": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(),
  "movies": z.array(z.object({ "tmdbId": z.number().int().optional(), "imdbId": z.string().nullable().optional(), "title": z.string().nullable().optional(), "cleanTitle": z.string().nullable().optional(), "sortTitle": z.string().nullable().optional(), "status": z.enum(["tba","announced","inCinemas","released","deleted"]).optional(), "overview": z.string().nullable().optional(), "runtime": z.number().int().optional(), "images": z.array(z.object({ "coverType": z.enum(["unknown","poster","banner","fanart","screenshot","headshot","clearlogo"]).optional(), "url": z.string().nullable().optional(), "remoteUrl": z.string().nullable().optional() }).strict()).nullable().optional(), "year": z.number().int().optional(), "ratings": z.object({ "imdb": z.object({ "votes": z.number().int().optional(), "value": z.number().optional(), "type": z.enum(["user","critic"]).optional() }).strict().optional(), "tmdb": z.object({ "votes": z.number().int().optional(), "value": z.number().optional(), "type": z.enum(["user","critic"]).optional() }).strict().optional(), "metacritic": z.object({ "votes": z.number().int().optional(), "value": z.number().optional(), "type": z.enum(["user","critic"]).optional() }).strict().optional(), "rottenTomatoes": z.object({ "votes": z.number().int().optional(), "value": z.number().optional(), "type": z.enum(["user","critic"]).optional() }).strict().optional(), "trakt": z.object({ "votes": z.number().int().optional(), "value": z.number().optional(), "type": z.enum(["user","critic"]).optional() }).strict().optional() }).strict().optional(), "genres": z.array(z.string()).nullable().optional(), "folder": z.string().nullable().optional(), "isExisting": z.boolean().optional(), "isExcluded": z.boolean().optional() }).strict()).nullable().optional(),
  "missingMovies": z.number().int().optional(),
  "tags": z.array(z.number().int()).nullable().optional()
}