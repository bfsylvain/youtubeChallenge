const today = new Date();
const day = 1000 * 60 * 60 * 24;

export function getVideoAge(date) {
  const videoPublishingDate = new Date(date);
  const videoAge = Math.floor((today - videoPublishingDate) / day);
  let ageToDisplay = "";

  if (videoAge < 7) {
    ageToDisplay = `${videoAge} jours`;
  } else if (videoAge < 30) {
    const week = videoAge / 7 === 1 ? "semaine" : "semaines";
    ageToDisplay = `${Math.floor(videoAge / 7)} ${week}`;
  } else if (videoAge < 365) {
    ageToDisplay = `${Math.floor(videoAge / 30)} mois`;
  } else {
    const year = videoAge / 365 === 1 ? "an" : "ans";
    ageToDisplay = `${Math.floor(videoAge / 365)} ${year}`;
  }
  return ageToDisplay;
}
