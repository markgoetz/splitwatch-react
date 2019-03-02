import { database } from './firebaseConfig';

export function updateTimer({ isPlaying, startTime, baseTime }) {
  database.ref('timer').update({ isPlaying, startTime, baseTime });
}

export function addSplit(splitTime) {
  database.ref('splits').push(splitTime);
}

export function removeSplits() {
  database.ref('splits').remove();
}
