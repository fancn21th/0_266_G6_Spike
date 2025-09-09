"use client";

import { Graph } from "@/components/Graph";
import type { GraphOptions } from "@antv/g6";

export default function Home() {
  const graphOptions: GraphOptions = {
    width: 500,
    height: 500,
    data: {
      nodes: [
        {
          id: "node-1",
          style: { x: 50, y: 100 },
        },
        {
          id: "node-2",
          style: { x: 150, y: 100 },
        },
      ],
      edges: [{ id: "edge-1", source: "node-1", target: "node-2" }],
    },
    behaviors: ["drag-canvas", "zoom-canvas", "drag-element"],
  };

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Graph options={graphOptions} />
    </div>
  );
}
