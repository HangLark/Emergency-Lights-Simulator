export function getColor(mode, time) {
    if (time === -1) {
        return ["#000000", "#000000", "#000000"]
    }
    let leftColor, rightColor, centralColor;
    if (mode === "tripleFlashPolice") {
        if (time % 2000 <= 100) {
            leftColor = "#0000FF";
            rightColor = "#000000";
        } else if (time % 2000 <= 200) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 300) {
            leftColor = "#0000FF";
            rightColor = "#000000";
        } else if (time % 2000 <= 400) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 500) {
            leftColor = "#0000FF";
            rightColor = "#000000";
        } else if (time % 2000 <= 800) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 900) {
            leftColor = "#000000";
            rightColor = "#FF0000";
        } else if (time % 2000 <= 1000) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 1100) {
            leftColor = "#000000";
            rightColor = "#FF0000";
        } else if (time % 2000 <= 1200) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 1300) {
            leftColor = "#000000";
            rightColor = "#FF0000";
        } else {
            leftColor = "#000000";
            rightColor = "#000000";
        }
        if (time % 400 <= 200) {
            centralColor = "#ffa500";
        } else {
            centralColor = "#000000";
        }
    } else if (mode === "doubleFlashPolice") {
        if (time % 2000 <= 200) {
            leftColor = "#0000FF";
            rightColor = "#000000";
        } else if (time % 2000 <= 400) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 600) {
            leftColor = "#0000FF";
            rightColor = "#000000";
        } else if (time % 2000 <= 800) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 1000) {
            leftColor = "#000000";
            rightColor = "#ff0000";
        } else if (time % 2000 <= 1200) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 1400) {
            leftColor = "#000000";
            rightColor = "#ff0000";
        } else if (time % 2000 <= 1500) {
            leftColor = "#0000FF";
            rightColor = "#ff0000";
        } else if (time % 2000 <= 1600) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 1700) {
            leftColor = "#0000FF";
            rightColor = "#ff0000";
        } else if (time % 2000 <= 1800) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 1900) {
            leftColor = "#0000FF";
            rightColor = "#ff0000";
        } else if (time % 2000 <= 2000) {
            leftColor = "#000000";
            rightColor = "#000000";
        }
        if (time % 400 <= 200) {
            centralColor = "#ffffff";
        } else {
            centralColor = "#000000";
        }
    } else if (mode === "doubleFlashAmbulance") {
        if (time % 1800 <= 200) {
            leftColor = "#ff0000";
            rightColor = "#000000";
        } else if (time % 1800 <= 400) {
            leftColor = "#000000";
            rightColor = "#ff0000";
        } else if (time % 1800 <= 600) {
            leftColor = "#ff0000";
            rightColor = "#000000";
        } else if (time % 1800 <= 800) {
            leftColor = "#000000";
            rightColor = "#ff0000";
        } else if (time % 1800 <= 1000) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 1800 <= 1200) {
            leftColor = "#ff0000";
            rightColor = "#ff0000";
        } else if (time % 1800 <= 1400) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 1800 <= 1500) {
            leftColor = "#ff0000";
            rightColor = "#ff0000";
        } else if (time % 1800 <= 1600) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 1800 <= 1700) {
            leftColor = "#ff0000";
            rightColor = "#ff0000";
        } else if (time % 1800 <= 1800) {
            leftColor = "#000000";
            rightColor = "#000000";
        }
        if (time % 400 <= 200) {
            centralColor = "#ffffff";
        } else {
            centralColor = "#000000";
        }
    } else if (mode === "tripleFlashRepair") {
        if (time % 2000 <= 100) {
            leftColor = "#ffa500";
            rightColor = "#000000";
        } else if (time % 2000 <= 200) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 300) {
            leftColor = "#ffa500";
            rightColor = "#000000";
        } else if (time % 2000 <= 400) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 500) {
            leftColor = "#ffa500";
            rightColor = "#000000";
        } else if (time % 2000 <= 800) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 900) {
            leftColor = "#000000";
            rightColor = "#ffa500";
        } else if (time % 2000 <= 1000) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 1100) {
            leftColor = "#000000";
            rightColor = "#ffa500";
        } else if (time % 2000 <= 1200) {
            leftColor = "#000000";
            rightColor = "#000000";
        } else if (time % 2000 <= 1300) {
            leftColor = "#000000";
            rightColor = "#ffa500";
        } else {
            leftColor = "#000000";
            rightColor = "#000000";
        }
        if (time % 400 <= 200) {
            centralColor = "#ffffff";
        } else {
            centralColor = "#000000";
        }
    }
    return [leftColor, rightColor, centralColor];
}
