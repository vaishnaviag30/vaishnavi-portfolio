import { Box, Button, Center, Flex, Heading, HStack, Link, Tooltip, Image, Text } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css'
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useEffect } from 'react';
import { LuCloudDownload } from 'react-icons/lu'
import { FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import { projects, skills } from '../Utils/data';

import ProjectCard from '../Components/Card';
import Svg1 from '../Components/Svg1';
import Svg2 from '../Components/Svg2';
import Svg3 from '../Components/Svg3';
import Resume from '../Resume/Frontend_Resume.pdf'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 2200 },
        items: 5
    },
    largeDesktop: {
        breakpoint: { max: 2200, min: 1920 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1920, min: 1075 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1075, min: 780 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 780, min: 0 },
        items: 1
    }
};

const Home = () => {

    const form = useRef();
    const toast = useToast()

    useEffect(() => {
        // * it's from Aos library to to use scroll designing
        Aos.init()
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_SERVICE_TEMPLATE, form.current, import.meta.env.VITE_SERVICE_SECRET).then((result) => {

            toast({
                position: 'top-right',
                title: 'Email Sent ✔',
                description: `Thank You ${form.current.from_name.value.split(" ")[0]} for the message!`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            })

            form.current.reset();
        }, (error) => {
            console.log(error.text);
            toast({
                position: 'top-right',
                title: 'Email Not sent.',
                description: "There is some error",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
        });;

    };

    return (
        <Box >
            <Box id='home'>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'row']} m="auto" justifyContent="space-around" alignItems="center" h="100%">
                    <Box data-aos="fade-down">
                        <Heading>Hey!  I'm</Heading>
                        <Box className='content'>
                            <Heading fontSize="3.3em"   data-text="Vaishnavi Agrahari"  > <span className='themeText'>Vaishnavi Agrahari</span></Heading>
                        </Box>
                        <Text>Am a 3rd Year B.Tech Computer Science Student, passionate about building Web applications.</Text>
                        <HStack className='hireMe' onClick={() => { window.open("https://drive.google.com/file/d/1-wJvEsZiwiEcKZMwemybovTMvlWm55Ux/view?usp=sharing", '_blank') }}>
                            <a href={Resume} download="Vaishnavi-Resume">
                                <Button>Resume <LuCloudDownload /></Button>
                            </a>
                        </HStack>
                    </Box>
                    <Box data-aos="fade-down">
                        <Svg1 />
                    </Box>
                </Flex>
            </Box>

            {/* About me */}

            <Box id="aboutMe">
                <Heading>About <span className='themeText'>me</span></Heading>
                <Flex flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']} alignItems="center" h="100%">
                    <div data-aos="fade-right">
                        <Svg3 />
                    </div>

                    <Flex data-aos="fade-left">
                        <Flex w="100%" gap="10%" justifyContent="center">
                            <Image
                                borderRadius='full'
                                padding='-2'
                                boxSize='300px'
                                src='MY_PHOTO.jpeg'
                                alt='Vaishnavi Avatar' />
                            <Svg3 />
                        </Flex>

                        <Box>
                            <Text>An ambitious and self-motivated B.Tech (3rd Year) <b>Computer Science</b>  student with strong foundations in <b> Web development </b> and <b> Problem-Solving. </b> Experienced in building responsive and user-friendly web applications with a focus on usability, accessibility, and performance. A quick learner with the ability to grasp new technologies efficiently and work independently with minimal supervision. Demonstrated analytical skills through solving <b> 250+ Data Structures and Algorithms (DSA) problems</b>, showcasing strong logical thinking and consistency in coding.</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            {/* Educational history */}
            <Box className="education-timeline">
                <Heading>Education
                    <span className="themeText"> History</span>
                </Heading>
                <Box className='timeline'>
                    <ul>
                        <li>
                            <Box className='content'>
                                <Heading size="lg">Bachelor of Technology</Heading>
                                <Text>
                                    <Link href='https://www.kiet.edu/' target='_blank'>KIET Deemed To Be University</Link> | Ghaziabad</Text>
                            </Box>
                            <Box className='time'>
                                <Text>2026 - Present</Text>
                            </Box>
                        </li>
                        <li>
                            <Box className='content'>
                                <Heading size="lg">Senior Secondary Education</Heading>
                                <Text>
                                    Saraswati Vidya Mandir | Sultanpur</Text>
                            </Box>
                            <Box className='time'>
                                <Text>2021 - 2022</Text>
                            </Box>
                        </li>
                        <li>
                            <Box className='content'>
                                <Heading size="lg">Secondary Education</Heading>
                                <Text>
                                    Saraswati Vidya Mandir | Sultanpur</Text>
                            </Box>
                            <Box className='time'>
                                <Text>2019 - 2020</Text>
                            </Box>
                        </li>
                    </ul>
                </Box>
            </Box>

            {/* Technical Skills section */}
            <Box id="skills">
                <Heading>
                    Technical
                    <span className="themeText"> Skills</span>
                </Heading>
                <Flex className='skills'>
                    <Flex>
                        <Heading size="lg">Front<span className='themeText'>end</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "frontend").map(skill => <Box
                                    key={skill.id}
                                    className="skill"
                                    data-aos="zoom-in-up">
                                    <Box>
                                        <Image src={skill.icon} alt={`${skill.title} icon`} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                    <Flex>
                        <Heading size="lg">Back<span className='themeText'>end</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "backend").map(skill => <Box
                                    key={skill.id}
                                    className="skill"
                                    data-aos="zoom-in-down">
                                    <Box>
                                        <Image src={skill.icon} alt={`${skill.title} icon`} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                    <Flex>
                        <Heading size="lg">Platforms <span className='themeText'>& Tools</span></Heading>
                        <Box>
                            {
                                skills.filter((el) => el.tag === "platform").map(skill => <Box
                                    key={skill.id} className="skill"
                                    data-aos="zoom-in">
                                    <Box>
                                        <Image src={skill.icon} alt={`${skill.title} icon`} />
                                    </Box>
                                    <Text>{skill.title}</Text>
                                </Box>)
                            }
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            {/* show projects */}
            <Box id="projects">
                <Heading textAlign="center">Project <span className='themeText'>Experience</span></Heading>
                <Carousel
                    containerClass="carousel-container"
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    keyBoardControl={true}
                    responsive={responsive}
                    infinite={false}>
                    {
                        projects.map((project) => <ProjectCard key={project.id} {...project} />)
                    }
                </Carousel>
            </Box>


            {/* Github Statistics */}
            <Box id="githubStats">
                <Heading textAlign="center">Github <span className='themeText'>stats</span></Heading>
                {/* <Center className='github-stats'>
                    <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=Atanu8250&layout=compact&hide_border=true&theme=radical" alt="Atanu's most used languages" />
                    <Image src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=atanu8250&theme=radical" alt="Atanu's github Stats" />
                </Center>

                <Center className='github-stats'>
                    <Image src="https://github-readme-stats.vercel.app/api?username=Atanu8250&show_icons=true&locale=en&layout=compact&hide_border=true&theme=radical" alt="Atanu's github stats" />
                    <Image src="https://github-readme-streak-stats.herokuapp.com/?user=Atanu8250&layout=compact&hide_border=true&theme=radical" alt="Atanu's current Streaks" />
                </Center> */}

                <Center className='github-calendar'>
                    <GitHubCalendar username="vaishnaviag30" color="#4a8af4" children={<ReactTooltip />} />
                </Center>
            </Box>


            {/* Contact me */}
            <Box id='contactMe'>
                <Heading textAlign="center">Contact <span className='themeText'>Me</span></Heading>
                <Flex flexDirection={["column", "column", "column", "row"]} alignItems="center">

                    <Box>
                        <Svg2 />
                    </Box>


                    <Box className='form-section'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='inputBox'>
                                <input type="text" name="from_name" required />
                                <span>Full Name</span>
                            </div>
                            <div className='inputBox'>
                                <input type="email" name="from_mail" required />
                                <span>Email</span>
                            </div>
                            <div>
                                <textarea placeholder='Message 📧' name="message" />
                            </div>
                            <input type="submit" value="Send Message" />
                        </form>
                        <Flex className='contact-info'>
                            <HStack>
                                <SiGmail color="#e34133" />
                                <Text>agraharivaishnavi240@gmail.com</Text>
                            </HStack>
                            <HStack>
                                <FaPhoneAlt color="#00a14f" />
                                <Text>+91 7394043603</Text>
                            </HStack>
                        </Flex>
                        <Flex gap={["10px", "20px", "20px", "40px"]}>
                            <Link href='https://wa.me/7394043603' target="_blank">
                                <Tooltip label='+91 7394043603'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://brandlogos.net/wp-content/uploads/2018/10/whatsapp-logo.png" alt='Whatsapp brand logo' />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href='https://www.linkedin.com/in/vaishnavi-agrahari-495b5a2a7/' target="_blank">
                                <Tooltip label='Vaishnavi Agrahari'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt='Linkedin brand logo' />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href="https://github.com/vaishnaviag30" target="_blank">
                                <Tooltip label='vaishnaviag30'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='Github brand logo' />
                                        </Box>
                                    </Box>
                                </Tooltip>
                            </Link>

                            <Link href="mailto:agraharivaishnavi240@gmail.com" target="_blank">
                                <Tooltip label='agraharivaishnavi240@gmail.com'>
                                    <Box className='social-icons'>
                                        <Box>
                                            <Image w="100%" src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" alt='Gmail brand logo' />
                                        </Box>
                                    </Box >
                                </Tooltip>
                            </Link>
                        </Flex >
                    </Box >
                </Flex >
            </Box >

            {/* footer */}
            <Flex id='footer'>
                <Text>© Portfolio by Vaishnavi. | All rights reserved.</Text>
                <Text>Made with 💖 by Vaishnavi</Text>
            </Flex>
        </Box >
    )
}

export default Home