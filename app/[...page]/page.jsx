import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

// export default async function Page(props) {
//   const builderModelName = "page";

//   const content = await builder
//     // Get the page content from Builder with the specified options
//     .get(builderModelName, {
//       userAttributes: {
//         // Use the page path specified in the URL to fetch the content
//         urlPath: "/" + (props?.params?.page?.join("/") || ""),
//       },
//     })
//     // Convert the result to a promise
//     .toPromise();

//   return (
//     <>
//       {/* Render the Builder page */}
//       <RenderBuilderContent content={content} model={builderModelName} />
//     </>
//   );
// }

export default async function Page(props) {
  const builderModelName = "page";

  let urlPath = "https://faysdigitalsolution.netlify.app"; // Default URL path for the homepage i want this

  if (props?.params?.page) {
    urlPath += "/" + props.params.page.join("/"); // Construct the URL path for other pages
  }

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath, // Use the constructed URL path to fetch the content
      },
    })
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
