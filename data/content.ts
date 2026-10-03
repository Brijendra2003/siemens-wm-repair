export type IconName =
  | "front"
  | "top"
  | "semi"
  | "drain"
  | "noise"
  | "pcb"
  | "leak"
  | "install"
  | "search"
  | "receipt"
  | "shield"
  | "calendar"
  | "truck"
  | "wrench"
  | "badge"
  | "clock"
  | "sparkles"
  | "users";

export const services: { title: string; text: string; icon: IconName; tag?: string }[] = [
  {
    title: "Front Load Repair",
    text: "Drum, bearing, door-lock, motor and spin faults on fully automatic front loaders.",
    icon: "front",
    tag: "Most booked",
  },
  {
    title: "Top Load Repair",
    text: "Agitator, pulsator, gearbox, lid switch and inlet issues on top loading machines.",
    icon: "top",
  },
  {
    title: "Washer-Dryer Repair",
    text: "Drying faults, heater and sensor issues, and combined wash-dry cycle problems on washer-dryers.",
    icon: "semi",
  },
  {
    title: "Not Draining / Not Spinning",
    text: "Drain pump, filter blockage, belt and carbon brush checks done on the spot.",
    icon: "drain",
  },
  {
    title: "Drum Noise & Bearings",
    text: "Loud rumbling, shaking or banging during spin? We check bearings, shock absorbers and drum.",
    icon: "noise",
  },
  {
    title: "PCB & Error Codes",
    text: "Control board diagnosis, display faults and error code troubleshooting.",
    icon: "pcb",
  },
  {
    title: "Water Leakage",
    text: "Door gasket, hoses, detergent drawer and tub seal leaks, traced and sealed.",
    icon: "leak",
  },
  {
    title: "Installation & Service",
    text: "New machine installation, shifting, descaling and preventive deep-clean service.",
    icon: "install",
  },
];

export const brands = ["Siemens", "Bosch"];

export const steps: { title: string; text: string; icon: IconName }[] = [
  { title: "Book a visit", text: "Fill the short form, call or WhatsApp. Pick a time slot that suits you.", icon: "calendar" },
  { title: "Technician visits", text: "A trained technician comes to your home with common spares and tools.", icon: "truck" },
  { title: "Diagnosis & quote", text: "We find the fault and share a clear quote. Nothing is done without your OK.", icon: "search" },
  { title: "Repair & test", text: "Repair, a full test wash, and an invoice with warranty terms.", icon: "wrench" },
];

export const features: { title: string; text: string; icon: IconName }[] = [
  { title: "Quick Diagnosis", text: "Fault found on the first visit for most common problems.", icon: "search" },
  { title: "Clear Quote First", text: "You approve the price before any work or part is fitted.", icon: "receipt" },
  { title: "Warranty on Repair", text: "Replaced parts carry warranty, written on your invoice.", icon: "shield" },
];

export const whyUs: { title: string; text: string; icon: IconName }[] = [
  { title: "Washing Machine Specialists", text: "We only repair washing machines, so our technicians know them inside out.", icon: "badge" },
  { title: "Same / Next-Day Visits", text: "Visits on the same or next day, subject to technician availability.", icon: "clock" },
  { title: "Quality-Checked Parts", text: "OEM or compatible spares, as agreed with you before fitting.", icon: "sparkles" },
];

