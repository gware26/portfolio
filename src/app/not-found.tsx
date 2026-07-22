import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-4xl font-semibold">Page Not Found</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
