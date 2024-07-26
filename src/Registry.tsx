import flyingplane from './assets/doodles/flyingplanefulltail.png'
import polaroid from './assets/doodles/polaroids.png'
import camera from './assets/doodles/camera.png'

const Registry = () => {
    return (
        <div className="relative text-block doodle-border z-10 flex justify-center items-center">
            <div className="absolute lg:left-1/4 transform lg:pl-0 md:pl-[100px] inset-0 z-0 hidden md:block"><img className="h-full object-cover border-none" src={flyingplane}/></div>

            <div className='flex flex-col items-center'>
                <h1 className="font-whimsical">Registry</h1>
                <p>
                    While your presence at our wedding is more than enough, if you wish to contribute to our honeymoon registry, please click the button below. Thank you!
                </p>
                <div className="relative p-5 pt-10 max-w-[300px] mx-auto">
                    <a href="https://www.honeyfund.com/site/fite-certain-10-12-2024" className="doodle-button bg-[#EFEFEF] doodle-border p-3 no-underline text-black font-bold">Visit here!</a>
                    <div className="absolute bottom-0 right-0 transform translate-x-full -translate-y-1 -rotate-[25deg] w-20 h-16"><img className="border-none" src={camera}/></div>
                    <div className="absolute bottom-0 left-0 transform -translate-x-full translate-y-1/4 -rotate-[345deg] w-20 h-16"><img className="border-none" src={polaroid}/></div>
                </div>
            </div>
        </div>
    )
}

export default Registry;