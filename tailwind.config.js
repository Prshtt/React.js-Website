/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        midnightblue: "#0f0641",
        "gray-gray-700": "#4a5568",
        "gray-gray-400": "#cbd5e0",
        "gray-gray-600": "#718096",
        "gray-gray-50": "#fafafa",
        steelblue: {
          "100": "#4b9ddf",
          "200": "#4a9cdf",
          "300": "#4a8aaf",
          "400": "#00578b",
        },
        silver: "#bfbfbf",
        red: "#ff0000",
        darkslategray: {
          "100": "#33475b",
          "200": "#006068",
          "300": "#343434",
        },
        gray: {
          "100": "#2c2c2c",
          "200": "#1f2937",
          "300": "#202020",
          "400": "rgba(0, 0, 0, 0.5)",
        },
        black: "#000",
        "gray-gray-300": "#e2e8f0",
        "gray-gray-500": "#a0aec0",
        "brand-primary-bg": "#57007b",
        "gray-gray-900": "#1a202c",
        mediumpurple: "rgba(148, 133, 237, 0.25)",
        "gray-gray-800": "#2d3748",
        "shade-primary-lite-bg": "#e8daed",
        "gradient-primary-bg": "#f76680",
        mediumvioletred: "#a2307e",
        sandybrown: "#fcc466",
        aquamarine: "#40e8bc",
        hotpink: "#ff66a4",
        skyblue: "#64d0f3",
        lightblue: {
          "100": "#cdeeff",
          "200": "#ccecfe",
          "300": "#c5ebff",
        },
        deepskyblue: "#00a6e6",
        lavender: {
          "100": "#e6e6ff",
          "200": "#efddf8",
        },
        cornflowerblue: "#7b88ce",
        aliceblue: "#e4f5ff",
        darkslateblue: {
          "100": "#6d3380",
          "200": "#004178",
        },
        lightcyan: "#cdfdf1",
        plum: "rgba(234, 183, 255, 0.3)",
      },
      spacing: {},
      fontFamily: {
        "footer-footer-sm": "Inter",
        "footer-footer-links": "Poppins",
        inspiration: "Inspiration",
        roboto: "Roboto",
      },
      borderRadius: {
        "8xs": "5px",
        "31xl": "50px",
        "3xs": "10px",
        "10xs": "3px",
        "4xs": "9px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xl: "20px",
      "2xs": "11px",
      xs: "12px",
      "16xl": "35px",
      "2xl": "21px",
      "9xl": "28px",
      "3xl": "22px",
      "6xl": "25px",
      "8xl": "27px",
      "17xl": "36px",
      "34xl": "53px",
      "26xl": "45px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
