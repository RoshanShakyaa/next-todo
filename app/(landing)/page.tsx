import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Hero2() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Badge variant="outline">Taking Note</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              Focused on Productivity & Simplicity
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Managing tasks shouldn’t be overwhelming. With TaskFlow, you can
              organize, prioritize, and complete your to-do list effortlessly.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link href="/inbox">
              <Button size="lg" className="gap-4" variant="outline">
                Get Started
              </Button>
            </Link>
            <Link href="/api/auth/register">
              <Button size="lg" className="gap-4">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
