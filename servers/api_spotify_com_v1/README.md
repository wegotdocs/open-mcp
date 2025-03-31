# @open-mcp/api_spotify_com_v1

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "api_spotify_com_v1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_spotify_com_v1"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Tools

### get_an_album

### get_multiple_albums

### get_an_albums_tracks

### get_an_artist

### get_multiple_artists

### get_an_artists_albums

### get_an_artists_top_tracks

### get_an_artists_related_artists

### get_a_show

### get_multiple_shows

### get_a_shows_episodes

### get_an_episode

### get_multiple_episodes

### get_an_audiobook

### get_multiple_audiobooks

### get_audiobook_chapters

### get_users_saved_audiobooks

### save_audiobooks_user

### remove_audiobooks_user

### check_users_saved_audiobooks

### get_a_chapter

### get_several_chapters

### get_track

### get_several_tracks

### search

### get_current_users_profile

### get_playlist

### change_playlist_details

### get_playlists_tracks

### add_tracks_to_playlist

### reorder_or_replace_playlists_tracks

### remove_tracks_playlist

### get_a_list_of_current_users_playlists

### get_users_saved_albums

### save_albums_user

### remove_albums_user

### check_users_saved_albums

### get_users_saved_tracks

### save_tracks_user

### remove_tracks_user

### check_users_saved_tracks

### get_users_saved_episodes

### save_episodes_user

### remove_episodes_user

### check_users_saved_episodes

### get_users_saved_shows

### save_shows_user

### remove_shows_user

### check_users_saved_shows

### get_users_profile

### get_list_users_playlists

### create_playlist

### follow_playlist

### unfollow_playlist

### get_featured_playlists

### get_categories

### get_a_category

### get_a_categories_playlists

### get_playlist_cover

### upload_custom_playlist_cover

### get_new_releases

### get_followed

### follow_artists_users

### unfollow_artists_users

### check_current_user_follows

### check_if_user_follows_playlist

### get_several_audio_features

### get_audio_features

### get_audio_analysis

### get_recommendations

### get_recommendation_genres

### get_information_about_the_users_current_playback

### transfer_a_users_playback

### get_a_users_available_devices

### get_the_users_currently_playing_track

### start_a_users_playback

### pause_a_users_playback

### skip_users_playback_to_next_track

### skip_users_playback_to_previous_track

### seek_to_position_in_currently_playing_track

### set_repeat_mode_on_users_playback

### set_volume_for_users_playback

### toggle_shuffle_for_users_playback

### get_recently_played

### get_queue

### add_to_queue

### get_available_markets

### get_users_top_artists

### get_users_top_tracks

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_spotify_com_v1
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_spotify_com_v1`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
