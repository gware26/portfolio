import Image from "next/image";
import { Award, ExternalLink, FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/data/certifications";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="border-b border-foreground bg-secondary py-24 lg:py-32">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            align="left"
            title="Certifications that back the practice."
            subtitle="[Part 06 / 06] Certifications"
            description="Verified credentials from structured programs, each linked to its official confirmation page."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.06}>
              <Card className="group h-full overflow-hidden">
                {cert.imageUrl ? (
                  <a
                    href={cert.fileUrl ?? cert.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${cert.name} certificate`}
                    className="relative block aspect-[4/3] overflow-hidden border-b border-foreground bg-secondary"
                  >
                    <Image
                      src={cert.imageUrl}
                      alt={`${cert.name} certificate issued by ${cert.issuer}`}
                      fill
                      sizes="(min-width: 768px) 620px, 100vw"
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                ) : null}
                <CardContent className="flex h-full flex-col gap-5 p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-foreground bg-primary text-primary-foreground">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-xs font-bold uppercase text-primary">{cert.issuer}</p>
                      <h3 className="mt-1 text-xl font-black leading-tight">{cert.name}</h3>
                      {cert.program ? (
                        <p className="mt-1 text-sm text-muted-foreground">{cert.program}</p>
                      ) : null}
                    </div>
                  </div>

                  <p className="font-mono text-sm font-bold text-foreground">Issued {formatDate(cert.date)}</p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                    {cert.credentialUrl ? (
                      <Button asChild className="flex-1">
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Verify credential
                        </a>
                      </Button>
                    ) : null}
                    {cert.fileUrl ? (
                      <Button variant="outline" asChild className="flex-1">
                        <a href={cert.fileUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4" />
                          View certificate
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
