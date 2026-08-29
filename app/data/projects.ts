export type ProjectType = 'robotics' | 'fullstack' | 'ai'

// ============================================================================
// LONG DESCRIPTIONS
// Paste paragraphs directly between the backticks. A blank line is a paragraph
// break. Keep text flush against the left margin (no indentation).
// ============================================================================

const westmechText = `
Western Mechatronics is a student run robotics company with over $110,000 in annual revenue, 100 members, and partnerships with Google, TC Energy, and The Calgary Stampede. We run summer camps, workshops, and competitions for students across Calgary.

I have been apart of the company since its original creation in 2019, and am responsible for development of the company's software platform. Currently, I am developing a fullstack parent/student portal using Next.js and MongoDB for students to view their progress and upcoming competitions, as well as scheduling and registration for meetings and other events.

Outside of software, I am also a mentor for the students at WestMech, and have taught over 25+ teams about the fundamentals of robotics and programming.
`.trim()

const eclipseText = `
Eclipse is an open source robotics library I developed for the VEX Robotics Competition, enabling high school teams to build advanced control systems. Implemented in C++ (PROS) with ROS2 integration.  Overall, the code has been used by 50+ teams in Alberta, and has won numerous awards locally, nationally, and internationally.

The library contains logic for PID Controllers, MTP and MTRP algorithms, Odometry position localization, GPS position localization, Scalar Kalman Filters, Bezier Curve Generators, Pure Pursuit Motion Planning, PID Constant tuners, holonomic MTP and MTRP,  holonomic Pure Pursuit, Linear Motion Profilers (trapezoidal curves), LVGL embedded graphics, autonomous selectors, ROS2, Gazebo and 2D Matplotlib simulators.

The library has been used extensively in regional, national, and international competitions and has earned countless awards. The most notable include winning Canada's largest international robotics tournament sponsored by Encore Canada, Top 16 at the World Championships, and ranking 1st in Alberta. 

Full Award List: 7x World Championship Qualified, 7x Regional Tournament Champions, 6x Regional Tournament Finalists, 9x Design, Skills, Sportsmanship, Judges, Innovate Awards, 2x International Tournament Champion, 1x Provincial Champion, 2x Excellence Award, 1x Think Award, Western Mechatronics 2024 Excellence in Programming Award.
`.trim()

const girlPoweredText = `
Girl Powered Robotics is an initiative aimed at inspiring and empowering young girls to pursue careers in robotics and STEM fields. Through hands-on workshops, mentorship programs, and community outreach, we provide girls with the tools and support they need to succeed in a traditionally male-dominated industry.

I worked with Google and the University of Calgary to develop an autonomous robotics framework designed at educating girls on the fundamentals of robotics and programming. The framework included custom modified localization algorithms, which saved overall sensor costs by $2240, PID Controllers for longitudinal and lateral control, and path-planning.

Overall, I have helped run the workshop for 2 years, and have taught over 280+ attendees about robotics and programming.
`.trim()

const mechaMayhemText = `
Mecha Mayhem is Canada's largest robotics tournament, with over 3000 attendees and 200+ teams from middle school, high school, and university. I am a member on the software team, primarily dealing with fullstack and competition analysis.

I developed an award and team data analytics tool using the RobotEvents API, which displays metrics and stats of competition vitals, including team performances, awards given out, and other miscellaneous information.
`.trim()

const interviewTrainerText = `
I developed a real-time AI interview platform that leverages Vapi Voice Agents to simulate natural conversational interviews. It features a 108-term keyword normalization system that standardizes tech stack inputs, allowing for consistent and accurate voice-driven interactions.

The platform includes live voice processing and transcription capabilities to enhance real-time responsiveness. Additionally, it integrates Firebase authentication within a Next.js framework to provide secure user sign-in and access to personalized features such as profiles, recent interviews, and detailed interview history.
`.trim()

const mentalHealthText = `
AI intelligent chatbot designed to support mental health conversations by understanding and responding to user input with empathy and relevance. Built using PyTorch, it features a 3-layer fully connected neural network trained to classify user intent with high accuracy.

Through iterative fine-tuning and optimization, the model achieved a 15% improvement in intent classification. The system utilizes NLTK for natural language preprocessing, including tokenization and lemmatization, and is deployed within a CustomTKinter interface.
`.trim()

