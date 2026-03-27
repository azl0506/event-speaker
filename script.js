const speakers = [
  {
    icon: 'images/girl1.jpg',
    name: "Dr. Sarah Chen",
    title: "Chief AI Researcher",
    company: "TechVision Labs",
    biography: "Dr. Chen is a leading expert in machine learning with over 15 years of experience. She has published more than 50 papers on neural networks and AI ethics.",
    topic: "The Future of Ethical AI Development",
    experties: "Machine Learning & AI Ethics"
  },
  {
    icon: "images/guy2.jpg",
    name: "Marcus Rodriguez",
    title: "Founder & CEO",
    company: "GreenTech Innovations",
    biography: "Marcus is a serial entrepreneur passionate about sustainable technology. He has founded three successful startups focused on clean energy solutions.",
    topic: "Building Sustainable Startups in a Digital Age",
    experties: "Entrepreneurship & Sustainability"
  },
  {
    icon: "images/girl3.avif",
    name: "Dr. Amara Okafor",
    title: "Director of Cybersecurity",
    company: "SecureNet Solutions",
    biography: "Dr. Okafor specializes in cybersecurity and threat intelligence. She advises governments and Fortune 500 companies on digital security strategies.",
    topic: "Protecting Your Digital Assets: Modern Cybersecurity Strategies",
    experties: "Cybersecurity & Threat Intelligence"
  },
  {
    icon: "images/guy4.jpg",
    name: "James Patterson",
    title: "Head of Product Design",
    company: "DesignFirst Studio",
    biography: "James has led design teams at major tech companies for over a decade. His work has won multiple design awards and shaped user experiences for millions.",
    topic: "Human-Centered Design in the Age of AI",
    experties: "UX Design & Product Strategy"
  },
  {
    icon: "images/girl5.jpg",
    name: "Dr. Priya Sharma",
    title: "VP of Data Science",
    company: "Analytics Corp",
    biography: "Dr. Sharma leads data science initiatives that drive business transformation. She is known for making complex data accessible and actionable.",
    topic: "Data-Driven Decision Making: From Insights to Impact",
    experties: "Data Science & Business Analytics"
  },
  {
    icon: "images/girl6.jpg",
    name: "Dr. Amara Okafor",
    title: "Director of Cybersecurity",
    company: "SecureNet Solutions",
    biography: "Dr. Okafor specializes in cybersecurity and threat intelligence. She advises governments and Fortune 500 companies on digital security strategies.",
    topic: "Protecting Your Digital Assets: Modern Cybersecurity Strategies",
    experties: "Cybersecurity & Threat Intelligence"
  },
  {
    icon: "images/guy7.jpg",
    name: "Alex Thompson",
    title: "Blockchain Architect",
    company: "CryptoChain Technologies",
    biography: "Alex is a pioneer in blockchain technology and decentralized systems. He has contributed to several major blockchain protocols and advises on Web3 strategies.",
    topic: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    experties: "Blockchain & Web3"
  },
  {
    icon: "images/girl8.jpg",
    name: "Lisa Wang",
    title: "Chief Marketing Officer",
    company: "BrandSpark Agency",
    biography: "Lisa has revolutionized digital marketing strategies for global brands. Her campaigns have generated billions in revenue and won numerous industry awards.",
    topic: "Marketing in 2026: Authenticity Meets Automation",
    experties: "Digital Marketing & Brand Strategy"
  },
  {
    icon: "images/guy9.jpg",
    name: "Dr. Michael Foster",
    title: "Quantum Computing Researcher",
    company: "Quantum Dynamics Institute",
    biography: "Dr. Foster is at the forefront of quantum computing research. His work on quantum algorithms has potential applications in cryptography and optimization.",
    topic: "Quantum Computing: The Next Computing Revolution",
    experties: "Quantum Computing & Physics"
  }
];
let html = "";
for(let i = 0; i < speakers.length; i++)
  {
const speaker = speakers[i];
console.log(speaker)
html += `
        <div class="speaker-card">
   
        <div class="speaker-icon">
          <img src="${speaker.icon}" alt="${speaker.name}"/>
        </div>
        <div class="speaker-name">${speaker.name}</div>
        <div class="speaker-title">${speaker.title}</div>
        <div class="speaker-company">${speaker.company}</div>
        <div class="speaker-biography">${speaker.biography}</div>
        <div class="speaker-experties"><span style= "color: rgb(55, 55, 176)">Experties:</span> ${speaker.experties}</div>
    </div>
`
}
document.getElementById("main").innerHTML = html;