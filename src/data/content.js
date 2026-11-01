export const phones = [
  { label: "75073 10402", href: "tel:+917507310402" },
  { label: "79729 61705", href: "tel:+917972961705" },
  { label: "70579 27056", href: "tel:+917057927056" },
]

export const homeVisit = {
  name: "Chetan Sonawane",
  phone: "93597 59526",
  href: "tel:+919359759526",
}

export const email = "ssveducationandhealth@gmail.com"
export const whatsapp = "917507310402"

export const address = {
  line: "Sneha Sadan, Sambhajinagar, near Tharmax Chowk, Chinchwad, Pune 411019",
  map: "https://maps.google.com/maps?q=Sneha%20Sadan%20Sambhajinagar%20Chinchwad%20Pune%20411019&z=15&output=embed",
}

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/diagnostics", label: "Diagnostic Lab" },
  { to: "/home-collection", label: "Home Collection" },
  { to: "/contact", label: "Contact" },
]

export const services = [
  { title: "Lab Tests", text: "Biochemistry, haematology, hormones, and infection screens.", to: "/diagnostics", tone: "bg-blue-50 text-brand-800" },
  { title: "Home Collection", text: "Ask for a sample pickup at home. We confirm the area, time, and charge.", to: "/home-collection", tone: "bg-green-50 text-gold" },
  { title: "Health Profiles", text: "Fever, thyroid, diabetes, liver, kidney, and antenatal profiles.", to: "/diagnostics?category=Profiles", tone: "bg-brand-50 text-brand-800" },
  { title: "24-hour reports", text: "Most routine reports are ready within a day. Special tests take longer.", to: "/diagnostics", tone: "bg-sky-50 text-sky-700" },
]

export const conditions = ["Diabetes", "Thyroid", "Fever", "Heart", "Liver", "Kidney", "Pregnancy", "Anemia", "Fertility"]

