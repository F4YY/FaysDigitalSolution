"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import HeroTxtBtn from "./components/HeroTxtBtn";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(HeroTxtBtn, {
  name: "HeroTxtBtn",
});
