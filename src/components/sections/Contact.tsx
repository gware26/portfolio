"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/ui/section-heading";
import { Textarea } from "@/components/ui/textarea";
import { contactContent, siteConfig } from "@/data/site";

const contactSchema = z.object({
  name: z.string().min(2, "Enter at least 2 characters."),
  email: z.email("Enter a valid email address."),
  subject: z.string().min(5, "Enter at least 5 characters."),
  message: z.string().min(20, "Enter at least 20 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const mailto = new URL(`mailto:${siteConfig.email}`);
    mailto.searchParams.set("subject", values.subject);
    mailto.searchParams.set("body", `${values.message}\n\nFrom: ${values.name} <${values.email}>`);
    window.location.assign(mailto.toString());
    setSubmitted(true);
    reset();
  }

  return (
    <section id="contact" className="py-24">
      <Container size="xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              align="left"
              title={contactContent.title}
              subtitle="Contact"
              description={contactContent.description}
            />

            <div className="grid gap-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a className="text-sm text-muted-foreground hover:text-foreground" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <Card>
              <CardContent className="p-6">
                {submitted ? (
                  <div className="grid min-h-[420px] place-items-center text-center">
                    <div>
                      <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" />
                      <h3 className="text-2xl font-bold">Message prepared</h3>
                      <p className="mt-3 max-w-md text-muted-foreground">
                        Your email client should open with the message ready to send. {contactContent.responseTime}.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" autoComplete="name" placeholder="Your name" {...register("name")} />
                        {errors.name ? <p className="text-sm text-destructive">{errors.name.message}</p> : null}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" autoComplete="email" placeholder="you@example.com" {...register("email")} />
                        {errors.email ? <p className="text-sm text-destructive">{errors.email.message}</p> : null}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Internship, freelance project, or collaboration" {...register("subject")} />
                      {errors.subject ? <p className="text-sm text-destructive">{errors.subject.message}</p> : null}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Share the context, goal, timeline, and useful links." {...register("message")} />
                      {errors.message ? <p className="text-sm text-destructive">{errors.message.message}</p> : null}
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Preparing..." : "Send message"}
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
