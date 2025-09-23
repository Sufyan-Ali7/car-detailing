# UI Components Library

This project now includes a comprehensive set of UI components built with shadcn/ui, Radix UI, and Tailwind CSS.

## 🎨 Available Components

### Form Components
- **Button** - Various button styles and sizes
- **Input** - Text input fields
- **Textarea** - Multi-line text input
- **Label** - Form labels
- **Checkbox** - Checkbox inputs
- **Switch** - Toggle switches
- **RadioGroup** - Radio button groups
- **Select** - Dropdown select menus
- **Slider** - Range sliders
- **Form** - Form wrapper with validation
- **Calendar** - Date picker and calendar component

### Layout Components
- **Card** - Content containers with header, content, and footer
- **Separator** - Visual dividers
- **Tabs** - Tabbed content organization
- **Dialog** - Modal dialogs
- **Sheet** - Slide-out panels
- **Popover** - Floating content containers
- **Tooltip** - Hover information displays

### Data Display
- **Table** - Data tables with sorting and filtering
- **Badge** - Status indicators and labels
- **Progress** - Progress bars
- **Skeleton** - Loading placeholders
- **Chart** - Data visualization components
- **Avatar** - User profile pictures and fallbacks
- **Accordion** - Collapsible content sections

### Navigation
- **Menubar** - Menu bars
- **Dropdown Menu** - Dropdown menus
- **Sidebar** - Side navigation panels
- **Scroll Area** - Custom scrollable areas

### Feedback
- **Toast** - Notification messages
- **Alert Dialog** - Confirmation dialogs
- **Alert** - Important messages and notifications

### Utility
- **Collapsible** - Collapsible content sections
- **Carousel** - Image/content carousels

## 🚀 Usage

### Basic Import
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
```

### Example Usage
```tsx
function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## 🎯 Key Features

- **Accessible** - Built on Radix UI primitives
- **Customizable** - Easy to theme and modify
- **TypeScript** - Full type safety
- **Responsive** - Mobile-first design
- **Dark Mode** - Built-in dark mode support
- **Consistent** - Unified design system

## 🛠️ Dependencies

The components use these key dependencies:
- `@radix-ui/*` - Accessible UI primitives
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - Conditional styling
- `lucide-react` - Icons
- `react-hook-form` - Form handling
- `embla-carousel-react` - Carousel functionality

## 📁 File Structure

```
components/
├── ui/
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── dialog.tsx
│   ├── form.tsx
│   └── ... (all other components)
├── ui-example.tsx (showcase component)
└── ...
```

## 🎨 Theming

The components use CSS variables for theming. You can customize colors by modifying the variables in `app/globals.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... other variables */
}
```

## 📖 Documentation

For detailed component documentation, visit:
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)

## 🔧 Customization

Each component can be customized by:
1. Modifying the component file directly
2. Using className props to override styles
3. Extending the component with additional props
4. Creating new variants using `class-variance-authority`

## 🚀 Getting Started

1. Import the components you need
2. Use them in your JSX
3. Customize with Tailwind classes
4. Add your own styling as needed

The components are ready to use in your car detailing application!
