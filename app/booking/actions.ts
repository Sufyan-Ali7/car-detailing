'use server';

import { validateServiceAvailability } from '@/ai/flows/validate-service-availability';

export async function checkAvailability(zipCode: string, serviceRequested: string) {
  try {
    const result = await validateServiceAvailability({ zipCode, serviceRequested });
    return {
      isAvailable: result.isAvailable,
      message: result.availabilityMessage,
      alternative: result.alternativeService,
    };
  } catch (error) {
    console.error('Error checking availability:', error);
    return {
      error: 'Could not check availability at this time. Please try again later.',
    };
  }
}
