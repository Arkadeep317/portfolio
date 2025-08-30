"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _gotcha: "", // honeypot
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")
    setErrorMessage(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New message from portfolio",
          _gotcha: formData._gotcha,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || "Failed to send message")
      }
      setStatus("success")
      setFormData({ name: "", email: "", message: "", _gotcha: "" })
    } catch (err: any) {
      setStatus("error")
      setErrorMessage(err?.message || "Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Get In Touch</h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="font-sans text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>

            <p className="font-serif text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in new opportunities, collaborations, and interesting projects. Whether you want to
              discuss a potential project, ask about my experience, or just say hello, I'd love to hear from you!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-primary/10 mr-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-sans font-medium text-card-foreground">Email</p>
                  <a
                    href="mailto:arkadeepsi2007@gmail.com"
                    className="font-serif text-muted-foreground hover:text-primary transition-colors"
                  >
                    arkadeepsi2007@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-primary/10 mr-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-sans font-medium text-card-foreground">Location</p>
                  <p className="font-serif text-muted-foreground">Kolkata, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-sans font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Arkadeep317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://in.linkedin.com/in/arkadeep-si"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/_godxop_?igsh=dm5pcGg1c3JwZzE5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="font-sans text-xl text-card-foreground">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Spam honeypot (hidden) */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                {/* Success/error feedback */}
                {status === "success" && (
                  <div role="status" className="rounded-md border border-green-700 bg-green-900/30 text-green-100 p-3">
                    Message sent! I’ll get back to you via email.
                  </div>
                )}
                {status === "error" && (
                  <div role="alert" className="rounded-md border border-red-700 bg-red-900/30 text-red-100 p-3">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block font-serif text-sm font-medium text-card-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:ring-ring"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-serif text-sm font-medium text-card-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:ring-ring"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-serif text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-input border-border focus:ring-ring resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
