"use client";

import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import Head from "next/head";
import { RenderBuilderContent } from "../components/builder";

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Page() {
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
  const headerContent = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/header",
      },
    })
    .toPromise();
  const footerContent = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/footer",
      },
    })
    .toPromise();
  return (
    <>
      <RenderBuilderContent content={headerContent} model={builderModelName} />
      <RenderBuilderContent content={homepageContent} model={builderModelName} />
      <RenderBuilderContent content={footerContent} model={builderModelName} />
    </>
  );
}








