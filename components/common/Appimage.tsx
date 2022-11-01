import type { NextPage } from "next";
import Image from "next/image";
interface Props {
  src: string;
  layout?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Appimage: NextPage<Props> = ({
  src,
  alt,
  width,
  height,
}) => {
  return (
    <div className="res-img">
      <Image
        src={src}
        layout={'fill'}
        alt={'sdfsf'}
        width={width}
        height={height}
        sizes='100vw'
      />
    </div>
  );
};


export default Appimage;