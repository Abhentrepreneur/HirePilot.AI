"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { GradientBackground } from "@/components/shared/gradient-background";
import { roleOptions, experienceOptions } from "@/lib/constants";
import {
  waitlistSchema,
  type WaitlistFormValues,
} from "@/lib/validations";

type FormStatus = "idle" | "loading" | "success" | "error";

export function WaitlistSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      experience: "",
    },
  });

  const roleValue = watch("role");
  const experienceValue = watch("experience");

  const onSubmit = async (data: WaitlistFormValues) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section className="relative section-padding" id="waitlist">
      <GradientBackground />
      <div className="container-max relative">
        <FadeIn>
          <SectionHeader
            badge="Early Access"
            title="Become a Founding Beta User"
            subtitle="Get free early access and help shape the future of interview preparation."
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto max-w-xl">
            <div className="glass-card glow-primary p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center py-8 text-center"
                  >
                    <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold">
                      You&apos;re on the list!
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;ll reach out with your early access invite soon.
                      Check your inbox for a confirmation email.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setStatus("idle")}
                    >
                      Submit another entry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Jane Developer"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm text-red-400" role="alert">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-red-400" role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Current Role</Label>
                      <Select
                        value={roleValue}
                        onValueChange={(value) =>
                          setValue("role", value, { shouldValidate: true })
                        }
                      >
                        <SelectTrigger
                          id="role"
                          aria-invalid={!!errors.role}
                          aria-describedby={errors.role ? "role-error" : undefined}
                        >
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          {roleOptions.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.role && (
                        <p id="role-error" className="text-sm text-red-400" role="alert">
                          {errors.role.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select
                        value={experienceValue}
                        onValueChange={(value) =>
                          setValue("experience", value, { shouldValidate: true })
                        }
                      >
                        <SelectTrigger
                          id="experience"
                          aria-invalid={!!errors.experience}
                          aria-describedby={
                            errors.experience ? "experience-error" : undefined
                          }
                        >
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          {experienceOptions.map((exp) => (
                            <SelectItem key={exp} value={exp}>
                              {exp}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.experience && (
                        <p
                          id="experience-error"
                          className="text-sm text-red-400"
                          role="alert"
                        >
                          {errors.experience.message}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <div
                        className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                        role="alert"
                      >
                        <AlertCircle className="size-4 shrink-0" />
                        {errorMessage}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="xl"
                      className="w-full glow-primary"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        "Join The Waitlist"
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      No spam. Unsubscribe anytime. We respect your privacy.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
