import style from './banner.css';

export default function BannerPage({bannerProps}) {
  return (
      <div flex
        className="banner_centered flex justify-center content-center flex-col items-center "
        style={{
          backgroundColor: bannerProps.backgroundColor || "#fff",
          height: bannerProps.height || "70%",
          maxHeight: bannerProps.maxHeight || "550px",
          width: bannerProps.width || "80%",
          maxWidth: bannerProps.maxWidth || "100px",
          headline:bannerProps.headline || '',
        }}
      >
     
       
        <a
          href={bannerProps.buttonLink}
        >
        <h1 className="my-0 uppercase">{bannerProps.headline}</h1>
        <img className="imgBanner" src={bannerProps.imgBanner} alt="banner"/>
        <div className="my-0 text-center uppercase prose"></div>
        </a>
      </div>
  );
}
