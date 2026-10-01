"use client";
import { useEffect, useId, useRef, useState } from "react";
import { CheckCircle2, ImagePlus, Loader2, Phone, X } from "lucide-react";
import { business } from "@/data/business";
import Reveal from "./Reveal";

const interests = ["Permanent Tattoo", "Temporary Tattoo", "Henna", "Jagua", "Custom Body Art", "Piercing", "Other"];
const artists = ["No Preference", "Sergio", "Russell", "Alondra", "Other"];
const sizes = ["Small", "Medium", "Large", "Not sure yet"];
const timings = ["As soon as possible", "Today", "Tomorrow", "This week", "During my South Padre Island vacation", "I'm flexible"];

const ACCEPT = ["image/png", "image/jpeg", "image/webp"];
const MAX_FILES = 6;
const MAX_MB = 10;

type Ref = { id: string; name: string; size: number; url: string; progress: number };
type Form = {
  name: string; phone: string; email: string; interest: string; artist: string;
  placement: string; size: string; idea: string; timing: string; consent: boolean;
};
type Errors = Partial<Record<keyof Form | "files", string>>;

const empty: Form = {
  name: "", phone: "", email: "", interest: "", artist: "No Preference",
  placement: "", size: "", idea: "", timing: "", consent: false,
};

function validate(f: Form): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  const digits = f.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) e.phone = "Enter a phone number with at least 10 digits.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (!f.interest) e.interest = "Choose what you're interested in.";
  if (!f.consent) e.consent = "Please confirm you understand this is an inquiry.";
  return e;
}

