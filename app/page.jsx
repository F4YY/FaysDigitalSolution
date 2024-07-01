import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Homepage() {
  const builderModelName = "page";
  const homepageContent = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/",
      },
    })
    .toPromise();
  return (
    <>
      <RenderBuilderContent
        content={homepageContent}
        model={builderModelName}
      />
    </>
  );
}








