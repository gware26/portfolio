import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="Introduction"
          description="Get to know me better - my background, passions, and what drives me as a developer."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              I'm an Information Science student at Jimma University with a deep passion for
              software engineering and building innovative solutions. My journey in tech began
              with curiosity and has evolved into a dedicated pursuit of excellence.
            </p>
            <p className="text-lg text-muted-foreground">
              I specialize in full-stack web development, with expertise in modern JavaScript
              frameworks, TypeScript, and cloud technologies. I believe in writing clean,
              maintainable code and creating exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or participating in coding competitions. I'm constantly
              learning and growing, always looking for new challenges to tackle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl font-semibold">My Journey</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">
                      Started programming in 2021, fell in love with web development
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">
                      Enrolled at Jimma University for Information Science in 2022
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">
                      Built multiple full-stack projects and contributed to open source
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">
                      Currently focused on mastering modern web technologies and best practices
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl font-semibold">Career Goals</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-accent" />
                    <p className="text-muted-foreground">
                      Work at a leading tech company building impactful products
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-accent" />
                    <p className="text-muted-foreground">
                      Contribute to open-source projects that help developers worldwide
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-accent" />
                    <p className="text-muted-foreground">
                      Mentor aspiring developers and share knowledge with the community
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}