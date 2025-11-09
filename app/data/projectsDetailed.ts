export const projectsDetailed = [
  {
    id: 'project-1',
    title: 'WestMech Association',
    description: 'Canada\'s leading robotics education company.',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    image: '/WestMechPhoto.jpg',
    longDescription: `Western Mechatronics is a student run robotics company with over $110,000 in annual revenue, 100 members, and partnerships with Google, TC Energy, and The Calgary Stampede. We run summer camps, workshops, and competitions for students across Calgary. \n I have been apart of the company since its original creation in 2019, and am responsible for development of the company's software platform. Currently, I am developing a fullstack parent/student portal using Next.js and MongoDB for students to view their progress and upcoming competitions, as well as scheduling and registration for meetings and other events. \n Outside of software, I am also a mentor for the students at WestMech, and have taught over 25+ teams about the fundamentals of robotics and programming. I have also helped run robotics summer camps for three years, and organized open house events at various schools within Alberta, as well as at the Calgary Stampede and with TELUS.`,
    githubUrl: 'https://github.com/westmech',
    liveUrl: 'https://westernmech.ca'
  },
  {
    id: 'project-3',
    title: 'Mecha Mayhem',
    description: 'Canada\'s largest robotics competition.',
    technologies: ['Python', 'Next.js', 'React'],
    image: '/maxresdefault.jpg',
    longDescription: `Mecha Mayhem is Canada’s largest robotics tournament, attracting over 3,000 attendees and more than 200 teams from middle school, high school, and university programs worldwide. The event serves as a premier qualifier for the VEX Robotics World Championship held annually in Dallas, Texas, where only the best-performing teams secure a coveted spot.\n As a member of the software team, I focus on full-stack development and competition analysis. One of my key contributions has been designing and deploying a comprehensive award and team data analytics tool powered by the RobotEvents API. This platform aggregates and visualizes competition vitals, including team performance trends, awards distribution, and other key metrics, helping organizers and teams make informed, data-driven decisions.`,
    githubUrl: 'https://github.com/westmech/Mecha-Mayhem-Frontend-2025',
    liveUrl: 'https://www.mechamayhem.ca/'
  },
  {
    id: 'project-9',
    title: 'Girl Powered Robotics',
    description: 'Redefining robotics education for women in STEM.',
    technologies: ['C++', 'Python', 'Robotics'],
    image: '/gp3.png',
    longDescription: `Girl Powered Robotics is an initiative aimed at inspiring and empowering young girls to pursue careers in robotics and STEM fields. Through hands-on workshops, mentorship programs, and community outreach, we provide girls with the tools and support they need to succeed in a traditionally male-dominated industry. \n I worked with Google and the University of Calgary to develop an autonomous robotics framework designed at educating girls on the fundamentals of robotics and programming. The framework included custom modified localization algorithms, which saved overall sensor costs by $2240, PID Controllers for longitudinal and lateral control, and path-planning. \n Overall, I have helped run the workshop for 2 years, and have taught over 280+ attendees about robotics and programming. I have also given two speeches as a keynote speaker at the University of Calgary, regarding the importance of mechanical and software engineering, as well as my own experience in robotics to further inspire attendeeds to pursue STEM fields.`,
    githubUrl: 'https://github.com/ZechariahWang/Google-GirlPowered-Library/tree/main',
    liveUrl: 'https://www.youtube.com/watch?v=pkKSXo24Jx0&t=91s'
  },
  {
    id: 'project-8',
    title: 'Concludely AI',
    description: 'AI Journaling app for mental health support.',
    technologies: ['React Native', 'S3', 'LangChain'],
    image: '/iphone2.png',
    longDescription: `Concludely is an AI journaling app I am currently building with three friends that creates specialized prompts along a question tree, designed to support mental health conversations by understanding and responding to user input with deep and insightful questions. It utilizes LangChain for prompt management and orchestration, supporting both Anthropic Claude and OpenAI GPT-4o models with automatic failover in case of API overloads. \n  As of now, it features two main functions: EntryPrep, which extracts the topic and summary from the most recent segment of a user’s journal entry using a structured Pydantic schema, and AgentResponseCall, which generates a node based decision tree, with personalized therapist-style questions to encourage deeper self-reflection. However, I am hoping to add more integration in the future with specialized detection models, for more accurate responses. \n The hope of this project is to provide an accessible and responsive user experience tailored for mental wellness support, and to help users build confidence and improve their mental health in a supportive environment.`,
    githubUrl: 'https://github.com/ZechariahWang/Concludely-AI',
    liveUrl: 'https://github.com/ZechariahWang/Concludely-AI'
  },
  {
    id: 'project-4',
    title: 'Nova AI',
    description: 'Personal AI interview voice agent for interviews.',
    technologies: ['Next.js', 'Firebase', 'Vapi', 'Gemini'],
    image: '/nova.png',
    longDescription: `Nova is an AI assistant I developed specifically for interview preparation. Whether it's for a behavioural, technical, or both, Nova can help you prepare by asking you tailored questions for your specific needs. \n Nova leverages Vapi Voice Agents to simulate natural conversational interviews, and features a 108-term keyword normalization system that standardizes tech stack inputs. Additionally, it incorporates a built in Monaco code editor for leetcode style interview prepation. It uses Firebase authentication within a Next.js framework to store user profiles and access personalized features such as profiles, recent interviews, etc. \n As a student myself, I understand the challenges of interview preparation, and I built Nova to provide a more interactive and effective way to practice. By simulating real interview scenarios, Nova helps users build confidence and improve their skills in a supportive environment. Hopefully, this tool will be able to help other students prepare for their interviews easier.`,
    githubUrl: 'https://github.com/ZechariahWang/Nova-AI',
    liveUrl: 'https://nova-ai-interviews.vercel.app/'
  },
  {
    id: 'project-6',
    title: 'AI Self-Driving Car Sim',
    description: 'Real-time optimal path planning for an autonomous vehicle.',
    technologies: ['ROS2', 'Docker', 'Foxglove'],
    image: '/WATonomous.png',
    longDescription: `This is a ROS2 simulation for autonomous vehicle navigation with publisher-subscriber architecture built on the DDS protocol. It features real-time obstacle avoidance logic by generating a dynamic cost-map from LiDAR and odometry data. The system combines the Pure Pursuit algorithm with A* path planning to enable efficient and adaptive robot movement, allowing the vehicle to detect and navigate around obstacles in real time. \n The project was initially developed for the University of Waterloo's WATonomous onboarding, which is a design team currently working towards creating a fully autonomous car. \n The simulation is built using Docker for containerization, ensuring consistent environments across different systems. It also uses Foxglove for visualization and debugging, providing insights into sensor data and vehicle state during operation.`,
    githubUrl: 'https://github.com/ZechariahWang/Watonomous-ASD',
    liveUrl: 'https://www.youtube.com/watch?v=4ZobtJzNd3g'
  },
  {
    id: 'project-2',
    title: 'Eclipse',
    description: 'Intelligent robotics framework for VEX autonomous systems.',
    technologies: ['ROS2', 'Gazebo', 'Pros'],
    image: '/eclipse.jpg',
    longDescription: `I have competed in competitive robotics for 5+ years. During this time, I experienced firsthand the difficulties in implementing control systems for autonomous robots. Becuase of this, I decided to start the Eclipse Library in a small basement with four of my friends under 210 WestMech. \n Eclipse Robotics is a collection of tools that I have developed to help high school students in the VEX Robotics Competition. Eclipse consists of a fully autonomous robotics library, AI virtual robot environment simulator, and a fullstack web application for scouting other teams during the competition. It has recieved 20,000+ interactions, and continues to serve as a reference for students in Alberta. \n Altogether, Eclipse Robotics has earned 37+ awards throughout its three years of development, and has ranked 1st in Alberta, 6th in Canada, and top 0.26% globally in the VRC competition. It also placed Top 16 in the VEX Robotics World Championship hosted in Dallas, Texas.`,
    githubUrl: 'https://github.com/ZechariahWang/Eclipse-Robot_Framework?tab=readme-ov-file',
    liveUrl: 'https://www.youtube.com/watch?v=QZJNpFsUk18'
  },
  {
    id: 'project-7',
    title: 'Boundary Sim Entertainment System',
    description: 'Virtual boundary detection for robotics entertainment.',
    technologies: ['RobotC', 'Path Planning', 'Localization'],
    image: '/AE.jpg',
    longDescription: `This project was made for the MTE 100 final project at the University of Waterloo. It's inspired off the nothing robot found online, but with a twist: it builds a dynamic map of boundaries and obstacles to make it harder for the user to flip the switch. \n The robot simulates intelligent robot behavior using a boundary-aware navigation system written in C for the EV3 platform. The robot uses a custom PID-controlled movement and rotation system to traverse predefined regions while adjusting its behavior based on human proximity and difficulty level. \n By integrating geometric boundary detection algorithms and real-time motion planning, the robot can respond to switch interactions, avoid obstacles, and adapt its path using randomized maneuvers. It is able to do all of this while continuously staying within the predefined boundaries, without having to have a physical boundary established. \n We also 3D scanned our professors head, and attached it to the robot.`,
    githubUrl: 'https://github.com/ZechariahWang/MTE-100-Final-Project',
    liveUrl: 'https://github.com/ZechariahWang/MTE-100-Final-Project'
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
]