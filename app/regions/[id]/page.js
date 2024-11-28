"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import { perthList } from "../../data/list.js";

import "../../../css/globals.css";
export const runtime = "edge";

export default function GalleryItem({ params }) {
  // get the param from the url
  // 'http://localhost/gallery/1'
  // useParams => 1
  const { id } = use(params);

  const perth = perthList.find((item) => item.id == id);

  if (!perth) {
    notFound();
  }
  // render template
  return (
    <div className="box mt-1">
      {perth ? (
        <>
          <h2 className="title is-5">
            <i>{perth.name}</i> by {perth.artist}
          </h2>
          <h3 className="subtitle is-6">
            ({perth.id + 1} of {perthList.length})
          </h3>
          <Image
            src={perth.url}
            alt={perth.alt}
            width={400}
            height={200}
          />
          <p>{perth.description}</p>
        </>
      ) : (
        <p> Item not found</p>
      )}
    </div>
  );
}
