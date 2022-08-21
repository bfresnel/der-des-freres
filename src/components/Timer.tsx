import { createSignal, onCleanup } from 'solid-js';
import '../styles/Timer.sass';

export default function Timer() {
    const [timer, setTimer] = createSignal("");
    const interval = setInterval(() => {
        let currentDate = new Date();
        setTimer(t => formatTime(currentDate))
    }, 1000);

    onCleanup(() => clearInterval(interval));
    return(
        <>
            <div class="time">
                {timer()}
            </div>
        </>
    );
}

/**
 * Method formatting the given date at the correct format
 * @param currentDate the current date when accessing the page
 * @returns the formatted clock at HH:MM:SS format
 */
function formatTime(currentDate : Date) : string {
    let currentHours: string = currentDate.getHours().toString();
    let currentMinutes: string = currentDate.getMinutes().toString();
    let currentSecondes: string = currentDate.getSeconds().toString();

    if (currentHours.length < 2){
        currentHours = "0" + currentHours;
    }

    if (currentMinutes.length < 2){
        currentMinutes = "0" + currentMinutes;
    }

    if (currentSecondes.length < 2){
        currentSecondes = "0" + currentSecondes;
    }

    return currentHours + ":" + currentMinutes + ":" + currentSecondes;
}
