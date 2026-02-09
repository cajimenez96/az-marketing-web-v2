"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Typography } from "../ui/typography";
import Container from "../ui/container";
import { useContactForm } from "./useContactForm";
import {
  CONTACT_INFO,
  FORM_LABELS,
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
    <section id={id} className="relative py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-6">
              <div className="flex flex-col">
                <Typography className="font-oswald font-medium text-[50px] md:text-[80px] lg:text-[90px] leading-12 md:leading-20 lg:leading-22 text-mediador">
                  HABLEMOS E
                </Typography>
                <Typography className="font-oswald font-medium text-[50px] md:text-[80px] lg:text-[90px] leading-12 md:leading-20 lg:leading-22 text-tonico">
                  IMPULSEMOS
                </Typography>
                <Typography className="font-oswald font-medium text-[50px] md:text-[80px] lg:text-[90px] leading-12 md:leading-20 lg:leading-22 text-tonico">
                  TU NEGOCIO
                </Typography>
              </div>

              <p className="text-mediador/80 text-sm md:text-base leading-relaxed max-w-sm">
                {SECTION_CONTENT.description}
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-full border border-mediador/20">
                  <Phone className="size-4 text-mediador" />
                </div>
                <div>
                  <p className="text-mediador text-sm font-bold uppercase">
                    {CONTACT_INFO.phone.label}
                  </p>
                  <a
                    href={CONTACT_INFO.phone.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mediador/70 text-sm hover:text-tonico transition-colors duration-300"
                  >
                    {CONTACT_INFO.phone.display}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-full border border-mediador/20">
                  <Mail className="size-4 text-mediador" />
                </div>
                <div>
                  <p className="text-mediador text-sm font-bold uppercase">
                    {CONTACT_INFO.email.label}
                  </p>
                  <p className="text-mediador/70 text-sm">
                    {CONTACT_INFO.email.address}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-full border border-mediador/20">
                  <MapPin className="size-4 text-mediador" />
                </div>
                <div>
                  <p className="text-mediador text-sm font-bold uppercase">
                    {CONTACT_INFO.location.label}
                  </p>
                  <p className="text-mediador/70 text-sm">
                    {CONTACT_INFO.location.city}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form
              className="space-y-5 border-none rounded-[6px] p-8 bg-form/10"
              onSubmit={handleSubmit}
            >
              {/* Name and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-mediador/70 text-sm">
                    {FORM_LABELS.nombre}
                  </label>
                  <Input
                    id="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="bg-form/10 rounded-[6px] text-white placeholder:text-mediador/30 border-none focus:border-tonico mt-2"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="empresa" className="text-mediador/70 text-sm">
                    {FORM_LABELS.empresa}
                  </label>
                  <Input
                    id="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    className="bg-form/10 rounded-[6px] text-white placeholder:text-mediador/30 border-none focus:border-tonico mt-2"
                  />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-mediador/70 text-sm">
                    {FORM_LABELS.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-form/10 rounded-[6px] text-white placeholder:text-mediador/30 border-none focus:border-tonico mt-2"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="telefono"
                    className="text-mediador/70 text-sm"
                  >
                    {FORM_LABELS.telefono}
                  </label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="bg-form/10 rounded-[6px] text-white placeholder:text-mediador/30 border-none focus:border-tonico mt-2"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-mediador/70 text-sm">
                  {FORM_LABELS.mensaje}
                </label>
                <Textarea
                  id="mensaje"
                  rows={10}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="bg-form/10 rounded-[6px] text-white placeholder:text-mediador/30 border-none focus:border-tonico mt-2 h-[200px]"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button type="submit" disabled={isSubmitting} variant="default">
                  {isSubmitting
                    ? STATUS_MESSAGES.sending
                    : STATUS_MESSAGES.submit}
                </Button>
              </div>

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
      </Container>
    </section>
  );
};

export default Contact;
