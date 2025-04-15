import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_recommendations",
  "toolDescription": "Get Recommendations",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/recommendations",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "market": "market",
      "seed_artists": "seed_artists",
      "seed_genres": "seed_genres",
      "seed_tracks": "seed_tracks",
      "min_acousticness": "min_acousticness",
      "max_acousticness": "max_acousticness",
      "target_acousticness": "target_acousticness",
      "min_danceability": "min_danceability",
      "max_danceability": "max_danceability",
      "target_danceability": "target_danceability",
      "min_duration_ms": "min_duration_ms",
      "max_duration_ms": "max_duration_ms",
      "target_duration_ms": "target_duration_ms",
      "min_energy": "min_energy",
      "max_energy": "max_energy",
      "target_energy": "target_energy",
      "min_instrumentalness": "min_instrumentalness",
      "max_instrumentalness": "max_instrumentalness",
      "target_instrumentalness": "target_instrumentalness",
      "min_key": "min_key",
      "max_key": "max_key",
      "target_key": "target_key",
      "min_liveness": "min_liveness",
      "max_liveness": "max_liveness",
      "target_liveness": "target_liveness",
      "min_loudness": "min_loudness",
      "max_loudness": "max_loudness",
      "target_loudness": "target_loudness",
      "min_mode": "min_mode",
      "max_mode": "max_mode",
      "target_mode": "target_mode",
      "min_popularity": "min_popularity",
      "max_popularity": "max_popularity",
      "target_popularity": "target_popularity",
      "min_speechiness": "min_speechiness",
      "max_speechiness": "max_speechiness",
      "target_speechiness": "target_speechiness",
      "min_tempo": "min_tempo",
      "max_tempo": "max_tempo",
      "target_tempo": "target_tempo",
      "min_time_signature": "min_time_signature",
      "max_time_signature": "max_time_signature",
      "target_time_signature": "target_time_signature",
      "min_valence": "min_valence",
      "max_valence": "max_valence",
      "target_valence": "target_valence"
    }
  },
  inputParamsSchema
}

export default tool