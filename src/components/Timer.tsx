import { createSignal, onCleanup } from 'solid-js';
import '../styles/Timer.sass';

export default function Timer() {
    const [timer, setTimer] = createSignal("");
    const interval = setInterval(() => {
        let currentDate = new Date();
        setTimer(t => currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds())
    }, 1000);

    onCleanup(() => clearInterval(interval));
    return(
        <>
            <div class="time">
                Heure actuelle : {timer()}
            </div>
        </>
    );
}
