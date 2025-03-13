import React from "react";
import { MapContainer, TileLayer, Polyline, CircleMarker, Polygon, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const BrantfordMap = () => {
  // Paths (roads, sidewalks, trails)
  const paths = [
    [[43.1394, -80.2644], [43.1385, -80.2655]], // Example path (replace with real coordinates)
  ];

  // Edges (boundaries like rivers, parks, districts)
  const edges = [
    [[43.1400, -80.2660], [43.1410, -80.2670], [43.1420, -80.2680]], // Example boundary
  ];

  // Districts (colored polygons)
  const districts = [
    [[43.1380, -80.2650], [43.1390, -80.2660], [43.1400, -80.2670]], // Example district
  ];

  // Nodes (intersections, squares)
  const nodes = [
    { coords: [43.1395, -80.2650], color: "blue" }, // Example node
  ];

  // Landmarks (Victoria Park, Harmony Square, etc.)
  const landmarks = [
    { coords: [43.1387, -80.2642], label: "Victoria Park", color: "green" },
    { coords: [43.1401, -80.2631], label: "Harmony Square", color: "red" },
  ];

  return (
    <MapContainer center={[43.1390, -80.2640]} zoom={15} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      
      {/* Paths */}
      {paths.map((path, index) => (
        <Polyline key={index} positions={path} color="black" weight={2} />
      ))}

      {/* Edges */}
      {edges.map((edge, index) => (
        <Polyline key={index} positions={edge} color="gray" weight={3} dashArray="4" />
      ))}

      {/* Districts */}
      {districts.map((district, index) => (
        <Polygon key={index} positions={district} color="purple" fillOpacity={0.3} />
      ))}

      {/* Nodes */}
      {nodes.map((node, index) => (
        <CircleMarker key={index} center={node.coords} radius={6} fillColor={node.color} color="white" />
      ))}

      {/* Landmarks */}
      {landmarks.map((landmark, index) => (
        <CircleMarker
          key={index}
          center={landmark.coords}
          radius={8}
          fillColor={landmark.color}
          color="black"
        />
      ))}
      
      {/* Legend */}
      <FeatureGroup>
        <div style={{ position: "absolute", bottom: "10px", left: "10px", backgroundColor: "white", padding: "10px", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0,0,0,0.3)" }}>
          <h4>Legend</h4>
          <p><span style={{ color: "black", fontWeight: "bold" }}>■</span> Paths</p>
          <p><span style={{ color: "gray", fontWeight: "bold" }}>■</span> Edges</p>
          <p><span style={{ color: "purple", fontWeight: "bold" }}>■</span> Districts</p>
          <p><span style={{ color: "blue", fontWeight: "bold" }}>●</span> Nodes</p>
          <p><span style={{ color: "green", fontWeight: "bold" }}>●</span> Victoria Park</p>
          <p><span style={{ color: "red", fontWeight: "bold" }}>●</span> Harmony Square</p>
        </div>
      </FeatureGroup>
    </MapContainer>
  );
};

export default BrantfordMap;
