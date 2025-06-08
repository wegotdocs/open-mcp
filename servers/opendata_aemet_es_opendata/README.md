# @open-mcp/opendata_aemet_es_opendata

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "opendata_aemet_es_opendata": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/opendata_aemet_es_opendata@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/opendata_aemet_es_opendata@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add opendata_aemet_es_opendata \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add opendata_aemet_es_opendata \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add opendata_aemet_es_opendata \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "opendata_aemet_es_opendata": {
      "command": "npx",
      "args": ["-y", "@open-mcp/opendata_aemet_es_opendata"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### avisos_de_fen_menos_meteorol_gicos_adversos_ltimo_

**Environment variables**

- `API_KEY`

**Input schema**

- `area` (string)

### avisos_de_fen_menos_meteorol_gicos_adversos_archivo

**Environment variables**

- `API_KEY`

**Input schema**

- `fechaIniStr` (string)
- `fechaFinStr` (string)

### mapa_de_niveles_de_riesgo_estimado_meteorol_gico_de_incendios_fo

**Environment variables**

- `API_KEY`

**Input schema**

- `area` (string)

### mapa_de_niveles_de_riesgo_previsto_meteorol_gico_de_incendios_fo

**Environment variables**

- `API_KEY`

**Input schema**

- `dia` (string)
- `area` (string)

### getmunicipiousingget

**Environment variables**

- `API_KEY`

**Input schema**

- `municipio` (string)

### getmunicipiosusingget

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### mapas_de_an_lisis_ltima_pasada_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### mapas_significativos_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `fecha` (string)
- `ambito` (string)
- `dia` (string)

### datos_de_observaci_n_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### datos_de_observaci_n_tiempo_actual_1

**Environment variables**

- `API_KEY`

**Input schema**

- `idema` (string)

### mensajes_de_observaci_n_ltimo_elaborado_

**Environment variables**

- `API_KEY`

**Input schema**

- `tipomensaje` (string)

### predicci_n_ccaa_hoy_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `ccaa` (string)

### predicci_n_ccaa_hoy_archivo_

**Environment variables**

- `API_KEY`

**Input schema**

- `ccaa` (string)
- `fecha` (string)

### predicci_n_ccaa_ma_ana_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `ccaa` (string)

### predicci_n_ccaa_ma_ana_archivo_

**Environment variables**

- `API_KEY`

**Input schema**

- `ccaa` (string)
- `fecha` (string)

### predicci_n_ccaa_medio_plazo_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `ccaa` (string)

### predicci_n_ccaa_medio_plazo_archivo_

**Environment variables**

- `API_KEY`

**Input schema**

- `ccaa` (string)
- `fecha` (string)

### predicci_n_ccaa_pasado_ma_ana_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `ccaa` (string)

### predicci_n_ccaa_pasado_ma_ana_archivo_

**Environment variables**

- `API_KEY`

**Input schema**

- `ccaa` (string)
- `fecha` (string)

### predicci_n_de_monta_a_tiempo_pasado_

**Environment variables**

- `API_KEY`

**Input schema**

- `area` (string)

### predicci_n_de_monta_a_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `area` (string)
- `dia` (string)

### informacion_nivologica_

**Environment variables**

- `API_KEY`

**Input schema**

- `area` (string)

### predicci_n_por_municipios_diaria_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `municipio` (string)

### predicci_n_por_municipios_horaria_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `municipio` (string)

### predicci_n_para_las_playas_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `playa` (string)

### predicci_n_de_radiaci_n_ultravioleta_uvi_

**Environment variables**

- `API_KEY`

**Input schema**

- `dia` (string)

### predicci_n_mar_tima_de_alta_mar_

**Environment variables**

- `API_KEY`

**Input schema**

- `area` (string)

### predicci_n_mar_tima_costera_

**Environment variables**

- `API_KEY`

**Input schema**

- `costa` (string)

### predicci_n_nacional_hoy_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### predicci_n_nacional_hoy_archivo_

**Environment variables**

- `API_KEY`

**Input schema**

- `fecha` (string)

### predicci_n_nacional_ma_ana_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### predicci_n_nacional_ma_ana_archivo_

**Environment variables**

- `API_KEY`

**Input schema**

- `fecha` (string)

### predicci_n_nacional_medio_plazo_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### predicci_n_nacional_medio_plazo_archivo_

**Environment variables**

- `API_KEY`

**Input schema**

- `fecha` (string)

### predicci_n_nacional_pasado_ma_ana_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### predicci_n_nacional_pasado_ma_ana_archivo_

**Environment variables**

- `API_KEY`

**Input schema**

- `fecha` (string)

### predicci_n_nacional_tendencia_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### predicci_n_nacional_tendencia_archivo_

**Environment variables**

- `API_KEY`

**Input schema**

- `fecha` (string)

### predicci_n_provincial_e_insular_hoy_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `provincia` (string)

### predicci_n_provincial_e_insular_hoy_archivo_

**Environment variables**

- `API_KEY`

**Input schema**

- `provincia` (string)
- `fecha` (string)

### predicci_n_provincial_e_insular_ma_ana_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `provincia` (string)

### predicci_n_provincial_o_insular_ma_ana_archivo_

**Environment variables**

- `API_KEY`

**Input schema**

- `provincia` (string)
- `fecha` (string)

### balance_h_drico_nacional_documento_

**Environment variables**

- `API_KEY`

**Input schema**

- `anio` (string)
- `decena` (string)

### resumen_mensual_climatol_gico_nacional_documento_

**Environment variables**

- `API_KEY`

**Input schema**

- `anio` (string)
- `mes` (string)

### capas_shape_de_estaciones_climatol_gicas_

**Environment variables**

- `API_KEY`

**Input schema**

- `tipoestacion` (string)

### datos_de_contaminaci_n_de_fondo_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `nombre_estacion` (string)

### contenido_total_de_ozono_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### perfiles_verticales_de_ozono_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

- `estacion` (string)

### datos_de_radiaci_n_global_directa_o_difusa_tiempo_actual_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### imagen_composici_n_nacional_radares_tiempo_actual_est_ndar_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### radar_regional

**Environment variables**

- `API_KEY`

**Input schema**

- `radar` (string)

### mapa_con_los_rayos_registrados_en_periodo_standard_ltimo_elabora

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### _ndice_normalizado_de_vegetaci_n_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### temperatura_del_agua_del_mar_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### climatolog_as_diarias_

**Environment variables**

- `API_KEY`

**Input schema**

- `fechaIniStr` (string)
- `fechaFinStr` (string)
- `idema` (string)

### climatolog_as_diarias_1

**Environment variables**

- `API_KEY`

**Input schema**

- `fechaIniStr` (string)
- `fechaFinStr` (string)

### estaciones_por_indicativo_

**Environment variables**

- `API_KEY`

**Input schema**

- `estaciones` (string)

### inventario_de_estaciones_valores_climatol_gicos_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### climatolog_as_mensuales_anuales_

**Environment variables**

- `API_KEY`

**Input schema**

- `anioIniStr` (string)
- `anioFinStr` (string)
- `idema` (string)

### climatolog_as_normales_1991_2020_

**Environment variables**

- `API_KEY`

**Input schema**

- `idema` (string)

### valores_extremos_

**Environment variables**

- `API_KEY`

**Input schema**

- `parametro` (string)
- `idema` (string)

### datos_ant_rtida_

**Environment variables**

- `API_KEY`

**Input schema**

- `fechaIniStr` (string)
- `fechaFinStr` (string)
- `identificacion` (string)
