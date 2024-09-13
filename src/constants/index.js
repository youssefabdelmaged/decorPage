import {
  check,
  interior,
  lamb,
  lightining,
  Outdoor,
  rocket,
} from "../assets/icons";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
  { href: "#support", label: "Support" },
];

export const statistics = [
  { value: "400+", label: "Project Complete" },
  { value: "600+", label: "Satisfied Clients" },
  { value: "100k+", label: "Unique Styles" },
];

export const services = [
  {
    imgURL: lightining,
    label: "Lighting Design",
    subtext:
      "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere.",
  },
  {
    imgURL: interior,
    label: "Interior Design",
    subtext:
      "From concept to completion, we oversee every detail to bring your vision to life efficiently.",
  },
  {
    imgURL: Outdoor,
    label: "Outdoor Design",
    subtext:
      "Celebrate the changing seasons with our seasonal outdoor decor services.",
  },
];

export const simples = [
  {
    imgURL: rocket,
    label: "Start Project",
    subtext:
      "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience",
  },
  {
    imgURL: lamb,
    label: "Craft",
    subtext:
      "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space",
  },
  {
    imgURL: check,
    label: "Execute",
    subtext:
      "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space",
  },
];
