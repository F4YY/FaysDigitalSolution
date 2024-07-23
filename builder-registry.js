"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import HeroTxtBtn from "./components/Content/Home/HeroTxtBtn";
import LearnMoreLink from "./components/Content/Home/LearnMoreLink";
import NavBar from "./components/Header/Navbar";
import Testimonials from "./components/Content/Home/Testimonials";
import LinkToPage from "./components/Content/About/LinkToPage";
import ArticleLink from "./components/Content/Blog/ArticleLink";
import PortfolioCard from "./components/Content/Portfolio/PortfolioCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(HeroTxtBtn, {
  name: "HeroTxtBtn",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Custom Website solutions to help your business",
    },
    {
      name: "span",
      type: "string",
      defaultValue: "succeed.",
    },
    {
      name: "btnText",
      type: "string",
      defaultValue: "Get Started",
    },
    {
      name: "btnLink",
      type: "string",
      defaultValue: "/about",
    },
    {
      name: "curPage",
      type: "string",
      defaultValue: "About",
    },
  ],
});

Builder.registerComponent(LearnMoreLink, {
  name: "LearnMoreLink",
  inputs: [
    {
      name: "curPage",
      type: "string",
      defaultValue: "Services",
    },
    {
      name: "text",
      type: "string",
      defaultValue: "Learn more",
    },
    {
      name: "textLink",
      type: "string",
      defaultValue: "/services",
    },
  ],
});

Builder.registerComponent(ArticleLink, {
  name: "ArticleLink",
  inputs: [
    {
      name: "curPage",
      type: "string",
      defaultValue: "Blog",
    },
    {
      name: "text",
      type: "string",
      defaultValue: "Read this article",
    },
    {
      name: "textLink",
      type: "string",
      defaultValue: "/blog/article-01",
    },
  ],
});

Builder.registerComponent(PortfolioCard, {
  name: "PortfolioCard",
  // inputs: [
  //   {
  //     name: "srcImg",
  //     type: "file",
  //     defaultValue: "https://cdn.builder.io/api/v1/image/assets%2F1bea62adcf07414aa16974ab6f37361e%2Fdc0340ea8f434916bf087d258147389e"
  //   },
  //   {
  //     name: "srcLink",
  //     type: "string",
  //     defaultValue: "/portfolio/spacetourism",
  //   },
  //   {
  //     name: "title",
  //     type: "string",
  //     defaultValue: "Space Tourism",
  //   },
  //   {
  //     name: "tags",
  //     type: "string",
  //     defaultValue: "Web app re-design, Aerospace, Technology",
  //   },
  //   {
  //     name: "curPage",
  //     type: "string",
  //     defaultValue: "Portfolio",
  //   }
  // ],
})

Builder.registerComponent(LinkToPage, {
  name: "LinkToPage"
})

// Builder.registerComponent(NavBar, {
//   name: "Navbar",
//   inputs: [
//     {
//       name: "links",
//       type: "string",
//     },
//     {
//       name: "logo",
//       type: "file",
//     },
//   ],
// });

// Builder.registerComponent(Testimonials, {
//   name: "OutClientsSay",
//   inputs: [
//     {
//       name: "testimonialsData",
//       type: "object",
//       defaultValue: [
//         {
//           id: 1,
//           name: "Emma Johnson",
//           jobTitle: "Marketing Manager",
//           company: "Tech Innovators Inc",
//           profilePicture:
//             "https://cdn.builder.io/api/v1/image/assets%2F1bea62adcf07414aa16974ab6f37361e%2F54b76d6de8574f18aaf1580e06c8d9a2",
//           review:
//             "Working with Fay's Digital Solution was a game-changer for our company. Their streamlined process made it incredibly easy to get our new web app up and running in no time. The team was responsive, professional, and truly understood our needs. The final product exceeded our expectations, and we've seen a significant increase in user engagement since its launch.",
//         },
//         {
//           id: 2,
//           name: "Michael Brown",
//           jobTitle: "CEO",
//           company: "Brown Enterprises",
//           profilePicture:
//             "https://cdn.builder.io/api/v1/image/assets%2F1bea62adcf07414aa16974ab6f37361e%2F54b76d6de8574f18aaf1580e06c8d9a2",
//           review:
//             "Fay's Digital Solution delivered exactly what we needed. The website re-design transformed our outdated site into a modern, user-friendly platform. Their step-by-step guidance made the process smooth and efficient, saving us time and hassle. The new design has greatly improved our online presence, attracting more customers and boosting our sales.",
//         },
//         {
//           id: 3,
//           name: "Sophia Williams",
//           jobTitle: "CEO",
//           company: "Brown Enterprises",
//           profilePicture:
//             "https://cdn.builder.io/api/v1/image/assets%2F1bea62adcf07414aa16974ab6f37361e%2Fb672b14a1d8549aab25e44323e747958",
//           review:
//             "I was impressed by the professionalism and expertise of Fay's Digital Solution. They took our vision and turned it into a beautifully designed web app that works flawlessly across all devices. Their unique approach, bypassing lengthy consultations, allowed us to get started quickly and achieve great results. I highly recommend their services to anyone looking for quality web development.",
//         },
//         {
//           id: 4,
//           name: "James Smith",
//           jobTitle: "CEO",
//           company: "Brown Enterprises",
//           profilePicture:
//             "https://cdn.builder.io/api/v1/image/assets%2F1bea62adcf07414aa16974ab6f37361e%2F383cb10282084ccab3634f6b1c952afe",
//           review:
//             "Fay's Digital Solution provided an exceptional experience from start to finish. Their innovative process eliminated the need for time-consuming consultations, which was perfect for our fast-paced startup. The team's creativity and attention to detail resulted in a stunning website re-design that has received numerous compliments. We're thrilled with the outcome and look forward to working with them again.",
//         },
//       ],
//     },
//   ],
// });
