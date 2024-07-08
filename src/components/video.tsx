import { YouTubeEmbed } from "@next/third-parties/google";

export function Video() {
  return (
      <div className={"p-10 bg-amber-500 shadow rounded-2xl m-4"}>
          <h2 className={"text-2xl"}>
              Video from youtube
          </h2>
          <YouTubeEmbed videoid="r6tH55syq0o?si=-_mXZ7xwpbAorWjN" height={560} width={315} />
      </div>
  );
}