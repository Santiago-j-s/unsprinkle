/**
 * ImageSources handles the logic for generating the srcSet
 * attribute for the <source> elements in the <picture> element.
 *
 * it takes a baseSrc prop, which is the path to the image,
 * and generates the srcSet for the avif and jpg versions of the image
 * taking into account the 1x, 2x, and 3x versions of each.
 *
 * It depends on the following naming convention for the images:
 *
 * - baseSrc: /images/hero-img.jpg
 * - avif: /images/hero-img.avif
 * - jpg: /images/hero-img.jpg
 * - 2x avif: /images/hero-img@2x.avif
 * - 2x jpg: /images/hero-img@2x.jpg
 * - 3x avif: /images/hero-img@3x.avif
 * - 3x jpg: /images/hero-img@3x.jpg
 */
function ImageSources({ baseSrc }) {
  const avifSrcSet = [
    `${baseSrc.replace(".jpg", ".avif")} 1x`,
    `${baseSrc.replace(".jpg", "@2x.avif")} 2x`,
    `${baseSrc.replace(".jpg", "@3x.avif")} 3x`,
  ].join(", ");

  const jpgSrcSet = [
    `${baseSrc} 1x`,
    `${baseSrc.replace(".jpg", "@2x.jpg")} 2x`,
    `${baseSrc.replace(".jpg", "@3x.jpg")} 3x`,
  ].join(", ");

  return (
    <>
      <source type="image/avif" srcSet={avifSrcSet} />
      <source type="image/jpeg" srcSet={jpgSrcSet} />
    </>
  );
}

export default ImageSources;
