"use client";

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import "../builder-registry";
import HeroTxtBtn from "./Content/Home/HeroTxtBtn";
import { useContext } from "react";
import AuthContext from "@/app/context/authContext";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export function RenderBuilderContent({ content, model }) {
  const { currentPage, setCurrentPage } = useContext(AuthContext);
  const isPreviewing = useIsPreviewing();
  if (content || isPreviewing) {
    return <BuilderComponent
      content={content}
      model={model}
      customComponents={[
        {
          name: 'HeroTxtBtn',
          component: (props) => (
            <HeroTxtBtn
              {...props}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ),
        }
      ]}
    />;
  }
  return <DefaultErrorPage statusCode={404} />;
}
