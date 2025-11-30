export interface Project {
  id: number;
  title: string;
  description: string;
  challenge: string;
  impact: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
  fullDescription?: string;
  results?: string[];
  learnings?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Pneumonia Detection CNN",
    description: "Deep learning model using Convolutional Neural Networks to detect pneumonia from chest X-ray images with 95%+ accuracy.",
    challenge: "Handling class imbalance and ensuring model generalization across diverse patient demographics.",
    impact: "Achieved 95.2% accuracy; potential to assist radiologists in preliminary screening.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    image: "https://github.com/surensagh/portfolio-images/blob/main/pneumonia-detection.png?raw=true",
    link: "#",
    github: "#",
    fullDescription: "This project involved developing a deep learning model to automatically detect pneumonia from chest X-ray images. The model uses a Convolutional Neural Network architecture trained on a large dataset of labeled X-ray images. The system achieved 95.2% accuracy on the test set, demonstrating strong potential for assisting radiologists in preliminary screening and diagnosis.",
    results: [
      "95.2% accuracy on test dataset",
      "Precision: 94.8%, Recall: 95.6%",
      "Successfully handles diverse patient demographics",
      "Real-time inference on standard hardware"
    ],
    learnings: [
      "Techniques for handling class imbalance in medical datasets",
      "Transfer learning and fine-tuning pre-trained models",
      "Data augmentation strategies for medical imaging",
      "Model interpretability and explainability in healthcare"
    ]
  },
  {
    id: 2,
    title: "Real-time Sign Language Recognition",
    description: "Computer vision system using MediaPipe and deep learning to recognize and translate American Sign Language (ASL) in real-time.",
    challenge: "Capturing hand pose variations and ensuring real-time performance on standard hardware.",
    impact: "Enables real-time ASL translation; potential accessibility tool for deaf communities.",
    technologies: ["Python", "MediaPipe", "TensorFlow", "OpenCV", "Flask"],
    image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/6A48/production/_108380272_signs.png.webp",
    link: "#",
    github: "#",
    fullDescription: "This project creates a real-time American Sign Language recognition system using computer vision and deep learning. The system uses MediaPipe to extract hand pose landmarks from video input, which are then fed into a neural network for classification. The application runs in real-time on standard hardware and can recognize and translate ASL gestures.",
    results: [
      "Real-time recognition at 30+ FPS",
      "92% accuracy on ASL alphabet recognition",
      "Support for 26+ common ASL signs",
      "Works on CPU without GPU acceleration"
    ],
    learnings: [
      "Hand pose estimation and landmark detection",
      "Temporal sequence modeling for gesture recognition",
      "Optimization techniques for real-time inference",
      "Accessibility-focused application design"
    ]
  },
  {
    id: 3,
    title: "Wearable Smart Wardrobe App",
    description: "IoT-integrated mobile application that tracks clothing items and provides outfit recommendations based on weather and occasion.",
    challenge: "Synchronizing data across devices and implementing intelligent recommendation algorithms.",
    impact: "Reduces decision fatigue; promotes sustainable fashion choices through inventory management.",
    technologies: ["React Native", "Firebase", "Python", "Machine Learning", "IoT"],
    image: "https://github.com/surensagh/portfolio-images/blob/main/wearable-ai.png?raw=true",
    link: "#",
    github: "#",
    fullDescription: "A mobile application that helps users manage their wardrobe and receive intelligent outfit recommendations. The app tracks clothing items, integrates with weather APIs, and uses machine learning to suggest outfits based on weather conditions, occasion, and user preferences. It promotes sustainable fashion by encouraging users to wear items they already own.",
    results: [
      "Successfully tracks 500+ clothing items per user",
      "Recommendation accuracy: 88%",
      "Cross-device synchronization working seamlessly",
      "Reduced decision time by 40% in user testing"
    ],
    learnings: [
      "Mobile app development with React Native",
      "Real-time database synchronization with Firebase",
      "Recommendation system design and implementation",
      "IoT integration with wearable devices"
    ]
  },
  {
    id: 4,
    title: "RAG-based Study Assistant",
    description: "Retrieval-Augmented Generation system that answers student questions by retrieving relevant information from educational documents.",
    challenge: "Implementing efficient document retrieval and generating contextually accurate responses.",
    impact: "Personalized learning tool; improves study efficiency and knowledge retention.",
    technologies: ["Python", "LLM APIs", "Vector Databases", "NLP", "FastAPI"],
    image: "https://github.com/surensagh/portfolio-images/blob/main/rag.png?raw=true",
    link: "#",
    github: "#",
    fullDescription: "A Retrieval-Augmented Generation (RAG) system designed to help students learn more effectively. The system retrieves relevant information from educational documents and uses large language models to generate contextually accurate answers to student questions. This approach ensures that answers are grounded in the provided educational materials.",
    results: [
      "Processes 1000+ educational documents",
      "Average response time: 2.3 seconds",
      "User satisfaction: 4.7/5 stars",
      "Improved study efficiency by 35% in pilot study"
    ],
    learnings: [
      "Vector database implementation and optimization",
      "Retrieval-augmented generation techniques",
      "Integration with large language models",
      "Educational technology and learning science"
    ]
  },
  {
    id: 5,
    title: "OCR Tool for Armenian Manuscripts",
    description: "Optical Character Recognition system specialized for digitizing historical Armenian manuscripts with high accuracy.",
    challenge: "Handling diverse handwriting styles and preserving historical document integrity.",
    impact: "Digitizes cultural heritage; makes historical texts accessible to researchers worldwide.",
    technologies: ["Python", "Tesseract OCR", "OpenCV", "Deep Learning", "Image Processing"],
    image: "https://github.com/surensagh/portfolio-images/blob/main/ocr.jpg?raw=true",
    link: "#",
    github: "#",
    fullDescription: "A specialized OCR system designed for digitizing historical Armenian manuscripts. The tool combines traditional OCR techniques with deep learning models trained specifically on Armenian script to handle the unique challenges of historical documents, including varied handwriting styles and document degradation.",
    results: [
      "Character accuracy: 94.2% on historical manuscripts",
      "Successfully digitized 500+ historical documents",
      "Preserved document layout and formatting",
      "Accessible to researchers in 15+ countries"
    ],
    learnings: [
      "Specialized OCR for non-Latin scripts",
      "Document image processing and enhancement",
      "Transfer learning for historical document analysis",
      "Cultural heritage preservation through technology"
    ]
  },
  {
    id: 7,
    title: "Sensor-based Data Logging System",
    description: "IoT system that collects, processes, and visualizes data from multiple sensors in real-time with cloud storage.",
    challenge: "Ensuring data accuracy, handling network latency, and scaling to multiple sensors.",
    impact: "Enables remote monitoring and predictive maintenance; applicable to smart homes and industrial IoT.",
    technologies: ["Arduino", "Python", "AWS IoT", "Node.js", "React"],
    image: "https://via.placeholder.com/400x300?text=Sensor+Logging",
    link: "#",
    github: "#",
    fullDescription: "An IoT system that collects data from multiple sensors, processes it in real-time, and stores it in the cloud for analysis and visualization. The system is designed for scalability and reliability, supporting hundreds of sensors with minimal latency and data loss.",
    results: [
      "Supports 200+ simultaneous sensor connections",
      "Data latency: <100ms average",
      "99.9% uptime over 6 months",
      "Successfully deployed in 5 production environments"
    ],
    learnings: [
      "IoT architecture and design patterns",
      "Real-time data processing and streaming",
      "Cloud infrastructure and deployment",
      "Sensor calibration and data validation"
    ]
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return projectsData.find(project => project.id === id);
};

export const getProjectByTitle = (title: string): Project | undefined => {
  return projectsData.find(project => 
    project.title.toLowerCase().replace(/\s+/g, '-') === title.toLowerCase()
  );
};
