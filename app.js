/*
  Replace ONLY the links below with your real Google Drive links later.
  Make sure each file is shared as:
  "Anyone with the link → Viewer"
*/

const components = [
  {
    title: "Resume / CV",
    link: "https://docs.google.com/document/d/10uG3RQa2xAnol3cdtIi71VomweVFPsTJ/edit?usp=drive_link&ouid=102786220991848390539&rtpof=true&sd=true",
  },
  {
    title: "Autobiographical Essay",
    link: "https://docs.google.com/document/d/1w2tVJqWHy0LnQM1R5nQnvBom8NztQDGr/edit?usp=drive_link&ouid=102786220991848390539&rtpof=true&sd=true",
  },
  {
    title: "PowerPoint Presentation",
    link: "https://docs.google.com/presentation/d/1N7KNHgf3moO7M3dE0ybjXuyfIbUO1CQW/edit?usp=drive_link&ouid=102786220991848390539&rtpof=true&sd=true",
  },
  {
    title: "Video Self-Presentation (1.5 minutes)",
    link: "https://drive.google.com/file/d/1owg5_7o27dgbsS_iErWV6ntolR7tpVHJ/view?usp=drive_link",
  },
  {
    title: "Abstract-Presentation (5 minutes)",
    link: "https://docs.google.com/document/d/17jlousBsV-Va-Aud11ZgP2NtASpnmi9V/edit?usp=drive_link&ouid=102786220991848390539&rtpof=true&sd=true",
  },
  
    
  {
    title: "Invention / Innovation",
    link: "https://drive.google.com/file/d/1owg5_7o27dgbsS_iErWV6ntolR7tpVHJ/view?usp=drive_link",
  },
  {
    title: "African Culture Video",
    link: "https://docs.google.com/presentation/d/10rXQFyg4xDUUr3iblMG3SdQ1MLLMDnrd/edit?usp=drive_link&ouid=102786220991848390539&rtpof=true&sd=true",
  },
  {
    title: "Photographic Essay",
    link: "https://drive.google.com/file/d/1xgqwXiTa3PUQl6F88Gulox85uJhwPT3M/view?usp=drive_link",
  },
  {
    title: "Culture  presentation",
    link: "https://docs.google.com/presentation/d/1ojFgrii9eL7FOudIPvvWlXg1fcOy0nPT/edit?usp=drive_link&ouid=102786220991848390539&rtpof=true&sd=true",
  },{
    title: "modern challenges",
    link: "https://docs.google.com/presentation/d/15c9rZX08W__gi4yBKxoxlbUT5IHY1sf7/edit?usp=drive_link&ouid=102786220991848390539&rtpof=true&sd=true",
  },{
    title: "proffessional online presence",
    link: "https://docs.google.com/document/d/1bsFh-b84JICEcYFa-7d4-2R_SbdWlnY0/edit?usp=drive_link&ouid=102786220991848390539&rtpof=true&sd=true",
  },
];

const container = document.getElementById("cardsContainer");

components.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  const previewUrl = getPreviewUrl(item.link);

  card.innerHTML = `
    <h2>${item.title}</h2>
    <div class="preview">
      ${
        previewUrl
          ? `<iframe src="${previewUrl}" allow="autoplay; fullscreen"></iframe>`
          : `<p style="padding:16px;color:#94a3b8;">Preview not available</p>`
      }
    </div>
    <div class="card-content">
      <a href="${item.link}" target="_blank">Open in Google Drive</a>
    </div>
  `;

  container.appendChild(card);
});

/**
 * Converts Google Drive / Docs links to embeddable preview URLs
 */
function getPreviewUrl(url) {
  try {
    const u = new URL(url);

    if (u.hostname.includes("docs.google.com")) {
      if (u.pathname.includes("/document/d/")) {
        return url.replace("/edit", "/preview");
      }
      if (u.pathname.includes("/presentation/d/")) {
        return url.replace("/edit", "/preview");
      }
    }

    if (u.hostname.includes("drive.google.com")) {
      if (u.pathname.includes("/file/d/")) {
        const id = u.pathname.split("/file/d/")[1].split("/")[0];
        return `https://drive.google.com/file/d/${id}/preview`;
      }
    }

    return null;
  } catch {
    return null;
  }
}
