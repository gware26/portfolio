import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

export default function Experience() {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeading
          title="Experience"
          subtitle="Journey"
          description="My professional journey, education, and achievements."
        />

        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.company}</p>
                      <p className="text-sm text-muted-foreground">{item.location}</p>
                    </div>
                    <Badge
                      variant={
                        item.type === "work"
                          ? "default"
                          : item.type === "education"
                          ? "secondary"
                          : "outline"
                      }
                      className="w-fit"
                    >
                      {item.type}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {formatDate(item.startDate)} - {item.current ? "Present" : formatDate(item.endDate!)}
                  </p>

                  <ul className="space-y-2">
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
