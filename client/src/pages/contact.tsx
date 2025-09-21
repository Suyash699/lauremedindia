import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Users, Building, HelpCircle } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  company: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      company: "",
      inquiryType: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Lauremed Organic India, C-202/203, 1st floor, Disma Complex",
        "Steel Market, Kalamboli, Navi Mumbai,",
        "Maharashtra 410218, India"
      ],
      color: "text-organic-green/80"
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 7400077781"
      ],
      color: "text-pharma-blue/80"
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "lauremedorganic@gmail.com",
      ],
      color: "text-accent-orange/80"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 7:00 PM",
        "Sunday: Closed"
      ],
      color: "text-green-600"
    }
  ];

  const departments = [
    {
      icon: Users,
      title: "Customer Support",
      description: "General inquiries and product support",
      email: "lauremedorganic@gmail.com",
      phone: "+91 7400077781"
    },
    {
      icon: Building,
      title: "Business Partnership",
      description: "Distribution and partnership opportunities",
      email: "lauremedorganic@gmail.com",
      phone: "+91 7400077781"
    },
    {
      icon: HelpCircle,
      title: "Technical Support",
      description: "Product information and technical queries",
      email: "lauremedorganic@gmail.com",
      phone: "+91 7400077781"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-organic-green/80 to-pharma-blue/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-title">
            Contact Us
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed" data-testid="text-contact-subtitle">
            We're here to help you with any questions about our pharmaceutical products. Reach out to us and experience our commitment to excellent customer service.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`card-contact-info-${index}`}>
                <CardContent className="p-6">
                  <info.icon className={`w-12 h-12 ${info.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold text-gray-800 mb-3" data-testid={`text-contact-info-title-${index}`}>
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm" data-testid={`text-contact-detail-${index}-${detailIndex}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800" data-testid="text-form-title">
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600" data-testid="text-form-description">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        {...register("name")}
                        data-testid="input-name"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600" data-testid="error-name">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email")}
                        data-testid="input-email"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600" data-testid="error-email">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        {...register("phone")}
                        data-testid="input-phone"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-600" data-testid="error-phone">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        placeholder="Enter company name (optional)"
                        {...register("company")}
                        data-testid="input-company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select onValueChange={(value) => setValue("inquiryType", value)}>
                        <SelectTrigger data-testid="select-inquiry-type">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product">Product Information</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="partnership">Business Partnership</SelectItem>
                          <SelectItem value="distribution">Distribution Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.inquiryType && (
                        <p className="text-sm text-red-600" data-testid="error-inquiry-type">
                          {errors.inquiryType.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Enter subject"
                        {...register("subject")}
                        data-testid="input-subject"
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-600" data-testid="error-subject">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Enter your message"
                      {...register("message")}
                      data-testid="textarea-message"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600" data-testid="error-message">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-organic-green/60 hover:bg-organic-dark/80"
                    disabled={isSubmitting}
                    data-testid="button-submit-form"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center" data-testid="map-placeholder">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Interactive Map</p>
                      <p className="text-sm text-gray-400">Navi Mumbai, Maharashtra</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800" data-testid="text-quick-contact-title">
                    Quick Contact Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Button size="sm" className="bg-pharma-blue/80 hover:bg-pharma-dark/80" asChild data-testid="button-call-now">
                      <a href="tel:+917400077781">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button size="sm" className="bg-green-500 hover:bg-green-600" asChild data-testid="button-whatsapp-now">
                      <a href="https://wa.me/917400077781" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600" data-testid="text-response-time">
                    <strong>Average Response Time:</strong> Within 2 hours during business hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contact */}
      <section className="py-16 bg-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-testid="text-departments-title">
              Contact Specific Departments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-testid="text-departments-description">
              For faster assistance, reach out directly to the relevant department based on your inquiry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`card-department-${index}`}>
                <CardContent className="p-6 text-center">
                  <dept.icon className="w-16 h-16 text-organic-green/80 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3" data-testid={`text-department-title-${index}`}>
                    {dept.title}
                  </h3>
                  <p className="text-gray-600 mb-4" data-testid={`text-department-description-${index}`}>
                    {dept.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <a href={`mailto:${dept.email}`} className="text-organic-green/80 hover:underline" data-testid={`link-department-email-${index}`}>
                        {dept.email}
                      </a>
                    </p>
                    <p className="text-sm">
                      <a href={`tel:${dept.phone}`} className="text-pharma-blue/80 hover:underline" data-testid={`link-department-phone-${index}`}>
                        {dept.phone}
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-testid="text-faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-testid="text-faq-description">
              Find quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3" data-testid="text-faq-question-2">
                  Do you offer international shipping?
                </h3>
                <p className="text-gray-600 text-sm" data-testid="text-faq-answer-2">
                  Currently, we serve customers across India. International shipping options are being developed and will be available soon.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3" data-testid="text-faq-question-3">
                  Are your products safe for children?
                </h3>
                <p className="text-gray-600 text-sm" data-testid="text-faq-answer-3">
                  Yes, our products are formulated to be safe for all age groups. However, we recommend consulting with a healthcare provider before use.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3" data-testid="text-faq-question-4">
                  What is your return policy?
                </h3>
                <p className="text-gray-600 text-sm" data-testid="text-faq-answer-4">
                  We offer a 30-day return policy for unopened products. Please contact our customer support team for assistance with returns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
