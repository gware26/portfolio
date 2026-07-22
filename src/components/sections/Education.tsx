import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";

export default function Education() {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <section id="education" className="py-24 bg-muted/30">
      <Container>
        <SectionHeading
          title="Education"
          subtitle="Academic"
          description="My educational background and relevant coursework."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-lg text-primary">{edu.field}</p>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">
                      {formatDate(edu.startDate)} - {edu.current ? "Present" : formatDate(edu.endDate)}
                    </Badge>
                    {edu.gpa && (
                      <Badge variant="outline">GPA: {edu.gpa}</Badge>
                    )}
                  </div>

                  {edu.description && (
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                  )}

                  <div>
                    <h4 className="font-semibold mb-2">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
