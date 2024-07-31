import { TitleTypes } from "@/types/title.types";

const Title = ({ text, variant }: TitleTypes) => {
  // Refactorizar usando class-variance-authority
  if (variant === "fullWidth") {
    return (
      <div className="border-b border-main-700 w-full mb-2 lg:mb-4">
        <p className="text-lg lg:text-xl-2 font-semibold">{text}</p>
      </div>
    );
  }

  return (
    <div className="border-b border-main-700 max-w-fit px-4">
      <p className="text-xl lg:text-xl-3 font-bold">{text}</p>
    </div>
  );
};

export default Title;
