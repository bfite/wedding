import { memo, useEffect, useState } from "react";
// import bookImg from './assets/doodles/book.png'
import ringImg from './assets/doodles/ring.png'

const EVENT_DATE = "October 12, 2024 16:00:00";
const COUNTDOWN_DATE = new Date(EVENT_DATE).getTime();

interface COUNTDOWNTYPE {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  
  const countdownBase: COUNTDOWNTYPE = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

const Countdown = memo(() => {
    const [countdown, setCountdown] = useState<COUNTDOWNTYPE>(countdownBase);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();

            const delta = COUNTDOWN_DATE - now;

            const days = Math.floor(delta /(1000 * 60 * 60 * 24));
            const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((delta % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });

            if(delta < 0) {
                clearInterval(interval);
                setCountdown(countdownBase);
            }
        }, 1000);
    }, []);


    return (
    <div className="relative text-block doodle-border">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2  w-20 h-12"><img className="border-none" src={ringImg}/></div>

      <div className="text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700">
        <h4 className="mb-1 font-whimsical">Countdown</h4>
      </div>

      <div className="flex justify-center pb-10">
        <NumberCard number={countdown.days} label="Days" />
        <NumberCard number={countdown.hours} label="Hours" />
        <NumberCard number={countdown.minutes} label="Minutes" />
        <NumberCard number={countdown.seconds} label="Seconds" />
      </div>

    </div>
    )
})


interface NumberCardProps {
    number: number;
    label: string;
  }
  
  const NumberCard = memo(({ number, label }: NumberCardProps) => {
    const numberString = number < 100 ? ("0" + number).slice(-2) : String(number);
  
    return (
      <div className="doodle-border rounded-lg bg-[#EFEFEF] py-7 w-24 text-center mx-1 text-gray-700">
        <div className="text-3xl mb-2">{numberString}</div>
        <div className="text-xl">{label}</div>
      </div>
    );
  });
  

export default Countdown;