import { EmailOutlined, Phone, WhatsApp } from "@mui/icons-material";

const SOCIAL_LINKS = [
  {
    icon: <WhatsApp />,
    url: "https://api.whatsapp.com/send?phone=+14377725222&text=Hi!%2C%20would%20love%20to%20ask%20a%20few%20questions",
  },
  {
    icon: <Phone />,
    url: "tel:+14377725222",
  },
  {
    icon: <EmailOutlined />,
    url: "mailto:aishwarya.balan@pinnaclebrandsolution.ca",
  },
];

const QUICK_LINKS = [
  {
    href: "#approach",
    title: "Approach",
  },
  {
    href: "#capabilities",
    title: "Capabilities",
  },
  {
    href: "#work",
    title: "Work",
  },
];

export { SOCIAL_LINKS, QUICK_LINKS };