export const tests = [
  { code: "HM012", name: "Complete Blood Count (CBC)", category: "Haematology", sample: "Blood", tags: ["Anemia", "Fever", "General"] },
  { code: "HM017", name: "ESR", category: "Haematology", sample: "Blood", tags: ["Fever", "General"] },
  { code: "HM007", name: "Blood Group", category: "Haematology", sample: "Blood", tags: ["General", "Pregnancy"] },
  { code: "P041", name: "Iron Studies", category: "Haematology", sample: "Blood", tags: ["Anemia"] },
  { code: "HM034", name: "Haemoglobin Electrophoresis", category: "Haematology", sample: "Blood", tags: ["Anemia"] },
  { code: "BC137", name: "Glucose (Fasting / PP / Random)", category: "Biochemistry", sample: "Blood", tags: ["Diabetes"] },
  { code: "BC145", name: "HbA1c", category: "Biochemistry", sample: "Blood", tags: ["Diabetes"] },
  { code: "BC161", name: "Insulin, Fasting", category: "Biochemistry", sample: "Blood", tags: ["Diabetes"] },
  { code: "P045", name: "Lipid Profile, Basic", category: "Biochemistry", sample: "Blood", tags: ["Heart"] },
  { code: "BC082", name: "Cholesterol, Total", category: "Biochemistry", sample: "Blood", tags: ["Heart"] },
  { code: "BC292", name: "Pro BNP", category: "Biochemistry", sample: "Blood", tags: ["Heart"] },
  { code: "P044", name: "Liver Panel (LFT)", category: "Biochemistry", sample: "Blood", tags: ["Liver"] },
  { code: "P042", name: "Kidney Panel (KFT)", category: "Biochemistry", sample: "Blood", tags: ["Kidney"] },
  { code: "BC106", name: "Creatinine", category: "Biochemistry", sample: "Blood", tags: ["Kidney"] },
  { code: "BC119", name: "eGFR", category: "Biochemistry", sample: "Blood", tags: ["Kidney"] },
  { code: "BC266", name: "Uric Acid", category: "Biochemistry", sample: "Blood", tags: ["Kidney", "General"] },
  { code: "P024", name: "Electrolytes", category: "Biochemistry", sample: "Blood", tags: ["General"] },
  { code: "BC072", name: "Calcium, Serum", category: "Biochemistry", sample: "Blood", tags: ["General"] },
  { code: "BC003", name: "Vitamin D, 25-Hydroxy", category: "Biochemistry", sample: "Blood", tags: ["General"] },
  { code: "BC269", name: "Vitamin B12", category: "Biochemistry", sample: "Blood", tags: ["Anemia"] },
  { code: "BC127", name: "Folate", category: "Biochemistry", sample: "Blood", tags: ["Anemia"] },
  { code: "CP003", name: "Urine Routine", category: "Biochemistry", sample: "Urine", tags: ["Fever", "Kidney", "General"] },
  { code: "P059", name: "Thyroid Profile, Free (FT3, FT4, TSH)", category: "Hormones", sample: "Blood", tags: ["Thyroid"] },
  { code: "P056", name: "Thyroid Profile, Total (T3, T4, TSH)", category: "Hormones", sample: "Blood", tags: ["Thyroid"] },
  { code: "BC251", name: "TSH", category: "Hormones", sample: "Blood", tags: ["Thyroid"] },
  { code: "BC129", name: "FSH", category: "Hormones", sample: "Blood", tags: ["Fertility"] },
  { code: "BC181", name: "LH", category: "Hormones", sample: "Blood", tags: ["Fertility"] },
  { code: "BC226", name: "Prolactin", category: "Hormones", sample: "Blood", tags: ["Fertility"] },
  { code: "IM006", name: "AMH", category: "Hormones", sample: "Blood", tags: ["Fertility"] },
  { code: "BC054", name: "Beta HCG", category: "Hormones", sample: "Blood", tags: ["Pregnancy"] },
  { code: "BC121", name: "Estradiol (E2)", category: "Hormones", sample: "Blood", tags: ["Fertility"] },
  { code: "BC248", name: "Testosterone, Total", category: "Hormones", sample: "Blood", tags: ["Fertility"] },
  { code: "BC228", name: "PSA, Total", category: "Hormones", sample: "Blood", tags: ["General"] },
  { code: "P026", name: "Fever Profile", category: "Profiles", sample: "Blood & urine", tags: ["Fever"], includes: "CBC, ESR, urine analysis, malarial parasite, Widal" },
  { code: "P019", name: "Dengue Profile", category: "Profiles", sample: "Blood", tags: ["Fever"], includes: "NS1 antigen with IgG and IgM" },
  { code: "P006", name: "Arthritis Profile", category: "Profiles", sample: "Blood", tags: ["General"], includes: "RA factor, CRP, uric acid, ASO, and related markers" },
  { code: "P027", name: "Fertility Profile", category: "Profiles", sample: "Blood", tags: ["Fertility"], includes: "FSH, LH, and prolactin" },
  { code: "P050", name: "PCOD Panel", category: "Profiles", sample: "Blood", tags: ["Fertility"], includes: "FSH, LH, prolactin, testosterone, insulin, and glucose" },
  { code: "P053", name: "PSA Profile", category: "Profiles", sample: "Blood", tags: ["General"] },
  { code: "AL005", name: "Allergy Profile", category: "Profiles", sample: "Blood", tags: ["General"] },
  { code: "P049", name: "PathChek-72", category: "Profiles", sample: "Blood", tags: ["General", "Heart", "Liver", "Kidney", "Diabetes"] },
  { code: "P052", name: "Pre Operative Profile", category: "Profiles", sample: "Blood", tags: ["General"] },
  { code: "BC111", name: "hsCRP", category: "Infection & Serology", sample: "Blood", tags: ["Heart", "Fever"] },
  { code: "IM062", name: "Dengue NS1 Antigen", category: "Infection & Serology", sample: "Blood", tags: ["Fever"] },
  { code: "IM103", name: "HIV 1 & 2 Antibody", category: "Infection & Serology", sample: "Blood", tags: ["General"] },
  { code: "IM089", name: "HBsAg", category: "Infection & Serology", sample: "Blood", tags: ["Liver"] },
  { code: "IM084", name: "Hepatitis A IgM", category: "Infection & Serology", sample: "Blood", tags: ["Liver"] },
  { code: "BC117", name: "D-Dimer", category: "Infection & Serology", sample: "Blood", tags: ["General"] },
  { code: "HM046", name: "Prothrombin Time (PT)", category: "Haematology", sample: "Blood", tags: ["Liver", "General"] },
  { code: "CY019", name: "Pap Smear", category: "Pathology", sample: "Smear", tags: ["Pregnancy", "General"] },
  { code: "HP030", name: "Histopathology, Biopsy", category: "Pathology", sample: "Tissue", tags: ["General"] },
  { code: "P064", name: "TORCH Panel", category: "Profiles", sample: "Blood", tags: ["Pregnancy"] },
  { code: "P023", name: "Maternal Serum Screen (Dual)", category: "Profiles", sample: "Blood", tags: ["Pregnancy"] },
]

