import { mockSkipOptions } from "@/mocks/skipData";

export interface SkipOption {
  id: number;
  name: string;
  size: number;
  hire_period_days: number;
  price: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  imageUrl?: string;
}

interface ApiSkipResponse {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export const fetchSkipOptions = async (): Promise<SkipOption[]> => {
  const API_URL =
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const skips: ApiSkipResponse[] = await response.json();

    return skips.map((skip) => {
      const vatMultiplier = 1 + skip.vat / 100;
      const totalPrice = +(skip.price_before_vat * vatMultiplier).toFixed(2);

      return {
        id: skip.id,
        name: `${skip.size} Yard Skip`,
        size: skip.size,
        hire_period_days: skip.hire_period_days,
        price: totalPrice,
        allowed_on_road: skip.allowed_on_road,
        allows_heavy_waste: skip.allows_heavy_waste,
        imageUrl: `/skips/${skip.size}yard.png`,
      };
    });
  } catch (error) {
    console.warn("Failed to fetch skip options, using mock data:", error);
    return mockSkipOptions;
  }
};
