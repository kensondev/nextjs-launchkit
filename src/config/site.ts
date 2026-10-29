export const site = {
  name: "LaunchKit",
  productName: "LaunchKit — SaaS Landing Page & Waitlist Template",
  description:
    "The launchpad for your next big idea. A carefully crafted SaaS landing page and waitlist template built with Next.js.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "hello@example.com",
  colors: {
    brand: "#5254e8",
    brandHover: "#4244cb",
    brandSoft: "#ededff",
    darkBrand: "#9698ff",
    darkSoft: "#252541",
    darkButton: "#6567ed",
    onAccent: "#ffffff",
    avatarOne: "#e9d9ca",
    avatarOneText: "#6d5546",
    avatarTwo: "#d7dfcd",
    avatarTwoText: "#5b6751",
    avatarThree: "#d8d9e9",
    avatarThreeText: "#5c5973",
    avatarFour: "#e9d1cc",
    avatarFourText: "#86594f",
    trafficRed: "#e6b6b1",
    trafficYellow: "#e5d4a5",
    trafficGreen: "#b9d2b5",
  },
  palettes: {
    light: {
      bg: "#fcfcfa",
      surface: "#ffffff",
      surfaceAlt: "#f6f6f3",
      text: "#25262c",
      muted: "#73747e",
      border: "#e8e8e4",
      green: "#368369",
    },
    dark: {
      bg: "#111215",
      surface: "#191a1f",
      surfaceAlt: "#15161b",
      text: "#ededf1",
      muted: "#a0a1ac",
      border: "#2b2c33",
      green: "#80c6a7",
    },
  },
  navigation: [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],
  links: {
    primary: "/#waitlist",
    secondary: "/#preview",
    privacy: "/privacy",
    terms: "/terms",
    home: "/",
    thanks: "/waitlist/thanks",
    waitlistApi: "/api/waitlist",
  },
  controls: {
    menu: "Toggle navigation",
    theme: "Toggle color theme",
    skip: "Skip to content",
    close: "Close menu",
    monthly: "Monthly",
    yearly: "Yearly",
    savings: "Save 20%",
    currency: "$",
    perMonth: "/ month",
    billedYearly: "Billed yearly",
    billedMonthly: "Billed monthly",
    recommended: "Most popular",
  },
  sections: {
    logos: true,
    features: true,
    howItWorks: true,
    preview: true,
    testimonials: true,
    pricing: true,
    faq: true,
    finalCta: true,
  },
  navCta: "Get early access",
  hero: {
    badge: "YOUR NEXT CHAPTER STARTS HERE",
    title: "Big idea.",
    accent: "Meet your launchpad.",
    description:
      'Go from "what if" to out in the world. A beautifully built starting point for your SaaS, so you can focus on what makes it yours.',
    primary: "Get early access",
    secondary: "Take a look inside",
    note: "No credit card. No noise. Just a head start.",
    social: "For makers with something to make.",
    avatars: ["JL", "AK", "MR", "SC"],
  },
  waitlist: {
    label: "Email address",
    placeholder: "Your email address",
    button: "Join the waitlist",
    pending: "Joining…",
    consent: "By joining, you agree to our",
    privacy: "Privacy Policy",
    honeypot: "Leave this field empty",
    invalid: "Enter a valid email address.",
    failure: "We couldn't save your email. Please try again.",
    rateLimited: "Too many attempts. Please try again in a minute.",
    success: "You're on the list.",
    malformed: "Send a valid JSON request.",
    unavailable:
      "The waitlist is temporarily unavailable. Please try again later.",
  },
  logos: {
    heading: "A SMALL HEAD START. BIG POSSIBILITIES.",
    names: ["Layers", "Quotient", "Circooles", "Sisyphus", "Catalog"],
  },
  features: {
    eyebrow: "LESS SETUP. MORE SHIPPING.",
    title: "Everything you need.\nNothing in your way.",
    description:
      "The details are taken care of. The next big thing is up to you.",
    items: [
      {
        icon: "bolt",
        title: "Built to move fast",
        description:
          "Next.js App Router, TypeScript, and Tailwind CSS. A modern stack without the setup weekend.",
      },
      {
        icon: "layout",
        title: "A first impression that lasts",
        description:
          "Thoughtful spacing, crisp typography, and responsive layouts. Every screen gets the same attention.",
      },
      {
        icon: "mail",
        title: "Turn interest into a waitlist",
        description:
          "A working email form with validation and spam protection. Connect your provider and start collecting.",
      },
      {
        icon: "sun",
        title: "Two sides. Equally good.",
        description:
          "Light and dark themes that feel considered, not inverted. Your visitors get to choose.",
      },
      {
        icon: "globe",
        title: "Ready to be discovered",
        description:
          "Search metadata, social previews, and a sitemap. The less visible things that make a difference.",
      },
      {
        icon: "sliders",
        title: "Unmistakably yours",
        description:
          "One config file for your copy, colors, and pricing. Make it your brand, not another rebuild.",
      },
    ],
  },
  how: {
    eyebrow: "FROM IDEA TO INTERNET",
    title: "Your launch, minus the long way.",
    description: "Three small steps between you and something real.",
    steps: [
      {
        title: "Make yourself at home",
        description:
          "Clone the project, install dependencies, and fire up your local server.",
      },
      {
        title: "Put your name on it",
        description:
          "Set your colors, write your story, and connect your waitlist. One config, your whole brand.",
      },
      {
        title: "Give your idea a URL",
        description:
          "Deploy to your favorite host. Share the link. Start finding your first customers.",
      },
    ],
  },
  preview: {
    eyebrow: "A LITTLE LOOK INSIDE",
    title: "Looks like you mean business.",
    description: "Give your idea a home people want to spend time in.",
    badge: "YOUR PRODUCT, IN THE SPOTLIGHT",
    browser: "app.your-next-big-idea.com",
    workspace: "Acme workspace",
    workspaceInitial: "a",
    userInitials: "JD",
    workspaceTag: "PRO",
    navigation: ["Overview", "Analytics", "Audience", "Campaigns", "Settings"],
    greeting: "Here's the big picture.",
    subtitle: "A good day to build something great.",
    period: "Last 30 days",
    metrics: [
      { label: "Total revenue", value: "$24,580", change: "+18.6%" },
      { label: "Active subscribers", value: "1,842", change: "+12.8%" },
      { label: "Conversion rate", value: "8.24%", change: "+2.4%" },
    ],
    chart: "Revenue overview",
    chartNote: "You're heading in the right direction",
    chartLabels: ["30k", "20k", "10k", "0"],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    activity: "Recent activity",
    activities: [
      {
        initials: "JD",
        name: "Jamie Davis",
        action: "Joined the Pro plan",
        time: "2m ago",
      },
      {
        initials: "AL",
        name: "Alex Lee",
        action: "Joined your waitlist",
        time: "12m ago",
      },
      {
        initials: "MK",
        name: "Morgan Kim",
        action: "Joined the Pro plan",
        time: "24m ago",
      },
    ],
    footer: "Illustrative product preview. Built entirely with HTML and CSS.",
  },
  testimonials: {
    eyebrow: "BUILT FOR PEOPLE WHO BUILD",
    title: "Good ideas deserve a head start.",
    ratingLabel: "5 out of 5 stars",
    disclaimer:
      "Illustrative testimonials. Replace these with quotes from your own customers before launch.",
    items: [
      {
        quote:
          "I wanted to spend my weekend building my product, not its landing page. This is exactly the starting point I was looking for.",
        name: "Jamie Lee",
        role: "Independent founder",
        initials: "JL",
      },
      {
        quote:
          "Finally, a template that doesn't feel like a template. Changed the colors, added our story, and it felt like us.",
        name: "Alex Kim",
        role: "Product designer",
        initials: "AK",
      },
      {
        quote:
          "The small details sold me. Dark mode, a real waitlist, and clean code. It feels like someone thought the whole thing through.",
        name: "Morgan Reed",
        role: "SaaS builder",
        initials: "MR",
      },
    ],
  },
  pricing: {
    eyebrow: "SMALL INVESTMENT. BIG HEAD START.",
    title: "Pick your starting point.",
    description:
      "Simple plans for your next chapter. No surprises tucked into the fine print.",
    note: "Example SaaS pricing. Customize these plans for your product. No checkout is connected.",
    tiers: [
      {
        name: "Starter",
        description: "For the idea that won't leave you alone.",
        monthly: 0,
        yearly: 0,
        cta: "Start building",
        featured: false,
        features: [
          "1 project workspace",
          "Up to 100 subscribers",
          "Core analytics",
          "Community support",
        ],
      },
      {
        name: "Pro",
        description: "For turning a side project into your thing.",
        monthly: 19,
        yearly: 15,
        cta: "Get early access",
        featured: true,
        features: [
          "Everything in Starter",
          "Unlimited subscribers",
          "Advanced analytics",
          "Custom domain",
          "Priority support",
        ],
      },
      {
        name: "Team",
        description: "For good people building together.",
        monthly: 49,
        yearly: 39,
        cta: "Bring your team",
        featured: false,
        features: [
          "Everything in Pro",
          "5 team members",
          "Shared workspaces",
          "Team permissions",
          "Dedicated onboarding",
        ],
      },
    ],
  },
  faq: {
    eyebrow: "A FEW THINGS YOU MIGHT BE WONDERING",
    title: "Good questions. Straight answers.",
    items: [
      {
        question: "What exactly is LaunchKit?",
        answer:
          "LaunchKit is a Next.js landing page and waitlist template. You get the source code for this site, including responsive sections, themes, SEO, and a working waitlist endpoint. It is not a full SaaS backend.",
      },
      {
        question: "Do I need to be a developer?",
        answer:
          "You'll need basic React and Next.js knowledge to deploy and extend the template. The copy, colors, links, sections, and pricing live in one TypeScript config file, so rebranding is straightforward.",
      },
      {
        question: "Can I use it for a client project?",
        answer:
          "Yes. LaunchKit is MIT-licensed, so you can use and modify it for any personal, commercial or client project.",
      },
      {
        question: "How does the waitlist work?",
        answer:
          "The form sends an email to a server-side endpoint. Start with local console logging, then connect a webhook or Resend audience using environment variables. No API key is needed for the default mode.",
      },
      {
        question: "Are there any recurring fees?",
        answer:
          "The template itself has no recurring fee. Your hosting and chosen email provider may charge separately. The pricing cards on this demo are examples for your own SaaS.",
      },
      {
        question: "Where can I deploy it?",
        answer:
          "Deploy to Vercel or use Netlify's Next.js integration. Any host that supports the current Next.js Node runtime can run the app and its waitlist endpoint.",
      },
    ],
  },
  finalCta: {
    eyebrow: "THAT IDEA ISN'T GOING TO LAUNCH ITSELF.",
    title: "Less someday.\nMore day one.",
    description: "Your next big thing starts with one small step.",
    button: "Let's make it happen",
  },
  footer: {
    tagline: "A better beginning for your next big thing.",
    copyright: "Kenson Dev. All rights reserved.",
    year: "2026",
    note: "Crafted for the first step.",
    privacy: "Privacy",
    terms: "Terms",
  },
  thanks: {
    eyebrow: "YOU'RE ON THE LIST",
    title: "Good things start here.",
    description:
      "Thanks for raising your hand. We'll be in touch when there's something worth sharing.",
    button: "Back to the beginning",
  },
  notFound: {
    eyebrow: "404 · A SMALL DETOUR",
    title: "This isn't your launchpad.",
    description:
      "The page you're looking for isn't here. Let's get you back on track.",
    button: "Back home",
  },
  legal: {
    notice:
      "Template placeholder. Replace this page with a policy reviewed for your business before collecting real customer data.",
    privacyTitle: "Privacy policy",
    termsTitle: "Terms of service",
    updated: "Last updated: October 29, 2026",
    privacy: [
      {
        heading: "Information you share",
        body: "When you join the waitlist, we receive your email address. Our server also processes your IP address to limit abusive requests. Do not submit sensitive personal information.",
      },
      {
        heading: "How information is used",
        body: "Email addresses are used to manage the waitlist and send relevant launch updates. Depending on the configured provider, they may be logged by the host or sent to a webhook service or Resend. Configure your retention period and processor disclosures before launch.",
      },
      {
        heading: "Your choices",
        body: "Contact the address below to request access, correction, or deletion. This site stores your theme preference in your browser's localStorage. Add any jurisdiction-specific rights and disclosures that apply to your business.",
      },
    ],
    terms: [
      {
        heading: "Using this website",
        body: "This is a demonstration website. Pricing, product metrics, brands, and testimonials are illustrative. Joining the waitlist does not create a purchase or guarantee product availability.",
      },
      {
        heading: "Acceptable use",
        body: "Do not abuse the forms, interfere with the service, or submit someone else's personal information without their permission.",
      },
      {
        heading: "Availability and liability",
        body: "The website is provided as available. Replace these placeholder terms with your own commercial terms, liability provisions, and governing law before launch. The template source is separately covered by the MIT License.",
      },
    ],
    contact: "Questions? Contact",
  },
};
