"use client"

import { Popover, Stack, Text, Tooltip } from "@mantine/core"
import { Map, MapMarker } from "mantine-map"

import { setWorkerUrl } from "mantine-map"
setWorkerUrl("/maplibre-gl-worker.mjs")
// Keyless CARTO basemaps, swapped with the Mantine color scheme
const basemap = {
  light: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
  dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
}

export default function Component() {
  return (
    <Map
      mapStyle={basemap}
      initialViewState={{ longitude: 29.0035, latitude: 41.0407, zoom: 14 }}
      style={{ height: 460 }}
    >
      {/* Tooltip on hover: wrap the marker */}
      <Tooltip label="Beşiktaş Meydanı">
        <MapMarker longitude={29.0061} latitude={41.0422} />
      </Tooltip>

      {/* Popover on click: wrap the marker as the target */}
      <Popover withArrow shadow="md">
        <Popover.Target>
          <MapMarker longitude={29.0007} latitude={41.0391} color="grape" />
        </Popover.Target>
        <Popover.Dropdown>
          <Stack gap={4}>
            <Text fw={600}>Dolmabahçe Palace</Text>
            <Text size="sm" c="dimmed">
              Beşiktaş, İstanbul
            </Text>
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </Map>
  )
}