const autonomousVehicleText = `
WATonomous is a student robotics design team at the University of Waterloo. We build autonomous vehicles and the software stacks that run them, including the perception, planning, control, and world-modelling.

EVE is our full-scale autonomous vehicle platform: a modified Kia Soul. The target is Level 4 operation in urban conditions, which includes signalized intersections, pedestrians and cyclists, and construction zones with lane closures.

This project simulates autonomous vehicle navigation using a ROS2 publisher-subscriber architecture built on the DDS protocol. The system generates a dynamic cost-map from LiDAR and odometry data in real time, enabling the vehicle to detect and reason about obstacles as the environment changes. Navigation combines the Pure Pursuit algorithm for smooth trajectory following with A* path planning for optimal route generation. The cost-map is continuously updated from sensor input, ensuring the planner always works from a current representation of the environment.

I worked on the action team, specializing primarily in controls and path-planning. The entire stack is time-synchronized and fused into a common frame before it reaches perception, so downstream nodes work from one consistent view of the scene rather than reconciling per-sensor timestamps themselves. Everything runs on the same ROS2 monorepo stack we develop in simulation.
`.trim()

const nothingRobotText = `
This project is a simple switch game, but with a twist: it builds a dynamic map of boundaries and obstacles to make it harder for the user to flip the switch.

The robot simulates intelligent robot behavior using a boundary-aware navigation system written in C for the EV3 platform. The robot uses a custom PID-controlled movement and rotation system to traverse predefined regions while adjusting its behavior based on human proximity and difficulty level.
`.trim()

const concludelyText = `
Concludely AI is an AI-powered journaling application that helps users reflect on their thoughts and emotions. Built with React Native and integrated with AWS S3 for storage, it leverages LangChain to provide intelligent insights and summaries of journal entries.
`.trim()

// Shared by argus and sac-mtp.
const argusText = `
I developed the first version of an unmanned ground vehicle, “Argus,” that was acquired by Exia Labs (a16z). The platform was built on a Suzuki King Quad 450 base, and fuses a Velodyne VLP-32C LiDAR and camera to map its surroundings and navigate to user-defined waypoints. Steering, braking, and throttle are all handled by custom-printed and machined parts purpose-built for the vehicle.

The software stack utilizes ROS2, Gazebo, and Foxglove on a Nvidia Jetson running Ubuntu 22.04 with a full sensor package (3D LiDAR, depth camera, IMU, radio, encoders) incorporated with Anduril Lattice and TAK. 

For autonomous path-planning, the ATV utilizes a custom waypoint algorithm called CHAR, paired with a local A* dynamic algorithm for path generation. From there, the ATV uses Pure Pursuit to navigate to target coordinates (lat, long) given any C2 software.

I was invited to test the vehicle with the 2nd Cavalry Regiment On Rose Barracks during March 2026 in Germany, and raised $25,000 USD within two weeks. During this time, I lived between Nuremberg and Munich for 1 month while working with Rose Barracks and the 2nd Cavalry Regiment in Vilseck to showcase the vehicle.

Argus 2.0 is now built on a Polaris and available for commercial purchase in the U.S and Germany. I worked on the initial software for 2.0, before leaving Exia in April after winter 2026. 

`.trim()

// ============================================================================
// CATEGORY SCREEN
// ============================================================================

export interface ProjectCategory {
  key: ProjectType
  label: string
  description: string
  accent: string
  background: string
}

// Background shown behind the category-selection (overview) screen.
export const projectsBackground = '/projects/gpagain.JPG'

export const projectCategories: ProjectCategory[] = [
  {
    key: 'robotics',
    label: 'Robotics',
    description: 'Controls and hardware.',
    accent: '#38BDF8',
    background: '/projects/robot.png'
  },
  {
    key: 'ai',
    label: 'AI / ML',
    description: 'Simulations and models.',
    accent: '#C084FC',
    background: '/projects/triballs.jpg'
  },
  {
    key: 'fullstack',
    label: 'Fullstack',
    description: 'Platforms and organizations.',
    accent: '#34D399',
    background: '/projects/trophies.JPG'
  },
]

// ============================================================================
// PROJECT CARDS (grouped by type)
// ============================================================================

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  type: ProjectType
}

