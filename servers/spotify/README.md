# @open-mcp/spotify

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "spotify": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/spotify@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/spotify@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add spotify \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add spotify \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add spotify \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "spotify": {
      "command": "npx",
      "args": ["-y", "@open-mcp/spotify"],
      "env": {"OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `OAUTH2_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_an_album

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `market` (string)

### get_multiple_albums

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)
- `market` (string)

### get_an_albums_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `market` (string)
- `limit` (integer)
- `offset` (integer)

### get_an_artist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### get_multiple_artists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)

### get_an_artists_albums

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `include_groups` (string)
- `market` (string)
- `limit` (integer)
- `offset` (integer)

### get_an_artists_top_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `market` (string)

### get_an_artists_related_artists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### get_a_show

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `market` (string)

### get_multiple_shows

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `market` (string)
- `ids` (string)

### get_a_shows_episodes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `market` (string)
- `limit` (integer)
- `offset` (integer)

### get_an_episode

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `market` (string)

### get_multiple_episodes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)
- `market` (string)

### get_an_audiobook

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `market` (string)

### get_multiple_audiobooks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)
- `market` (string)

### get_audiobook_chapters

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `market` (string)
- `limit` (integer)
- `offset` (integer)

### get_users_saved_audiobooks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### save_audiobooks_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)

### remove_audiobooks_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)

### check_users_saved_audiobooks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)

### get_a_chapter

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `market` (string)

### get_several_chapters

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)
- `market` (string)

### get_track

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `market` (string)

### get_several_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `market` (string)
- `ids` (string)

### search

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `q` (string)
- `type` (array)
- `market` (string)
- `limit` (integer)
- `offset` (integer)
- `include_external` (string)

### get_current_users_profile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### get_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `playlist_id` (string)
- `market` (string)
- `fields` (string)
- `additional_types` (string)

### change_playlist_details

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `playlist_id` (string)
- `name` (string)
- `public` (boolean)
- `collaborative` (boolean)
- `description` (string)

### get_playlists_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `playlist_id` (string)
- `market` (string)
- `fields` (string)
- `limit` (integer)
- `offset` (integer)
- `additional_types` (string)

### add_tracks_to_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `playlist_id` (string)
- `position` (integer)
- `uris` (string)
- `b_uris` (array)
- `b_position` (integer)

### reorder_or_replace_playlists_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `playlist_id` (string)
- `uris` (string)
- `b_uris` (array)
- `range_start` (integer)
- `insert_before` (integer)
- `range_length` (integer)
- `snapshot_id` (string)

### remove_tracks_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `playlist_id` (string)
- `tracks` (array)
- `snapshot_id` (string)

### get_a_list_of_current_users_playlists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### get_users_saved_albums

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `market` (string)

### save_albums_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)
- `b_ids` (array)

### remove_albums_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)
- `b_ids` (array)

### check_users_saved_albums

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)

### get_users_saved_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `market` (string)
- `limit` (integer)
- `offset` (integer)

### save_tracks_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)
- `b_ids` (array)

### remove_tracks_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)
- `b_ids` (array)

### check_users_saved_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)

### get_users_saved_episodes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `market` (string)
- `limit` (integer)
- `offset` (integer)

### save_episodes_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)
- `b_ids` (array)

### remove_episodes_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)
- `b_ids` (array)

### check_users_saved_episodes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)

### get_users_saved_shows

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### save_shows_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)
- `b_ids` (array)

### remove_shows_user

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)
- `market` (string)
- `b_ids` (array)

### check_users_saved_shows

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)

### get_users_profile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `user_id` (string)

### get_list_users_playlists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `user_id` (string)
- `limit` (integer)
- `offset` (integer)

### create_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `user_id` (string)
- `name` (string)
- `public` (boolean)
- `collaborative` (boolean)
- `description` (string)

### follow_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `playlist_id` (string)
- `public` (boolean)

