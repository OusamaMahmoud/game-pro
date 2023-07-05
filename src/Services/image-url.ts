const getCroppedImageUrl = (url: string) => {
  if(!url) return null;
  const target = "/media".length;
  let index = url.indexOf("media/") + target;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
