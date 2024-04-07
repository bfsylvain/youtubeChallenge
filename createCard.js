import { getVideoAge } from "./getVideoAge.js";

export function createCard(video, parent) {
  const age = getVideoAge(video.date);
  const truncatedname = `${video.name.substring(0, 32)}...`
  console.info(typeof video.name)

  parent.innerHTML += `
  <div class="video-cardContainer">
    <a href=${video.videoUrl}>
      <div class="card-image">
          <img src=${video.image} alt="miniature vidéo"></img>
      </div>
    </a>
    <div class="card-informations">
      <a href=${video.channelUrl}>
        <div class="card-info-logo">
          <img src=${video.logo} alt="logo du youtubeur"></img>
        </div>
      </a>
      <div class="card-info-main">
        <a href=${video.videoUrl}>
          <div class="card-title-header" title=${video.name}>
              <h3>${truncatedname}</h3>
          </div>
        </a>
        <a href=${video.channelUrl}>
          <div class="video-channel">
              <p>${video.channel}</p>
          </div>
        </a>
        <div class="video-age">
          <p>${age}</p>
        </div>
      </div> 
    </div>
    </div>
    `;
}
