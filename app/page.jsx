// "use client";
import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import layout from "../app/layout";

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Homepage() {
  const builderModelName = "page";
  // const content = await builder
  //   .get(builderModelName, {
  //     userAttributes: {
  //       urlPath: "/",
  //     },
  //   })
  //   .toPromise();
  const homepageContent = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/",
      },
    })
    .toPromise();
  // const headerContent = await builder
  //   .get(builderModelName, {
  //     userAttributes: {
  //       urlPath: "/header",
  //     },
  //   })
  //   .toPromise();
  const footerContent = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/footer",
      },
    })
    .toPromise();
  return (
    <layout>
      {/* <RenderBuilderContent content={headerContent} model={builderModelName} /> */}
      <RenderBuilderContent content={homepageContent} model={builderModelName} />
      <RenderBuilderContent content={footerContent} model={builderModelName} />
    </layout>
  );
}








