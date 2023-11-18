function getColorMap() {
    // Object Version of colorMapper
    // const colorMapperObj = {
    //     y: "DarkOrange"
    //     t: "DarkOrange",
    //     tn: "DarkSalmon",
    //     n: "Gold",
    //     st: "LightCoral",
    //     sn: "IndianRed",
    //     sst: "Plum",
    //     ssn: "Salmon",
    //     ssst: "CadetBlue",
    //     sssn: "LightSteelBlue",
    //     sssst: "PaleGreen",
    //     ssssn: "MediumAquaMarine",
    //     o: "Gainsboro"
    // };
    const colorMapperObj = {
        q1: "VividOrange",
        q2: "MintGreen",
        q3: "RoyalPurple",
        q4: "RaspberryPink",
        q5: "Turquoise",
        q6: "DeepLavender",
        q7: "GoldenYellow",
        q8: "SkyBlue",
        q9: "CrimsonRed",
        q10: "LightSeaGreen",
        q11: "ElectricPurple",
        q12: "Tangerine",
        q13: "BabyBlue",
        q14: "LimeGreen",
        q15: "MediumBlue",
        q16: "Magenta",
        q17: "Lime",
        q18: "HotPink",
        q19: "Cyan",
        q20: "Chartreuse",
        q21: "Amber",
        q22: "Teal"
      };
      
    // Convert object to map for easy iteration
    const colorMap = new Map(Object.entries(colorMapperObj));
    return colorMap;
}