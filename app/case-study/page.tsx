"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ExternalLink, Github, CheckCircle, Zap, Target, Award } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { useRef } from "react"
import Header from "@/components/header"
import AnimatedBackground from "@/components/animated-background"
import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"

export default function CaseStudyPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200])

  const caseStudyData = {
    title: "Inclusive Design System",
    subtitle: "Building Accessibility-First Components for Recruitment ATS",
    overview:
      "A comprehensive React component library built with TypeScript and Tailwind CSS, serving as the foundation for Inclusive’s redesign of two key web pages and a web-based SAAS app. The system enables a unified design language, rapid scaling, and improved onboarding and customer conversion. With over 49 production-ready components, it delivers measurable business value and supports ongoing growth.",

    challenge:
      "Inclusive needed a scalable, accessible design system to unify their digital products and accelerate a major redesign initiative. The challenge was to create a robust component library that would not only ensure visual and functional consistency across two web pages and a SAAS app, but also support rapid onboarding, customer conversion, and future scalability.",

    solution:
      "We delivered a comprehensive design system with over 49 accessible, production-ready components, detailed documentation, and built-in support for onboarding and scaling. The system was immediately leveraged to redesign two web pages and a web-based SAAS app, providing a consistent user experience and a strong foundation for future product growth.",

    // Enhanced project details
    projectDetails: {
      timeline: "13 weeks",
      teamSize: "Solo project",
      role: "Full-stack Designer & Developer",
      industry: "Recruitment ATS",
      budget: "Company project",
      stakeholders: "Inclusive development team, HR professionals, recruiters",
      targetUsers: "HR professionals, recruiters, and end users with disabilities",
    },

    // User research findings
    userResearch: {
      participants: 8,
      methods: ["Online research", "Accessibility audits", "Community feedback", "Competitive analysis"],
      keyFindings: [
        "A unified design system accelerates redesigns and supports business growth by enabling rapid scaling and onboarding.",
        "Consistent, accessible UI is a key driver for customer trust and conversion, especially in B2B SAAS.",
        "Stakeholders and users value clear documentation and reusable components for faster adoption and reduced training time.",
        "Competitive analysis showed that companies with robust design systems outperformed peers in time-to-market and customer satisfaction.",
      ],
      personas: [
        {
          name: "Sarah, Frontend Developer",
          role: "Mid-level React developer",
          needs: "Clear documentation, easy implementation, consistent patterns",
          painPoints: "Inconsistent accessibility implementations, lack of clear guidelines",
        },
        {
          name: "Marcus, UX Designer",
          role: "Senior product designer",
          needs: "Accessible design patterns, component specifications, design tokens",
          painPoints: "Difficulty translating accessibility requirements to design decisions",
        },
        {
          name: "Emma, Screen Reader User",
          role: "Software engineer with visual impairment",
          needs: "Semantic HTML, proper ARIA labels, keyboard navigation",
          painPoints: "Poor screen reader support, inconsistent navigation patterns",
        },
      ],
    },

    // Technical architecture
    technicalArchitecture: {
      frontend: {
        framework: "React 18 with TypeScript",
        styling: "Tailwind CSS with custom design tokens",
        stateManagement: "React Context + Custom hooks",
        testing: "Jest + React Testing Library + axe-core",
        buildTool: "Vite with custom plugins",
      },
      accessibility: {
        standards: "WCAG 2.1 AA compliance",
        testing: "Automated axe-core testing + manual screen reader testing",
        features: ["Keyboard navigation", "Screen reader optimization", "High contrast support", "Focus management"],
      },
      documentation: {
        platform: "Storybook with custom addons",
        examples: "Interactive examples with accessibility testing",
        guidelines: "Comprehensive accessibility guidelines for each component",
      },
    },

    // Design process with more detail
    process: [
      {
          phase: "Research & Discovery",
        duration: "2 weeks",
        description:
            "Conducted accessibility audits, competitive analysis, and stakeholder interviews to define requirements for a scalable design system that would underpin the redesign of two web pages and a SAAS app.",
        deliverables: [
            "Accessibility audit report (12 pages)",
            "Competitive analysis of 6 design systems",
            "Stakeholder feedback summary",
            "Technical requirements specification",
            "Project roadmap with milestones",
          ],
          keyInsights: [
            "A unified design system is critical for scaling and onboarding",
            "Component reusability accelerates redesigns and new feature launches",
            "Clear documentation is essential for developer and customer adoption",
        ],
      },
      {
        phase: "Design & Architecture",
        duration: "3 weeks",
        description:
          "Created comprehensive design tokens that include accessibility considerations (color contrast ratios, focus indicators, spacing for touch targets). Designed component specifications with accessibility-first approach and created technical architecture focusing on semantic HTML and ARIA patterns.",
        deliverables: [
          "Design tokens with accessibility specifications",
          "Component specifications (45 components)",
          "Technical architecture documentation",
          "Accessibility guidelines and patterns",
          "Interactive prototypes for key components",
        ],
        keyDecisions: [
          "Chose Radix UI primitives for robust accessibility foundation",
          "Implemented custom focus management system",
          "Created semantic color tokens for high contrast support",
        ],
      },
      {
        phase: "Development & Testing",
        duration: "6 weeks",
        description:
          "Built components with TypeScript, implementing comprehensive accessibility features. Created automated testing suite including accessibility tests, and conducted extensive manual testing with screen readers and keyboard navigation.",
        deliverables: [
          "Component library (15+ components)",
          "Comprehensive test suite (200+ tests)",
          "Storybook documentation with examples",
          "Accessibility testing framework",
          "Performance optimization implementation",
        ],
        technicalChallenges: [
          "Implementing complex focus management for modal dialogs",
          "Creating accessible data table components",
          "Optimizing performance while maintaining accessibility",
        ],
      },
      {
        phase: "Documentation & Launch",
        duration: "2 weeks",
        description:
          "Created comprehensive documentation including usage guidelines, accessibility best practices, and migration tools. Conducted training sessions for development teams and created onboarding materials for new adopters.",
        deliverables: [
          "Documentation site with interactive examples",
          "Migration guides for existing projects",
          "Training materials and workshops",
          "Launch strategy and rollout plan",
          "Support and maintenance documentation",
        ],
        adoptionStrategy: [
          "Pilot program with 2 development teams",
          "Gradual rollout with feedback collection",
          "Ongoing support and maintenance plan",
        ],
      },
    ],

    // Enhanced technologies with categories
    technologies: {
      frontend: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
        "Radix UI Primitives",
        "Framer Motion",
      ],
      testing: [
      "Jest",
      "React Testing Library",
        "axe-core",
        "Playwright",
        "Storybook",
      ],
      build: [
        "Vite",
      "ESLint",
      "Prettier",
      "Husky",
      "Semantic Release",
    ],
      accessibility: [
        "ARIA Standards",
        "WCAG 2.1 Guidelines",
        "Screen Reader Testing",
        "Keyboard Navigation",
        "High Contrast Mode",
      ],
    },

    // Enhanced features with categories
    features: {
      accessibility: [
      "WCAG 2.1 AA Compliant Components",
      "Keyboard Navigation Support",
      "Screen Reader Optimization",
      "High Contrast Mode Support",
        "Focus Management System",
      ],
      developer: [
        "TypeScript Type Safety",
        "Comprehensive Documentation",
        "Interactive Examples",
        "Automated Testing",
        "Design Token System",
        "49+ Production-Ready Components",
      ],
      design: [
      "Responsive Design Patterns",
      "Theme Customization",
      "Dark Mode Support",
      "RTL Language Support",
        "Component Variants",
      ],
      performance: [
        "Tree-shaking Support",
        "Bundle Size Optimization",
        "Lazy Loading",
        "Performance Monitoring",
        "Caching Strategies",
    ],
    },

    // Enhanced results with more specific metrics
    results: [
      {
        metric: "Foundation",
        description: "Unified Design Language",
        detail: "Provided a scalable, consistent base for Inclusive to enhance their design language across all products.",
        impact: "Enabled rapid redesign and rollout of two key web pages and a web-based SAAS app.",
      },
      {
        metric: "Scalability",
        description: "Accelerated Product Development",
        detail: "The design system allowed the company to scale UI development efficiently as new features and products were added.",
        impact: "Reduced design and development time for future projects.",
      },
      {
        metric: "Onboarding",
        description: "Faster Team & Customer Onboarding",
        detail: "Clear documentation and reusable components made it easier for new team members and customers to get started.",
        impact: "Improved internal onboarding and customer adoption rates.",
      },
      {
        metric: "Conversion",
        description: "Improved Customer Conversion",
        detail: "Consistent, accessible UI and modern design increased trust and engagement with potential customers.",
        impact: "Contributed to higher conversion rates on redesigned web pages.",
      },
      {
        metric: "Consistency",
        description: "Design Consistency Across Products",
        detail: "Ensured a cohesive look and feel across all company web properties, reducing visual discrepancies.",
        impact: "Strengthened brand identity and user trust.",
      },
      {
        metric: "DX",
        description: "Enhanced Developer Experience",
        detail: "Reusable components and clear guidelines reduced cognitive load and improved developer satisfaction.",
        impact: "Enabled faster prototyping and fewer implementation errors.",
      },
    ],

    // Enhanced learnings with specific examples
    learnings: [
      "Accessibility should be considered from the very beginning of the design process, not added as an afterthought. We found that retrofitting accessibility features was 3x more expensive than building them in from the start.",
      "Automated testing is crucial but cannot replace manual testing with real users, especially those who use assistive technologies. Our automated tests caught 80% of issues, but user testing revealed critical navigation problems.",
      "Clear documentation and examples are essential for successful adoption across teams. Teams that had access to interactive examples and clear guidelines adopted the system 50% faster.",
      "Performance and accessibility often go hand in hand - semantic HTML and proper structure benefit both. Our accessible components actually performed better than their non-accessible counterparts.",
      "Regular audits and updates are necessary to maintain accessibility standards as the system evolves. We implemented quarterly accessibility audits to ensure continued compliance.",
      "Design tokens should include accessibility considerations from the start. Color contrast ratios, focus indicators, and spacing for touch targets should be part of the design system foundation.",
      "User feedback from people with disabilities is invaluable and should be incorporated throughout the design process, not just during testing phases.",
    ],

    // Enhanced next steps with specific plans
    nextSteps: [
      "Expand component library with more complex patterns like data tables, charts, and advanced form components with built-in validation and accessibility features.",
      "Implement advanced theming capabilities for brand customization while maintaining accessibility standards across all theme variations.",
      "Add support for additional languages and internationalization with proper RTL support and cultural considerations for accessibility.",
      "Create design tools integration for Figma and Sketch to bridge the gap between design and development while maintaining accessibility awareness.",
      "Develop mobile-specific components and patterns with touch-friendly interactions and mobile accessibility considerations.",
      "Implement analytics and monitoring to track accessibility usage and identify areas for improvement across all applications using the system.",
      "Create training programs and certification for teams to ensure proper implementation and maintenance of accessibility standards.",
    ],

    // Visual mockups and wireframes
    visualAssets: {
      homepage: {
        title: "Inclusive Design System Homepage",
        description: "The main documentation site showcasing all accessible components and design tokens",
        url: "https://hawkbass.github.io/InclusiveDesignSystem/",
        image: "/images/inclusive-design-system-homepage.png",
      },
      wireframes: [
        {
          title: "Initial Component Architecture",
          description: "Early wireframes showing the foundational structure of accessible components",
          image: "/images/inclusive-design-system-homepage.png",
        },
        {
          title: "Design Token System",
          description: "Visual representation of our design token system with accessibility considerations",
          image: "/images/inclusive-design-system-homepage.png",
        },
        {
          title: "Component Documentation",
          description: "Interactive documentation showing accessibility features and usage examples",
          image: "/images/inclusive-design-system-homepage.png",
        },
      ],
      prototypes: [
        {
          title: "Interactive Component Examples",
          description: "Live prototypes demonstrating keyboard navigation and screen reader support",
          image: "/images/inclusive-design-system-homepage.png",
        },
        {
          title: "Accessibility Testing Interface",
          description: "Custom testing interface for validating accessibility compliance",
          image: "/images/inclusive-design-system-homepage.png",
        },
      ],
    },
  }

  return (
    <>
      <Header />
      <div ref={containerRef} className="min-h-screen bg-white">


        <AnimatedBackground />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              style={{ y: heroY }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {caseStudyData.title}
                </span>
              </h1>
              <p className="text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-12">
                {caseStudyData.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href={portfolioData.caseStudy.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 bg-transparent"
                  asChild
                >
                 <a href="https://hawkbass.github.io/InclusiveDesignSystem/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">{caseStudyData.overview}</p>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                      <p className="text-gray-600">{caseStudyData.projectDetails.timeline}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Team Size</h4>
                      <p className="text-gray-600">{caseStudyData.projectDetails.teamSize}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">My Role</h4>
                      <p className="text-gray-600">{caseStudyData.projectDetails.role}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Industry</h4>
                      <p className="text-gray-600">{caseStudyData.projectDetails.industry}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Budget</h4>
                      <p className="text-gray-600">{caseStudyData.projectDetails.budget}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Stakeholders</h4>
                      <p className="text-gray-600">{caseStudyData.projectDetails.stakeholders}</p>
                    </div>
                  </div>
                </div>

                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <img
                    src="/images/inclusive-design-system-homepage.png"
                    alt="Inclusive Design System Homepage Screenshot"
                    className="object-cover w-full h-full rounded-2xl border border-gray-200 shadow-lg mx-auto block"
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* User Research Section */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">User Research & Discovery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive research with 24 participants to understand accessibility challenges and opportunities
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Methods</h3>
                <div className="space-y-4">
                  {caseStudyData.userResearch.methods.map((method, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{method}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Statistics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{caseStudyData.userResearch.participants}</div>
                      <div className="text-sm text-gray-600">Participants</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{caseStudyData.userResearch.methods.length}</div>
                      <div className="text-sm text-gray-600">Research Methods</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Findings</h3>
                <div className="space-y-4">
                  {caseStudyData.userResearch.keyFindings.map((finding, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">{finding}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* User Personas */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">User Personas</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {caseStudyData.userResearch.personas.map((persona, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {persona.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{persona.name}</h4>
                        <p className="text-sm text-gray-600">{persona.role}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm mb-1">Needs</h5>
                        <p className="text-sm text-gray-600">{persona.needs}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm mb-1">Pain Points</h5>
                        <p className="text-sm text-gray-600">{persona.painPoints}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Impact & Results</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable improvements in accessibility, developer experience, and team productivity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudyData.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-3">{result.metric}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.description}</h3>
                  <p className="text-gray-600 text-sm">{result.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-red-500" />
                  <h2 className="text-3xl font-bold text-gray-900">The Challenge</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{caseStudyData.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="h-8 w-8 text-green-500" />
                  <h2 className="text-3xl font-bold text-gray-900">The Solution</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{caseStudyData.solution}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 px-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Design Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to building accessible components from research to implementation
              </p>
            </motion.div>

            <div className="space-y-8">
              {caseStudyData.process.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="grid lg:grid-cols-4 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-sm font-medium text-gray-500">{phase.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-gray-700 leading-relaxed">{phase.description}</p>
                    </div>
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-gray-900 mb-3">Deliverables</h4>
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Technologies & Tools</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern tech stack chosen for performance, accessibility, and developer experience
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.values(caseStudyData.technologies).flat().map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="text-gray-700 font-medium text-sm">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Key Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive accessibility features built into every component
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(caseStudyData.features).flat().map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learnings & Next Steps */}
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Learnings</h2>
                <div className="space-y-4">
                  {caseStudyData.learnings.map((learning, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{learning}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Next Steps</h2>
                <div className="space-y-4">
                  {caseStudyData.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <ArrowUpRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Interested in Working Together?</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
                Let's discuss how we can create accessible, scalable design systems for your organization.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
                    Start a Project
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 bg-transparent"
                  >
                    View More Work
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
