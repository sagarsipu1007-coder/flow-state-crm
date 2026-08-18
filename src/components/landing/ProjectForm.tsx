import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, FolderPlus, UserPlus, MailCheck, ListChecks } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const sources = ["Website form", "Referral", "Outbound", "Event or conference", "Existing CRM import", "Partner"] as const;
const projectTypes = ["Implementation", "Migration", "Integration", "Retainer", "Consulting"] as const;
const statuses = ["Draft", "Planned", "In progress", "On hold", "Won", "Lost"] as const;

type Source = (typeof sources)[number];
type ProjectStatus = (typeof statuses)[number];

export interface CreateProjectPayload {
  companyId?: string;
  contactId?: string;
  company_name: string;
  source: Source;
  first_name?: string;
  last_name?: string;
  contact_email?: string;
  contact_phone?: string;
  designation?: string;
  project_name: string;
  project_type?: string;
  status?: ProjectStatus;
  start_date?: string;
  due_date?: string;
  budget?: number;
  owner_id?: string;
}

const owners = [
  { id: "u_dana", label: "Dana Whitfield — AE" },
  { id: "u_marcus", label: "Marcus Reyes — Senior AE" },
  { id: "u_priya", label: "Priya Nair — Solutions" },
  { id: "u_auto", label: "Auto-assign by rules" },
];

const whatHappens = [
  { icon: FolderPlus, title: "Project record created", detail: "Linked to the company and primary contact", time: "instantly" },
  { icon: UserPlus, title: "Owner assigned", detail: "From your source and territory rules", time: "instantly" },
  { icon: MailCheck, title: "Kickoff email sent", detail: "Your onboarding first-touch template", time: "instantly" },
  { icon: ListChecks, title: "Milestone tasks created", detail: "Scoped from start date to due date", time: "1 day later" },
  { icon: CheckCircle2, title: "Stale check scheduled", detail: "Flagged to the manager if untouched", time: "3 days later" },
];

