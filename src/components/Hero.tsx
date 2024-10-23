import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaDownload} from 'react-icons/fa'
import hello from '../assets/images/hello.svg';
import wave from '../assets/images/wave.svg';

const Hero = () => {
    return (
        <div className="w-full flex lg:justify-center relative bg-[#f4f6f8]">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 mt-8 lg:w-2/3 px-5">
                <div>
                    <img src={hello} alt={""} className="lg:w-auto w-80" />
                </div>
                <div className="flex flex-1">
                    <div>
                        <h1 className="font-thin lg:text-2xl text-lg">Hello!</h1>
                        <p className="lg:text-5xl text-2xl font-bold lg:pt-5 pt-2 lg:pb-10 pb-4">I’m Mohamed Amin</p>
                        <p className="lg:text-lg text-sm font-semibold w-60 lg:w-auto">Software engineer / Web Developer
                            / Full stack Developer
                        </p>
                        <div className="flex py-8 gap-x-4 ">
                            <FaTwitter  className="lg:text-lg text-md"/>
                            <FaFacebook  className="lg:text-lg text-md"/>
                            <FaInstagram  className="lg:text-lg text-md"/>
                            <FaLinkedin  className="lg:text-lg text-md"/>
                        </div>
                        <button className="flex bg-amber-300 gap-x-2 px-6 py-3 rounded-e-3xl rounded-s-3xl">
                            Get Full resume
                            <FaDownload />
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-64 absolute transition-transform origin-top -bottom-64">
                <img src={wave} alt={''} className="w-full h-full inset-0"/>
            </div>
        </div>
    );
};

export default Hero;