export default function Booking() {
  const uid = useId();
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [files, setFiles] = useState<Ref[]>([]);
  const [fileError, setFileError] = useState("");
  const [drag, setDrag] = useState(false);
  const [sending, setSending] = useState(false);
  const [sentName, setSentName] = useState<string | null>(null);
  const filesRef = useRef<Ref[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    filesRef.current = files;
  }, [files]);

  // free object URLs on unmount
  useEffect(() => () => filesRef.current.forEach((f) => URL.revokeObjectURL(f.url)), []);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  function addFiles(list: FileList | File[]) {
    setFileError("");
    const incoming = Array.from(list);
    const bad = incoming.filter((f) => !ACCEPT.includes(f.type));
    const big = incoming.filter((f) => ACCEPT.includes(f.type) && f.size > MAX_MB * 1024 * 1024);
    let ok = incoming.filter((f) => ACCEPT.includes(f.type) && f.size <= MAX_MB * 1024 * 1024);
    const room = MAX_FILES - filesRef.current.length;
    const overflow = ok.length > room;
    ok = ok.slice(0, Math.max(room, 0));
    if (bad.length) setFileError("Only PNG, JPG or WEBP images are accepted.");
    else if (big.length) setFileError(`Each image must be under ${MAX_MB} MB.`);
    else if (overflow) setFileError(`You can add up to ${MAX_FILES} reference images.`);

    const added: Ref[] = ok.map((f) => ({
      id: `${f.name}-${f.size}-${Math.random().toString(36).slice(2, 7)}`,
      name: f.name, size: f.size, url: URL.createObjectURL(f), progress: 0,
    }));
    if (!added.length) return;
    setFiles((p) => [...p, ...added]);
    // Simulated upload: nothing leaves the browser.
    added.forEach((a) => {
      let p = 0;
      const t = setInterval(() => {
        p = Math.min(100, p + 8 + Math.random() * 22);
        setFiles((cur) => cur.map((c) => (c.id === a.id ? { ...c, progress: p } : c)));
        if (p >= 100) clearInterval(t);
      }, 120);
    });
  }

  function removeFile(id: string) {
    setFiles((p) => {
      const f = p.find((x) => x.id === id);
      if (f) URL.revokeObjectURL(f.url);
      return p.filter((x) => x.id !== id);
    });
    setFileError("");
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSentName(form.name.trim().split(/\s+/)[0]);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1100);
  }

  function reset() {
    files.forEach((f) => URL.revokeObjectURL(f.url));
    setFiles([]);
    setForm(empty);
    setErrors({});
    setSentName(null);
  }

  const id = (k: string) => `${uid}-${k}`;
  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${id(k)}-err`} role="alert" className="mt-1.5 text-sm text-[#f0866f]">
        {errors[k]}
      </p>
    ) : null;
  const a11y = (k: keyof Errors) => ({
    id: id(k),
    "aria-invalid": errors[k] ? (true as const) : undefined,
    "aria-describedby": errors[k] ? `${id(k)}-err` : undefined,
  });
  const label = "mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.18em] text-bone/80";

  return (
    <section id="book" ref={sectionRef} className="section bg-ink">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Tattoo inquiry</p>
          <h2 className="display mt-4 text-[clamp(2.6rem,6vw,5rem)]">Let&apos;s talk about your tattoo.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-bone/75">
            Have an idea in mind? Send us the details and someone from Peggy&apos;s will contact you to discuss your tattoo.
          </p>
          <div className="mt-8 space-y-2 text-bone/75">
            <p>Prefer to talk it through?</p>
            <a href={business.phoneHref} className="inline-flex items-center gap-2 text-xl font-bold text-ember hover:text-bone">
              <Phone size={18} /> {business.phone}
            </a>
          </div>
        </Reveal>

        <Reveal>
          {sentName ? (
            <div className="fade-up border border-line bg-char p-8 text-center sm:p-14" role="status">
              <CheckCircle2 className="mx-auto text-ember" size={56} strokeWidth={1.5} />
              <h3 className="display mt-6 text-5xl sm:text-6xl">Request received</h3>
              <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-bone/80">
                Thanks, {sentName}. We&apos;ve received your tattoo request. Someone from Peggy&apos;s will contact you to discuss your idea and availability.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={business.phoneHref} className="btn btn-primary">
                  <Phone size={16} /> Call Peggy&apos;s
                </a>
                <a
                  href="#top"
                  onClick={reset}
                  className="btn btn-ghost"
                >
                  Back to website
                </a>
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.18em] text-mute">Demo only — no request was actually sent.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-12 border border-line bg-char p-6 sm:p-10">
              <fieldset className="space-y-5">
                <legend className="display mb-5 text-2xl text-ember">01 &mdash; Contact information</legend>
                <div>
                  <label htmlFor={id("name")} className={label}>Full name *</label>
                  <input {...a11y("name")} className="field" autoComplete="name" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
                  {err("name")}
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={id("phone")} className={label}>Phone number *</label>
                    <input {...a11y("phone")} className="field" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(555) 123-4567" />
                    {err("phone")}
                  </div>
                  <div>
                    <label htmlFor={id("email")} className={label}>Email *</label>
                    <input {...a11y("email")} className="field" type="email" autoComplete="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@email.com" />
                    {err("email")}
                  </div>
                </div>
              </fieldset>

              <fieldset className="space-y-5">
                <legend className="display mb-5 text-2xl text-ember">02 &mdash; Tattoo details</legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={id("interest")} className={label}>What are you interested in? *</label>
                    <select {...a11y("interest")} className="field" value={form.interest} onChange={(e) => set("interest", e.target.value)}>
                      <option value="" disabled>Select one</option>
                      {interests.map((o) => <option key={o}>{o}</option>)}
                    </select>
                    {err("interest")}
                  </div>
                  <div>
                    <label htmlFor={id("artist")} className={label}>Preferred artist</label>
                    <select id={id("artist")} className="field" value={form.artist} onChange={(e) => set("artist", e.target.value)}>
                      {artists.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={id("placement")} className={label}>Placement</label>
                    <input id={id("placement")} className="field" value={form.placement} onChange={(e) => set("placement", e.target.value)} placeholder="e.g. forearm, ankle, shoulder" />
                  </div>
                  <div>
                    <label htmlFor={id("size")} className={label}>Approximate size</label>
                    <select id={id("size")} className="field" value={form.size} onChange={(e) => set("size", e.target.value)}>
                      <option value="" disabled>Select one</option>
                      {sizes.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor={id("idea")} className={label}>Describe your tattoo idea</label>
                  <textarea id={id("idea")} className="field min-h-40 resize-y" value={form.idea} onChange={(e) => set("idea", e.target.value)} placeholder="Tell us what you're picturing — subject, style, any meaning behind it." />
                </div>
              </fieldset>

              <fieldset>
                <legend className="display mb-5 text-2xl text-ember">03 &mdash; Reference images</legend>
                <div
                  onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
                  onDragLeave={() => setDrag(false)}
                  onDrop={(e) => { e.preventDefault(); setDrag(false); addFiles(e.dataTransfer.files); }}
                  onClick={() => inputRef.current?.click()}
                  className={`cursor-pointer border-2 border-dashed px-6 py-10 text-center transition-colors ${drag ? "border-ember bg-ember/10" : "border-line hover:border-ember/60"}`}
                >
                  <ImagePlus className="mx-auto text-ember" size={34} strokeWidth={1.5} />
                  <p className="mt-3 font-bold">Upload reference images</p>
                  <p className="mt-1 text-sm text-mute">Drag &amp; drop or <button type="button" className="underline decoration-ember underline-offset-4 hover:text-ember" onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}>browse</button> &middot; PNG, JPG or WEBP</p>
                  <input ref={inputRef} type="file" multiple accept="image/png,image/jpeg,image/webp" className="sr-only" aria-label="Upload reference images" onChange={(e) => { if (e.target.files) addFiles(e.target.files); e.target.value = ""; }} />
                </div>
                {fileError && <p role="alert" className="mt-2 text-sm text-[#f0866f]">{fileError}</p>}
                {files.length > 0 && (
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {files.map((f) => (
                      <li key={f.id} className="flex items-center gap-3 border border-line bg-ink p-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={f.url} alt={`Preview of ${f.name}`} className="h-16 w-16 shrink-0 object-cover" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold">{f.name}</p>
                          <p className="text-xs text-mute">
                            {f.progress < 100 ? `Uploading… ${Math.floor(f.progress)}%` : `Ready · ${(f.size / 1024).toFixed(0)} KB`}
                          </p>
                          <div className="mt-1.5 h-1 bg-line">
                            <div className="h-full bg-ember transition-[width] duration-150" style={{ width: `${f.progress}%` }} />
                          </div>
                        </div>
                        <button type="button" onClick={() => removeFile(f.id)} aria-label={`Remove ${f.name}`} className="grid h-10 w-10 shrink-0 place-items-center text-mute hover:text-ember">
                          <X size={18} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </fieldset>

              <fieldset className="space-y-5">
                <legend className="display mb-5 text-2xl text-ember">04 &mdash; Timing</legend>
                <div>
                  <label htmlFor={id("timing")} className={label}>Preferred timing</label>
                  <select id={id("timing")} className="field" value={form.timing} onChange={(e) => set("timing", e.target.value)}>
                    <option value="" disabled>Select one</option>
                    {timings.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="flex cursor-pointer items-start gap-3">
                    <input {...a11y("consent")} type="checkbox" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-[#d98a3d]" />
                    <span className="text-[0.97rem] leading-snug text-bone/85">I understand this is an inquiry and not a confirmed appointment.</span>
                  </label>
                  {err("consent")}
                </div>
              </fieldset>

              <div>
                <button type="submit" disabled={sending} className="btn btn-primary w-full !min-h-[60px] disabled:opacity-70">
                  {sending ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : "Send tattoo request"}
                </button>
                <p className="mt-3 text-center text-xs text-mute">Demo form — nothing is sent or stored.</p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
