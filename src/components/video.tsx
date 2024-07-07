export function Video() {
  return (
      <div className={"p-10 bg-amber-500 shadow rounded-2xl m-4"}>
          <h2 className={"text-2xl"}>
              Video from youtube
          </h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/r6tH55syq0o?si=-_mXZ7xwpbAorWjN"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
  );
}