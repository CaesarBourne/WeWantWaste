import {
  MapPin,
  Trash2,
  Truck,
  Shield,
  CalendarDays,
  CreditCard,
} from "lucide-react";

export const orderSteps = [
  { id: 1, name: "Postcode", icon: MapPin, completed: true, current: false },
  {
    id: 2,
    name: "Waste Type",
    icon: Trash2,
    completed: true,
    current: false,
  },
  {
    id: 3,
    name: "Select Skip",
    icon: Truck,
    completed: false,
    current: true,
  },
  {
    id: 4,
    name: "Permit Check",
    icon: Shield,
    completed: false,
    current: false,
  },
  {
    id: 5,
    name: "Choose Date",
    icon: CalendarDays,
    completed: false,
    current: false,
  },
  {
    id: 6,
    name: "Payment",
    icon: CreditCard,
    completed: false,
    current: false,
  },
];
