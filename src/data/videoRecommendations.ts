export type VideoRecommendation = {
  id: number;
  title: string;
  subtitle: string;
  platform: "Facebook" | "TikTok";
  thumbnail: string;
  url: string;
};

export const videoRecommendations: VideoRecommendation[] = [
  {
    id: 1,
    title: "Piumie's Mother's Lovely Feedback",
    subtitle: "Family Recommendation",
    platform: "Facebook",
    thumbnail: "/images/video-recommendations/video-1.png",
    url: "https://www.facebook.com/share/v/1DN3d8GNxd/",
  },
  {
    id: 2,
    title: "Piumie & Suraj's Lovely Feedback",
    subtitle: "Couple Recommendation",
    platform: "Facebook",
    thumbnail: "/images/video-recommendations/video-2.png",
    url: "https://www.facebook.com/share/r/1HFSWSBsM5/",
  },
  {
    id: 3,
    title: "Ruwindith & Nimmi's Lovely Feedback",
    subtitle: "Couple Recommendation",
    platform: "Facebook",
    thumbnail: "/images/video-recommendations/video-3.png",
    url: "https://www.facebook.com/share/r/1cFAqsheRe/",
  },
  {
    id: 4,
    title: "Sahan's Father's Lovely Feedback",
    subtitle: "Family Recommendation",
    platform: "Facebook",
    thumbnail: "/images/video-recommendations/video-4.png",
    url: "https://www.facebook.com/share/r/1C9iwqfBRZ/",
  },
];