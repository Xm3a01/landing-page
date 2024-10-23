import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaDownload} from 'react-icons/fa'
import hello from '../assets/images/hello.svg';
import wave from '../assets/images/wave-bg.svg';

const Hero = () => {
    const style = {
        backgroundImage:`url(${wave})`
    }
    return (
        <div className="w-full flex justify-center relative bg-[#f4f6f8]">
            <div className="flex gap-x-20 mt-8 w-2/3">
                <div>
                    <img src={hello} alt={""} />
                </div>
                <div className="flex flex-1">
                    <div>
                        <h1 className="font-thin text-2xl">Hello!</h1>
                        <p className="text-5xl font-bold pt-5 pb-10">I’m Mohamed Amin</p>
                        <p className="text-lg font-semibold">Software engineer / Web Developer / Full stack Developer</p>
                        <div className="flex py-8 gap-x-4 ">
                            <FaTwitter  className="text-lg"/>
                            <FaFacebook  className="text-lg"/>
                            <FaInstagram  className="text-lg"/>
                            <FaLinkedin  className="text-lg"/>
                        </div>
                        <button className="flex bg-amber-300 gap-x-2 px-6 py-3 rounded-e-3xl rounded-s-3xl">
                            Get Full resume
                            <FaDownload />
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-64 absolute transition-transform origin-top -bottom-64" style={style}></div>
        </div>
    );
};

export default Hero;