import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Play, ArrowRight, Activity, Users, Award } from 'lucide-react'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
              <Activity className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6"
          >
            Ponafit
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
          >
            Move well. Live well
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Your personal physiotherapy & fitness companion. Recover faster, move better, and stay strong with guided exercises, progress tracking, and expert tips — all in one app.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => navigate('/dashboard')}
              className="group relative overflow-hidden bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <Play className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => navigate('/about')}
              className="group text-primary font-semibold text-lg px-8 py-4 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:bg-primary/5"
            >
              <span className="flex items-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Activity,
              title: "Guided Exercises",
              description: "Professional physiotherapy and fitness routines tailored to your needs"
            },
            {
              icon: Users,
              title: "Expert Guidance",
              description: "Evidence-based exercises designed by certified physiotherapists"
            },
            {
              icon: Award,
              title: "Progress Tracking",
              description: "Monitor your recovery and fitness journey with detailed analytics"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
              className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300 card-hover"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}