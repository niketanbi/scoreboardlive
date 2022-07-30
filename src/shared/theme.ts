import { DefaultTheme } from "styled-components";

export enum FontFamilies {
    nunitoSans = "Nunito Sans",
    notoSerif = "Noto Serif",
    playfairDisplay = "Playfair Display",
    openSans = "Open Sans",
    robotoCondensed = "Roboto Condensed",
}

const colors = {
    salmon0: "#FFFBFB",
    salmon1: "#FEF4F4",
    salmon2: "#FCDCDC",
    salmon3: "#FF8684",
    salmon4: "#FF5E5B",
    salmon5: "#E04444",
    salmon6: "#BC3636",
    salmon7: "#FFE1E1",
    salmon8: "#ED4040",
    grey: "#F3F3F3",
    grey1: "#F9F9FC",
    grey2: "#F3F4F8",
    grey3: "#DADEE9",
    grey4: "#B1B4C2",
    grey5: "#8B8EA1",
    grey6: "#676B7E",
    grey7: "#323446",
    grey8: "#E2E0E2",
    blue0: "#E8F3FF",
    blue1: "#6088F9",
    blue2: "#264FC4",
    blue3: "#14286B",
    blue4: "#1F84F9",
    blue5: "#508EFE",
    teal0: "#ECFAF9",
    teal1: "#B1F0E9",
    teal2: "#43DECD",
    teal3: "#00D3BB",
    teal4: "#00B8A4",
    yellow1: "#FFF8E1",
    yellow2: "#f9e292",
    yellow3: "#F2C21B",
    yellow4: "#FFEDAF",
    yellow5: "#FABB00",
    aquamarine: "#00d3bb",
    facebookBlue: "#3b5998",
    twitterBlue: "#00aced",
    white: "#ffffff",
    black: "#32343c",
};

const typography = {
    sizeM1: "0.625rem",
    size0: "0.6875rem", // 11px
    size1: "0.75rem", // 12px
    size2: "0.875rem", // 14px
    size3: "1rem", // 16px 
    size4: "1.125rem", // 18px
    size5: "1.375rem", // 22px
    size6: "1.75rem", // 28px
    size7: "2.25rem", // 36px
    size8: "3rem", // 48px
    weight1: 500,
    weight2: 700,
    lineHeight1: "1em",
    lineHeight2: "1.4em",
    color1: colors.grey3,
    color2: colors.grey6,
    color3: colors.grey7,
    color4: colors.salmon5,
    color5: colors.blue3,
    color6: colors.grey4,
    color7: colors.teal3,
};

export default {
    colors,
    typography,
} as DefaultTheme;