export const projects: Project[] = [
  // --- Robotics ---
  {
    id: 'argus',
    title: 'Argus UGV (a16z)',
    description: 'Autonomous unmanned ground vehicle acquired by Exia Labs (a16z).',
    technologies: ['ROS2', 'Gazebo', 'Nvidia Jetson', 'Velodyne LiDAR', 'Anduril Lattice', 'TAK'],
    image: '/projects/atv.png',
    type: 'robotics'
  },
  {
    id: 'eclipse',
    title: 'Eclipse Robotics',
    description: 'Intelligent robotics framework for VEX autonomous systems.',
    technologies: ['ROS2', 'Gazebo', 'Pros'],
    image: '/projects/ecl.jpg',
    type: 'robotics'
  },
  {
    id: 'ur20',
    title: 'UR20 Robot Middleware Library ',
    description: 'Controller for UR20 robot arm (University of Alberta)',
    technologies: ['ROS2', 'Gazebo', 'Docker'],
    image: '/projects/ur20.jpg',
    type: 'robotics'
  },
  // --- AI / ML ---
  {
    id: 'self-driving-car',
    title: 'AI Self-Driving Car',
    description: 'Real-time optimal path planning for an autonomous vehicle.',
    technologies: ['ROS2', 'Docker', 'Foxglove'],
    image: '/projects/aicaryes.png',
    type: 'ai'
  },
  {
    id: 'sac-mtp',
    title: 'SAC MTP Algorithm',
    description: 'SAC feedback algorithm controller',
    technologies: ['PyBullet', 'StableBaseline3', 'Gymnasium'],
    image: '/projects/sac1.png',
    type: 'ai'
  },
  // --- Fullstack ---
  {
    id: 'westmech',
    title: 'WestMech Association',
    description: 'Canada\'s leading robotics education company.',
    technologies: ['ROS2', 'Next.js', 'MongoDB'],
    image: '/projects/image_2.avif',
    type: 'fullstack'
  },
  {
    id: 'mecha-mayhem',
    title: 'Mecha Mayhem',
    description: 'Canada\'s largest robotics competition.',
    technologies: ['Python', 'Next.js', 'React'],
    image: '/projects/maxresdefault.jpg',
    type: 'fullstack'
  },
  // --- Hidden (uncomment to show) ---
  // {
  //   id: 'concludely',
  //   title: 'Concludely AI',
  //   description: 'AI Powered Journaling App.',
  //   technologies: ['React Native', 'AWS S3', 'LangChain'],
  //   image: '/projects/conc.png',
  //   type: 'fullstack'
  // },
  // {
  //   id: 'interview-trainer',
  //   title: 'Nova AI',
  //   description: 'Personal AI interview voice agent for interviews.',
  //   technologies: ['Next.js', 'Firebase', 'Vapi', 'Gemini'],
  //   image: '/projects/nova.png',
  //   type: 'fullstack'
  // },
  // {
  //   id: 'nothing-robot',
  //   title: 'Boundary Sim Entertainment System',
  //   description: 'Virtual boundary detection for robotics entertainment.',
  //   technologies: ['RobotC', 'SolidWorks', 'C++'],
  //   image: '/projects/AE.jpg'
  // },
  // {
  //   id: 'mental-health-chatbot',
  //   title: 'AI Mental Health Module',
  //   description: 'AI resource for mental health support.',
  //   technologies: ['PyTorch', 'NLTK/NLP', 'Customtkinter'],
  //   image: '/projects/MentalSupport.png'
  // },
]

// ============================================================================
// PROJECT DETAIL PAGES
// ============================================================================

export interface ProjectDetail {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  longDescription: string
  githubUrl: string
  liveUrl: string
}