export const categories = ["All", "Profiles", "Biochemistry", "Haematology", "Hormones", "Infection & Serology", "Pathology"]

export const highlights = [
  { title: "NABL accredited", text: "The laboratory is presented as NABL accredited, so reports follow a checked process." },
  { title: "24-hour reports", text: "Most routine reports are shared within 24 hours. Special tests take longer, and we say so when you book." },
  { title: "Home collection", text: "Ask for a sample pickup. We confirm the area, the time, and the charge before the visit." },
  { title: "ISO 9001:2015", text: "A certified diagnostic service, with a network of partner centres." },
]

export const centers = [
  {
    name: "SSV Pathology & Diagnostic Center",
    image: "/centers/ssv.jpg",
    detail: "Sneha Sadan, Sambhajinagar, near Tharmax Chowk, Chinchwad, Pune 411019",
    map: "https://maps.app.goo.gl/Dw2bBqCbYn5rhy2L6",
  },
  {
    name: "Rainbow Pathology & Diagnostic Center",
    image: "/centers/rainbow.jpg",
    detail: "Part of the SSV diagnostic network.",
    map: "https://maps.app.goo.gl/YAKC1eW45rFKEQcP7",
  },
  {
    name: "Isha Diagnostic Center",
    image: "/centers/isha.jpg",
    detail: "Part of the SSV diagnostic network.",
    map: "https://maps.app.goo.gl/GU1Cwodj9Y67oGYd9",
  },
  {
    name: "Mayraa Diagnostic Center",
    image: "/centers/mayraa.jpg",
    detail: "Part of the SSV diagnostic network. Call for this centre’s timings.",
    map: "https://www.google.com/maps/search/?api=1&query=Mayraa+Diagnostic+Center+Pune",
  },
  {
    name: "Samarth Diagnostic Center",
    image: "/centers/samarth.jpg",
    detail: "Part of the SSV diagnostic network.",
    map: "https://maps.app.goo.gl/TRMh1UCxjFBD6Dks8",
  },
]

export const reviews = [
  {
    name: "Vishal Kakde",
    text: "Best service. They arranged a home visit, and the report accuracy was the best I had seen after comparing four labs. Thank you to the whole team.",
  },
  {
    name: "Sanket Ghoge",
    text: "Best laboratory and best staff. Thank you to the Rainbow team for the home visit and the accurate report.",
  },
  {
    name: "Rohit Dubey",
    text: "Good pathology service, good doctors, and a cooperative staff.",
  },
]

export const faqs = [
  {
    q: "Can someone collect my sample at home?",
    a: "Yes, home collection is available. Call or send a booking request and the team will confirm your area, a time slot, and the charges before the visit.",
  },
  {
    q: "How fast are reports ready?",
    a: "Most routine reports are shared within 24 hours. Cultures, biopsies, and some specialised tests take longer. We confirm the expected time when you book.",
  },
  {
    q: "Is the laboratory accredited?",
    a: "SSV Diagnostic Pathology Laboratory is presented as a NABL-accredited lab, and SSV Group is ISO 9001:2015 certified.",
  },
  {
    q: "How do I know the price of a test?",
    a: "Prices are confirmed on the phone or WhatsApp so you get the current charge for that test, profile, or home visit. This site does not show a rate that might be out of date.",
  },
  {
    q: "Where is the main centre?",
    a: "Sneha Sadan, Sambhajinagar, near Tharmax Chowk, Chinchwad, Pune 411019. The group also works with Rainbow, Isha, Mayraa, and Samarth diagnostic centres.",
  },
]

export const steps = [
  { title: "Choose a test", text: "Search the menu or pick a health profile." },
  { title: "Share your details", text: "Send your name, phone number, and whether you need a home visit or a centre visit." },
  { title: "We confirm the slot", text: "The team calls you back with availability, preparation advice, and the charge." },
  { title: "Report follow-up", text: "Routine lab reports are targeted within 24 hours." },
]
