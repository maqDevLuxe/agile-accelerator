import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { HiringPartners } from "@/components/landing/HiringPartners";
import { Methodologies } from "@/components/landing/Methodologies";
import { CertificationStats } from "@/components/landing/CertificationStats";
import { SprintTimeline } from "@/components/landing/SprintTimeline";
import { ProjectSimulations } from "@/components/landing/ProjectSimulations";
import { Instructors } from "@/components/landing/Instructors";
import { OfficeImage } from "@/components/landing/OfficeImage";
import { AlumniCounters } from "@/components/landing/AlumniCounters";
import { BlogSection } from "@/components/landing/BlogSection";
import { ExamGuarantee } from "@/components/landing/ExamGuarantee";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTAFooter } from "@/components/landing/CTAFooter";

const Index = () => (
  <main className="min-h-screen">
    <Navbar />
    <HeroSection />
    <HiringPartners />
    <Methodologies />
    <CertificationStats />
    <SprintTimeline />
    <ProjectSimulations />
    <Instructors />
    <OfficeImage />
    <AlumniCounters />
    <BlogSection />
    <ExamGuarantee />
    <Testimonials />
    <CTAFooter />
  </main>
);

export default Index;