export const projectDetails: ProjectDetail[] = [
  {
    id: 'westmech',
    title: 'Western Mechatronics',
    description: 'Canada\'s leading robotics education company',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    image: '/projects/westmechpic.png',
    longDescription: westmechText,
    githubUrl: 'https://github.com/westmech',
    liveUrl: 'https://westernmech.ca'
  },
  {
    id: 'eclipse',
    title: 'Eclipse Robotics',
    description: 'A full set of essentials tools required for the VEX Robotics Competition.',
    technologies: ['C++', 'Matplotlib', 'Robotics'],
    image: '/projects/ecl.jpg',
    longDescription: eclipseText,
    githubUrl: 'https://github.com/ZechariahWang/Eclipse-Robot_Framework?tab=readme-ov-file',
    liveUrl: 'https://github.com/ZechariahWang/TeamProfiler'
  },
  {
    id: 'girl-powered',
    title: 'Girl Powered Robotics',
    description: 'Redefining robotics education for women in STEM.',
    technologies: ['ROS2', 'Gazebo', 'Pros'],
    image: '/projects/gp_robot.png',
    longDescription: girlPoweredText,
    githubUrl: 'https://github.com/ZechariahWang/Google-GirlPowered-Library/tree/main',
    liveUrl: 'https://www.youtube.com/watch?v=pkKSXo24Jx0&t=91s'
  },
  {
    id: 'mecha-mayhem',
    title: 'Mecha Mayhem',
    description: 'Canada\'s largest robotics tournament.',
    technologies: ['React', 'Next.js', 'Tailwind'],
    image: '/projects/original.jpg',
    longDescription: mechaMayhemText,
    githubUrl: 'https://github.com/westmech/Mecha-Mayhem-Frontend-2025',
    liveUrl: 'https://www.mechamayhem.ca/'
  },
  {
    id: 'interview-trainer',
    title: 'AI Interview Trainer',
    description: 'Personalized AI interview assistant for both technical and behavioral interviews.',
    technologies: ['Next.js', 'Firebase', 'Vapi', 'Gemini'],
    image: '/projects/InterviewTrainer.png',
    longDescription: interviewTrainerText,
    githubUrl: 'https://github.com/ZechariahWang/Waterloo-AI-Interview-Trainer',
    liveUrl: 'https://waterloo-interview-trainer-ashen.vercel.app/sign-in'
  },
  {
    id: 'mental-health-chatbot',
    title: 'AI Mental Health Chatbot',
    description: 'AI chatbot for mental health support.',
    technologies: ['PyTorch', 'NLTK/NLP', 'Customtkinter'],
    image: '/projects/MentalSupport.png',
    longDescription: mentalHealthText,
    githubUrl: 'https://github.com/ZechariahWang/ChatbotApp',
    liveUrl: 'https://github.com/ZechariahWang/ChatbotApp'
  },
  {
    id: 'self-driving-car',
    title: 'WATonomous Vehicle Simulator',
    description: 'Real-time optimal path planning for an autonomous vehicle.',
    technologies: ['ROS2', 'Docker', 'Foxglove'],
    image: '/projects/WATonomous.png',
    longDescription: autonomousVehicleText,
    githubUrl: 'https://github.com/ZechariahWang/Watonomous-ASD',
    liveUrl: 'https://www.youtube.com/watch?v=4ZobtJzNd3g'
  },
  {
    id: 'nothing-robot',
    title: 'The Nothing Robot',
    description: 'Robot entertainment switch that does nothing.',
    technologies: ['RobotC', 'Path Planning', 'Localization'],
    image: '/projects/AE.jpg',
    longDescription: nothingRobotText,
    githubUrl: 'https://github.com/ZechariahWang/MTE-100-Final-Project',
    liveUrl: 'https://github.com/ZechariahWang/MTE-100-Final-Project'
  },
  {
    id: 'concludely',
    title: 'Concludely AI',
    description: 'AI Powered Journaling App.',
    technologies: ['React Native', 'AWS S3', 'LangChain'],
    image: '/projects/conc.png',
    longDescription: concludelyText,
    githubUrl: '',
    liveUrl: ''
  },
  {
    id: 'argus',
    title: 'Argus (Exia Labs, a16z)',
    description: 'Autonomous unmanned ground vehicle acquired by Exia Labs (a16z).',
    technologies: ['ROS2', 'Gazebo', 'Nvidia Jetson', 'Velodyne LiDAR', 'Anduril Lattice', 'TAK'],
    image: '/projects/atv.png',
    longDescription: argusText,
    githubUrl: '',
    liveUrl: ''
  },
  {
    id: 'sac-mtp',
    title: 'Argus (Exia Labs, a16z)',
    description: 'Autonomous unmanned ground vehicle acquired by Exia Labs (a16z).',
    technologies: ['ROS2', 'Gazebo', 'Nvidia Jetson', 'Velodyne LiDAR', 'Anduril Lattice', 'TAK'],
    image: '/projects/sac2.png',
    longDescription: argusText,
    githubUrl: '',
    liveUrl: ''
  }
]
