import React, { useState, useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import SceneView from "@arcgis/core/views/SceneView";
import Layer1Layer1Import from "../../api/layer1/layer1.geojson";
import Layer1Stairs1Import from '../../api/layer1/stairs1.geojson'
import Layer2Layer2BackImport from "../../api/layer2/layer2_back/layer2_back.geojson";
import Layer2Layer2BackInImport from "../../api/layer2/layer2_back/layer2_back_in.geojson";
import Layer2Layer2FrontImport from "../../api/layer2/layer2_front/layer2_front.geojson";
import Layer2Layer2FrontInImport from "../../api/layer2/layer2_front/layer2_front_in.geojson";
import Layer2Layer2LeftImport from "../../api/layer2/layer2_left/layer2_left.geojson";
import Layer2Layer2LeftInImport from "../../api/layer2/layer2_left/layer2_left_in.geojson";
import Layer2Layer2RightImport from "../../api/layer2/layer2_right/layer2_right.geojson";
import Layer2Layer2RightInImport from "../../api/layer2/layer2_right/layer2_right_in.geojson";

import Layer3Layer3FrontImport from "../../api/layer3/layer3_front/layer3_front.geojson";
import Layer3Layer3BackImport from "../../api/layer3/layer3_back/layer3_back.geojson";
import Layer3Layer3LeftImport from "../../api/layer3/layer3_left/layer3_left.geojson";
import Layer3Layer3RightImport from "../../api/layer3/layer3_right/layer3_right.geojson";
import Layer4Layer4BackImport from "../../api/layer4/layer4_back/layer4_back.geojson";
import Layer4Layer4ColumnsImport from "../../api/layer4/layer4_columns/layer4_columns.geojson";
import Layer4Layer4ColumnsEntranceImport from "../../api/layer4/layer4_columnsEntrance/layer4_columnsEntrance.geojson";
import Layer4Layer4FrontImport from "../../api/layer4/layer4_front/layer4_front.geojson";
import Layer4Layer4BLeftImport from "../../api/layer4/layer4_left/layer4_left.geojson";
import Layer4Layer4RightImport from "../../api/layer4/layer4_right/layer4_right.geojson";
import Layer4Layer4WallGateImport from "../../api/layer4/layer4_wallGate/layer4_wallGate.geojson";
import { setDefaultOptions, loadModules } from "esri-loader";

function MapScreen() {
  const mapRef = useRef();
  const temp = useRef();

  useEffect(() => {
    // setLayout("mapscreen")
    const view = loadModules([
      "esri/config",
      "esri/Map",
      "esri/layers/GeoJSONLayer",
      "esri/views/SceneView",
    ])
      .then(([esriConfig, Map, GeoJSONLayer, SceneView]) => {
        esriConfig.apiKey =
          "AAPK153dce9e0e644d6e8c3aa9d31e337885D9GGnN3i1YMijI1828DyCXRL2L2DjHT_Zc1-XOEbOGT0HIFYyvAdgxnqT59Lfmjm";
        const layer1Layer1 = new GeoJSONLayer({
          url: Layer1Layer1Import,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.98,
                  material: {
                    color: "#9f8c78",
                  },
                },
              ],
            },
          },
        });

        const Layer1Stairs1 = new GeoJSONLayer({
          url: Layer1Stairs1Import,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.11,
                  material: {
                    color: "#666666",
                  },
                },
              ],
            },
          },
        });

        const Layer2Layer2Back = new GeoJSONLayer({
          url: Layer2Layer2BackImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer2Layer2BackIn = new GeoJSONLayer({
          url: Layer2Layer2BackInImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.12,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer2Layer2Front = new GeoJSONLayer({
          url: Layer2Layer2FrontImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer2Layer2FrontIn = new GeoJSONLayer({
          url: Layer2Layer2FrontInImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.12,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer2Layer2Left = new GeoJSONLayer({
          url: Layer2Layer2LeftImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer2Layer2LeftIn = new GeoJSONLayer({
          url: Layer2Layer2LeftInImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.12,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer2Layer2Right = new GeoJSONLayer({
          url: Layer2Layer2RightImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer2Layer2RightIn = new GeoJSONLayer({
          url: Layer2Layer2RightInImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.12,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const layer3Layer3Front = new GeoJSONLayer({
          url: Layer3Layer3FrontImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.2,
                  material: {
                    color: "#C8C2BA",
                  },
                },
              ],
            },
          },
        });

        const layer3Layer3Back = new GeoJSONLayer({
          url: Layer3Layer3BackImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.2,
                  material: {
                    color: "#C8C2BA",
                  },
                },
              ],
            },
          },
        });

        const layer3Layer3Left = new GeoJSONLayer({
          url: Layer3Layer3LeftImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.2,
                  material: {
                    color: "#C8C2BA",
                  },
                },
              ],
            },
          },
        });

        const layer3Layer3Right = new GeoJSONLayer({
          url: Layer3Layer3RightImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.2,
                  material: {
                    color: "#C8C2BA",
                  },
                },
              ],
            },
          },
        });

        const Layer4Layer4Back = new GeoJSONLayer({
          url: Layer4Layer4BackImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 9.7,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const Layer4Layer4Columns = new GeoJSONLayer({
          url: Layer4Layer4ColumnsImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 9.7,
                  material: {
                    color: "gray",
                  },
                },
              ],
            },
          },
        });

        const Layer4Layer4ColumnsEntrance = new GeoJSONLayer({
          url: Layer4Layer4ColumnsEntranceImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 4.43,
                  material: {
                    color: "#c0c0bf",
                  },
                },
              ],
            },
          },
        });

        const Layer4Layer4Front = new GeoJSONLayer({
          url: Layer4Layer4FrontImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 9.7,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const Layer4Layer4BLeft = new GeoJSONLayer({
          url: Layer4Layer4BLeftImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 9.7,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const Layer4Layer4Right = new GeoJSONLayer({
          url: Layer4Layer4RightImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 9.7,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const Layer4Layer4WallGate = new GeoJSONLayer({
          url: Layer4Layer4WallGateImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 12.02,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const map = new Map({
          basemap: "topo-vector",
          ground: "world-elevation",
          layers: [
            layer1Layer1,
            layer3Layer3Front,
            layer3Layer3Back,
            layer3Layer3Left,
            layer3Layer3Right,
            Layer4Layer4Back,
            // Layer4Layer4Columns,
            Layer4Layer4ColumnsEntrance,
            Layer4Layer4Front,
            Layer4Layer4BLeft,
            Layer4Layer4Right,
            Layer4Layer4WallGate,
            Layer1Stairs1,
            Layer2Layer2Back,
            Layer2Layer2BackIn,
            Layer2Layer2Front,
            Layer2Layer2FrontIn,
            Layer2Layer2Left,
            Layer2Layer2LeftIn,
            Layer2Layer2Right,
            Layer2Layer2RightIn,
          ],
        });

        const view = new SceneView({
          container: mapRef.current,
          map: map,
          camera: {
            position: [106.70325054448642, 10.776740223222385, 1000],
            heading: 0,
            tilt: 0,
          },
        });
        view.popup.defaultPopupTemplateEnabled = true;
        return view;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div
      style={{
        height: "90vh"
      }}
      ref={mapRef}
    ></div>
  );
}

export default MapScreen;
