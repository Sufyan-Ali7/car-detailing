"use client";

import { useState } from "react";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Textarea } from "@/component/ui/textarea";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("/api/booking/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.error || "Failed to send message");
      }
      setSuccess("Message sent successfully.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name" className="block text-lg">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className='bg-[#1e1e1e] text-white placeholder:!text-gray-400' placeholder="Your Name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="block text-lg">Email</Label>
        <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#1e1e1e] text-white placeholder:!text-gray-400' type="email" placeholder="your.email@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="block text-lg">Message</Label>
        <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className='bg-[#1e1e1e] text-white placeholder:!text-gray-400' placeholder="How can we help you?" />
      </div>
      <button type="submit" disabled={submitting} className="w-full bg-[#1e1e1e] hover:bg-[#191919] transition-transform duration-300 hover:scale-105 py-3 rounded-2xl">
        {submitting ? "Sending..." : "Send Message"}
      </button>
      {success && <p className="text-green-500 text-sm">{success}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
}