export function ProjectForm() {
  const reduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    companyId: "",
    contactId: "",
    company_name: "",
    source: sources[0] as Source,
    first_name: "",
    last_name: "",
    contact_email: "",
    contact_phone: "",
    designation: "",
    project_name: "",
    project_type: projectTypes[0] as string,
    status: statuses[1] as ProjectStatus,
    start_date: "",
    due_date: "",
    budget: "",
    owner_id: owners[3]!.id,
  });

  const set = (key: keyof typeof form) => (value: string) => setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.company_name.trim() || !form.project_name.trim()) {
      toast.error("Company name and project name are required.");
      return;
    }
    if (form.contact_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact_email.trim())) {
      toast.error("Enter a valid contact email.");
      return;
    }
    if (form.start_date && form.due_date && form.due_date < form.start_date) {
      toast.error("Due date can't be before the start date.");
      return;
    }
    const payload: CreateProjectPayload = {
      ...(form.companyId.trim() ? { companyId: form.companyId.trim() } : {}),
      ...(form.contactId.trim() ? { contactId: form.contactId.trim() } : {}),
      company_name: form.company_name.trim(),
      source: form.source,
      first_name: form.first_name.trim() || undefined,
      last_name: form.last_name.trim() || undefined,
      contact_email: form.contact_email.trim() || undefined,
      contact_phone: form.contact_phone.trim() || undefined,
      designation: form.designation.trim() || undefined,
      project_name: form.project_name.trim(),
      project_type: form.project_type,
      status: form.status,
      start_date: form.start_date || undefined,
      due_date: form.due_date || undefined,
      budget: form.budget ? Number(form.budget) : undefined,
      owner_id: form.owner_id,
    };
    void payload;
    setSubmitted(true);
    toast.success(`Project "${payload.project_name}" created for ${payload.company_name}.`);
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/25";

  return (
    <section id="project-form" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1fr] lg:items-start lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-foreground">
            Try the project intake step
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Add a project and watch the automation take over
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            This is the same intake form your clients and account team use to open a project in
            Northpeak. Fill it in and you'll see exactly what fires the moment it lands — company and
            contact linking, owner assignment, kickoff email, milestone tasks, and the stale check
            that catches it if nobody moves.
          </p>

          <ol className="mt-8 space-y-3">
            {whatHappens.map((w, i) => (
              <Reveal
                as="li"
                key={w.title}
                delay={i * 100}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent">
                  <w.icon className="h-4 w-4 text-accent-foreground" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{w.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{w.detail}</p>
                </div>
                <span className="ml-auto shrink-0 text-[11px] font-medium text-amber-foreground">
                  {w.time}
                </span>
              </Reveal>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-white/10 p-6 shadow-[var(--shadow-float)] surface-ink">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold">New project</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal live-dot" /> Live
              </span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: reduced ? 0 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 rounded-xl border border-white/10 bg-ink-elevated/70 p-5"
                >
                  <CheckCircle2 className="h-6 w-6 text-teal" />
                  <p className="mt-3 font-display text-lg font-semibold">
                    {form.project_name} is live for {form.company_name}
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    Status set to {form.status.toLowerCase()}, owner assigned from your{" "}
                    {form.source.toLowerCase()} rule, kickoff email sent, and milestone tasks queued.
                    In your real workspace this record appears on every teammate's board instantly.
                  </p>
                  <ol className="mt-5 space-y-2.5">
                    {whatHappens.map((w, i) => (
                      <motion.li
                        key={w.title}
                        initial={{ opacity: 0, x: reduced ? 0 : -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + i * 0.3, duration: 0.4 }}
                        className="flex items-center gap-2.5 text-sm"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                        <span className="truncate">{w.title}</span>
                        <span className="ml-auto shrink-0 text-[11px] tabular-nums text-ink-muted">
                          {w.time}
                        </span>
                      </motion.li>
                    ))}
                  </ol>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
                  >
                    Add another project
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 grid gap-5"
                >
                  <fieldset className="grid gap-4">
                    <legend className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Company
                    </legend>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-1.5 sm:col-span-2">
                        <span className="text-xs font-medium text-ink-muted">Company name *</span>
                        <input
                          required
                          maxLength={120}
                          value={form.company_name}
                          onChange={(e) => set("company_name")(e.target.value)}
                          placeholder="Harbourline"
                          className={cn(field, "text-foreground")}
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Company ID (optional)</span>
                        <input
                          maxLength={64}
                          value={form.companyId}
                          onChange={(e) => set("companyId")(e.target.value)}
                          placeholder="cmp_8241"
                          className={cn(field, "text-foreground")}
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Source</span>
                        <select
                          value={form.source}
                          onChange={(e) => set("source")(e.target.value)}
                          className={cn(field, "text-foreground")}
                        >
                          {sources.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </fieldset>

                  <fieldset className="grid gap-4">
                    <legend className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Primary contact
                    </legend>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">First name</span>
                        <input
                          maxLength={60}
                          value={form.first_name}
                          onChange={(e) => set("first_name")(e.target.value)}
                          placeholder="Dana"
                          className={cn(field, "text-foreground")}
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Last name</span>
                        <input
                          maxLength={60}
                          value={form.last_name}
                          onChange={(e) => set("last_name")(e.target.value)}
                          placeholder="Whitfield"
                          className={cn(field, "text-foreground")}
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Contact email</span>
                        <input
                          type="email"
                          maxLength={255}
                          value={form.contact_email}
                          onChange={(e) => set("contact_email")(e.target.value)}
                          placeholder="dana@harbourline.com"
                          className={cn(field, "text-foreground")}
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Contact phone</span>
                        <input
                          maxLength={30}
                          value={form.contact_phone}
                          onChange={(e) => set("contact_phone")(e.target.value)}
                          placeholder="+1 555 0134"
                          className={cn(field, "text-foreground")}
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Designation</span>
                        <input
                          maxLength={80}
                          value={form.designation}
                          onChange={(e) => set("designation")(e.target.value)}
                          placeholder="Head of Revenue Ops"
                          className={cn(field, "text-foreground")}
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Contact ID (optional)</span>
                        <input
                          maxLength={64}
                          value={form.contactId}
                          onChange={(e) => set("contactId")(e.target.value)}
                          placeholder="cnt_1190"
                          className={cn(field, "text-foreground")}
                        />
                      </label>
                    </div>
                  </fieldset>

                  <fieldset className="grid gap-4">
                    <legend className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Project
                    </legend>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-1.5 sm:col-span-2">
                        <span className="text-xs font-medium text-ink-muted">Project name *</span>
                        <input
                          required
                          maxLength={120}
                          value={form.project_name}
                          onChange={(e) => set("project_name")(e.target.value)}
                          placeholder="CRM rollout — 12 reps"
                          className={cn(field, "text-foreground")}
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Project type</span>
                        <select
                          value={form.project_type}
                          onChange={(e) => set("project_type")(e.target.value)}
                          className={cn(field, "text-foreground")}
                        >
                          {projectTypes.map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Status</span>
                        <select
                          value={form.status}
                          onChange={(e) => set("status")(e.target.value)}
                          className={cn(field, "text-foreground")}
                        >
                          {statuses.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Start date</span>
                        <input
                          type="date"
                          value={form.start_date}
                          onChange={(e) => set("start_date")(e.target.value)}
                          className={cn(field, "text-foreground")}
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Due date</span>
                        <input
                          type="date"
                          value={form.due_date}
                          onChange={(e) => set("due_date")(e.target.value)}
                          className={cn(field, "text-foreground")}
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Budget (USD)</span>
                        <input
                          type="number"
                          min={0}
                          step={100}
                          value={form.budget}
                          onChange={(e) => set("budget")(e.target.value)}
                          placeholder="24000"
                          className={cn(field, "text-foreground")}
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-xs font-medium text-ink-muted">Owner</span>
                        <select
                          value={form.owner_id}
                          onChange={(e) => set("owner_id")(e.target.value)}
                          className={cn(field, "text-foreground")}
                        >
                          {owners.map((o) => (
                            <option key={o.id} value={o.id}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </fieldset>

                  <motion.button
                    type="submit"
                    {...(reduced ? {} : { whileHover: { y: -2 }, whileTap: { scale: 0.985 } })}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-amber)] px-5 py-3.5 text-sm font-semibold text-amber-foreground"
                  >
                    Create project <ArrowRight className="h-4 w-4" />
                  </motion.button>
                  <p className="text-xs text-ink-muted">
                    Demo form — nothing is stored. Want it wired to your workspace?{" "}
                    <a
                      href="mailto:sales@northpeak.app?subject=Northpeak%20project%20intake"
                      className="underline underline-offset-2"
                    >
                      Talk to us
                    </a>
                    .
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