### unfollow_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `playlist_id` (string)

### get_featured_playlists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `locale` (string)
- `limit` (integer)
- `offset` (integer)

### get_categories

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `locale` (string)
- `limit` (integer)
- `offset` (integer)

### get_a_category

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `category_id` (string)
- `locale` (string)

### get_a_categories_playlists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `category_id` (string)
- `limit` (integer)
- `offset` (integer)

### get_playlist_cover

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `playlist_id` (string)

### upload_custom_playlist_cover

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `playlist_id` (string)

### get_new_releases

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### get_followed

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `type` (string)
- `after` (string)
- `limit` (integer)

### follow_artists_users

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `type` (string)
- `ids` (string)
- `b_ids` (array)

### unfollow_artists_users

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `type` (string)
- `ids` (string)
- `b_ids` (array)

### check_current_user_follows

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `type` (string)
- `ids` (string)

### check_if_user_follows_playlist

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `playlist_id` (string)
- `ids` (string)

### get_several_audio_features

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (string)

### get_audio_features

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### get_audio_analysis

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### get_recommendations

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `market` (string)
- `seed_artists` (string)
- `seed_genres` (string)
- `seed_tracks` (string)
- `min_acousticness` (number)
- `max_acousticness` (number)
- `target_acousticness` (number)
- `min_danceability` (number)
- `max_danceability` (number)
- `target_danceability` (number)
- `min_duration_ms` (integer)
- `max_duration_ms` (integer)
- `target_duration_ms` (integer)
- `min_energy` (number)
- `max_energy` (number)
- `target_energy` (number)
- `min_instrumentalness` (number)
- `max_instrumentalness` (number)
- `target_instrumentalness` (number)
- `min_key` (integer)
- `max_key` (integer)
- `target_key` (integer)
- `min_liveness` (number)
- `max_liveness` (number)
- `target_liveness` (number)
- `min_loudness` (number)
- `max_loudness` (number)
- `target_loudness` (number)
- `min_mode` (integer)
- `max_mode` (integer)
- `target_mode` (integer)
- `min_popularity` (integer)
- `max_popularity` (integer)
- `target_popularity` (integer)
- `min_speechiness` (number)
- `max_speechiness` (number)
- `target_speechiness` (number)
- `min_tempo` (number)
- `max_tempo` (number)
- `target_tempo` (number)
- `min_time_signature` (integer)
- `max_time_signature` (integer)
- `target_time_signature` (integer)
- `min_valence` (number)
- `max_valence` (number)
- `target_valence` (number)

### get_recommendation_genres

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### get_information_about_the_users_current_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `market` (string)
- `additional_types` (string)

### transfer_a_users_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `device_ids` (array)
- `play` (boolean)

### get_a_users_available_devices

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### get_the_users_currently_playing_track

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `market` (string)
- `additional_types` (string)

### start_a_users_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `device_id` (string)
- `context_uri` (string)
- `uris` (array)
- `offset` (object)
- `position_ms` (integer)

### pause_a_users_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `device_id` (string)

### skip_users_playback_to_next_track

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `device_id` (string)

### skip_users_playback_to_previous_track

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `device_id` (string)

### seek_to_position_in_currently_playing_track

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `position_ms` (integer)
- `device_id` (string)

### set_repeat_mode_on_users_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `state` (string)
- `device_id` (string)

### set_volume_for_users_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `volume_percent` (integer)
- `device_id` (string)

### toggle_shuffle_for_users_playback

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `state` (boolean)
- `device_id` (string)

### get_recently_played

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `after` (integer)
- `before` (integer)

### get_queue

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### add_to_queue

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `uri` (string)
- `device_id` (string)

### get_available_markets

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### get_users_top_artists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `time_range` (string)
- `limit` (integer)
- `offset` (integer)

### get_users_top_tracks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `time_range` (string)
- `limit` (integer)
- `offset` (integer)
