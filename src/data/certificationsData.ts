export type CertCategory =
  | "Certification"
  | "Certificates"
  | "Hackathon"
  | "Soft Skills";

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: CertCategory;
  imagePath: string; // e.g. /Image/OCI-Foundation.jpeg
  isProctored?: boolean;
  credentialLink?: string; // URL to verify the credential online
}

export const certificationsData: CertificationEntry[] = [
  {
    id: "cert-1",
    title: "Oracle Cloud Infrastructure (OCI) AI Foundations Associate",
    issuer: "Oracle",
    date: "August 2025",
    category: "Certification",
    imagePath: "/Image/OCI-Foundation.jpeg",
    isProctored: true,
    credentialLink:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=EE09A343D06646472724E9CE55E8E7CE65A8440E7785882C6B16E7842496EFE7",
  },
  {
    id: "cert-dbms",
    title: "Database Management System Part 1",
    issuer: "Infosys Springboard",
    date: "August 2026",
    category: "Certificates",
    imagePath: "/Image/DBMS.jpg",
    isProctored: false,
    credentialLink: "https://verify.onwingspan.com/",
  },
  {
    id: "cert-2",
    title: "Programming in Java",
    issuer: "Lovely Professional University / iamneo",
    date: "May 2025",
    category: "Certificates",
    imagePath: "/Image/ProgrammingInJava.jpg",
    isProctored: true,
    credentialLink:
      "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2FHXOmpLuD4AQnwMso9MMJ98t5DwW1PlRg%3D",
  },
  {
    id: "cert-3",
    title: "Data Structure and Algorithms",
    issuer: "Lovely Professional University / iamneo",
    date: "January 2026",
    category: "Certificates",
    imagePath: "/Image/DSA.jpg",
    isProctored: true,
    credentialLink:
      "https://lpucolab438.examly.io/certificate/U2FsdGVkX19MIlFtK5cywLfpAYMIQkYXzl2qWxAsW4A%3D",
  },
  {
    id: "cert-4",
    title: "Object Oriented Programming",
    issuer: "Lovely Professional University / iamneo",
    date: "May 2026",
    category: "Certificates",
    imagePath: "/Image/ObjectOrientedProgramming.png",
    isProctored: true,
    credentialLink:
      "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2FGkl9ikpoa4FNg%2FO3C9KL7LO%2FrxbzRI8Y%3D",
  },
  {
    id: "cert-cp",
    title: "Computer Programming",
    issuer: "Lovely Professional University / iamneo",
    date: "May 2025",
    category: "Certificates",
    imagePath: "/Image/ComputerProgramming.jpg",
    isProctored: true,
    credentialLink:
      "https://lpucolab438.examly.io/certificate/U2FsdGVkX19LGElcRX3hL2054NA2Qj5o0MIQQ1f4yWY%3D",
  },
  {
    id: "cert-5",
    title: "Data Management (Excel and Tableau)",
    issuer: "Tech Veda",
    date: "March 2025",
    category: "Certificates",
    imagePath: "/Image/DataManagement.png",
    isProctored: true,
  },
  {
    id: "cert-6",
    title: "Basic to Beyond Python",
    issuer: "CSE Pathsala",
    date: "January 2025",
    category: "Certificates",
    imagePath: "/Image/Python_CSEPathsala.png",
    isProctored: true,
  },
  {
    id: "cert-7",
    title: "TRINETRA - 20 Hours HACKATHON",
    issuer: "Lovely Professional University / Trinetra",
    date: "February 2025",
    category: "Hackathon",
    imagePath: "/Image/Trinetra_Hackathon.jpg",
    isProctored: false,
    credentialLink:
      "https://credsverse.com/credentials/4948d3c4-d08a-4a20-a95a-0fadbb549574?preview=1",
  },
  {
    id: "cert-8",
    title: "CODE STORM 36 Hour Hackathon",
    issuer:
      "Lovely Professional University / Microsoft Learn Student Ambassador",
    date: "November 2024",
    category: "Hackathon",
    imagePath: "/Image/36HourHackathon.jpg",
    isProctored: false,
  },
  {
    id: "cert-9",
    title: "Building a Positive Attitude",
    issuer: "Master Union",
    date: "October 2024",
    category: "Soft Skills",
    imagePath: "/Image/PositiveAttitude_MasterUnion.png",
    isProctored: true,
  },
  {
    id: "cert-10",
    title: "The Authentic Confidence and Self-Esteem Masterclass",
    issuer: "Udemy",
    date: "September 2024",
    category: "Soft Skills",
    imagePath: "/Image/Udemy-TheAuthenticConfidence.jpg",
    isProctored: false,
    credentialLink:
      "https://www.udemy.com/certificate/UC-c14350d7-8a22-4d54-a614-95f1389f8beb/",
  },
];
