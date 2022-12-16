import React, { useState, useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import SceneView from "@arcgis/core/views/SceneView";
import Layer1Layer1Import from "../../api/layer1/layer1.geojson";
import Layer1Stairs1Import from "../../api/layer1/stairs1.geojson";
import layer1Decors_backImport from "../../api/layer1/decors/decors.geojson";
import layer1Decors_up_backImport from "../../api/layer1/decors/decors_up.geojson";
import layer1Decors_sharp_brick_backImport from "../../api/layer1/decors/decors_sharp_brick.geojson";
import layer1Decors_tomb_backImport from "../../api/layer1/decors/decors_tomb.geojson";

import Layer2Layer2Import from "../../api/layer2/layer2.geojson";
import Layer2Layer2InImport from "../../api/layer2/layer2_in.geojson";

// LAYER 3
import Layer3Layer3Import from "../../api/layer3/layer3.geojson";

// LAYER 4
import Layer4Layer4Import from "../../api/layer4/layer4.geojson";
import Layer4Layer4ColumnsImport from "../../api/layer4/layer4_columns/layer4_columns.geojson";
import layer4Layer4_windowBalconyPianoLeftImport from "../../api/layer4/layer4_window_balcony/window_balcony_piano.geojson";
import layer4Layer4_windowBalconyBigPianoLeftImport from "../../api/layer4/layer4_window_balcony/window_balcony_big_piano.geojson";
import layer4Layer4_windowBalconyDecorsLeftImport from "../../api/layer4/layer4_window_balcony/window_balcony_decors.geojson";
import layer4Stick_rightImport from "../../api/layer4/layer4_stick/stick_right.geojson";
import layer4MonkeyStick_rightImport from "../../api/layer4/layer4_stick/monkeystick_right.geojson";
import layer4WorkshipImport from "../../api/layer4/worshipphoto/workship.geojson";
import layer4RoodImport from "../../api/layer4/worshipphoto/rood.geojson";
import layer4PhotoImport from "../../api/layer4/worshipphoto/photo.geojson";
// Cổng chính
import Layer4Layer4ColumnsEntranceImport from "../../api/layer4/layer4_entrance/layer4_columnsEntrance.geojson";
import Layer4Layer4WallGateImport from "../../api/layer4/layer4_entrance/layer4_wallGate.geojson";
import layer4Layer4_columnsFooterImport from "../../api/layer4/layer4_columns/layer4_columnsFooter.geojson";
import layer4Layer4_columnsFooter_upImport from "../../api/layer4/layer4_columns/layer4_columnsFooter_up.geojson";
import layer4Layer4_columnsHeader_belowImport from "../../api/layer4/layer4_columns/layer4_columnsHeader_below.geojson";
import layer4Layer4_columnsHeader_aboveImport from "../../api/layer4/layer4_columns/layer4_columnsHeader_above.geojson";
// Ban công cổng chính
import layer4Layer4_balcony_smallcrossbarImport from "../../api/layer4/layer4_entrance/balcony_entrance/layer4_balcony_smallcrossbar.geojson";
import layer4Layer4_balcony_crossbarImport from "../../api/layer4/layer4_entrance/balcony_entrance/layer4_balcony_crossbar.geojson";
import layer4Layer4_balcony_onbarImport from "../../api/layer4/layer4_entrance/balcony_entrance/layer4_balcony_onbar.geojson";
import layer4Layer4_balconyImport from "../../api/layer4/layer4_entrance/balcony_entrance/layer4_balcony.geojson";
import layer4Layer4_balcony_glassImport from "../../api/layer4/layer4_entrance/balcony_entrance/layer4_balcony_glass.geojson";

import layer4_upperRimImport from "../../api/layer4/layer4_upper/upperRim.geojson";
import layer4UpperWindowBorder_horizontalImport from "../../api/layer4/layer4_upper/upperWindow/windowBorder_horizontal.geojson";
import layer4UpperWindowBorder_verticalImport from "../../api/layer4/layer4_upper/upperWindow/windowBorder_vertical.geojson";
import layer4UpperWindowMirrorImport from "../../api/layer4/layer4_upper/upperWindow/windowMirror.geojson";
import layer4UpperWindow2Border_horizontalImport from "../../api/layer4/layer4_upper/upperWindow2/windowBorder_horizontal.geojson";
import layer4UpperWindow2Border_verticalImport from "../../api/layer4/layer4_upper/upperWindow2/windowBorder_vertical.geojson";
import layer4UpperWindow2_higherPlinthImport from "../../api/layer4/layer4_upper/upperWindow2/window_higherPlinth.geojson";
import layer4UpperWindow2_lowerPlinthImport from "../../api/layer4/layer4_upper/upperWindow2/window_lowerPlinth.geojson";
import layer4UpperWindow2MirrorImport from "../../api/layer4/layer4_upper/upperWindow2/windowMirror.geojson";
import layer4UpperWall_surround_leftRightImport from "../../api/layer4/layer4_upper/upperWall/upperWall_leftRight/wall_surround_leftRight.geojson";
import layer4UpperWall_beneath_leftRightImport from "../../api/layer4/layer4_upper/upperWall/upperWall_leftRight/wall_beneath_leftRight.geojson";
import layer4UpperWall2_beneath_leftRightImport from "../../api/layer4/layer4_upper/upperWall/upperWall_leftRight/wall2_beneath_leftRight.geojson";
import layer4UpperWall2_above_leftRightImport from "../../api/layer4/layer4_upper/upperWall/upperWall_leftRight/wall2_above_leftRight.geojson";
import layer4UpperWall2_surround_leftRightImport from "../../api/layer4/layer4_upper/upperWall/upperWall_leftRight/wall2_surround_leftRight.geojson";
import layer4UpperWall_above_frontBackImport from "../../api/layer4/layer4_upper/upperWall/upperWall_frontBack/wall_above_frontBack.geojson";
import layer4UpperWall_beneath_frontBackImport from "../../api/layer4/layer4_upper/upperWall/upperWall_frontBack/wall_beneath_frontBack.geojson";
import layer4UpperWall_surround_frontBackImport from "../../api/layer4/layer4_upper/upperWall/upperWall_frontBack/wall_surround_frontBack.geojson";
import layer4CylinderColumn_frontImport from "../../api/layer4/layer4_columns/cylinderColumn_front.geojson";
import layer4CylinderColumn_entranceImport from "../../api/layer4/layer4_columns/cylinderColumn_entrance.geojson";
import layer4CylinderColumn_plinth_entranceImport from "../../api/layer4/layer4_columns/cylinderColumn_plinth_entrance.geojson";
import layer4CylinderColumnFooter_frontImport from "../../api/layer4/layer4_columns/cylinderColumnFooter_front.geojson";
import layer4CylinderColumnFooter_surround_frontImport from "../../api/layer4/layer4_columns/cylinderColumnFooter_surround_front.geojson";
import layer4CylinderColumnFooter_surround_entranceImport from "../../api/layer4/layer4_columns/cylinderColumnFooter_surround_entrance.geojson";
import layer4CylinderColumnFooter_entranceImport from "../../api/layer4/layer4_columns/cylinderColumnFooter_entrance.geojson";
import layer4CylinderColumnHeader_entranceImport from "../../api/layer4/layer4_columns/cylinderColumnHeader_entrance.geojson";

//Vòm cong cổng chính
import layer4Gate_archblue_yImport from "../../api/layer4/layer4_entrance/arch/arch_blue/arch_blue_y.geojson";
import layer4Gate_archblue_insideImport from "../../api/layer4/layer4_entrance/arch/arch_blue/arch_blue_inside.geojson";
import layer4Gate_archblue_curve_inImport from "../../api/layer4/layer4_entrance/arch/arch_blue/arch_blue_curve_in.geojson";
import layer4Gate_archblue_curve_outImport from "../../api/layer4/layer4_entrance/arch/arch_blue/arch_blue_curve_out.geojson";
import layer4Gate_archred_xImport from "../../api/layer4/layer4_entrance/arch/arch_red/arch_red_x.geojson";
import layer4Gate_archred_outsideImport from "../../api/layer4/layer4_entrance/arch/arch_red/arch_red_outside.geojson";
import layer4Gate_archred_y_outImport from "../../api/layer4/layer4_entrance/arch/arch_red/arch_red_y_out.geojson";
import layer4Gate_archred_y_middleImport from "../../api/layer4/layer4_entrance/arch/arch_red/arch_red_y_middle.geojson";
import layer4Gate_archred_y_inImport from "../../api/layer4/layer4_entrance/arch/arch_red/arch_red_y_in.geojson";
import layer4Gate_archwhite_xImport from "../../api/layer4/layer4_entrance/arch/arch_white/arch_white_x.geojson";
import layer4Gate_archwhite_y_outImport from "../../api/layer4/layer4_entrance/arch/arch_white/arch_white_y_out.geojson";
import layer4Gate_archwhite_y_inImport from "../../api/layer4/layer4_entrance/arch/arch_white/arch_white_y_in.geojson";
import layer4Gate_arch_rectangleImport from "../../api/layer4/layer4_entrance/arch/arch_white/arch_rectangle.geojson";
import layer4Gate_arch_triangle_outlineImport from "../../api/layer4/layer4_entrance/arch/arch_white/arch_triangle_outline.geojson";
import layer4Gate_arch_triangle_insideImport from "../../api/layer4/layer4_entrance/arch/arch_white/arch_triangle_inside.geojson";
import layer4Gate_archyellowImport from "../../api/layer4/layer4_entrance/arch/arch_yellow/arch_yellow.geojson";
import layer4Gate_wallglassImport from "../../api/layer4/layer4_entrance/layer4_wallglass.geojson";
import layer4Gate_gatecolumnImport from "../../api/layer4/layer4_entrance/layer4_gatecolumn.geojson";

//Cửa sổ
import layer4WindowglassImport from "../../api/layer4/layer4_window/window_decor/window_glass.geojson";
import layer4Windowcolumn_frontImport from "../../api/layer4/layer4_window/window_column/windowcolumn_front.geojson";
import layer4WindowcolumnImport from "../../api/layer4/layer4_window/window_column/windowcolumn.geojson";
import layer4Windowcolumn_crossImport from "../../api/layer4/layer4_window/window_column/windowcolumn_cross.geojson";
import layer4Windowcolumn_topImport from "../../api/layer4/layer4_window/window_column/windowcolumn_top.geojson";
import layer4Windowsill_frontImport from "../../api/layer4/layer4_window/window_sill/windowsill_front.geojson";
import layer4Windowsill_bottomImport from "../../api/layer4/layer4_window/window_sill/windowsill_bottom.geojson";
import layer4Windowsill_middleImport from "../../api/layer4/layer4_window/window_sill/windowsill_middle.geojson";
import layer4Windowsill_topImport from "../../api/layer4/layer4_window/window_sill/windowsill_top.geojson";
import layer4Windowsill_balcony_backImport from "../../api/layer4/layer4_window/window_sill/windowsill_balcony_back.geojson";
import layer4Windowframe_x_curveImport from "../../api/layer4/layer4_window/windowframe_x/windowframe_x_curve.geojson";
import layer4Windowframe_x_insideImport from "../../api/layer4/layer4_window/windowframe_x/windowframe_x_inside.geojson";
import layer4Windowframe_x_outsideImport from "../../api/layer4/layer4_window/windowframe_x/windowframe_x_outside.geojson";
import layer4Windowframe_y_insideImport from "../../api/layer4/layer4_window/windowframe_y/windowframe_y_inside.geojson";
import layer4Windowframe_y_middleImport from "../../api/layer4/layer4_window/windowframe_y/windowframe_y_middle.geojson";
import layer4Windowframe_y_outsideImport from "../../api/layer4/layer4_window/windowframe_y/windowframe_y_outside.geojson";
import layer4Windowcurve_insideImport from "../../api/layer4/layer4_window/window_curve/windowcurve_inside.geojson";
import layer4Windowcurve_outsideImport from "../../api/layer4/layer4_window/window_curve/windowcurve_outside.geojson";
import layer4Windowcurve_wallImport from "../../api/layer4/layer4_window/window_curve/windowcurve_wall.geojson";
import layer4WindowdecorImport from "../../api/layer4/layer4_window/window_decor/window_decor.geojson";
import layer4Windowbalcony_base_backImport from "../../api/layer4/layer4_window/window_balcony/balconybase_back.geojson";
import layer4Windowbalcony_baseImport from "../../api/layer4/layer4_window/window_balcony/balconybase.geojson";
import layer4Windowbalcony_base_mainImport from "../../api/layer4/layer4_window/window_balcony/balconybase_main.geojson";
import layer4Windowbalcony_railImport from "../../api/layer4/layer4_window/window_balcony/balconyrail.geojson";
import layer4Windowbalcony_rail_middleImport from "../../api/layer4/layer4_window/window_balcony/balconyrail_middle.geojson";

//Layer 5
import layer5Layer5baseImport from "../../api/layer5/layer5_base.geojson";
import layer5Layer5main_outsideImport from "../../api/layer5/layer5_main_outside.geojson";
import layer5Layer5main_insideImport from "../../api/layer5/layer5_main_inside.geojson";

//Layer 6 - Roof
import layer6Roof_bottomImport from "../../api/layer6/roof_bottom/roof_bottom.geojson";
import layer6Roof_bottom_patternImport from "../../api/layer6/roof_bottom/roof_bottom_pattern.geojson";
import layer6Roof_topImport from "../../api/layer6/roof_top/roof_top.geojson";
import layer6Roof_top_patternImport from "../../api/layer6/roof_top/roof_top_pattern.geojson";
import layer6Roof_backImport from "../../api/layer6/wallback/roof_back.geojson";
import layer6Wall_backImport from "../../api/layer6/wallback/wall_back.geojson";
import layer6Roof_outline_backImport from "../../api/layer6/wallback/roof_outline_back.geojson";
import layer6RoofDecor_baseImport from "../../api/layer6/roof_decor/roofdecor_base.geojson";
import layer6RoofDecor_onbaseImport from "../../api/layer6/roof_decor/roofdecor_onbase.geojson";
import layer6RoofDecor_outlineImport from "../../api/layer6/roof_decor/roofdecor_outline.geojson";
import layer6RoofDecor_fillImport from "../../api/layer6/roof_decor/roofdecor_fill.geojson";
import layer6RoofDecor_fill_inImport from "../../api/layer6/roof_decor/roofdecor_fill_in.geojson";

import { setDefaultOptions, loadModules } from "esri-loader";
import "./MapScreen.css";
import { Link } from "react-router-dom";

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

        const Layer1Decors_backImport = new GeoJSONLayer({
          url: layer1Decors_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.23,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer1Decors_up_backImport = new GeoJSONLayer({
          url: layer1Decors_up_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.14,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer1Decors_sharp_brick_backImport = new GeoJSONLayer({
          url: layer1Decors_sharp_brick_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.12,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const Layer1Decors_tomb_backImport = new GeoJSONLayer({
          url: layer1Decors_tomb_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.38,
                  material: {
                    color: "#cdcdcd",
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

        const Layer2Layer2 = new GeoJSONLayer({
          url: Layer2Layer2Import,
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

        const Layer2Layer2In = new GeoJSONLayer({
          url: Layer2Layer2InImport,
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

        const layer3Layer3 = new GeoJSONLayer({
          url: Layer3Layer3Import,
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

        const layer4Layer4_columnsFooter = new GeoJSONLayer({
          url: layer4Layer4_columnsFooterImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.36,
                  material: {
                    color: "#bfbcbc",
                  },
                },
              ],
            },
          },
        });

        const layer4Layer4_columnsHeader_below = new GeoJSONLayer({
          url: layer4Layer4_columnsHeader_belowImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.28,
                  material: {
                    color: "#bfbcbc",
                  },
                },
              ],
            },
          },
        });

        const layer4Layer4_columnsHeader_above = new GeoJSONLayer({
          url: layer4Layer4_columnsHeader_aboveImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.33,
                  material: {
                    color: "#ccdcdcd",
                  },
                },
              ],
            },
          },
        });

        const layer4Layer4_columnsFooter_up = new GeoJSONLayer({
          url: layer4Layer4_columnsFooter_upImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0,
                  material: {
                    color: "#c6c7c4",
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
                    color: "#aaa494",
                  },
                },
              ],
            },
          },
        });

        const layer4_upperRim = new GeoJSONLayer({
          url: layer4_upperRimImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.33,
                  material: {
                    color: "#ccdcdcd",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWindowBorder_horizontal = new GeoJSONLayer({
          url: layer4UpperWindowBorder_horizontalImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.06,
                  material: {
                    color: "#7A5238",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWindowBorder_vertical = new GeoJSONLayer({
          url: layer4UpperWindowBorder_verticalImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.25,
                  material: {
                    color: "#7A5238",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWindowMirror = new GeoJSONLayer({
          url: layer4UpperWindowMirrorImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.13,
                  material: {
                    color: "#aaaaaa",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWindow2Border_horizontal = new GeoJSONLayer({
          url: layer4UpperWindow2Border_horizontalImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.06,
                  material: {
                    color: "#7A5238",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWindow2Border_vertical = new GeoJSONLayer({
          url: layer4UpperWindow2Border_verticalImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#7A5238",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWindow2_higherPlinth = new GeoJSONLayer({
          url: layer4UpperWindow2_higherPlinthImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.1,
                  material: {
                    color: "#808080",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWindow2_lowerPlinth = new GeoJSONLayer({
          url: layer4UpperWindow2_lowerPlinthImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.24,
                  material: {
                    color: "#aaa494",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWindow2Mirror = new GeoJSONLayer({
          url: layer4UpperWindow2MirrorImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.88,
                  material: {
                    color: "#aaaaaa",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWall_surround_leftRight = new GeoJSONLayer({
          url: layer4UpperWall_surround_leftRightImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWall_beneath_leftRight = new GeoJSONLayer({
          url: layer4UpperWall_beneath_leftRightImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.87,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWall2_beneath_leftRight = new GeoJSONLayer({
          url: layer4UpperWall2_beneath_leftRightImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.48,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWall2_above_leftRight = new GeoJSONLayer({
          url: layer4UpperWall2_above_leftRightImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.14,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWall2_surround_leftRight = new GeoJSONLayer({
          url: layer4UpperWall2_surround_leftRightImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.25,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWall_above_frontBack = new GeoJSONLayer({
          url: layer4UpperWall_above_frontBackImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.14,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWall_beneath_frontBack = new GeoJSONLayer({
          url: layer4UpperWall_beneath_frontBackImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.48,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4UpperWall_surround_frontBack = new GeoJSONLayer({
          url: layer4UpperWall_surround_frontBackImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.87,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        // Mẫu
        const layer4Layer4_windowBalconyPianoLeft = new GeoJSONLayer({
          url: layer4Layer4_windowBalconyPianoLeftImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  width: 0.39,
                  height: 0.24,
                  material: {
                    color: "#aaa494",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Layer4_windowBalconyBigPianoLeft = new GeoJSONLayer({
          url: layer4Layer4_windowBalconyBigPianoLeftImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  width: 0.2,
                  height: 0.97,
                  material: {
                    color: "#CBC5BC",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Layer4_windowBalconyDecorsLeft = new GeoJSONLayer({
          url: layer4Layer4_windowBalconyDecorsLeftImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  width: 0.001,
                  height: 0.13,
                  material: {
                    color: "#BEBEBE",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Stick_right = new GeoJSONLayer({
          url: layer4Stick_rightImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.08,
                  width: 0.06,
                  material: {
                    color: "#C0C0BF",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4MonkeyStick_right = new GeoJSONLayer({
          url: layer4MonkeyStick_rightImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.08,
                  width: 0.06,
                  material: {
                    color: "#C0C0BF",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Workship = new GeoJSONLayer({
          url: layer4WorkshipImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.09,
                  width: 0.06,
                  material: {
                    color: "#cdcdcd",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Rood = new GeoJSONLayer({
          url: layer4RoodImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 4.65,
                  width: 0.06,
                  material: {
                    color: "#cdcdcd",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Photo = new GeoJSONLayer({
          url: layer4PhotoImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 4.65,
                  width: 0.01,
                  material: {
                    color: [128, 128, 128, 0.5],
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const Layer4Layer4 = new GeoJSONLayer({
          url: Layer4Layer4Import,
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

        // --- Cổng chính ---
        // Cột lối vào
        const Layer4Layer4ColumnsEntrance = new GeoJSONLayer({
          url: Layer4Layer4ColumnsEntranceImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.73,
                  material: {
                    color: "#c0c0bf",
                  },
                },
              ],
            },
          },
        });

        // Tường cổng chính
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

        // Ban công cổng chính
        const layer4Layer4_balcony_smallcrossbar = new GeoJSONLayer({
          url: layer4Layer4_balcony_smallcrossbarImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.07,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const layer4Layer4_balcony_crossbar = new GeoJSONLayer({
          url: layer4Layer4_balcony_crossbarImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.16,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const layer4Layer4_balcony_onbar = new GeoJSONLayer({
          url: layer4Layer4_balcony_onbarImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.05,
                  material: {
                    color: "#604732",
                  },
                },
              ],
            },
          },
        });

        const layer4Layer4_balcony = new GeoJSONLayer({
          url: layer4Layer4_balconyImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.72,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4Layer4_balcony_glass = new GeoJSONLayer({
          url: layer4Layer4_balcony_glassImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.9,
                  material: {
                    color: [218, 218, 218, 0.5],
                  },
                },
              ],
            },
          },
        });

        //Cột cổng chính
        const layer4CylinderColumn_front = new GeoJSONLayer({
          url: layer4CylinderColumn_frontImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "point-3d",
              symbolLayers: [
                {
                  type: "object",
                  height: 8.35,
                  width: 1,
                  depth: 1,
                  material: {
                    color: "#aaa494",
                  },
                  resource: { primitive: "cylinder" },
                },
              ],
            },
          },
        });

        const layer4CylinderColumn_entrance = new GeoJSONLayer({
          url: layer4CylinderColumn_entranceImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "point-3d",
              symbolLayers: [
                {
                  type: "object",
                  height: 4.13,
                  width: 0.68,
                  depth: 0.68,
                  material: {
                    color: "#aaa494",
                  },
                  resource: { primitive: "cylinder" },
                },
              ],
            },
          },
        });

        const layer4CylinderColumn_plinth_entrance = new GeoJSONLayer({
          url: layer4CylinderColumn_plinth_entranceImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 3.1,
                  material: {
                    color: "#454545",
                  },
                },
              ],
            },
          },
        });

        const layer4CylinderColumnFooter_front = new GeoJSONLayer({
          url: layer4CylinderColumnFooter_frontImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.26,
                  material: {
                    color: "#bfbcbc",
                  },
                },
              ],
            },
          },
        });

        const layer4CylinderColumnFooter_surround_front = new GeoJSONLayer({
          url: layer4CylinderColumnFooter_surround_frontImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "point-3d",
              symbolLayers: [
                {
                  type: "object",
                  height: 0.3,
                  width: 1.25,
                  depth: 1.25,
                  material: {
                    color: "#bfbcbc",
                  },
                  resource: { primitive: "cylinder" },
                },
              ],
            },
          },
        });

        const layer4CylinderColumnFooter_surround_entrance = new GeoJSONLayer({
          url: layer4CylinderColumnFooter_surround_entranceImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "point-3d",
              symbolLayers: [
                {
                  type: "object",
                  height: 0.2,
                  width: 0.8,
                  depth: 0.8,
                  material: {
                    color: "#bfbcbc",
                  },
                  resource: { primitive: "cylinder" },
                },
              ],
            },
          },
        });

        const layer4CylinderColumnFooter_entrance = new GeoJSONLayer({
          url: layer4CylinderColumnFooter_entranceImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.21,
                  material: {
                    color: "#bfbcbc",
                  },
                },
              ],
            },
          },
        });

        const layer4CylinderColumnHeader_entrance = new GeoJSONLayer({
          url: layer4CylinderColumnHeader_entranceImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.13,
                  material: {
                    color: "#bfbcbc",
                  },
                },
              ],
            },
          },
        });

        //Vòm cong cổng chính
        //Vòm xanh
        const layer4Gate_archblue_y = new GeoJSONLayer({
          url: layer4Gate_archblue_yImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  width: 0.02,
                  height: 1.07,
                  material: {
                    color: "#80A3AB",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_archblue_inside = new GeoJSONLayer({
          url: layer4Gate_archblue_insideImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.1,
                  width: 0.02,
                  material: {
                    color: "#80A3AB",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_archblue_curve_in = new GeoJSONLayer({
          url: layer4Gate_archblue_curve_inImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.32,
                  width: 0.02,
                  material: {
                    color: "#80A3AB",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_archblue_curve_out = new GeoJSONLayer({
          url: layer4Gate_archblue_curve_outImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.32,
                  width: 0.02,
                  material: {
                    color: "#80A3AB",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "top",
                },
              ],
            },
          },
        });

        const layer4Gate_archred_x = new GeoJSONLayer({
          url: layer4Gate_archred_xImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.1,
                  width: 0.02,
                  material: {
                    color: "#B17670",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_archred_outside = new GeoJSONLayer({
          url: layer4Gate_archred_outsideImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.1,
                  width: 0.02,
                  material: {
                    color: "#B17670",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_archred_y_out = new GeoJSONLayer({
          url: layer4Gate_archred_y_outImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 1.19,
                  width: 0.02,
                  material: {
                    color: "#B17670",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_archred_y_middle = new GeoJSONLayer({
          url: layer4Gate_archred_y_middleImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.57,
                  width: 0.02,
                  material: {
                    color: "#B17670",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_archred_y_in = new GeoJSONLayer({
          url: layer4Gate_archred_y_inImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.31,
                  width: 0.02,
                  material: {
                    color: "#B17670",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_archwhite_x = new GeoJSONLayer({
          url: layer4Gate_archwhite_xImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.1,
                  width: 0.3,
                  material: {
                    color: "#BABABA",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_archwhite_y_out = new GeoJSONLayer({
          url: layer4Gate_archwhite_y_outImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 1.32,
                  width: 0.3,
                  material: {
                    color: "#BABABA",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_archwhite_y_in = new GeoJSONLayer({
          url: layer4Gate_archwhite_y_inImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.44,
                  width: 0.3,
                  material: {
                    color: "#BABABA",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_arch_rectangle = new GeoJSONLayer({
          url: layer4Gate_arch_rectangleImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.36,
                  width: 0.3,
                  material: {
                    color: "#BABABA",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_arch_triangle_outline = new GeoJSONLayer({
          url: layer4Gate_arch_triangle_outlineImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.07,
                  width: 0.3,
                  material: {
                    color: "#BABABA",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_arch_triangle_inside = new GeoJSONLayer({
          url: layer4Gate_arch_triangle_insideImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0,
                  material: {
                    color: [186, 186, 186, 0.4],
                  },
                },
              ],
            },
          },
        });

        const layer4Gate_archyellow = new GeoJSONLayer({
          url: layer4Gate_archyellowImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 2.85,
                  width: 2.925,
                  material: {
                    color: "#c7c1b8",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Gate_wallglass = new GeoJSONLayer({
          url: layer4Gate_wallglassImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0,
                  material: {
                    color: [128, 128, 128, 0.5],
                  },
                },
              ],
            },
          },
        });

        const layer4Gate_gatecolumn = new GeoJSONLayer({
          url: layer4Gate_gatecolumnImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 4.39,
                  width: 0.12,
                  material: {
                    color: "#aaa494",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        //Cửa sổ
        //Kính cửa sổ
        const layer4Windowglass = new GeoJSONLayer({
          url: layer4WindowglassImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 11.2,
                  width: 0.01,
                  material: {
                    color: [128, 128, 128, 0.5],
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "heading",
                },
              ],
            },
          },
        });

        //Cột cửa sổ
        const layer4Windowcolumn_front = new GeoJSONLayer({
          url: layer4Windowcolumn_frontImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 4.09,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const layer4Windowcolumn = new GeoJSONLayer({
          url: layer4WindowcolumnImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5.84,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4Windowcolumn_cross = new GeoJSONLayer({
          url: layer4Windowcolumn_crossImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0,
                  material: {
                    color: "#8D8D8C",
                  },
                },
              ],
            },
          },
        });

        const layer4Windowcolumn_top = new GeoJSONLayer({
          url: layer4Windowcolumn_topImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.12,
                  width: 0.32,
                  material: {
                    color: "#C0C0BF",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "top",
                },
              ],
            },
          },
        });

        const layer4Windowsill_front = new GeoJSONLayer({
          url: layer4Windowsill_frontImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 1.76,
                  material: {
                    color: "#cdcdcd",
                  },
                },
              ],
            },
          },
        });

        const layer4Windowsill_top = new GeoJSONLayer({
          url: layer4Windowsill_topImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.88,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4Windowsill_middle = new GeoJSONLayer({
          url: layer4Windowsill_middleImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.08,
                  material: {
                    color: "#cdcdcc",
                  },
                },
              ],
            },
          },
        });

        const layer4Windowsill_bottom = new GeoJSONLayer({
          url: layer4Windowsill_bottomImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.8,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4Windowsill_balcony_back = new GeoJSONLayer({
          url: layer4Windowsill_balcony_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.37,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4Windowframe_x_curve = new GeoJSONLayer({
          url: layer4Windowframe_x_curveImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.06,
                  width: 0.05,
                  material: {
                    color: "#7A5238",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "top",
                },
              ],
            },
          },
        });

        const layer4Windowframe_x_inside = new GeoJSONLayer({
          url: layer4Windowframe_x_insideImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.13,
                  width: 0.05,
                  material: {
                    color: "#7A5238",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Windowframe_x_outside = new GeoJSONLayer({
          url: layer4Windowframe_x_outsideImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.06,
                  width: 0.05,
                  material: {
                    color: "#7A5238",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Windowframe_y_inside = new GeoJSONLayer({
          url: layer4Windowframe_y_insideImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 5.53,
                  width: 0.05,
                  material: {
                    color: "#7A5238",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Windowframe_y_middle = new GeoJSONLayer({
          url: layer4Windowframe_y_middleImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 5.36,
                  width: 0.05,
                  material: {
                    color: "#7A5238",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Windowframe_y_outside = new GeoJSONLayer({
          url: layer4Windowframe_y_outsideImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 4.09,
                  width: 0.05,
                  material: {
                    color: "#7A5238",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Windowcurve_inside = new GeoJSONLayer({
          url: layer4Windowcurve_insideImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.38,
                  width: 0.39,
                  material: {
                    color: "#C0C0BF",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Windowcurve_outside = new GeoJSONLayer({
          url: layer4Windowcurve_outsideImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.08,
                  width: 0.09,
                  material: {
                    color: "#C0C0BF",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Windowcurve_wall = new GeoJSONLayer({
          url: layer4Windowcurve_wallImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 1,
                  width: 0.39,
                  material: {
                    color: "#c7c1b8",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Windowdecor = new GeoJSONLayer({
          url: layer4WindowdecorImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.15,
                  width: 0.09,
                  material: {
                    color: "#C0C0BF",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "top",
                },
              ],
            },
          },
        });

        //Ban công cửa sổ
        const layer4Windowbalcony_base_back = new GeoJSONLayer({
          url: layer4Windowbalcony_base_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.24,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer4Windowbalcony_base = new GeoJSONLayer({
          url: layer4Windowbalcony_baseImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.41,
                  width: 0.38,
                  material: {
                    color: "#c7c1b8",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Windowbalcony_base_main = new GeoJSONLayer({
          url: layer4Windowbalcony_base_mainImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.14,
                  material: {
                    color: "#cdcdcc",
                  },
                },
              ],
            },
          },
        });

        const layer4Windowbalcony_rail = new GeoJSONLayer({
          url: layer4Windowbalcony_railImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.14,
                  width: 0.12,
                  material: {
                    color: "#cdcdcc",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer4Windowbalcony_rail_middle = new GeoJSONLayer({
          url: layer4Windowbalcony_rail_middleImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.44,
                  width: 0.12,
                  material: {
                    color: "#c7c1b8",
                  },
                  join: "bevel",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        //Layer 5
        const layer5Layer5base = new GeoJSONLayer({
          url: layer5Layer5baseImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.33,
                  width: 1.58,
                  material: {
                    color: "#ccdcdcd",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer5Layer5main_outside = new GeoJSONLayer({
          url: layer5Layer5main_outsideImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.17,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer5Layer5main_inside = new GeoJSONLayer({
          url: layer5Layer5main_insideImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0.4,
                  material: {
                    color: "#aaa494",
                  },
                },
              ],
            },
          },
        });

        //Layer 6
        const layer6Roof_bottom = new GeoJSONLayer({
          url: layer6Roof_bottomImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0,
                  material: {
                    color: "#596A71",
                  },
                },
              ],
            },
          },
        });

        const layer6Roof_bottom_pattern = new GeoJSONLayer({
          url: layer6Roof_bottom_patternImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "fill",
                  size: 0,
                  material: {
                    color: "#615C5A",
                  },
                  pattern: {
                    type: "style",
                    style: "diagonal-cross",
                  },
                },
              ],
            },
          },
        });

        const layer6Roof_top = new GeoJSONLayer({
          url: layer6Roof_topImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0,
                  material: {
                    color: "#666460",
                  },
                },
              ],
            },
          },
        });

        const layer6Roof_top_pattern = new GeoJSONLayer({
          url: layer6Roof_top_patternImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "fill",
                  size: 0,
                  material: {
                    color: "#615C5A",
                  },
                  pattern: {
                    type: "style",
                    style: "diagonal-cross",
                  },
                },
              ],
            },
          },
        });

        const layer6Roof_back = new GeoJSONLayer({
          url: layer6Roof_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 0,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer6Roof_outline_back = new GeoJSONLayer({
          url: layer6Roof_outline_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.27,
                  width: 1.56,
                  material: {
                    color: "#c7c1b8",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "heading",
                  anchor: "top",
                },
              ],
            },
          },
        });

        const layer6Wall_back = new GeoJSONLayer({
          url: layer6Wall_backImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5.7,
                  material: {
                    color: "#c7c1b8",
                  },
                },
              ],
            },
          },
        });

        const layer6RoofDecor_base = new GeoJSONLayer({
          url: layer6RoofDecor_baseImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.39,
                  width: 0.68,
                  material: {
                    color: "#9D7554",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer6RoofDecor_onbase = new GeoJSONLayer({
          url: layer6RoofDecor_onbaseImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.04,
                  width: 0.16,
                  material: {
                    color: "#9D7554",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "top",
                },
              ],
            },
          },
        });

        const layer6RoofDecor_outline = new GeoJSONLayer({
          url: layer6RoofDecor_outlineImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.03,
                  width: 0.16,
                  material: {
                    color: "#323746",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "bottom",
                },
              ],
            },
          },
        });

        const layer6RoofDecor_fill = new GeoJSONLayer({
          url: layer6RoofDecor_fillImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.35,
                  width: 0.002,
                  material: {
                    color: "#323746",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "top",
                },
              ],
            },
          },
        });

        const layer6RoofDecor_fill_in = new GeoJSONLayer({
          url: layer6RoofDecor_fill_inImport,
          renderer: {
            type: "simple",
            symbol: {
              type: "line-3d",
              symbolLayers: [
                {
                  type: "path",
                  profile: "quad",
                  height: 0.4,
                  width: 0.002,
                  material: {
                    color: "#323746",
                  },
                  join: "miter",
                  cap: "butt",
                  profileRotation: "all",
                  anchor: "top",
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
            Layer1Stairs1,
            Layer1Decors_backImport,
            Layer1Decors_up_backImport,
            Layer1Decors_sharp_brick_backImport,
            Layer1Decors_tomb_backImport,
            Layer2Layer2,
            Layer2Layer2In,
            layer3Layer3,
            Layer4Layer4,
            Layer4Layer4Columns,
            layer4Layer4_windowBalconyPianoLeft,
            layer4Layer4_windowBalconyBigPianoLeft,
            layer4Layer4_windowBalconyDecorsLeft,
            layer4Stick_right,
            layer4MonkeyStick_right,
            layer4Workship,
            layer4Rood,
            layer4Photo,
            layer4Layer4_columnsFooter,
            layer4Layer4_columnsFooter_up,
            Layer4Layer4ColumnsEntrance,
            Layer4Layer4WallGate,
            layer4Layer4_balcony_smallcrossbar,
            layer4Layer4_balcony_crossbar,
            layer4Layer4_balcony_onbar,
            layer4Layer4_balcony,
            layer4Layer4_balcony_glass,
            layer4Layer4_columnsHeader_below,
            layer4Layer4_columnsHeader_above,
            layer4_upperRim,
            layer4UpperWindowBorder_horizontal,
            layer4UpperWindowBorder_vertical,
            layer4UpperWindowMirror,
            layer4UpperWindow2Border_horizontal,
            layer4UpperWindow2Border_vertical,
            layer4UpperWindow2_higherPlinth,
            layer4UpperWindow2_lowerPlinth,
            layer4UpperWindow2Mirror,
            layer4UpperWall_surround_leftRight,
            layer4UpperWall_beneath_leftRight,
            layer4UpperWall2_beneath_leftRight,
            layer4UpperWall2_above_leftRight,
            layer4UpperWall2_surround_leftRight,
            layer4UpperWall_above_frontBack,
            layer4UpperWall_beneath_frontBack,
            layer4UpperWall_surround_frontBack,
            layer4CylinderColumn_front,
            layer4CylinderColumn_entrance,
            layer4CylinderColumn_plinth_entrance,
            layer4CylinderColumnFooter_front,
            layer4CylinderColumnFooter_surround_front,
            layer4CylinderColumnFooter_surround_entrance,
            layer4CylinderColumnFooter_entrance,
            layer4CylinderColumnHeader_entrance,
            layer4Gate_archblue_y,
            layer4Gate_archblue_inside,
            layer4Gate_archblue_curve_in,
            layer4Gate_archblue_curve_out,
            layer4Gate_archred_x,
            layer4Gate_archred_outside,
            layer4Gate_archred_y_out,
            layer4Gate_archred_y_middle,
            layer4Gate_archred_y_in,
            layer4Gate_archwhite_x,
            layer4Gate_archwhite_y_out,
            layer4Gate_archwhite_y_in,
            layer4Gate_arch_rectangle,
            layer4Gate_arch_triangle_outline,
            layer4Gate_arch_triangle_inside,
            layer4Gate_archyellow,
            layer4Gate_wallglass,
            layer4Gate_gatecolumn,
            layer4Windowglass,
            layer4Windowcolumn_front,
            layer4Windowcolumn,
            layer4Windowcolumn_cross,
            layer4Windowcolumn_top,
            layer4Windowsill_front,
            layer4Windowsill_top,
            layer4Windowsill_middle,
            layer4Windowsill_bottom,
            layer4Windowsill_balcony_back,
            layer4Windowframe_x_curve,
            layer4Windowframe_x_inside,
            layer4Windowframe_x_outside,
            layer4Windowframe_y_inside,
            layer4Windowframe_y_outside,
            layer4Windowframe_y_middle,
            layer4Windowcurve_inside,
            layer4Windowcurve_outside,
            layer4Windowcurve_wall,
            layer4Windowdecor,
            layer4Windowbalcony_base_back,
            layer4Windowbalcony_base,
            layer4Windowbalcony_base_main,
            layer4Windowbalcony_rail,
            layer4Windowbalcony_rail_middle,
            layer5Layer5base,
            layer5Layer5main_outside,
            layer5Layer5main_inside,
            layer6Roof_bottom,
            layer6Roof_bottom_pattern,
            layer6Roof_top,
            layer6Roof_top_pattern,
            layer6Roof_back,
            layer6Wall_back,
            layer6Roof_outline_back,
            layer6RoofDecor_base,
            layer6RoofDecor_onbase,
            layer6RoofDecor_outline,
            layer6RoofDecor_fill,
            layer6RoofDecor_fill_in,
          ],
        });

        const view = new SceneView({
          container: mapRef.current,
          map: map,
          camera: {
            position: [106.70319033232158, 10.776001217417953, 22],
            heading: 0,
            tilt: 90,
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
    <div className="map_screen">
      <div
        style={{
          height: "90vh",
        }}
        ref={mapRef}
      ></div>
      <div className="map_screen-popup">
        <h5>Xem Nhà hát TPHCM</h5>
        <p>Công Trường Lam Sơn, Bến Nghé, Quận 1</p>
        <div className="map_screen-popup--item">
          <h5>Xem thông tin tòa nhà</h5>
          <p>
            Là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường
            Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh.
          </p>
          <button>
            <Link to="/show" style={{ textDecoration: "none", color: "#fff" }}>
              Xem chương trình biểu diễn
            </Link>
          </button>
        </div>
        <div className="map_screen-popup--item">
          <h5>Đặt vé ngay</h5>
          <p>
            Giá vé tùy thuộc vào chương trình bạn xem và tùy thuộc vào chỗ ngồi.
          </p>
          <button>
            <Link
              to="/ticket"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Đặt vé
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MapScreen;
