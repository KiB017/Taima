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
        };

        this.interval = null;//
        this.remainSeconds = 1500;//25 minutes but converted in seconds.

        this.el.control.addEventListener("click", () => {
            if(this.interval === null)
            {
                this.start();
            }
            else
            {
                this.stop();
            }
        })

        this.el.reset.addEventListener("click", () => {
            const inputMinutes = prompt("Enter number of minutes: ");

            if(inputMinutes < 60)
            {
                this.stop();
                this.remainSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            }
        })
    }

    //this function is for the clock make it work
    updateInterfaceTime()
    {
        const minutes = Math.floor(this.remainSeconds / 60);
        const seconds = this.remainSeconds % 60;
        
        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    //this function is for the buttons to work
    updateInterfaceControls()
    {
        if(this.interval === null)
        {
            this.el.control.innerHTML = '<span class="material-symbols-outlined">play_circle</span>';
            this.el.control.classList.add("start-button");
            this.el.control.classList.remove("stop-button");
        }
        else
        {
            this.el.control.innerHTML = '<span class="material-symbols-outlined">pause_circle</span>';
            this.el.control.classList.add("stop-button");
            this.el.control.classList.remove("start-button");
        }
    }

    //
    start()
    {
        if (this.remainSeconds === 0) return;
        
        this.interval = setInterval(() => {
            this.remainSeconds--;
            this.updateInterfaceTime();

            if(this.remainSeconds === 0)
            {
                this.stop();
            }
        }, 1000);
        this.updateInterfaceControls();
    }

    stop()
    {
        clearInterval(this.interval);

        this.interval = null;

        this.updateInterfaceControls();
    }

    static getHTML()
    {
        return `
            <h3 class="timer-title">Pomodoro timer</h3>
            <div class="timer-container">
                <span class="timer-part timer-part-minutes">25</span>
                <span class="timer-part">:</span>
                <span class="timer-part timer-part-seconds">00</span>
            </div>           
            <button class="timer_btn timer_btn_contorl start-button ">
                <span class="material-symbols-outlined">play_circle</span>
            </button>
            <button class="timer_btn timer_btn_contorl reset-button ">
                <span class="material-symbols-outlined">device_reset</span>
            </button>
        `;
    }

    static getUncheckBox()
    {
        return '<span class="material-symbols-outlined uncheck-box">check_box_outline_blank</span>';
    }

    static getCheckedBox()
    {
        return '<span class="material-symbols-outlined">check_box</span>';
    }
}