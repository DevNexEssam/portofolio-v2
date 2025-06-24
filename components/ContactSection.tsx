/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaCalendarAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  // Contact information
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Alexandria, Egypt",
      bgColor: "bg-primary/10"
    },
    {
      icon: <MdEmail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "essam.mohamed.dev@gmail.com",
      bgColor: "bg-primary/10"
    },
    {
      icon: <FaPhone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+20 1068446885",
      bgColor: "bg-primary/10"
    },
    {
      icon: <FaCalendarAlt className="h-6 w-6 text-primary" />,
      title: "Availability",
      value: "Open for opportunities",
      bgColor: "bg-primary/10"
    }
  ];

  // Social media links
  const socialLinks = [
    {
      href: "https://github.com/DevNexEssam",
      icon: <FaGithub className="h-5 w-5" />,
      label: "GitHub",
      color: "hover:bg-primary"
    },
    {
      href: "https://www.instagram.com/essam_iam/",
      icon: <FaInstagram className="h-5 w-5" />,
      label: "Instagram",
      color: "hover:bg-primary"
    },
    {
      href: "https://www.linkedin.com/in/essam-mohamed-829b27342/",
      icon: <FaLinkedin className="h-5 w-5" />,
      label: "LinkedIn",
      color: "hover:bg-primary"
    },
    {
      href: "https://wa.me/201068446885",
      icon: <FaWhatsapp className="h-5 w-5" />,
      label: "WhatsApp",
      color: "hover:bg-primary"
    }
  ];

  // Direct contact buttons
  const directContact = [
    {
      href: "mailto:essam.mohamed.dev@gmail.com",
      icon: <MdEmail className="h-5 w-5 mr-2" />,
      text: "Email Me",
      bg: "bg-primary hover:bg-primary/90"
    },
    {
      href: "tel:+201068446885",
      icon: <FaPhone className="h-5 w-5 mr-2" />,
      text: "Call Me",
      bg: "bg-secondary hover:bg-secondary/80"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-text-primary">Let's Connect</h2>
          <div className="h-1.5 w-24 sm:w-28 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'm always open to talking about creative ideas and new projects.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - Contact info */}
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-text-primary">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-5 p-4 rounded-xl bg-background transition-all hover:scale-[1.02] border border-border hover:bg-primary-foreground/20`}
                  >
                    <div className="bg-background p-3 rounded-full shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-text-primary">{item.title}</h4>
                      <p className="text-base text-text-secondary mt-1">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-5 text-text-primary">Contact Me Directly</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  {directContact.map((button, index) => (
                    <Link
                      key={index}
                      href={button.href}
                      className={`${button.bg} px-6 py-3 text-sm text-text-primary rounded-lg transition-all hover:scale-105 flex items-center justify-center shadow hover:shadow-md`}
                    >
                      {button.icon}
                      {button.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Social media */}
            <div className="p-8 sm:p-10 bg-background flex flex-col border-t border-border lg:border-t-0 lg:border-l">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-text-primary">Social Media</h3>
                <p className="text-lg text-text-secondary mb-8">
                  Follow me on social platforms to see my latest work and projects.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                {socialLinks.map((social, index) => (
                  <div key={index}>
                    <Link
                      href={social.href}
                      target="_blank"
                      aria-label={social.label}
                      className={`flex items-center justify-center p-4 rounded-xl bg-card border border-border ${social.color} text-text-primary transition-all hover:scale-105 hover:text-white`}
                    >
                      <span className="mr-3">{social.icon}</span>
                      <span className="font-medium">{social.label}</span>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-5 rounded-xl bg-primary/10 border border-primary/20 text-center">
                <FaPaperPlane className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="text-lg font-medium text-text-primary mb-2">Have a Project Idea?</h4>
                <p className="text-text-secondary mb-3">Send me a message and I'll get back to you ASAP</p>
                <Link
                  href="mailto:essam.mohamed.dev@gmail.com"
                  className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Start Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}