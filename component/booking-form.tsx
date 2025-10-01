"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useCart } from "@/context/cart-context";
import { Button } from "@/component/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/component/ui/card";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Separator } from "@/component/ui/separator";
import {
  AlertCircle,
  CheckCircle,
  Info,
  Loader2,
  Trash2,
  Car,
} from "lucide-react";
import Link from "next/link";
import { checkAvailability } from "@/app/booking/actions";

interface AvailabilityResult {
  isAvailable?: boolean;
  message?: string;
  alternative?: string;
  error?: string;
}

export function BookingForm() {
  const { cartItems, removeFromCart, cartTotal, clearCart } = useCart();
  const [isPending, startTransition] = useTransition();
  const [availability, setAvailability] = useState<AvailabilityResult | null>(
    null
  );
  const [zipCode, setZipCode] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const lastCheckedZipRef = useRef<string | null>(null);

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [carModel, setCarModel] = useState("");

  // ✅ Booking Submit
  async function handleBookingSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          zipCode,
          address,
          carModel,
          services: cartItems.map((i) => i.name),
          total: cartTotal,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.success) {
        throw new Error(data?.error || "Failed to book service");
      }

      // ✅ Success
      setSuccess("Booking submitted successfully 🎉");
      clearCart();
      setIsSubmitted(true);

      // Reset form fields
      setPhone("");
      setZipCode("");
      setAddress("");
      setCarModel("");
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  // ✅ Availability check (zip code)
  useEffect(() => {
    if (!/^\d{5}$/.test(zipCode) || cartItems.length === 0) {
      setAvailability(null);
      return;
    }

    if (lastCheckedZipRef.current === zipCode) return;

    setIsChecking(true);
    setAvailability(null);

    const timeoutId = setTimeout(() => {
      startTransition(async () => {
        const result = await checkAvailability(zipCode, cartItems[0].name);
        lastCheckedZipRef.current = zipCode;
        setAvailability(result);
        setIsChecking(false);
      });
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [zipCode, cartItems, startTransition]);

  // ✅ If booking is submitted successfully → show success card
  if (isSubmitted && success) {
    return (
      <Card>
        <CardHeader className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <CardTitle className="mt-4 text-2xl font-headline">
            Booking Confirmed!
          </CardTitle>
          <CardDescription>{success}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  // ✅ If cart empty
  if (cartItems.length === 0) {
    return (
      <Card>
        <CardHeader className="text-center">
          <Car className="mx-auto h-12 w-12 text-muted-foreground" />
          <CardTitle className="font-headline">Your Cart is Empty</CardTitle>
          <CardDescription>
            You haven't selected any services yet.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button asChild>
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleBookingSubmit}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
        {/* Left Side: Customer Info */}
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Your Information</CardTitle>
            <CardDescription>
              Please provide your details for the booking.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                className=" bg-[#1e1e1e] text-white placeholder:!text-gray-400"
                type="tel"
                placeholder="(555) 123-4567"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Zip Code */}
            <div className="space-y-2">
              <Label htmlFor="zip">Zip Code</Label>
              <Input
                id="zip"
                className="bg-[#1e1e1e] text-white placeholder:!text-gray-400"
                placeholder="e.g., 90210"
                required
                inputMode="numeric"
                pattern="\d{5}"
                maxLength={5}
                value={zipCode}
                onChange={(e) => {
                  const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 5);
                  setZipCode(digitsOnly);
                  if (digitsOnly.length < 5) {
                    setAvailability(null);
                  }
                }}
              />
              {isChecking && (
                <p className="mt-2 flex items-center text-sm text-muted-foreground">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Checking
                  availability...
                </p>
              )}
              {availability?.error && (
                <p className="mt-2 flex items-center text-sm text-destructive">
                  <AlertCircle className="mr-2 h-4 w-4" /> {availability.error}
                </p>
              )}
              {availability?.message && (
                <p
                  className={`mt-2 flex items-center text-sm ${
                    availability.isAvailable
                      ? "text-green-600"
                      : "text-orange-600"
                  }`}
                >
                  {availability.isAvailable ? (
                    <CheckCircle className="mr-2 h-4 w-4" />
                  ) : (
                    <Info className="mr-2 h-4 w-4" />
                  )}
                  {availability.message}{" "}
                  {availability.alternative &&
                    `We suggest: ${availability.alternative}.`}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="space-y-2 ">
              <Label htmlFor="address">Complete Address</Label>
              <Input
                id="address"
                className="bg-[#1e1e1e] text-white placeholder:!text-gray-400"
                placeholder="123 Luxury Lane, Beverly Hills, CA"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Car Model */}
            <div className="space-y-2">
              <Label htmlFor="car-model">Car Model</Label>
              <Input
                id="car-model"
                className="bg-[#1e1e1e] text-white placeholder:!text-gray-400"
                placeholder="e.g., Porsche 911 Carrera"
                required
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Right Side: Cart Summary */}
        <Card className="bg-[#000000] ">
          <CardHeader>
            <CardTitle className="font-headline text-white">
              Booking Summary
            </CardTitle>
            <CardDescription className="text-gray-300">
              These are the services you've selected.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium text-gray-300">{item.name}</p>
                    <p className="text-sm text-gray-300">
                      {typeof item.price === "number"
                        ? `$${item.price}`
                        : item.price ?? "Price not available"}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="h-5 w-6 text-red-600 hover:text-red-800" />
                  </button>
                </div>
              ))}
              <Separator />
              <div className="flex items-center justify-between font-medium text-white">
                <p>Total</p>
                <p>${cartTotal.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <button
              type="submit"
              className="w-full bg-[#1e1e1e] hover:bg-[#191919] transition-transform duration-300 hover:scale-105 py-3 rounded-2xl "
              disabled={submitting || !availability?.isAvailable}
            >
              {submitting && <Loader2 className="mr-2 mt-4 h-4 w-4 animate-spin" />}
              {submitting ? "Submitting..." : "Book Now (Pay After Service)"}
            </button>
          </CardFooter>

          {/* ✅ show feedback */}
          {success && (
            <p className="text-center text-green-500 mt-2">{success}</p>
          )}
          {error && <p className="text-center text-red-500 mt-2">{error}</p>}
        </Card>
      </div>
    </form>
  );
}
