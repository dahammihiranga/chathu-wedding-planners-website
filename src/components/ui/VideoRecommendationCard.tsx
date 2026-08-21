"use client";

import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

import type { VideoRecommendation } from "@/data/videoRecommendations";

type VideoRecommendationCardProps = {
  item: VideoRecommendation;
};

export default function VideoRecommendationCard({
  item,
}: VideoRecommendationCardProps) {
  const isFacebook = item.platform === "Facebook";

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${item.title} recommendation on ${item.platform}`}
      className="
        group
        relative
        block
        overflow-hidden
        bg-[#2f2927]
      "
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={item.thumbnail}
          alt={`${item.title} video recommendation`}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 32vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/10" />

        {/* Platform badge */}
        <div className="absolute left-4 top-4">
          <div className="inline-flex items-center gap-2 bg-white/95 px-3 py-2 shadow-sm backdrop-blur">
            {isFacebook ? (
              <>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1877F2] text-white">
                  <FaFacebookF className="text-xs" />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#2f2927]">
                  Facebook
                </span>
              </>
            ) : (
              <>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                  <FaTiktok className="text-xs" />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#2f2927]">
                  TikTok
                </span>
              </>
            )}
          </div>
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-white/20
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-[#a87868]
            "
          >
            <Play
              size={24}
              fill="currentColor"
              className="ml-1"
            />
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/65">
            {item.subtitle}
          </p>

          <h3 className="mt-2 font-serif text-2xl font-medium text-white sm:text-3xl">
            {item.title}
          </h3>

          <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Watch on {item.platform}
            <ExternalLink size={13} />
          </div>
        </div>
      </div>
    </a>
  );
}