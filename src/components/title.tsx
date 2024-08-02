import { TitleTypes } from "@/types/title.types";

const Title = ({ text, variant }: TitleTypes) => {
  // Refactorizar usando class-variance-authority
  if (variant === "fullWidth") {
    return (
      <div className="border-b border-main-700 w-full mb-2 md:mb-4">
        <p className="text-lg md:text-xl-2 font-semibold">{text}</p>
      </div>
    );
  }

  return (
    <div className="border-b border-main-700 max-w-fit px-4">
      <p className="text-xl md:text-xl-3 font-bold">{text}</p>
    </div>
  );
};

export default Title;
