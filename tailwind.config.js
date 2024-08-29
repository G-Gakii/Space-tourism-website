/** @typ barlowCondensede {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('/starter-code/assets/home/background-home-mobile.jpg')",
        tablet: "url('/starter-code/assets/home/background-home-tablet.jpg')",
        desktop: "url('/starter-code/assets/home/background-home-desktop.jpg')",

        destinationmobile:
          "url('/starter-code/assets/destination/background-destination-mobile.jpg')",
        destinationtablet:
          "url('/starter-code/assets/destination/background-destination-mobile.jpg')",
        destinationdesktop:
          "url('/starter-code/assets/destination/background-destination-desktop.jpg')",

        technologymobile:
          "url('/starter-code/assets/technology/background-technology-mobile.jpg')",
        technologytablet:
          "url('/starter-code/assets/technology/background-technology-tablet.jpg')",
        techynologydesktop:
          "url('/starter-code/assets/technology/background-technology-desktop.jpg')",

        crewmobile:
          "url('/starter-code/assets/crew/background-crew-mobile.jpg')",
        crewtablet:
          "url('/starter-code/assets/crew/background-crew-mobile.jpg)",
        crewdesktop:
          "url('/starter-code/assets/crew/background-crew-desktop.jpg')",
      },
      colors: {
        customBlue: "#D0D6F9",
        blue900: "0B0D17",
        transparentW: "hsla(0, 0%, 100%, 0.5)",
      },
      fontFamily: {
        barlowCondensed: ["Barlow Condensed", "sans - serif"],
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans - serif"],
      },
    },
  },
  plugins: [],
};
