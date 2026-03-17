import React from 'react'
import { notFound } from 'next/navigation'
import ProjectDetail from './ProjectDetail'

const projects = [
  {
    id: 'project-1',
    title: 'Western Mechatronics',
    description: 'Canada\'s leading robotics education company',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    image: '/WestMechPhoto.jpg',
    longDescription: `Western Mechatronics is a student run robotics company with over $110,000 in annual revenue, 100 members, and partnerships with Google, TC Energy, and The Calgary Stampede. We run summer camps, workshops, and competitions for students across Calgary.\n\nI have been apart of the company since its original creation in 2019, and am responsible for development of the company's software platform. Currently, I am developing a fullstack parent/student portal using Next.js and MongoDB for students to view their progress and upcoming competitions, as well as scheduling and registration for meetings and other events.\n\nOutside of software, I am also a mentor for the students at WestMech, and have taught over 25+ teams about the fundamentals of robotics and programming.`,
    githubUrl: 'https://github.com/westmech',
    liveUrl: 'https://westernmech.ca'
  },
  {
    id: 'project-2',
    title: 'Eclipse Robotics',
    description: 'A full set of essentials tools required for the VEX Robotics Competition.',
    technologies: ['C++', 'Matplotlib', 'Robotics'],
    image: '/eclipse.jpg',
    longDescription: `Eclipse Robotics is a collection of tools that I have developed to help high school students in the VEX Robotics Competition. Eclipse consists of a fully autonomous robotics library, AI virtual robot environment simulator, and a fullstack web application for scouting other teams during the competition.\n\nAltogether, Eclipse Robotics has earned 37+ awards throughout its three years of development, and has ranked 1st in Alberta, 6th in Canada, and top 0.26% globally in the VRC competition.`,
    githubUrl: 'https://github.com/ZechariahWang/Eclipse-Robot_Framework?tab=readme-ov-file',
    liveUrl: 'https://github.com/ZechariahWang/TeamProfiler'
  },
  {
    id: 'project-9',
    title: 'Girl Powered Robotics',
    description: 'Redefining robotics education for women in STEM.',
    technologies: ['ROS2', 'Gazebo', 'Pros'],
    image: '/GP_TWO.JPG',
    longDescription: `Girl Powered Robotics is an initiative aimed at inspiring and empowering young girls to pursue careers in robotics and STEM fields. Through hands-on workshops, mentorship programs, and community outreach, we provide girls with the tools and support they need to succeed in a traditionally male-dominated industry.\n\nI worked with Google and the University of Calgary to develop an autonomous robotics framework designed at educating girls on the fundamentals of robotics and programming. The framework included custom modified localization algorithms, which saved overall sensor costs by $2240, PID Controllers for longitudinal and lateral control, and path-planning.\n\nOverall, I have helped run the workshop for 2 years, and have taught over 280+ attendees about robotics and programming.`,
    githubUrl: 'https://github.com/ZechariahWang/Google-GirlPowered-Library/tree/main',
    liveUrl: 'https://www.youtube.com/watch?v=pkKSXo24Jx0&t=91s'
  },
  {
    id: 'project-3',
    title: 'Mecha Mayhem',
    description: 'Canada\'s largest robotics tournament.',
    technologies: ['React', 'Next.js', 'Tailwind'],
    image: '/Mecha .png',
    longDescription: `Mecha Mayhem is Canada's largest robotics tournament, with over 3000 attendees and 200+ teams from middle school, high school, and university. I am a member on the software team, primarily dealing with fullstack and competition analysis.\n\nI developed an award and team data analytics tool using the RobotEvents API, which displays metrics and stats of competition vitals, including team performances, awards given out, and other miscellaneous information.`,
    githubUrl: 'https://github.com/westmech/Mecha-Mayhem-Frontend-2025',
    liveUrl: 'https://www.mechamayhem.ca/'
  },
  {
    id: 'project-4',
    title: 'AI Interview Trainer',
    description: 'Personalized AI interview assistant for both technical and behavioral interviews.',
    technologies: ['Next.js', 'Firebase', 'Vapi', 'Gemini'],
    image: '/InterviewTrainer.png',
    longDescription: `I developed a real-time AI interview platform that leverages Vapi Voice Agents to simulate natural conversational interviews. It features a 108-term keyword normalization system that standardizes tech stack inputs, allowing for consistent and accurate voice-driven interactions.\n\nThe platform includes live voice processing and transcription capabilities to enhance real-time responsiveness. Additionally, it integrates Firebase authentication within a Next.js framework to provide secure user sign-in and access to personalized features such as profiles, recent interviews, and detailed interview history.`,
    githubUrl: 'https://github.com/ZechariahWang/Waterloo-AI-Interview-Trainer',
    liveUrl: 'https://waterloo-interview-trainer-ashen.vercel.app/sign-in'
  },
  {
    id: 'project-5',
    title: 'AI Mental Health Chatbot',
    description: 'AI chatbot for mental health support.',
    technologies: ['PyTorch', 'NLTK/NLP', 'Customtkinter'],
    image: '/MentalSupport.png',
    longDescription: `AI intelligent chatbot designed to support mental health conversations by understanding and responding to user input with empathy and relevance. Built using PyTorch, it features a 3-layer fully connected neural network trained to classify user intent with high accuracy.\n\nThrough iterative fine-tuning and optimization, the model achieved a 15% improvement in intent classification. The system utilizes NLTK for natural language preprocessing, including tokenization and lemmatization, and is deployed within a CustomTKinter interface.`,
    githubUrl: 'https://github.com/ZechariahWang/ChatbotApp',
    liveUrl: 'https://github.com/ZechariahWang/ChatbotApp'
  },
  {
    id: 'project-6',
    title: 'AI Autonomous Vehicle Simulator',
    description: 'Real-time optimal path planning for an autonomous vehicle.',
    technologies: ['ROS2', 'Docker', 'Foxglove'],
    image: '/WATonomous.png',
    longDescription: `This project simulates autonomous vehicle navigation using a ROS2 publisher-subscriber architecture built on the DDS protocol. It features real-time obstacle avoidance logic by generating a dynamic cost-map from LiDAR and odometry data.\n\nThe system combines the Pure Pursuit algorithm with A* path planning to enable efficient and adaptive robot movement, allowing the vehicle to detect and navigate around obstacles in real time.`,
    githubUrl: 'https://github.com/ZechariahWang/Watonomous-ASD',
    liveUrl: 'https://www.youtube.com/watch?v=4ZobtJzNd3g'
  },
  {
    id: 'project-7',
    title: 'The Nothing Robot',
    description: 'Robot entertainment switch that does nothing.',
    technologies: ['RobotC', 'Path Planning', 'Localization'],
    image: '/AE.jpg',
    longDescription: `This project is a simple switch game, but with a twist: it builds a dynamic map of boundaries and obstacles to make it harder for the user to flip the switch.\n\nThe robot simulates intelligent robot behavior using a boundary-aware navigation system written in C for the EV3 platform. The robot uses a custom PID-controlled movement and rotation system to traverse predefined regions while adjusting its behavior based on human proximity and difficulty level.`,
    githubUrl: 'https://github.com/ZechariahWang/MTE-100-Final-Project',
    liveUrl: 'https://github.com/ZechariahWang/MTE-100-Final-Project'
  },
  {
    id: 'project-8',
    title: 'Concludely AI',
    description: 'AI Powered Journaling App.',
    technologies: ['React Native', 'AWS S3', 'LangChain'],
    image: '/conc.png',
    longDescription: `Concludely AI is an AI-powered journaling application that helps users reflect on their thoughts and emotions. Built with React Native and integrated with AWS S3 for storage, it leverages LangChain to provide intelligent insights and summaries of journal entries.`,
    githubUrl: '',
    liveUrl: ''
  },
  {
    id: 'project-11',
    title: 'Argus (Exia Labs, a16z)',
    description: 'AI autonomous ATV for military medical evacuation.',
    technologies: ['ROS2', 'Gazebo', 'Nvidia Jetson'],
    image: '/atv.png',
    longDescription: `Argus is an autonomous ATV platform (acquired by Exia Labs). The vehicle is designed for military medical evacuation scenarios, capable of navigating challenging terrain to reach and transport injured personnel.\n\nThe system uses ROS2 for its robotics middleware, Gazebo for simulation and testing, and runs on Nvidia Jetson hardware for edge AI processing and real-time decision making.`,
    githubUrl: '',
    liveUrl: ''
  }
]

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const resolvedParams = React.use(params)
  const project = projects.find(p => p.id === resolvedParams.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
