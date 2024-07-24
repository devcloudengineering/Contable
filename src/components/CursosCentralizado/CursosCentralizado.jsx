import ReactPlayer from "react-player";

export const CursosCentralizado = () => {
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=1XrAQB8Wo2k"
        playing={false}
        loop={false}
        controls={true}
      />
    </>
  );
};
