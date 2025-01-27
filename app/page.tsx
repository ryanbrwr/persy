import { PageContainer } from "./components/page-container";

import { BlurImage } from "./components/blur-image";

export default function Home() {
  return (
    <PageContainer>
      <BlurImage
        images={[
          { src: "/leaves.png", alt: "leaves" },
          { src: "/city-up.png", alt: "city-up" },
          { src: "/sf.png", alt: "sf" },
          { src: "/ams.png", alt: "ams" },
          { src: "/water.png", alt: "water" },
        ]}
      />

      <div className="flex flex-col justify-between md:grow gap-y-8">
        <div className="md:grid grid-cols-1 md:grid-cols-10 gap-3 md:gap-6 grow h-full md:grid-rows-1 flex flex-col">
          <div className="md:col-span-3 flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="font-light text-xl tracking-tighter leading-8">
                Ryan Brewer
              </span>
              <span className="font-light text-[#666] text-base tracking-tighter">
                Design Engineer
              </span>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col" />
          <div className="col-span-2 md:flex flex-col text-xl tracking-tighter font-light leading-8 hidden">
            Forging Rare Earth Metals
          </div>
          <div
            className="col-span-3 tracking-wide leading-6 font-light gap-4 flex flex-col"
            style={{
              lineHeight: "1.6rem",
              letterSpacing: "-0.0067rem",
            }}
          >
            <p>
              I&apos;m a software engineer and designer. I went to Johns Hopkins
              University, and dropped out to start{" "}
              <a
                href="https://tunnel.dev"
                className="underline italic font-normal"
              >
                Tunnel
              </a>
              . Recently I was a{" "}
              <span className="italic font-normal">
                Founding Engineer & Designer
              </span>{" "}
              @{" "}
              <a
                href="https://www.endex.ai"
                className="underline italic font-normal"
              >
                Endex
              </a>
              .
            </p>
            <p>
              I&apos;m interested in building new products that combine beauty
              and utility. I&apos;m currently starting a new company. More to
              come.
            </p>
          </div>
        </div>
        <div className="flex flex-col grow w-full h-8">
          <a
            href="mailto:ryan@ryanbrewer.me"
            className="font-light tracking-tight text-sm hover:underline"
          >
            ryan@ryanbrewer.me
          </a>
          <span className="font-light tracking-tight text-sm text-[#666]">
            New York
          </span>
        </div>
      </div>
    </PageContainer>
  );
}
