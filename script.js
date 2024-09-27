function toggleInputFields() {
    const splitType = document.getElementById("splitType").value;
    const ratioInput = document.getElementById("ratioInput");
    const percentageInput = document.getElementById("percentageInput");

    if (splitType === "ratio") {
        ratioInput.style.display = "block";
        percentageInput.style.display = "none";
    } else {
        ratioInput.style.display = "none";
        percentageInput.style.display = "block";
    }
}

function calculatePower() {
    const inputPower = parseFloat(document.getElementById("inputPower").value);
    const splitType = document.getElementById("splitType").value;

    let splitRatio1, splitRatio2;

    if (splitType === "ratio") {
        const ratio = parseFloat(document.getElementById("splitRatio").value);
        splitRatio1 = 1 / ratio; // 1:n to n
        splitRatio2 = (ratio - 1) / ratio; // Remaining power for the other output
    } else {
        const percentage = parseFloat(document.getElementById("splitPercentage").value) / 100;
        splitRatio1 = percentage;
        splitRatio2 = 1 - percentage; // Remaining percentage for the other output
    }

    if (!inputPower || splitRatio1 <= 0 || splitRatio2 < 0) {
        document.getElementById("output").innerText = "Please enter valid values.";
        return;
    }

    const power1 = inputPower + 10 * Math.log10(splitRatio1);
    const power2 = inputPower + 10 * Math.log10(splitRatio2);

    document.getElementById("output").innerHTML = `
        Output Power (First Split): ${power1.toFixed(2)} dBm<br>
        Output Power (Second Split): ${power2.toFixed(2)} dBm
    `;
}