export const problems: { q: string; a: string }[] = [
  {
    q: "Washing machine not draining water",
    a: "Usually a blocked drain filter, a kinked outlet hose or a failed drain pump. Clean the filter at the bottom front panel first (keep a towel ready). If water still stays in the drum, the pump or its wiring needs checking.",
  },
  {
    q: "Drum not spinning or spinning slowly",
    a: "An unbalanced load, worn carbon brushes, a loose or broken belt, or a motor/PCB fault can all stop the spin. Try redistributing the clothes and running a spin-only cycle. If it still doesn't spin, book a diagnosis.",
  },
  {
    q: "Loud noise or heavy shaking during spin",
    a: "Grinding or rumbling usually points to worn drum bearings. Banging or walking across the floor is often shock absorbers, transit bolts left in, or an uneven floor. Bearing wear gets worse with use, so get it checked early.",
  },
  {
    q: "Door won't open or door lock error",
    a: "Front loaders keep the door locked while water is inside or for a short time after a cycle. If it stays locked, the door lock assembly, drain issue or control board may be at fault. Don't force the handle, because it can break the hinge.",
  },
  {
    q: "Water leaking from the machine",
    a: "Check the inlet hose connections and the detergent drawer first. Leaks from the door bottom usually mean a torn door gasket. Leaks under the machine can be the drain pump, internal hoses or the tub seal.",
  },
  {
    q: "Display showing an error code",
    a: "Error codes differ by brand and model, but most relate to water inlet, drain, door lock, heater, motor or the unbalanced-load sensor. Note the exact code and share it on WhatsApp. It helps our technician bring the right part.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "How soon can a technician visit?",
    a: "We offer same-day or next-day visits across our service areas, subject to technician availability. Book early in the day for the best chance of a same-day slot.",
  },
  {
    q: "Do you charge for inspection?",
    a: "Our technician shares a clear quote after diagnosis, before any repair starts. Any visit or inspection charge is told to you on the call, before we confirm your booking. There are no hidden charges.",
  },
  {
    q: "Is there a warranty on repairs?",
    a: "Yes. Replaced parts come with a warranty. The duration depends on the part and is printed on your invoice. If the same fault returns within the warranty period, we revisit free of charge.",
  },
  {
    q: "Which brands do you repair?",
    a: "We specialise only in Siemens and Bosch washing machines: front load, top load and washer-dryers. Focusing on two brands means our technicians know these machines inside out and usually carry the right spares. We are an independent service and are not an authorized service centre of Siemens or Bosch.",
  },
  {
    q: "Do you use original spare parts?",
    a: "We use quality-checked OEM or compatible spare parts. We tell you which option is available and its price before fitting, so you decide.",
  },
  {
    q: "Which areas in Mumbai do you cover?",
    a: "We focus on Western Line stations from Churchgate to Virar, and also cover many Central and Harbour Line areas. If you're looking for washing machine repair near Andheri, Bandra, Borivali, Malad or Dadar, we've got you covered.",
  },
  {
    q: "How do I pay?",
    a: "Pay after the repair is complete and tested, by UPI or cash. You'll get an invoice with the work done and warranty details.",
  },
];

export const areas = {
  western: [
    "Churchgate", "Marine Lines", "Charni Road", "Grant Road", "Mumbai Central", "Mahalaxmi",
    "Lower Parel", "Prabhadevi", "Dadar", "Matunga Road", "Mahim", "Bandra", "Khar Road",
    "Santacruz", "Vile Parle", "Andheri", "Jogeshwari", "Ram Mandir", "Goregaon", "Malad",
    "Kandivali", "Borivali", "Dahisar", "Mira Road", "Bhayandar", "Naigaon", "Vasai Road",
    "Nalasopara", "Virar",
  ],
  central: [
    "CSMT", "Byculla", "Parel", "Matunga", "Sion", "Kurla", "Ghatkopar", "Vikhroli",
    "Kanjurmarg", "Bhandup", "Mulund", "Thane",
  ],
  harbour: ["Wadala", "Sewri", "Chembur", "Govandi", "Mankhurd", "Vashi"],
  other: ["Colaba", "Fort", "Worli", "Tardeo", "Juhu", "Powai", "BKC", "Dharavi"],
};

export const localities = [
  ...areas.western,
  ...areas.central,
  ...areas.harbour,
  ...areas.other,
].filter((v, i, a) => a.indexOf(v) === i);

export const machineTypes = ["Front load", "Top load", "Washer-dryer", "Not sure"] as const;
export const timeSlots = ["Any time", "9 AM – 12 PM", "12 – 3 PM", "3 – 6 PM", "6 – 9 PM"] as const;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#brands", label: "Brands" },
  { href: "#process", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#areas", label: "Areas" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];
