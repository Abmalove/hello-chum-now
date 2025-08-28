import { motion } from 'framer-motion'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowLeft, Home, Dumbbell, Stretch, Target, Clock, BarChart } from 'lucide-react'

export function ExercisesPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') || 'home'

  const exerciseCategories = {
    home: [
      {
        title: "Full Body Workout",
        description: "Complete bodyweight routine",
        duration: "30-45 min",
        difficulty: "Beginner",
        icon: Target,
        color: "from-blue-500 to-cyan-500"
      },
      {
        title: "Upper Body Strength",
        description: "Build upper body power",
        duration: "25-35 min",
        difficulty: "Intermediate",
        icon: BarChart,
        color: "from-purple-500 to-pink-500"
      },
      {
        title: "Lower Body Power",
        description: "Leg and glute focused",
        duration: "20-30 min",
        difficulty: "Beginner",
        icon: Target,
        color: "from-green-500 to-emerald-500"
      },
      {
        title: "Core Stability",
        description: "Strengthen your core",
        duration: "15-25 min",
        difficulty: "All Levels",
        icon: Clock,
        color: "from-orange-500 to-red-500"
      }
    ],
    gym: [
      {
        title: "Strength Training",
        description: "Progressive overload program",
        duration: "45-60 min",
        difficulty: "Intermediate",
        icon: Dumbbell,
        color: "from-red-500 to-pink-500"
      },
      {
        title: "Cardio + Weights",
        description: "Mixed training approach",
        duration: "40-50 min",
        difficulty: "Advanced",
        icon: BarChart,
        color: "from-purple-500 to-indigo-500"
      },
      {
        title: "Powerlifting Basics",
        description: "Learn the big three",
        duration: "60-75 min",
        difficulty: "Beginner",
        icon: Target,
        color: "from-green-500 to-teal-500"
      },
      {
        title: "Functional Training",
        description: "Real-world movements",
        duration: "35-45 min",
        difficulty: "All Levels",
        icon: Clock,
        color: "from-yellow-500 to-orange-500"
      }
    ],
    stretching: [
      {
        title: "Morning Mobility",
        description: "Start your day right",
        duration: "10-15 min",
        difficulty: "Beginner",
        icon: Stretch,
        color: "from-green-500 to-emerald-500"
      },
      {
        title: "Post-Workout Cool Down",
        description: "Recovery focused",
        duration: "15-20 min",
        difficulty: "All Levels",
        icon: Target,
        color: "from-blue-500 to-cyan-500"
      },
      {
        title: "Deep Flexibility",
        description: "Intensive stretching",
        duration: "25-35 min",
        difficulty: "Intermediate",
        icon: Clock,
        color: "from-purple-500 to-pink-500"
      },
      {
        title: "Desk Worker Relief",
        description: "Combat sitting all day",
        duration: "12-18 min",
        difficulty: "Beginner",
        icon: BarChart,
        color: "from-orange-500 to-red-500"
      }
    ]
  }

  const getTypeConfig = (type: string) => {
    switch (type) {
      case 'gym':
        return { title: 'Gym Exercises', icon: Dumbbell, description: 'Equipment-based workouts' }
      case 'stretching':
        return { title: 'Stretching', icon: Stretch, description: 'Flexibility and mobility' }
      default:
        return { title: 'Home Exercises', icon: Home, description: 'Bodyweight workouts' }
    }
  }

  const config = getTypeConfig(type)
  const exercises = exerciseCategories[type as keyof typeof exerciseCategories] || exerciseCategories.home

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'text-green-600 bg-green-100'
      case 'intermediate': return 'text-yellow-600 bg-yellow-100'
      case 'advanced': return 'text-red-600 bg-red-100'
      default: return 'text-blue-600 bg-blue-100'
    }
  }

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
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <config.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{config.title}</h1>
              <p className="text-muted-foreground">{config.description}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Exercise Grid */}
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 card-hover"
            >
              {/* Exercise Header */}
              <div className={`h-20 bg-gradient-to-r ${exercise.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <exercise.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Exercise Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {exercise.title}
                </h3>
                <p className="text-muted-foreground mb-4">{exercise.description}</p>

                {/* Exercise Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {exercise.duration}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                    {exercise.difficulty}
                  </span>
                </div>

                {/* Action Button */}
                <button className="w-full bg-primary/10 hover:bg-primary hover:text-white text-primary py-3 rounded-lg font-semibold transition-all duration-300">
                  Start Workout
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Categories Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex bg-card rounded-xl border border-border/50 p-1">
            {[
              { key: 'home', label: 'Home', icon: Home },
              { key: 'gym', label: 'Gym', icon: Dumbbell },
              { key: 'stretching', label: 'Stretching', icon: Stretch }
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => navigate(`/exercises?type=${category.key}`)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  type === category.key 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}