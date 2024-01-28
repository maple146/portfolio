export interface CustomLinkTypes {
  url: string;
  text: string;
}

const CustomLink = ({ url, text }: CustomLinkTypes) => {
  return (
    <a href={url} target="blank">
      <p className="text-main-100 text-base lg:text-lg hover:underline">{text}</p>
    </a>
  );
};

export default CustomLink;
