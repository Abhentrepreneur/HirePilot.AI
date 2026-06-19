"use client";

import {
  BarChart3,
  Brain,
  CheckCircle2,
  FileText,
  MessageSquare,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="glass-card glow-primary overflow-hidden p-1">
      <div className="rounded-xl border border-white/10 bg-card/80 p-4 sm:p-6">
        {/* Window chrome */}
        <div className="mb-4 flex items-center gap-2">
          <div className="size-3 rounded-full bg-red-500/80" />
          <div className="size-3 rounded-full bg-yellow-500/80" />
          <div className="size-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-muted-foreground">
            HirePilot AI Dashboard
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* ATS Score Card */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:col-span-1">
            <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="size-4 text-primary" />
              ATS Score
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-primary">87</span>
              <span className="mb-1 text-sm text-muted-foreground">/100</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-primary to-violet-400" />
            </div>
            <p className="mt-2 text-xs text-emerald-400">+12 from last review</p>
          </div>

          {/* Interview Readiness */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:col-span-1">
            <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Brain className="size-4 text-violet-400" />
              Interview Readiness
            </div>
            <div className="space-y-2">
              {[
                { skill: "System Design", score: 78 },
                { skill: "Algorithms", score: 92 },
                { skill: "Behavioral", score: 65 },
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{item.skill}</span>
                    <span className="font-medium">{item.score}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-violet-500"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* JD Match */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:col-span-1">
            <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Target className="size-4 text-emerald-400" />
              JD Match — Senior Backend
            </div>
            <div className="flex items-center gap-3">
              <div className="relative size-16">
                <svg className="size-16 -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white/10"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="74, 100"
                    className="text-emerald-400"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                  74%
                </span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="size-3" />
                  Python, PostgreSQL
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Zap className="size-3" />
                  Kubernetes — gap
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:col-span-2">
            <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MessageSquare className="size-4 text-blue-400" />
              Recent Mock Interviews
            </div>
            <div className="space-y-3">
              {[
                {
                  title: "System Design — URL Shortener",
                  score: "B+",
                  time: "2h ago",
                },
                {
                  title: "Behavioral — Leadership",
                  score: "A-",
                  time: "Yesterday",
                },
                {
                  title: "Technical — Binary Trees",
                  score: "A",
                  time: "2 days ago",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2"
                >
                  <span className="text-sm">{item.title}</span>
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                      {item.score}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Gap */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:col-span-1">
            <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="size-4 text-amber-400" />
              Learning Roadmap
            </div>
            <div className="space-y-2">
              {[
                { week: "Week 1", topic: "K8s Fundamentals", done: true },
                { week: "Week 2", topic: "Distributed Systems", done: false },
                { week: "Week 3", topic: "Mock Interview #4", done: false },
              ].map((item) => (
                <div key={item.week} className="flex items-center gap-2 text-xs">
                  <div
                    className={`size-2 rounded-full ${item.done ? "bg-emerald-400" : "bg-white/20"}`}
                  />
                  <span className="text-muted-foreground">{item.week}</span>
                  <span>{item.topic}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
              <BarChart3 className="size-3" />
              Est. salary target: $165k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
