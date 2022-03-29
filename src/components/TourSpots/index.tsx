import { createClient } from "contentful";
import React from "react";

export async function getStaticProps() {
  const client = createClient({
    space: "tf50mc0qecpa",
    accessToken: "3hOsPJ2jDoTFyYZwR6jauoCRgmxLBzzGYRhON6rwSPM",
  });

  const res = await client.getEntries({ content_type: "tourSpots" });

  return {
    props: {
      places: res.items,
    },
  };
}

export default function Spots({ places }: any) {
  console.log(places);
  return (
    <div className="tourSpots">
      {places.map(({ place }: any) => (
        <div key={place}>{place.fields.title}</div>
      ))}
    </div>
  );
}
