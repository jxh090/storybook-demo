import fs from "fs";
import "dotenv/config";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_ID = process.env.FILE_ID;

if (!FIGMA_TOKEN || !FILE_ID) {
    console.error("Missing FIGMA_TOKEN or FILE_ID in .env");
    process.exit(1);
}

const fetchFigmaFile = async () => {
    const res = await fetch(`https://api.figma.com/v1/files/${FILE_ID}`, {
        method: "GET",
        headers: {
            "X-Figma-Token": FIGMA_TOKEN,
        },
    });

    if (!res.ok) {
        throw new Error(`Figma API error: ${res.status} ${res.statusText}`);
    }

    return res.json();
};

const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, "0")).join("");

const extractColorTokens = (styles, document) => {
    const tokens = {};

    // Helper to walk all nodes
    function walk(node, callback) {
        callback(node);
        if (node.children) {
            node.children.forEach((child) => walk(child, callback));
        }
    }

    // For each style, find a node that references it
    for (const key in styles) {
        const style = styles[key];
        if (style.styleType !== "FILL") continue;

        let found = false;
        walk(document, (node) => {
            if (
                node.styles &&
                node.styles.fill === key &&
                node.fills &&
                node.fills[0] &&
                node.fills[0].type === "SOLID"
            ) {
                const { r, g, b } = node.fills[0].color;
                const hex = rgbToHex(r * 255, g * 255, b * 255);
                tokens[style.name] = hex;
                found = true;
            }
        });
    }

    return tokens;
};

const main = async () => {
    try {
        const figmaData = await fetchFigmaFile();
        const colorTokens = extractColorTokens(
            figmaData.styles,
            figmaData.document
        );

        fs.mkdirSync("tokens", { recursive: true });
        fs.writeFileSync(
            "tokens/colors.json",
            JSON.stringify(colorTokens, null, 2)
        );
        console.log("Exported tokens to tokens/colors.json");
    } catch (error) {
        console.error("Error:", error.message);
    }
};

main();
