export interface ResumeData {
  status: "not_uploaded" | "uploaded";
  note: string;
  imageUrl?: string;
  pdfUrl?: string;
  lastUpdated?: string;
}

export const resumeData: ResumeData = {
  status: "uploaded",
  note: "Verified Curriculum Vitae",
  imageUrl: "/Image/CV.jpg",
  lastUpdated: "2026",
};

