export const projectsDetailed = [
  {
    id: 'project-1',
    title: 'WestMech Association',
    description: 'Canada\'s leading robotics education company.',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    image: '/wmlogo.png',
    longDescription: `Western Mechatronics is a student run robotics company with over $110,000 in annual revenue, 100 members, and partnerships with Google, TC Energy, and The Calgary Stampede. We run summer camps, workshops, and competitions for students across Calgary. \n I have been apart of the company since its original creation in 2019, and am responsible for development of the company's software platform. Currently, I am developing a fullstack parent/student portal using Next.js and MongoDB for students to view their progress and upcoming competitions, as well as scheduling and registration for meetings and other events. \n Outside of software, I am also a mentor for the students at WestMech, and have taught over 25+ teams about the fundamentals of robotics and programming. I have also helped run robotics summer camps for three years, and organized open house events at various schools within Alberta, as well as at the Calgary Stampede and with TELUS.`,
    githubUrl: 'https://github.com/westmech',
    liveUrl: 'https://westernmech.ca'
  },
  {
    id: 'project-3',
    title: 'Mecha Mayhem',
    description: 'Canada\'s largest robotics competition.',
    technologies: ['Python', 'Next.js', 'Node.js'],
    image: '/Mecha .png',
    longDescription: `Mecha Mayhem is Canada's largest robotics tournament, with over 3000 attendees and 200+ teams from middle school, high school, and university. I am a member on the software team, primarily dealing with fullstack and competition analysis. I developed an award and team data analytics tool using the RobotEvents API, which displays metrics and stats of competition vitals, including team performances, awards given out, and other miscellaneous information.`,
    githubUrl: 'https://github.com/westmech/Mecha-Mayhem-Frontend-2025',
    liveUrl: 'https://www.mechamayhem.ca/'
  },
  {
    id: 'project-9',
    title: 'Girl Powered Robotics',
    description: 'Redefining robotics education for women in STEM.',
    technologies: ['C++', 'Python', 'Robotics'],
    image: '/gp2.webp',
    longDescription: `Girl Powered Robotics is an initiative aimed at inspiring and empowering young girls to pursue careers in robotics and STEM fields. Through hands-on workshops, mentorship programs, and community outreach, we provide girls with the tools and support they need to succeed in a traditionally male-dominated industry. \n I worked with Google and the University of Calgary to develop an autonomous robotics framework designed at educating girls on the fundamentals of robotics and programming. The framework included custom modified localization algorithms, which saved overall sensor costs by $2240, PID Controllers for longitudinal and lateral control, and path-planning. \n Overall, I have helped run the workshop for 2 years, and have taught over 280+ attendees about robotics and programming. I have also given two speeches as a keynote speaker at the University of Calgary, regarding the importance of mechanical and software engineering, as well as my own experience in robotics to further inspire attendeeds to pursue STEM fields.`,
    githubUrl: 'https://github.com/ZechariahWang/Google-GirlPowered-Library/tree/main',
    liveUrl: 'https://www.youtube.com/watch?v=pkKSXo24Jx0&t=91s'
  },
  {
    id: 'project-2',
    title: 'Eclipse Robotics',
    description: 'Intelligent robotics framework for VEX autonomous systems.',
    technologies: ['Path Planning', 'React', 'MongoDB'],
    image: '/Eclipse.jpg',
    longDescription: `Eclipse Robotics is a collection of tools that I have developed to help high school students in the VEX Robotics Competition. Eclipse consists of a fully autonomous robotics library, AI virtual robot environment simulator, and a fullstack web application for scouting other teams during the competition. Altogether, Eclipse Robotics has earned 37+ awards throughout its three years of development, and has ranked 1st in Alberta, 6th in Canada, and top 0.26% globally in the VRC competition.`,
    githubUrl: 'https://github.com/ZechariahWang/Eclipse-Robot_Framework?tab=readme-ov-file',
    liveUrl: 'https://github.com/ZechariahWang/TeamProfiler'
  },
  {
    id: 'project-6',
    title: 'AI Self-Driving Car Sim',
    description: 'Real-time optimal path planning for an autonomous vehicle.',
    technologies: ['ROS2', 'Docker', 'Foxglove'],
    image: '/WATonomous.png',
    longDescription: `This project simulates autonomous vehicle navigation using a ROS2 publisher-subscriber architecture built on the DDS protocol. It features real-time obstacle avoidance logic by generating a dynamic cost-map from LiDAR and odometry data. The system combines the Pure Pursuit algorithm with A* path planning to enable efficient and adaptive robot movement, allowing the vehicle to detect and navigate around obstacles in real time.`,
    githubUrl: 'https://github.com/ZechariahWang/Watonomous-ASD',
    liveUrl: 'https://www.youtube.com/watch?v=4ZobtJzNd3g'
  },
  {
    id: 'project-4',
    title: 'AI Interview Agent',
    description: 'Personal AI interview voice agent for technical and mixed interviews.',
    technologies: ['Next.js', 'Firebase', 'Vapi', 'Gemini'],
    image: '/InterviewTrainer.png',
    longDescription: `I developed a real-time AI interview platform leverages Vapi Voice Agents to simulate natural conversational interviews. It features a 108-term keyword normalization system that standardizes tech stack inputs, allowing for consistent and accurate voice-driven interactions. The platform includes live voice processing and transcription capabilities to enhance real-time responsiveness. Additionally, it integrates Firebase authentication within a Next.js framework to provide secure user sign-in and access to personalized features such as profiles, recent interviews, and detailed interview history.`,
    githubUrl: 'https://github.com/ZechariahWang/Waterloo-AI-Interview-Trainer',
    liveUrl: 'https://waterloo-interview-trainer-ashen.vercel.app/sign-in'
  },
  {
    id: 'project-5',
    title: 'AI Mental Health Module',
    description: 'AI resource for mental health support.',
    technologies: ['PyTorch', 'NLTK/NLP', 'Customtkinter'],
    image: '/MentalSupport.png',
    longDescription: `AI intelligent chatbot designed to support mental health conversations by understanding and responding to user input with empathy and relevance. Built using PyTorch, it features a 3-layer fully connected neural network trained to classify user intent with high accuracy. Through iterative fine-tuning and optimization, the model achieved a 15% improvement in intent classification. The system utilizes NLTK for natural language preprocessing, including tokenization and lemmatization, and is deployed within a CustomTKinter interface to provide an accessible and responsive user experience tailored for mental wellness support.`,
    githubUrl: 'https://github.com/ZechariahWang/ChatbotApp',
    liveUrl: 'https://github.com/ZechariahWang/ChatbotApp'
  },
  {
    id: 'project-7',
    title: 'Boundary Sim Entertainment System',
    description: 'Virtual boundary detection for robotics entertainment.',
    technologies: ['RobotC', 'Path Planning', 'Localization'],
    image: '/AE.jpg',
    longDescription: `This project is a simple switch game, but with a twist: it builds a dynamic map of boundaries and obstacles to make it harder for the user to flip the switch. The robot simulates intelligent robot behavior using a boundary-aware navigation system written in C for the EV3 platform. The robot uses a custom PID-controlled movement and rotation system to traverse predefined regions while adjusting its behavior based on human proximity and difficulty level. By integrating geometric boundary detection algorithms and real-time motion planning, the robot can respond to switch interactions, avoid obstacles, and adapt its path using randomized maneuvers.`,
    githubUrl: 'https://github.com/ZechariahWang/MTE-100-Final-Project',
    liveUrl: 'https://github.com/ZechariahWang/MTE-100-Final-Project'
  }
]