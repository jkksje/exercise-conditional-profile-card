/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  as you go through the practice exercises
 *  the "variables" object will contain the following values:
 *  includeCover: true, // if includeCover is true the algorithm should show the cover image
 *  background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
 *  avatarURL: "https://storage.googleapis.com/breathecode-asset-images/3c15f2d5e8b14c8b5bc801cf99a02f1c88a450303a550a875e395b9ae099fa54.jpg", // this is the url for the profile avatar
 *  socialMediaPosition: "right", // social media bar position (left or right)
 *  twitter: null, // social media usernames
 *  github: null,
 *  linkedin: null,
 *  instagram: null,
 *  name: null,
 *  lastName: null,
 *  role: null,
 *  country: null,
 *  city: null
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console

  // here we ask the logic for the cover
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // social media position
  const positionClass =
    variables.socialMediaPosition === "left"
      ? "position-left"
      : "position-right";

  // display values with fallbacks when null
  const fullName = `${variables.name || "Your name"} ${variables.lastName ||
    "Your lastname"}`;
  const roleText = variables.role || "Web Developer";
  const locationText =
    variables.city && variables.country
      ? `${variables.city}, ${variables.country}`
      : variables.city || variables.country || "Miami, USA";

  // social links
  const twitterUser = variables.twitter || "alesanchezr";
  const githubUser = variables.github || "alesanchezr";
  const linkedinUser = variables.linkedin || "alesanchezr";
  const instagramUser = variables.instagram || "alesanchezr";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" />
      <h1>${fullName}</h1>
      <h2>${roleText}</h2>
      <h3>${locationText}</h3>
      <ul class="${positionClass}">
        <li><a href="https://twitter.com/${twitterUser}"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://github.com/${githubUser}"><i class="fab fa-github"></i></a></li>
        <li><a href="https://linkedin.com/${linkedinUser}"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="https://instagram.com/${instagramUser}"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>`;
}
