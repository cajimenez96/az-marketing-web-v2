"use client";

import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useContactForm } from "./useContactForm";
import {
  CONTACT_INFO,
  FORM_LABELS,
  FORM_PLACEHOLDERS,
  STATUS_MESSAGES,
  SECTION_CONTENT,
} from "./constants";

interface IContact {
  id?: string;
}

const Contact = ({ id }: IContact) => {
  const { formData, isSubmitting, submitStatus, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section id={id} className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 text-white">
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {SECTION_CONTENT.heading}
              </h2>
              <p className="text-lavender/90 text-lg leading-relaxed max-w-lg">
                {SECTION_CONTENT.description}
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-space-cadet/60 backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-jordy-blue" />
                </div>
                <div>
                  <p className="text-lavender/60 text-sm uppercase tracking-wider mb-1">
                    {CONTACT_INFO.phone.label}
                  </p>
                  <a
                    href={CONTACT_INFO.phone.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg font-medium hover:text-jordy-blue transition-colors duration-300 flex items-center gap-2"
                  >
                    {CONTACT_INFO.phone.display}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-space-cadet/60 backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-jordy-blue" />
                </div>
                <div>
                  <p className="text-lavender/60 text-sm uppercase tracking-wider mb-1">
                    {CONTACT_INFO.email.label}
                  </p>
                  <p className="text-white text-lg font-medium">
                    {CONTACT_INFO.email.address}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-space-cadet/60 backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-jordy-blue" />
                </div>
                <div>
                  <p className="text-lavender/60 text-sm uppercase tracking-wider mb-1">
                    {CONTACT_INFO.location.label}
                  </p>
                  <p className="text-white text-lg font-medium">
                    {CONTACT_INFO.location.city}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-jordy-blue/10 via-ylnmn-blue/10 to-lavender/10 rounded-3xl blur-2xl opacity-50"></div>

            {/* Form Container with Glassmorphism */}
            <div className="relative bg-space-cadet/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="nombre"
                      className="text-lavender/80 text-sm uppercase tracking-wider"
                    >
                      {FORM_LABELS.nombre}
                    </label>
                    <Input
                      id="nombre"
                      type="text"
                      placeholder={FORM_PLACEHOLDERS.nombre}
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="bg-ylnmn-blue/30 border-jordy-blue/30 text-white placeholder:text-lavender/40 focus:border-jordy-blue focus:ring-jordy-blue/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="empresa"
                      className="text-lavender/80 text-sm uppercase tracking-wider"
                    >
                      {FORM_LABELS.empresa}
                    </label>
                    <Input
                      id="empresa"
                      type="text"
                      placeholder={FORM_PLACEHOLDERS.empresa}
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      className="bg-ylnmn-blue/30 border-jordy-blue/30 text-white placeholder:text-lavender/40 focus:border-jordy-blue focus:ring-jordy-blue/20"
                    />
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-lavender/80 text-sm uppercase tracking-wider"
                    >
                      {FORM_LABELS.email}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={FORM_PLACEHOLDERS.email}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-ylnmn-blue/30 border-jordy-blue/30 text-white placeholder:text-lavender/40 focus:border-jordy-blue focus:ring-jordy-blue/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="telefono"
                      className="text-lavender/80 text-sm uppercase tracking-wider"
                    >
                      {FORM_LABELS.telefono}
                    </label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder={FORM_PLACEHOLDERS.telefono}
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="bg-ylnmn-blue/30 border-jordy-blue/30 text-white placeholder:text-lavender/40 focus:border-jordy-blue focus:ring-jordy-blue/20"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="mensaje"
                    className="text-lavender/80 text-sm uppercase tracking-wider"
                  >
                    {FORM_LABELS.mensaje}
                  </label>
                  <Textarea
                    id="mensaje"
                    placeholder={FORM_PLACEHOLDERS.mensaje}
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="bg-ylnmn-blue/30 border-jordy-blue/30 text-white placeholder:text-lavender/40 focus:border-jordy-blue focus:ring-jordy-blue/20 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-linear-to-r from-jordy-blue to-lavender text-oxford-blue font-semibold text-base rounded-xl hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(143,179,226,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? STATUS_MESSAGES.sending
                    : STATUS_MESSAGES.submit}
                  <Send className="w-5 h-5" />
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <p className="text-center text-green-400 text-sm">
                    {STATUS_MESSAGES.success}
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-center text-red-400 text-sm">
                    {STATUS_MESSAGES.error}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
