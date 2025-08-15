import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Shield, Award, Users, Globe, Leaf, Heart, Target, CheckCircle } from "lucide-react";
import { companyStats, certifications } from "@/lib/data";

export default function About() {
  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Lauremed Organic India was incorporated with a vision to revolutionize pharmaceutical industry through organic solutions."
    },
    {
      year: "2020",
      title: "First Product Line",
      description: "Launched our first range of organic supplements and herbal medicines with WHO GMP certification."
    },
    {
      year: "2021",
      title: "National Expansion",
      description: "Expanded operations to 15 states across India, establishing key distribution networks."
    },
    {
      year: "2022",
      title: "Quality Certifications",
      description: "Achieved ISO 9001:2015, AYUSH, and organic certifications, reinforcing our commitment to quality."
    },
    {
      year: "2023",
      title: "Market Leadership",
      description: "Became one of India's fastest-growing organic pharmaceutical companies with 2M+ satisfied customers."
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Continuing expansion with focus on research, innovation, and sustainable healthcare solutions."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centric Approach",
      description: "Every decision we make is guided by what's best for patient health and wellbeing.",
      color: "bg-red-500"
    },
    {
      icon: Leaf,
      title: "100% Organic Commitment",
      description: "We source only the finest organic ingredients, ensuring natural healing without compromise.",
      color: "bg-organic-green"
    },
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "Rigorous quality control and international certifications guarantee the highest standards.",
      color: "bg-pharma-blue"
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "Continuous research and development to bring cutting-edge organic solutions to market.",
      color: "bg-purple-500"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Building healthier communities through accessible, affordable organic healthcare.",
      color: "bg-accent-orange"
    },
    {
      icon: Globe,
      title: "Sustainable Practices",
      description: "Environmental responsibility in every aspect of our operations and supply chain.",
      color: "bg-green-600"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Founder & CEO",
      description: "20+ years in pharmaceutical industry with expertise in organic medicine research.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Priya Sharma",
      position: "Chief Scientific Officer",
      description: "Leading researcher in Ayurvedic medicine with 15+ years of experience.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Amit Patel",
      position: "Head of Operations",
      description: "Expert in pharmaceutical manufacturing and quality assurance processes.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Sunita Reddy",
      position: "Director of Research",
      description: "Pioneer in organic pharmaceutical formulations and clinical research.",
      image: "https://images.unsplash.com/photo-1594824388092-d04c3c45ab50?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-organic-green to-pharma-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-about-title">
            About Lauremed Organic India
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed" data-testid="text-about-subtitle">
            Leading the transformation in organic pharmaceutical solutions since 2019, committed to bringing natural wellness to every corner of India and beyond.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop" 
                alt="Modern organic pharmaceutical laboratory" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-mission-vision"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4" data-testid="text-our-mission">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed" data-testid="text-mission-description">
                  To revolutionize healthcare by providing safe, effective, and accessible organic pharmaceutical solutions that harness the power of nature. We are committed to improving lives through sustainable medicine that respects both human health and environmental wellbeing.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4" data-testid="text-our-vision">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed" data-testid="text-vision-description">
                  To become the world's most trusted organic pharmaceutical company, setting new standards for natural healthcare solutions and making organic medicine the first choice for healthcare professionals and patients globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-testid="text-values-title">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-testid="text-values-description">
              These fundamental principles guide every aspect of our operations and decision-making process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow" data-testid={`card-value-${index}`}>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center" data-testid={`text-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center" data-testid={`text-value-description-${index}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-testid="text-timeline-title">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-testid="text-timeline-description">
              From a vision to transform healthcare to becoming India's fastest-growing organic pharmaceutical company.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-organic-green/20 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} data-testid={`milestone-${index}`}>
                  <div className="flex-1 lg:text-right lg:pr-8 lg:pl-0 pl-8">
                    {index % 2 === 0 ? (
                      <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <Badge className="mb-3 bg-organic-green text-white" data-testid={`badge-year-${index}`}>{milestone.year}</Badge>
                          <h3 className="text-xl font-semibold text-gray-800 mb-3" data-testid={`text-milestone-title-${index}`}>
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600" data-testid={`text-milestone-description-${index}`}>
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    ) : null}
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-organic-green rounded-full border-4 border-white shadow-md flex-shrink-0 z-10"></div>
                  
                  <div className="flex-1 lg:text-left lg:pl-8 lg:pr-0 pr-8">
                    {index % 2 === 1 ? (
                      <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <Badge className="mb-3 bg-organic-green text-white" data-testid={`badge-year-${index}`}>{milestone.year}</Badge>
                          <h3 className="text-xl font-semibold text-gray-800 mb-3" data-testid={`text-milestone-title-${index}`}>
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600" data-testid={`text-milestone-description-${index}`}>
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-testid="text-leadership-title">
              Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-testid="text-leadership-description">
              Meet the visionary leaders driving innovation and excellence in organic pharmaceutical solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow text-center" data-testid={`card-team-member-${index}`}>
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      data-testid={`img-team-member-${index}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2" data-testid={`text-member-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-organic-green font-medium mb-3" data-testid={`text-member-position-${index}`}>
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm" data-testid={`text-member-description-${index}`}>
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-organic-green to-pharma-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-stats-title">
              Our Impact in Numbers
            </h2>
            <p className="text-xl opacity-90" data-testid="text-stats-description">
              These numbers reflect our commitment to excellence and growth in organic healthcare.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 text-center">
            <div data-testid="stat-about-customers">
              <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.customers}</div>
              <div className="text-sm opacity-90">Satisfied Customers</div>
            </div>
            <div data-testid="stat-about-companies">
              <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.companies}</div>
              <div className="text-sm opacity-90">Partner Companies</div>
            </div>
            <div data-testid="stat-about-products">
              <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.products}</div>
              <div className="text-sm opacity-90">Organic Products</div>
            </div>
            <div data-testid="stat-about-retailers">
              <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.retailers}</div>
              <div className="text-sm opacity-90">Retail Outlets</div>
            </div>
            <div data-testid="stat-about-space">
              <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.space}</div>
              <div className="text-sm opacity-90">SQFT Facilities</div>
            </div>
            <div data-testid="stat-about-employees">
              <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.employees}</div>
              <div className="text-sm opacity-90">Team Members</div>
            </div>
            <div data-testid="stat-about-industries">
              <div className="text-3xl lg:text-4xl font-bold mb-2">{companyStats.industries}</div>
              <div className="text-sm opacity-90">Industry Presence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-testid="text-quality-title">
              Quality & Certifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" data-testid="text-quality-description">
              Our commitment to excellence is validated by international certifications and quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-16 h-16 text-organic-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3" data-testid="text-quality-assurance">
                  Quality Assurance
                </h3>
                <p className="text-gray-600" data-testid="text-quality-assurance-description">
                  Rigorous testing protocols and quality control measures ensure every product meets the highest standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="w-16 h-16 text-pharma-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3" data-testid="text-international-standards">
                  International Standards
                </h3>
                <p className="text-gray-600" data-testid="text-international-standards-description">
                  Compliance with WHO GMP, FDA guidelines, and ISO certifications for global quality assurance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3" data-testid="text-continuous-monitoring">
                  Continuous Monitoring
                </h3>
                <p className="text-gray-600" data-testid="text-continuous-monitoring-description">
                  Real-time quality monitoring and regular audits ensure consistent product excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6" data-testid="text-certifications-list-title">
              Our Certifications
            </h3>
            <div className="flex justify-center items-center space-x-4 flex-wrap gap-4">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  className="bg-gray-100 text-gray-800 px-6 py-3 text-base font-semibold hover:bg-organic-green hover:text-white transition-colors"
                  data-testid={`badge-about-certification-${index}`}
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6" data-testid="text-cta-title">
            Ready to Experience Organic Excellence?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
            Discover our comprehensive range of organic pharmaceutical products and join millions of satisfied customers who trust Lauremed for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-organic-green hover:bg-organic-dark" data-testid="button-explore-products">
              <Link href="/products">Explore Our Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg" data-testid="button-contact-us">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
