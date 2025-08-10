let mathBlocks = document.querySelectorAll("math");

for (let math of mathBlocks) {
    let button = document.createElement("button");
    button.innerText = "copy";
    button.addEventListener("click", async () => {
        const semantics = math.querySelector("semantics");
        const annotation = semantics.querySelector("annotation");
        const tex = annotation.textContent;
        await copy(tex);
    });

    math.after(button);
}

async function copy(text) {
    const clip = navigator.clipboard;
    try {
        await clip.writeText(text);
    } catch (e) {
        console.error(e.message);
    }
}