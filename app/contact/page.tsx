"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const SERVICES = [
  "Doctor Files / PP Files",
  "Visiting Cards",
  "Letterhead / Prescription Pads",
  "Brochure / Flyer",
  "Logo Design",
  "NABH Forms",
  "Envelopes / X-Ray Bags",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function validateForm() {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.clinic.trim()) newErrors.clinic = "Clinic / Hospital name is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.service) newErrors.service = "Please select a service";

    // Phone validation: exactly 10 digits
    const cleanPhone = formData.phone.replace(/\s+/g, "").replace(/^\+91/, "");
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState("submitting");

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", clinic: "", phone: "", city: "", service: "", message: "" });
        setErrors({});
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm text-neutral-dark bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all duration-150";

  const labelClass = "block text-xs font-semibold text-neutral-dark mb-1.5 uppercase tracking-wider";

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We respond within a few hours on WhatsApp. For urgent requirements, call us directly."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* ─── Left: Contact info ─── */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary mb-3">Get in Touch</h2>
                <p className="text-neutral-mid leading-relaxed">
                  We respond within a few hours on WhatsApp. For urgent requirements, call us directly.
                </p>
              </div>

              {/* Contact blocks */}
              <div className="space-y-5">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-mid uppercase tracking-wider mb-1">Address</p>
                    <address className="not-italic text-sm text-neutral-dark leading-relaxed">
                      7/38, Patrakar Colony,<br />
                      Near Vijay Nagar School,<br />
                      Naranpura, Ahmedabad — 380013, Gujarat
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-mid uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+919426338720" className="block text-sm text-brand-primary hover:text-brand-navy font-medium transition-colors">
                      +91 94 2633 8720
                    </a>
                    <a href="tel:+919428801716" className="block text-sm text-brand-primary hover:text-brand-navy font-medium transition-colors">
                      +91 94 2880 1716
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-mid uppercase tracking-wider mb-1">Email</p>
                    <a
                      href="mailto:sarthaktradingco@gmail.com"
                      className="text-sm text-brand-primary hover:text-brand-navy font-medium transition-colors break-all"
                    >
                      sarthaktradingco@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-mid uppercase tracking-wider mb-2">WhatsApp</p>
                    <a
                      href="https://wa.me/919426338720?text=Hi%2C%20I%20want%20to%20enquire%20about%20your%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Working hours */}
              <div className="rounded-2xl bg-neutral-surface border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-brand-primary" />
                  <p className="text-sm font-bold text-neutral-dark">Working Hours</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-mid">Monday – Saturday</span>
                    <span className="font-semibold text-neutral-dark">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-mid">Sunday</span>
                    <span className="font-semibold text-red-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5826559788283!2d72.55480757604748!3d23.057571915476545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d90e5b2f41%3A0x5e76a90b6c2fc52f!2sNaranpura%2C%20Ahmedabad%2C%20Gujarat%20380013!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Padmavati Enterprise — Naranpura, Ahmedabad"
                  className="block"
                />
              </div>
            </div>

            {/* ─── Right: Form ─── */}
            <div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-brand-primary mb-1">Send an Enquiry</h2>
                <p className="text-sm text-neutral-mid mb-8">
                  Fill in your details and we&apos;ll WhatsApp you within a few hours.
                </p>

                {/* Success state */}
                {formState === "success" && (
                  <div className="mb-6 flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-green-800 font-medium">
                      Thank you! We&apos;ll reach out to you on WhatsApp within 2 hours. — Team Padmavati
                    </p>
                  </div>
                )}

                {/* Error state */}
                {formState === "error" && (
                  <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">
                      Something went wrong. Please WhatsApp us directly at +91 94 2633 8720
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name + Clinic */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input
                        id="name" name="name" type="text" required autoComplete="name"
                        placeholder="Dr. Ravi Sharma"
                        value={formData.name} onChange={handleChange}
                        className={`${inputClass} ${errors.name ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : ""}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="clinic" className={labelClass}>Clinic / Hospital Name *</label>
                      <input
                        id="clinic" name="clinic" type="text" required
                        placeholder="City Heart Clinic"
                        value={formData.clinic} onChange={handleChange}
                        className={`${inputClass} ${errors.clinic ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : ""}`}
                      />
                      {errors.clinic && <p className="text-red-500 text-xs mt-1">{errors.clinic}</p>}
                    </div>
                  </div>

                  {/* Phone + City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                      <input
                        id="phone" name="phone" type="tel" required autoComplete="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone} onChange={handleChange}
                        className={`${inputClass} ${errors.phone ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : ""}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="city" className={labelClass}>City *</label>
                      <input
                        id="city" name="city" type="text" required
                        placeholder="Ahmedabad"
                        value={formData.city} onChange={handleChange}
                        className={`${inputClass} ${errors.city ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : ""}`}
                      />
                      {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                    </div>
                  </div>

                  {/* Service select */}
                  <div>
                    <label htmlFor="service" className={labelClass}>What do you need? *</label>
                    <select
                      id="service" name="service" required
                      value={formData.service} onChange={handleChange}
                      className={`${inputClass} cursor-pointer ${errors.service ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : ""}`}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClass}>Tell us more (optional)</label>
                    <textarea
                      id="message" name="message" rows={4}
                      placeholder="e.g. I need 500 visiting cards and 100 letterheads for my new clinic opening next month…"
                      value={formData.message} onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full py-3.5 bg-brand-primary hover:bg-brand-navy disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {formState === "submitting" ? "Sending…" : "Send Enquiry →"}
                  </button>
                </form>

                {/* Fallback Section */}
                <div className="mt-8 pt-8 border-t border-gray-100 text-center space-y-4">
                  <p className="text-sm font-semibold text-neutral-dark">
                    Prefer to reach out directly?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                    <a
                      href="https://wa.me/919426338720?text=Hi%2C%20I%27d%20like%20to%20get%20in%20touch%20directly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                      Chat on WhatsApp
                    </a>
                    <a
                      href="mailto:sarthaktradingco@gmail.com"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-surface border border-gray-200 hover:bg-gray-50 text-neutral-dark text-sm font-semibold rounded-xl transition-all duration-200"
                    >
                      <Mail className="w-4 h-4 text-brand-primary" />
                      sarthaktradingco@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
