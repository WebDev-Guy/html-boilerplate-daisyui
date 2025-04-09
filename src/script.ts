import "./styles.scss";

const steamWrapper = document.getElementById("steam-wrapper") as HTMLElement;

const steamPaths: string[] = [
    // You can add more custom SVG path curves here for even better realism
    "M64.2,40.6c-2.7,23.8,18,21,18.3,39.6c0.3,17.5-31.7,16.8-32.8,36c1.5,26.9,39.4,18.9,41.4,49.5c1.8,27.8-42.1,37.8-41,53.1",
    "M39.2,10.5C41.3,30.2,24,27.9,24.8,43.2C25.4,55.1,50.5,58.9,50.5,73c0,19.3-29.7,20.6-31.3,45.8c-1.9,30.8,37.8,25.6,40.4,57.7",
    "M95.7,56c1.8,18.8,13,16.6,12.4,31.2C107.6,98.6,86,102.1,86,115.6c0,18.5,28,19.2,28.6,50.6c0.5,24.3-29.5,36.5-27.6,47.4"
];

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSteamPath(pathData: string, cloudClass: string): SVGPathElement {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.classList.add("steam-cloud", cloudClass);

    // Add inline style for subtle random drifting + realism
    const driftX = getRandomInt(-10, 10); // horizontal drift
    const scaleX = 1 + Math.random() * 0.2;
    const delay = getRandomInt(0, 10);
    const duration = getRandomInt(18, 36);

    path.style.animation = `float-steam ${duration}s ease-in-out ${delay}s infinite`;
    path.style.transform = `translateX(${driftX}px) scaleX(${scaleX.toFixed(2)})`;

    return path;
}

function generateSteamClouds(cloudCount: number = 10): void {
    if (!steamWrapper) return;

    for (let i = 0; i < cloudCount; i++) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "-10 -20 150 250");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("class", "steam-flow");

        const groupCount = getRandomInt(1, 3); // 1–3 steam paths per group
        for (let j = 0; j < groupCount; j++) {
            const pathData = steamPaths[getRandomInt(0, steamPaths.length - 1)];
            const cloudClass = `cloud-${getRandomInt(1, 3)}`; // Assign cloud-1 to cloud-3
            const path = createSteamPath(pathData, cloudClass);
            svg.appendChild(path);
        }

        steamWrapper.appendChild(svg);
    }

    setTimeout(() => {
        const steam = document.getElementById('steam-wrapper');

        if (steam) {
            steam.style.opacity = '1';
        }
    }, 600);
}

generateSteamClouds(5); // Increase for denser steam
