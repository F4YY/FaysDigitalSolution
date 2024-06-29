"use client";
import * as React from "react";
import styled from "styled-components";
import { useState } from "react";

function OurClientsSay({testimonialsData}) {
  // const testimonialsData = [
  //   {
  //     id: 1,
  //     name: "Emma Johnson",
  //     jobTitle: "Marketing Manager",
  //     company: "Tech Innovators Inc",
  //     profilePicture:
  //       "https://cdn.builder.io/api/v1/image/assets%2F1bea62adcf07414aa16974ab6f37361e%2F54b76d6de8574f18aaf1580e06c8d9a2",
  //     review:
  //       "Working with Fay's Digital Solution was a game-changer for our company. Their streamlined process made it incredibly easy to get our new web app up and running in no time. The team was responsive, professional, and truly understood our needs. The final product exceeded our expectations, and we've seen a significant increase in user engagement since its launch.",
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Brown",
  //     jobTitle: "CEO",
  //     company: "Brown Enterprises",
  //     profilePicture:
  //       "https://cdn.builder.io/api/v1/image/assets%2F1bea62adcf07414aa16974ab6f37361e%2F54b76d6de8574f18aaf1580e06c8d9a2",
  //     review:
  //       "Fay's Digital Solution delivered exactly what we needed. The website re-design transformed our outdated site into a modern, user-friendly platform. Their step-by-step guidance made the process smooth and efficient, saving us time and hassle. The new design has greatly improved our online presence, attracting more customers and boosting our sales.",
  //   },
  //   {
  //     id: 3,
  //     name: "Sophia Williams",
  //     jobTitle: "CEO",
  //     company: "Brown Enterprises",
  //     profilePicture:
  //       "https://cdn.builder.io/api/v1/image/assets%2F1bea62adcf07414aa16974ab6f37361e%2Fb672b14a1d8549aab25e44323e747958",
  //     review:
  //       "I was impressed by the professionalism and expertise of Fay's Digital Solution. They took our vision and turned it into a beautifully designed web app that works flawlessly across all devices. Their unique approach, bypassing lengthy consultations, allowed us to get started quickly and achieve great results. I highly recommend their services to anyone looking for quality web development.",
  //   },
  //   {
  //     id: 4,
  //     name: "James Smith",
  //     jobTitle: "CEO",
  //     company: "Brown Enterprises",
  //     profilePicture:
  //       "https://cdn.builder.io/api/v1/image/assets%2F1bea62adcf07414aa16974ab6f37361e%2F383cb10282084ccab3634f6b1c952afe",
  //     review:
  //       "Fay's Digital Solution provided an exceptional experience from start to finish. Their innovative process eliminated the need for time-consuming consultations, which was perfect for our fast-paced startup. The team's creativity and attention to detail resulted in a stunning website re-design that has received numerous compliments. We're thrilled with the outcome and look forward to working with them again.",
  //   },
  // ];

  return (
    <Testimonials>
      <Div>
        {testimonialsData.map((testimonial) => (
          <Column key={testimonial.id}>
            <Testi>
              <ProfPicNameJobpos>
                <Img
                  loading="lazy"
                  sizes="(max-width: 638px) 91vw, (max-width: 998px) 90vw, 33vw"
                  srcSet={`${testimonial.profilePicture}?width=100 100w, ${testimonial.profilePicture}?width=200 200w, ${testimonial.profilePicture}?width=400 400w, ${testimonial.profilePicture}?width=800 800w, ${testimonial.profilePicture}?width=1200 1200w, ${testimonial.profilePicture}?width=1600 1600w, ${testimonial.profilePicture}?width=2000 2000w`}
                  src={testimonial.profilePicture}
                />
                <ProfileNameJobposition>
                  <ProfName>
                    <p>{testimonial.name}</p>
                  </ProfName>
                  <JobPosCompName>
                    <JobPos>
                      <p>{testimonial.jobTitle}</p>
                    </JobPos>
                    <Separator>
                      <p>|</p>
                    </Separator>
                    <CompName>
                      <p>{testimonial.company}</p>
                    </CompName>
                  </JobPosCompName>
                </ProfileNameJobposition>
              </ProfPicNameJobpos>
              <TestiDesc>
                <p>{testimonial.review}</p>
              </TestiDesc>
            </Testi>
          </Column>
        ))}
      </Div>
    </Testimonials>
  );
}

const Testimonials = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: auto;
  align-self: stretch;
  margin: 20px 0 80px;
  padding: 0 50px;
  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

const Div = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Testi = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-width: 1px;
  border-style: groove;
  border-color: rgba(155, 155, 155, 1);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.55);
  padding: 20px;
  @media (max-width: 991px) {
    margin-bottom: 20px;
  }
`;

const ProfPicNameJobpos = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: auto;
    gap: 15px;
  }
`;

const Img = styled.img`
  aspect-ratio: 0.67;
  object-fit: cover;
  object-position: center;
  width: 100px;
  text-align: center;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: auto;
  @media (max-width: 991px) {
    margin-right: 0;
  }
`;

const ProfileNameJobposition = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  @media (max-width: 991px) {
    margin-right: 0;
  }
`;

const ProfName = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`;

const JobPosCompName = styled.div`
  display: flex;
  align-items: center;
`;

const JobPos = styled.div`
  font-size: 1em;
`;

const Separator = styled.div`
  margin: 0 5px;
`;

const CompName = styled.div`
  font-size: 1em;
`;

const TestiDesc = styled.div`
  margin-top: 15px;
  font-size: 0.9em;
  line-height: 1.5;
`;

export default OurClientsSay;
