import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Target, Clock, AlertCircle } from 'lucide-react'

export function RehabPage() {
  const navigate = useNavigate()

  const rehabAreas = [
    {
      title: "Neck & Cervical",
      description: "Upper neck and cervical spine rehabilitation",
      duration: "15-20 min",
      exercises: 8,
      color: "from-blue-500 to-cyan-500",
      icon: "🦴"
    },
    {
      title: "Shoulder",
      description: "Rotator cuff and shoulder stability",
      duration: "20-25 min",
      exercises: 12,
      color: "from-purple-500 to-pink-500",
      icon: "💪"
    },
    {
      title: "Wrist & Elbow",
      description: "Forearm and wrist joint mobility",
      duration: "12-18 min",
      exercises: 10,
      color: "from-green-500 to-emerald-500",
      icon: "✋"
    },
    {
      title: "Lower Back",
      description: "Lumbar spine strengthening and mobility",
      duration: "25-30 min",
      exercises: 15,
      color: "from-red-500 to-orange-500",
      icon: "🔙"
    },
    {
      title: "Hip",
      description: "Hip flexor and stability exercises",
      duration: "20-25 min",
      exercises: 11,
      color: "from-yellow-500 to-amber-500",
      icon: "🦵"
    },
    {
      title: "Knee",
      description: "Knee joint stability and strengthening",
      duration: "18-25 min",
      exercises: 13,
      color: "from-indigo-500 to-purple-500",
      icon: "🦵"
    },
    {
      title: "Ankle & Foot",
      description: "Ankle mobility and foot strengthening",
      duration: "15-20 min",
      exercises: 9,
      color: "from-teal-500 to-cyan-500",
      icon: "🦶"
    }
  ]

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
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <Heart className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Rehabilitation</h1>
              <p className="text-muted-foreground">Targeted recovery and therapy exercises</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Important Notice */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="container mx-auto px-4 py-6"
      >
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-yellow-800 mb-1">Important Notice</h3>
            <p className="text-yellow-700 text-sm">
              These exercises are for educational purposes. Always consult with a healthcare professional 
              before starting any rehabilitation program, especially if you have existing injuries or medical conditions.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Rehab Areas Grid */}
      <div className="container mx-auto px-4 pb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rehabAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 card-hover cursor-pointer"
            >
              {/* Area Header */}
              <div className={`h-24 bg-gradient-to-r ${area.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <span className="text-3xl">{area.icon}</span>
                </div>
              </div>

              {/* Area Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">{area.description}</p>

                {/* Area Meta */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      Duration
                    </span>
                    <span className="font-medium">{area.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Target className="w-4 h-4" />
                      Exercises
                    </span>
                    <span className="font-medium">{area.exercises} exercises</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-primary/10 hover:bg-primary hover:text-white text-primary py-3 rounded-lg font-semibold transition-all duration-300">
                  Start Rehabilitation
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-card rounded-2xl border border-border/50 p-8"
        >
          <h2 className="text-xl font-semibold mb-4">How to Use Rehabilitation Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-primary">Getting Started</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Start slowly and listen to your body</li>
                <li>• Stop if you experience sharp pain</li>
                <li>• Consistency is more important than intensity</li>
                <li>• Focus on proper form over speed</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary">When to Seek Help</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Persistent or worsening pain</li>
                <li>• Numbness or tingling sensations</li>
                <li>• Loss of range of motion</li>
                <li>• No improvement after 2-3 weeks</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}