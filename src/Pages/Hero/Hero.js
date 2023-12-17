import React from "react";
import { Helmet } from "react-helmet";

// import Vector1 from '';

import SectionHero from "../../components/Hero/HeroSection";

const Hero = () =>{
    
    return(
        <div>
            <Helmet className="relative overflow-hidden">
                <title>Fabian Astete || Desarrollador Web</title>
            </Helmet>
            <div className="container relative space-y-20 mt-12 mb-20 sm:space-y-24 sm:my-24 lg:space-y-32 lg:my-32">
              {/* SECTION HERO */}
              <SectionHero
                className="pb-10"
                heading={
                  <span>
                    Entiende que,
                    <br /> Diseño y funcionalidad <br /> pueden{` `}
                    <span className="relative pr-3">
                      <span className="relative">coincidir a la vez.</span>
                    </span>
                  </span>
                }
              />
              {/* SECTION 2 */}
              {/* <SectionHowItWork /> */}
            </div>
        </div>
    )
}

export default Hero;