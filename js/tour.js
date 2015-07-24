/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function privacyPrefsClick(event) {
  event.preventDefault();
  Mozilla.UITour.openPreferences("privacy");
}

function step1() {
  var buttons = [
    {
      label: "1 of 3",
      style: "text",
    },
    {
      callback: step2,
      label: "Next",
      style: "primary",
    },
  ];

  Mozilla.UITour.showInfo("trackingProtection",
                          "How Tracking Protection works",
                          "When the shield is visible, that means Firefox is actively blocking content that tracks you.",
                          undefined,
                          buttons);
}

function step2() {
  var infoPanel = document.getElementById("infoPanel");
  infoPanel.hidden = false;
}

function step3() {
  var buttons = [
    {
      label: "3 of 3",
      style: "text",
    },
    {
      callback: doneTour,
      label: "Got it!",
      style: "primary",
    },
  ];

  Mozilla.UITour.hideInfo();

  Mozilla.UITour.showMenu("controlCenter", function ccOpened() {
    Mozilla.UITour.showInfo("controlCenter-trackingUnblock",
                            "Want to make changes?",
                            "It's easy to disable Tracking Protection for the website you're on by clicking \"Disable for this session\".",
                            undefined,
                            buttons);
  });
}

function doneTour() {
  Mozilla.UITour.hideInfo();
  Mozilla.UITour.hideMenu("controlCenter");
}


// Setup event listeners

[...document.querySelectorAll(".prefsLink")].forEach(function(link) {
  link.addEventListener("click", privacyPrefsClick);
});
document.querySelector("#infoPanel > .footer > button").addEventListener("click", function(event) {
  document.getElementById("infoPanel").hidden = true;
  step3();
});

document.addEventListener("pagehide", function() {
  Mozilla.UITour.hideMenu("controlCenter");
  Mozilla.UITour.hideInfo();

});

// Start the tour
step1();
