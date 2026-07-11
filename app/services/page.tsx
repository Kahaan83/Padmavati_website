import type { Metadata } from "next";
import {
  FolderOpen, Package, FileText, Mail, ClipboardList, FileCheck, FilePlus,
  Palette, CreditCard, BookOpen, Megaphone, PartyPopper, BookMarked,
  Cpu, Disc3, IdCard, Tag, ShoppingBag, Baby, Layers, Shirt,
  MessageCircle,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Complete healthcare design and print services for doctors and hospitals in Ahmedabad and across India.",
};

/* ─── Data ─── */
const categories = [
  {
    id: "stationery",
    title: "Hospital Stationery",
    subtitle: "Professional printed stationery built for clinical environments",
    accentColor: "bg-brand-primary/10 text-brand-primary",
    services: [
      { icon: FolderOpen, name: "Doctor / PP Files", desc: "Premium UV-coated patient files with anti-scratch finish" },
      { icon: Package, name: "MRI & X-Ray Bags", desc: "Branded poly bags for MRI, CT and X-Ray report delivery" },
      { icon: FileText, name: "Prescription Pads (1×8\")", desc: "Custom pad sizes in single or duplicate with carbon copy" },
      { icon: FileText, name: "Letterheads", desc: "Clinic and hospital letterheads in bond or premium paper" },
      { icon: Mail, name: "Envelopes", desc: "Branded DL, A4 and A5 envelopes for clinic correspondence" },
      { icon: ClipboardList, name: "Consent Forms", desc: "Pre-operative and procedure consent forms for all specialities" },
      { icon: FileCheck, name: "NABH Forms", desc: "Entire set of NABH-compliant hospital documentation" },
      { icon: FilePlus, name: "Indoor Documents", desc: "Case sheets, nursing charts and indoor patient records" },
    ],
  },
  {
    id: "branding",
    title: "Branding & Design",
    subtitle: "Build a clinic identity that patients trust at first sight",
    accentColor: "bg-brand-secondary/10 text-brand-secondary",
    services: [
      { icon: Palette, name: "Logo Design", desc: "Complete clinic brand identity — logo, colours and typography" },
      { icon: CreditCard, name: "Visiting Cards", desc: "Premium UV-coated visiting cards for doctors on 350 GSM" },
      { icon: BookOpen, name: "Brochures (3-fold & 4-fold)", desc: "Multi-fold clinic and hospital marketing brochures" },
      { icon: Megaphone, name: "Flyers", desc: "Single-sheet clinic promotional flyers and health camp notices" },
      { icon: PartyPopper, name: "Invitation Cards", desc: "Clinic inauguration, OPD launch and event invitations" },
      { icon: BookMarked, name: "Books & Magazines", desc: "Patient education booklets and hospital annual magazines" },
    ],
  },
  {
    id: "peripherals",
    title: "Printed Peripherals & Other",
    subtitle: "Branded accessories that extend your clinic's professional identity",
    accentColor: "bg-brand-accent/15 text-brand-deep",
    services: [
      { icon: Cpu, name: "Printed Pendrives", desc: "Branded USB pendrives for patient data and presentations" },
      { icon: Disc3, name: "Printed CD Covers", desc: "Custom printed sleeves and jewel-case inserts for medical CDs" },
      { icon: IdCard, name: "ID Cards", desc: "PVC photo ID cards for doctors, nurses and support staff" },
      { icon: Tag, name: "Wristbands", desc: "Patient identification wristbands — plain or barcode printed" },
      { icon: ShoppingBag, name: "Non-Woven Bags", desc: "Eco-friendly branded carry bags for clinics and pharmacies" },
      { icon: Baby, name: "New Born Baby Kit", desc: "Printed welcome kits and info cards for newborn departments" },
      { icon: Layers, name: "Tag & Labels", desc: "Specimen labels, sample tags and file stickers" },
      { icon: Shirt, name: "All Linen Items", desc: "Branded scrubs, aprons and linen items for hospital staff" },
    ],
  },
];

/* ─── Service Card ─── */
function ServiceCard({
  icon: Icon,
  name,
  desc,
}: {
  icon: React.ElementType;
  name: string;
  desc: string;
}) {
  const waText = encodeURIComponent(`Hi, I want to enquire about: ${name}`);
  return (
    <div className="group flex flex-col bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-brand-secondary transition-all duration-250">
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-neutral-surface flex items-center justify-center mb-4 group-hover:bg-brand-primary/10 transition-colors duration-200">
        <Icon className="w-5 h-5 text-brand-primary" strokeWidth={1.75} />
      </div>
      {/* Text */}
      <p className="text-sm font-bold text-neutral-dark mb-1">{name}</p>
      <p className="text-xs text-neutral-mid leading-relaxed flex-1">{desc}</p>
      {/* CTA */}
      <a
        href={`${CONTACT.whatsapp}?text=${waText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-brand-secondary hover:text-brand-primary transition-colors"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        Enquire on WhatsApp →
      </a>
    </div>
  );
}

/* ─── Page ─── */
export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Everything your clinic needs — designed, printed and delivered by our in-house team"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <div className="py-16 space-y-20 bg-white">
        {categories.map((cat, index) => (
          <section key={cat.id} id={cat.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category heading */}
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${cat.accentColor}`}>
                {cat.title}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary mb-2">{cat.title}</h2>
            <p className="text-neutral-mid mb-8 max-w-xl">{cat.subtitle}</p>

            {/* Cards grid */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {cat.services.map((svc) => (
                <ServiceCard key={svc.name} icon={svc.icon} name={svc.name} desc={svc.desc} />
              ))}
            </div>

            {/* Divider except last */}
            {index < categories.length - 1 && (
              <div className="mt-16 border-b border-gray-100" />
            )}
          </section>
        ))}
      </div>

      <CTABanner />
    </>
  );
}
