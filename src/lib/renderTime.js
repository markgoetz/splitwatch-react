export default function renderTime(elapsedTime, decimals = 1) {
    const timeInSeconds = Math.floor(elapsedTime / 1000);

    const hours = Math.floor(timeInSeconds / 3600);
    const minutesRemaining = timeInSeconds - hours * 3600;
    const minutes = Math.floor(minutesRemaining / 60);
    const seconds = minutesRemaining - minutes * 60;

    const hoursMinutesSeconds = `${zeroPrefix(hours)}:${zeroPrefix(minutes)}:${zeroPrefix(seconds)}`;

    if (decimals === 0) {
        return hoursMinutesSeconds;
    }

    const fractionalSeconds = Math.floor(Math.pow(10, decimals) * (elapsedTime / 1000 - timeInSeconds));
    return `${hoursMinutesSeconds}.${zeroPrefix(fractionalSeconds, decimals)}`;
}

export function zeroPrefix(number, length = 2) {
    let output = `${number}`;

    for (let i = 1; i < length; i++) {
        if (number < Math.pow(10, i)) {
        output = `0${output}`;
        }
    }

    return output;
}