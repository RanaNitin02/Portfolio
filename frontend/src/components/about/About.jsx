
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/portfolio.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse gap-10 md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Nitin Rana
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-xl md:text-xl font-semibold mb-4 text-blue-500 leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={['Full Stack Developer']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with a good experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1y8hCEsbCUC7OglNKNAUHgYPd1aSMKV8f/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #3B82F6, #3B82F6)',
              boxShadow: '0 0 2px #3B82F6, 0 0 2px #3B82F6, 0 0 40px #3B82F6',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* Normal Image for Small Screens */}
          <div className="block md:hidden">
            <img
              src={profileImage}
              alt="Tarun Kaushik"
              className="w-48 h-48 sm:w-64 sm:h-64 border-4 border-blue-300 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(59, 130, 246, 1)]"
            />
          </div>
        
          {/* Tilt Effect for Medium and Larger Screens */}
          <div className="hidden md:block">
            <Tilt
              className="w-[30rem] h-[30rem] border-4 border-blue-300 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Tarun Kaushik"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(59, 130, 246, 1)]"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
