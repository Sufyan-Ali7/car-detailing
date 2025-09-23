'use server';

/**
 * @fileOverview A service availability validation AI agent.
 *
 * - validateServiceAvailability - A function that validates service availability based on zip code.
 * - ValidateServiceAvailabilityInput - The input type for the validateServiceAvailability function.
 * - ValidateServiceAvailabilityOutput - The return type for the validateServiceAvailability function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ValidateServiceAvailabilityInputSchema = z.object({
  zipCode: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/)
    .describe('The zip code to check service availability for.'),
  serviceRequested: z.string().describe('The service requested by the user.'),
});
export type ValidateServiceAvailabilityInput = z.infer<
  typeof ValidateServiceAvailabilityInputSchema
>;

const ValidateServiceAvailabilityOutputSchema = z.object({
  isAvailable: z
    .boolean()
    .describe('Whether the requested service is available in the given zip code.'),
  alternativeService: z
    .string()
    .optional()
    .describe(
      'An alternative service that is available, if the requested service is not.'
    ),
  availabilityMessage: z
    .string()
    .describe(
      'A message to display to the user, indicating availability or estimated availability.'
    ),
});
export type ValidateServiceAvailabilityOutput = z.infer<
  typeof ValidateServiceAvailabilityOutputSchema
>;

export async function validateServiceAvailability(
  input: ValidateServiceAvailabilityInput
): Promise<ValidateServiceAvailabilityOutput> {
  return validateServiceAvailabilityFlow(input);
}

const validateServiceAvailabilityPrompt = ai.definePrompt({
  name: 'validateServiceAvailabilityPrompt',
  input: {schema: ValidateServiceAvailabilityInputSchema},
  output: {schema: ValidateServiceAvailabilityOutputSchema},
  prompt: `You are a service availability checker for a car detailing company.

You will determine whether a requested car detailing service is available for a given zip code.

Based on the zip code ({{{zipCode}}}) and the requested service ({{{serviceRequested}}}), determine the service availability.

Consider factors such as service area coverage, demand, and technician availability.

If the service is not available, suggest an alternative service if possible, or provide an estimated availability date.

Return a JSON object with the following fields:
- isAvailable: true or false
- alternativeService: If the requested service is not available, suggest an alternative.
- availabilityMessage: A message to display to the user, indicating availability or estimated availability.

Example 1:
Input: { zipCode: "90210", serviceRequested: "Ceramic Coating" }
Output: { isAvailable: true, availabilityMessage: "Ceramic Coating is available in your area!" }

Example 2:
Input: { zipCode: "12345", serviceRequested: "Ceramic Coating" }
Output: { isAvailable: false, alternativeService: "Paint Protection", availabilityMessage: "Ceramic Coating is currently unavailable in your area. We recommend Paint Protection as an alternative. Ceramic Coating may be available in your area in 2 weeks." }
`,
});

const validateServiceAvailabilityFlow = ai.defineFlow(
  {
    name: 'validateServiceAvailabilityFlow',
    inputSchema: ValidateServiceAvailabilityInputSchema,
    outputSchema: ValidateServiceAvailabilityOutputSchema,
  },
  async input => {
    const {output} = await validateServiceAvailabilityPrompt(input);
    return output!;
  }
);
