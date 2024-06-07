// Copyright (c) 2024 kenneth All rights reserved
//
// Created by: Kenneth
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-04-kai-nguyen-4/sw.js", {
    scope: "/ICS2O-Unit-6-04-kai-nguyen-4/",
  })
}

window.onload = function () {
  const params = new URLSearchParams(document.location.search)

  const radius = params.get("radius")

  if (radius >= 0) {
    const volume = 4 / 3 * Math.PI * (radius ** 3)
    document.getElementById("radiusAnswer").innerHTML = radius + " mm<sup>3</sup> <br /><br />"
    document.getElementById("answer").innerHTML = "the volume of the sphere is: " + volume.toFixed(2) + "mm<sup>3</sup>"
  } else {
    document.getElementById("answer").innerHTML = "Invalid number"
  }
}

