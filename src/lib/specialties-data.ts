export interface Specialty {
  name: string;
  iconName: string;
  description: string;
}

export const specialties: Specialty[] = [
  { name: "Internal Medicine", iconName: "Stethoscope", description: "Complex E/M coding with multi-system evaluations" },
  { name: "Family Practice", iconName: "Heart", description: "Preventive care and chronic disease coding expertise" },
  { name: "Cardiology", iconName: "Activity", description: "Cardiac catheterization and EP study billing" },
  { name: "Orthopedics", iconName: "Bone", description: "Surgical procedure and DME billing complexity" },
  { name: "Dermatology", iconName: "Sparkles", description: "Mohs surgery and pathology coding specialists" },
  { name: "Neurology", iconName: "Brain", description: "EEG, EMG, and neurostimulator procedure coding" },
  { name: "Psychiatry & Therapy", iconName: "SmilePlus", description: "Time-based and add-on code billing experts" },
  { name: "Urology", iconName: "CircleDot", description: "Urodynamics and surgical procedure billing" },
  { name: "Radiology", iconName: "Scan", description: "Technical and professional component billing" },
  { name: "General Surgery", iconName: "Scissors", description: "Complex surgical bundling and modifier usage" },
  { name: "Urgent Care", iconName: "Clock", description: "High-volume E/M and ancillary service coding" },
  { name: "Pediatrics", iconName: "Baby", description: "Well-child visits and vaccine administration billing" },
  { name: "OB/GYN", iconName: "Users", description: "Global OB packages and antepartum care coding" },
  { name: "Gastroenterology", iconName: "Pill", description: "Endoscopy and infusion therapy billing" },
  { name: "Ophthalmology", iconName: "Eye", description: "Surgical and refractive procedure coding" },
  { name: "Oncology", iconName: "Radiation", description: "Chemotherapy administration and drug billing" },
  { name: "Rheumatology", iconName: "Zap", description: "Infusion therapy and biologic medication billing" },
  { name: "Pulmonology", iconName: "Wind", description: "PFT testing and sleep study billing" },
  { name: "ENT", iconName: "Ear", description: "Surgical and audiological procedure coding" },
  { name: "Pain Management", iconName: "Flame", description: "Injection and implantable device billing" },
  { name: "Podiatry", iconName: "Footprints", description: "Diabetic foot care and surgical procedure coding" },
  { name: "Anesthesiology", iconName: "Syringe", description: "Time-based anesthesia unit calculation" },
  { name: "Physical Therapy", iconName: "Dumbbell", description: "Therapy cap tracking and modifier compliance" },
  { name: "Chiropractic", iconName: "AlignVerticalSpaceAround", description: "Maintenance vs. active treatment documentation" },
];
