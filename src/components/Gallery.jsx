import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "gallery/IMG_5157.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_8386.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_8390.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_8380.jpg", width: 800, height: 600 },
  { src: "gallery/DJI_0003.jpg", width: 800, height: 600 },
  { src: "gallery/DJI_0006.jpg", width: 800, height: 600 },
  { src: "gallery/DJI_0009.jpg", width: 800, height: 600 },
  { src: "gallery/DJI_0011.jpg", width: 800, height: 600 },
  { src: "gallery/DJI_0024.jpg", width: 800, height: 600 },
  { src: "gallery/DJI_0030.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5158.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5180.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5192.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5194.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5201.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5206.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5209.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5210.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5211.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5213.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5214.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5216.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5217.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_5218.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_8373.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_8374.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_8377.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_8378.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_8381.jpg", width: 800, height: 600 },
  { src: "gallery/IMG_8382.jpg", width: 800, height: 600 }
];

export default function Gallery() {
  return (
  <section className = "bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-4 pb-32 xl:py-40">
    <PhotoAlbum layout="rows" photos={photos} />
  </section>
  );
};