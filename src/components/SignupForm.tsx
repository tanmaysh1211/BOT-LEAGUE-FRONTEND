import { useState, type FormEvent } from "react";
import type { SignupFormState, SignupRole } from "../types";

const EMPTY: SignupFormState = { name: "", location: "", email: "" };

interface SignupFormProps {
  title: string;
  role: SignupRole;
}

export default function SignupForm({ title, role }: SignupFormProps) {
  const [form, setForm] = useState<SignupFormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const fieldId = (field: keyof SignupFormState) => `${role}-${field}`;

  const handleChange = (field: keyof SignupFormState) => (e: FormEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.currentTarget.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.location.trim() || !form.email.trim()) {
      setError("Fill in every field to sign up.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col justify-center border border-line bg-panel-2 p-6 text-center">
        <p className="font-display text-xl text-gold">You&apos;re on the list</p>
        <p className="mt-2 text-sm text-steel">
          Thanks, {form.name.split(" ")[0]}. We&apos;ll reach out about {title.toLowerCase()} openings soon.
        </p>
        <button
          onClick={() => {
            setForm(EMPTY);
            setSubmitted(false);
          }}
          className="mt-4 self-center font-tech text-xs font-bold uppercase tracking-widest text-crimson-glow hover:text-white"
        >
          Sign up another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-panel-2 p-6" noValidate>
      <p className="font-tech text-sm font-bold uppercase tracking-widest text-white">{title}</p>

      <div className="mt-5 flex flex-col gap-3">
        <div>
          <label htmlFor={fieldId("name")} className="sr-only">
            Name
          </label>
          <input
            id={fieldId("name")}
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange("name")}
            className="w-full border border-line bg-void px-4 py-2.5 text-sm text-white placeholder:text-steel/60 outline-none focus:border-crimson"
          />
        </div>
        <div>
          <label htmlFor={fieldId("location")} className="sr-only">
            Location
          </label>
          <input
            id={fieldId("location")}
            type="text"
            placeholder="Location"
            value={form.location}
            onChange={handleChange("location")}
            className="w-full border border-line bg-void px-4 py-2.5 text-sm text-white placeholder:text-steel/60 outline-none focus:border-crimson"
          />
        </div>
        <div>
          <label htmlFor={fieldId("email")} className="sr-only">
            Email
          </label>
          <input
            id={fieldId("email")}
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange("email")}
            className="w-full border border-line bg-void px-4 py-2.5 text-sm text-white placeholder:text-steel/60 outline-none focus:border-crimson"
          />
        </div>
      </div>

      {error && <p className="mt-3 font-tech text-xs font-semibold text-crimson-glow">{error}</p>}

      <button
        type="submit"
        className="mt-4 w-full bg-crimson py-2.5 font-tech text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-crimson-glow"
      >
        Sign Up
      </button>
    </form>
  );
}
