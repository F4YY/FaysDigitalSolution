import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

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

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}

// "use client";

// import React, { useEffect, useState } from "react";
// import { builder } from "@builder.io/sdk";
// import Head from "next/head";
// import { RenderBuilderContent } from "@/components/builder";

// // Replace with your Public API Key
// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

// const Page = () => {
//   const [homepageContent, setHomepageContent] = useState(null);

//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         const content = await builder.get('homepage', { prerender: false }).toPromise();
//         setHomepageContent(content);
//       } catch (error) {
//         console.error('Error fetching content:', error);
//       }
//     };

//     fetchContent();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>{homepageContent?.data?.title || 'Default Title'}</title>
//       </Head>
//       {/* Render the Builder page */}
//       {homepageContent ? (
//         <RenderBuilderContent
//           model="homepage"
//           content={homepageContent}
//         />
//       ) : (
//         <div>Loading...</div>
//       )}
//     </>
//   );
// };

// export default Page;

