"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Calendar, DollarSign, Instagram, MessageSquare, Scissors, Sparkles, Star, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Services", id: "services" },
            { name: "Pricing", id: "pricing" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Elite Cuts"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Barbershop Experience"
          description="Expert cuts, classic shaves, and modern styling in a relaxed atmosphere. Book your appointment today."
          tag="Elite Cuts"
          tagIcon={Scissors}
          buttons={[
            { text: "Book Appointment", href: "contact" },
            { text: "View Services", href: "services" }
          ]}
          imageSrc="https://images.pexels.com/photos/7750099/pexels-photo-7750099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern barbershop interior"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardOne
          title="Our Services"
          description="Professional barbering services tailored to your style and preferences"
          tag="Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Premium Haircuts",
              description: "Precision cuts tailored to your face shape and personal style with consultation included",
              imageSrc: "https://images.pexels.com/photos/8468129/pexels-photo-8468129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional haircut service"
            },
            {
              title: "Beard Grooming",
              description: "Expert beard trimming and shaping to complement your facial features perfectly",
              imageSrc: "https://images.pexels.com/photos/897251/pexels-photo-897251.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional beard trimming"
            },
            {
              title: "Classic Shaves",
              description: "Traditional hot towel shaves with premium products for the ultimate relaxation experience",
              imageSrc: "https://images.pexels.com/photos/7697490/pexels-photo-7697490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional straight razor shave"
            },
            {
              title: "Hair Styling",
              description: "Modern styling techniques with premium products to achieve your desired look",
              imageSrc: "https://images.pexels.com/photos/3944792/pexels-photo-3944792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional hair styling"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Service Packages"
          description="Choose the perfect package for your grooming needs"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "basic",
              price: "$35",
              name: "Essential Cut",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "services" }
              ],
              features: [
                "Professional haircut",
                "Wash and style",
                "Basic consultation",
                "30-minute appointment"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$65",
              name: "Complete Grooming",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "services" }
              ],
              features: [
                "Premium haircut & style",
                "Beard trim & shape",
                "Hot towel treatment",
                "Styling products included",
                "60-minute appointment"
              ]
            },
            {
              id: "luxury",
              price: "$95",
              name: "VIP Experience",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "services" }
              ],
              features: [
                "Master barber service",
                "Full grooming package",
                "Classic straight razor shave",
                "Premium product selection",
                "Complimentary beverage",
                "90-minute appointment"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Master Barbers"
          description="Experienced professionals dedicated to your perfect look"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marcus Rodriguez",
              role: "Master Barber",
              description: "15+ years of experience specializing in classic cuts and modern styling. Trained in traditional barbering techniques.",
              imageSrc: "https://images.pexels.com/photos/7697350/pexels-photo-7697350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Rodriguez - Master Barber",
              socialLinks: [{
                icon: Instagram,
                url: "https://instagram.com/marcuscuts"
              }]
            },
            {
              id: "2",
              name: "David Chen",
              role: "Senior Barber",
              description: "Expert in fade techniques and beard grooming with 10 years of professional experience in luxury barbershops.",
              imageSrc: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Chen - Senior Barber",
              socialLinks: [{
                icon: Instagram,
                url: "https://instagram.com/davidcuts"
              }]
            },
            {
              id: "3",
              name: "Alex Thompson",
              role: "Barber & Stylist",
              description: "Passionate about contemporary styling and precision cuts. Specializes in trendy looks for the modern gentleman.",
              imageSrc: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Thompson - Barber & Stylist",
              socialLinks: [{
                icon: Instagram,
                url: "https://instagram.com/alexstyles"
              }]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Hear from satisfied customers about their Elite Cuts experience"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "James Wilson",
              role: "Business Executive",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7447126/pexels-photo-7447126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Wilson",
              content: "Elite Cuts consistently delivers exceptional service. The attention to detail and professionalism is unmatched."
            },
            {
              id: "2",
              name: "Michael Brown",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4817148/pexels-photo-4817148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Brown",
              content: "The best barbershop experience I've ever had. The team really knows their craft and the atmosphere is perfect."
            },
            {
              id: "3",
              name: "Robert Davis",
              role: "Software Engineer",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6616125/pexels-photo-6616125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Davis",
              content: "Professional service and amazing results every time. I wouldn't trust my hair to anyone else."
            },
            {
              id: "4",
              name: "Thomas Anderson",
              role: "Consultant",
              company: "Anderson & Associates",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7519013/pexels-photo-7519013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Thomas Anderson",
              content: "Elite Cuts provides a premium experience that's worth every penny. Highly recommended for any gentleman."
            },
            {
              id: "5",
              name: "Kevin Miller",
              role: "Graduate Student",
              company: "City University",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3779445/pexels-photo-3779445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Kevin Miller",
              content: "Great prices for students and the quality is always top-notch. The barbers really care about getting it right."
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Elite Cuts"
          description={[
            "We're a premium barbershop dedicated to providing exceptional grooming services in a comfortable, masculine environment.",
            "Our experienced barbers combine traditional techniques with modern styling to deliver the perfect cut every time."
          ]}
          buttons={[
            { text: "Visit Us", href: "contact" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Now"
          tagIcon={Calendar}
          title="Schedule Your Appointment"
          description="Ready for a fresh cut? Get in touch to book your appointment at Elite Cuts. Walk-ins welcome, appointments preferred."
          imageSrc="https://images.pexels.com/photos/20471182/pexels-photo-20471182.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Barbershop tools and equipment"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Book Appointment"
          termsText="By booking, you agree to our appointment policy. Cancellations accepted 24 hours in advance."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Elite Cuts"
          columns={[
            {
              items: [
                { label: "Services", href: "services" },
                { label: "Pricing", href: "pricing" },
                { label: "Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "About", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Book Now", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}