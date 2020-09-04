export const ClearIcon = require("./Clear.png");
export const CloudsIcon = require("./Clouds.png");
export const HazeIcon = require("./Haze.png");
export const MistIcon = require("./Mist.png");
export const RainIcon = require("./Rain.png");
export const SnowIcon = require("./Snow.png");
export const ThunderstormIcon = require("./Thunderstorm.png");

export function getImage(type) {
  switch (type) {
    case "Clouds":
      return CloudsIcon;
    case "Clear":
      return ClearIcon;
    case "Haze":
      return HazeIcon;
    case "Thunderstorm":
      return ThunderstormIcon;
    case "Rain":
      return RainIcon;
    case "Mist":
      return MistIcon;
    case "Snow":
      return SnowIcon;
  }
}
