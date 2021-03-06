const HEADER = "DataModels";

const NAVBAR_DATA = [
  { id: 1, url: "/ru", label: "русский" },
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#services", label: "Services" },


  { id: 5, url: "#footer", label: "Contact" }
];
const BANNER_DATA = {
  HEADING: "Go digital with DataModels",
  DECRIPTION:
    "DataModels helps you skyrocket the ROI of your marketing campaign without having to spend tons of money or time to assemble an in-house team.",
  TUTORIAL_URL:
    "https://www.thinkwithgoogle.com/intl/en-gb/marketing-resources/programmatic/google-digital-academy/"

};
const SERVICE_DATA = {
  HEADING: "Our Services",
  ALL_SERVICES: "Request a Service",
  SERVICE_LIST: [
{
      LABEL: "Social Media Marketing",
      DESCRIPTION:
        "Accelerate business growth and generate new leads faster by leveraging social medias.Spend your advertising budget wisely and carefully, by targeting the most suitable audience and demographics for your specific brand and product.",
      URL: "images/service3.png"
    },
{
      LABEL: "Ambassador Marketing",
      DESCRIPTION:
        "Build a personal connection with your customers. Tap into our diverse network of models and influencers, and leverage your own fanbase. With our proprietary AI technology, we also developed exclusive hybrid ambassador offerings, half human, half digital avatar, ideal for omni-channel marketing strategies.",
      URL: "images/ambassador2_cropped.jpg"
    },


   {
      LABEL: "Content Marketing",
      DESCRIPTION:
        "Increase exposure, brand awareness and reputation, and attract top-of-funnel visitors with blog posts created by our in-house team of content writers. We create high-quality stories, personalized for your target audience, and optimized for both discoverability on Google and virality on social medias.",
      URL: "images/content-marketing.png"
    },

    {
      LABEL: "Search Engine Optimisation (SEO)",
      DESCRIPTION:
        "To customise the content, technical functionality and scope of your website so that your pages show for a specific set of keyword at the top of a search engine list. In the end, the goal is to attract traffic to your website when they are searching for goods, services or business-related information.",
      URL: "images/service1.png"
    },
    {
      LABEL: "Web Design & Development",
      DESCRIPTION:
        "Create next‑level websites by strategically blending user experience and brand storytelling. Our UI/UX, web designers and developers create responsive websites that feel at home on any device. In front‑end, back‑end and design, our implementations rely on the latest frameworks and technologies, to future-proof your website.",
      URL: "images/webdev.jpg"
    },


  {
      LABEL: "Customer Relationship Management (CRM)",
      DESCRIPTION:
        "Take a comprehensive look at your acquisition funnel, with data-driven customer analytics and machine learning. Where and how customers get onboard, and which conversion strategies work. Define the best processes to optimize your Key Performance Indicators.",
      URL: "images/service2.png"
    }

    
  ]
};

const ABOUT_DATA = {
  HEADING: "Why choose us?",
  TITLE: "Why we're different",
  IMAGE_URL: "images/network.png",
  WHY_CHOOSE_US_LIST: [

    "A 360 degree approach to marketing",
    "Cost-Effective",

    "Quick time to value",

    "A strong desire to establish long lasting business partnerships.",


  ]
};

const SOCIAL_DATA = {
  HEADING: "Find us",
  IMAGES_LIST: [
    "images/linkedin-icon.png"
  ]
};

const FOOTER_DATA = {
  DESCRIPTION:
    "We are a boutique marketing agency focused on results. We evaluate your brand’s needs and develop a powerful strategy that maximizes profits.",
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    ADDRESS: "582 Johnson St, Victoria, BC V8W 1M3, Canada",
    MOBILE: "+1 250-858-1873",
    EMAIL: "info@datamodels.digital"
  },
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  SOCIAL_DATA,
  FOOTER_DATA
};
export default MOCK_DATA;
