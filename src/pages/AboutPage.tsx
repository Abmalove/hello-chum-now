import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Shield, Users, Award } from 'lucide-react'

export function AboutPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card/50 backdrop-blur-sm border-b border-border/50"
      >
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold">About Ponafit</h1>
          <p className="text-muted-foreground mt-2">Your trusted partner in health and wellness</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Mission Section */}
          <div className="bg-card rounded-2xl border border-border/50 p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Ponafit, we believe that everyone deserves access to professional-grade physiotherapy and fitness guidance. 
              Our mission is to empower individuals to take control of their health journey through evidence-based exercises, 
              expert guidance, and personalized rehabilitation programs.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: Shield,
                title: "Evidence-Based",
                description: "All our exercises are backed by scientific research and developed by certified physiotherapists."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Our content is created by licensed physiotherapists with years of clinical experience."
              },
              {
                icon: Award,
                title: "Personalized Care",
                description: "Tailored exercise programs that adapt to your specific needs and progress level."
              },
              {
                icon: Heart,
                title: "Holistic Approach",
                description: "We focus on complete wellness, combining strength, mobility, and rehabilitation."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-card rounded-xl border border-border/50 p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* What We Offer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-card rounded-2xl border border-border/50 p-8 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
            <div className="space-y-4">
              {[
                "Professional physiotherapy exercises for injury prevention and recovery",
                "Comprehensive fitness programs for home and gym environments",
                "Specialized rehabilitation protocols for various body parts",
                "Stretching and mobility routines for improved flexibility",
                "Progress tracking and personalized workout recommendations",
                "Expert tips and guidance from certified professionals"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <p className="text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of users who have improved their health and wellness with Ponafit.
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started Today
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}