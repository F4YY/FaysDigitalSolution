// 'use client';
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import layout from "../../app/layout.jsx";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Page(props) {
  const builderModelName = "page";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();

  // const headerContent = await builder
  // .get(builderModelName, {
  //   userAttributes: {
  //     urlPath: "/header",
  //   },
  // })
  // .toPromise();
  const footerContent = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/footer",
      },
    })
  .toPromise();

  return (
    <layout>
      {/* <NavBar/> */}
      {/* <RenderBuilderContent content={headerContent} model={builderModelName} /> */}
      <RenderBuilderContent content={content} model={builderModelName} />
      <RenderBuilderContent content={footerContent} model={builderModelName} />
    </layout>
  );
}


