'use server';

import { validateServiceAvailability } from '@/ai/flows/validate-service-availability';

export async function checkAvailability(zipCode: string, serviceRequested: string) {
  const hasAiKey = !!(process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY);

  const offlineFallback = () => {
    const valid = /^\d{5}$/.test(zipCode);
    if (!valid) {
      return {
        error: 'Please enter a valid 5-digit ZIP code.',
      };
    }
    const lastDigit = Number(zipCode[4]);
    const isAvailable = lastDigit % 2 === 0; // simple deterministic rule
    return {
      isAvailable,
      message: isAvailable
        ? `${serviceRequested} is available in your area.`
        : `${serviceRequested} is currently limited in your area.`,
      alternative: isAvailable ? undefined : 'Exterior Detailing',
    };
  };

  if (!hasAiKey) {
    return offlineFallback();
  }

  try {
    const result = await validateServiceAvailability({ zipCode, serviceRequested });
    return {
      isAvailable: result.isAvailable,
      message: result.availabilityMessage,
      alternative: result.alternativeService,
    };
  } catch (error) {
    console.error('Error checking availability:', error);
    return offlineFallback();
  }
}
