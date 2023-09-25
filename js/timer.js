export default class Timer
{
    constructor(root)
    {
        root.innerHTML = Timer.getHTML();

        this.el = 
        {
            minutes: root.querySelector(".timer-part-minutes"),
            seconds: root.querySelector(".timer-part-seconds"),
            control: root.querySelector(".timer_btn_contorl"),
            reset: root.querySelector(".reset-button")
        }
    }

    static getHTML()
    {
        return `
            <h3 class="timer-title">Dedication timer</h3>
            <div class="timer-container">
                <span class="timer-part timer-part-minutes">00</span>
                <span class="timer-part">:</span>
                <span class="timer-part timer-part-seconds">00</span>
            </div>           
            <button class="timer_btn timer_btn_contorl start-button ">
                <span class="material-symbols-outlined">pause_circle</span>
            </button>
            <button class="timer_btn timer_btn_contorl reset-button ">
                <span class="material-symbols-outlined">device_reset</span>
            </button>
        `;
    }
}