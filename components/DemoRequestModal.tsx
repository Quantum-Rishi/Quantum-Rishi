"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog.tsx";
import { Input } from "./ui/input.tsx";
import { Button } from "./ui/button.tsx";
import { Checkbox } from "./ui/checkbox.tsx";
import { toast } from "sonner";

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  role: "",
  product: "",
  message: "",
  newsletter: false,
};

export function DemoRequestModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  function validate() {
    const errs: any = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.company.trim()) errs.company = "Company is required";
    if (!form.phone.trim() || !/^\+?[0-9\-\s]{7,}$/.test(form.phone)) errs.phone = "Valid phone required";
    if (!form.role.trim()) errs.role = "Role is required";
    if (!form.product.trim()) errs.product = "Product interest required";
    if (!form.message.trim()) errs.message = "Message required";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setForm(initialState);
      setOpen(false);
      toast.success("Demo request submitted! We'll be in touch soon.");
    }, 1200);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
  setForm((f: typeof form) => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
  setForm((f: typeof form) => ({ ...f, [name]: value }));
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
  <Button variant="default" onClick={() => setOpen(true)}>
          Request Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg w-full">
        <DialogHeader>
          <DialogTitle>Request a Demo</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block font-medium">Name</label>
            <Input id="name" name="name" autoComplete="name" value={form.name} onChange={handleChange} required aria-invalid={!!errors.name} aria-describedby="name-error" />
            {errors.name && <span id="name-error" className="text-red-600 text-xs">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <Input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} required aria-invalid={!!errors.email} aria-describedby="email-error" />
            {errors.email && <span id="email-error" className="text-red-600 text-xs">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="company" className="block font-medium">Company</label>
            <Input id="company" name="company" value={form.company} onChange={handleChange} required aria-invalid={!!errors.company} aria-describedby="company-error" />
            {errors.company && <span id="company-error" className="text-red-600 text-xs">{errors.company}</span>}
          </div>
          <div>
            <label htmlFor="phone" className="block font-medium">Phone</label>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} required aria-invalid={!!errors.phone} aria-describedby="phone-error" />
            {errors.phone && <span id="phone-error" className="text-red-600 text-xs">{errors.phone}</span>}
          </div>
          <div>
            <label htmlFor="role" className="block font-medium">Role</label>
            <Input id="role" name="role" value={form.role} onChange={handleChange} required aria-invalid={!!errors.role} aria-describedby="role-error" />
            {errors.role && <span id="role-error" className="text-red-600 text-xs">{errors.role}</span>}
          </div>
          <div>
            <label htmlFor="product" className="block font-medium">Product Interest</label>
            <Input id="product" name="product" value={form.product} onChange={handleChange} required aria-invalid={!!errors.product} aria-describedby="product-error" />
            {errors.product && <span id="product-error" className="text-red-600 text-xs">{errors.product}</span>}
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">Message</label>
            <textarea id="message" name="message" rows={3} className="w-full border rounded px-3 py-2" value={form.message} onChange={handleChange} required aria-invalid={!!errors.message} aria-describedby="message-error" />
            {errors.message && <span id="message-error" className="text-red-600 text-xs">{errors.message}</span>}
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="newsletter" name="newsletter" checked={form.newsletter} onCheckedChange={(checked: boolean | "indeterminate") => setForm((f: typeof form) => ({ ...f, newsletter: checked === true }))} />
            <label htmlFor="newsletter" className="text-sm">Subscribe to our newsletter</label>
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="default" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
