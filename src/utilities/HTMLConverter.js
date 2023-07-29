import ShowDown from "showdown";

// Showdown converter configurations.
const converter = new ShowDown.Converter();
converter.setOption("noHeaderId", true);

// This function converts the input markdown text to html text.
export default function getHTML(inputText) {
    // Convert to HTML text.
    const convertText = converter.makeHtml(inputText);

    // Remove extra spaces and newline.
    const htmlText = convertText
        // .replace(/[\r\n]+/gm, "")
        .split(/[ ]+/)
        .join(" ");

    // Return HTML text.
    return htmlText;
}
