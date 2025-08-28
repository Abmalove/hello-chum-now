import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, TrendingUp, Activity, Clock } from 'lucide-react'

export function HistoryPage() {
  const navigate = useNavigate()

  // Mock data - in a real app, this would come from your backend
  const workoutHistory = [
    {
      date: "2024-08-28",
      type: "Home Workout",
      title: "Full Body Strength",
      duration: "35 minutes",
      exercises: 8,
      calories: 180
    },
    {
      date: "2024-08-26",
      type: "Stretching",
      title: "Morning Mobility",
      duration: "15 minutes",
      exercises: 6,
      calories: 45
    },
    {
      date: "2024-08-24",
      type: "Rehabilitation",
      title: "Lower Back Care",
      duration: "25 minutes",
      exercises: 10,
      calories: 85
    }
  ]

  const stats = {
    totalWorkouts: 12,
    totalMinutes: 340,
    streak: 5,
    avgDuration: 28
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
          <h1 className="text-2xl font-bold">Workout History</h1>
          <p className="text-muted-foreground">Track your fitness journey</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: "Total Workouts", value: stats.totalWorkouts, icon: Activity },
            { label: "Total Minutes", value: stats.totalMinutes, icon: Clock },
            { label: "Current Streak", value: `${stats.streak} days`, icon: TrendingUp },
            { label: "Avg Duration", value: `${stats.avgDuration}m`, icon: Calendar }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-xl border border-border/50 p-4 text-center"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Workout History */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-4">Recent Workouts</h2>
          <div className="space-y-4">
            {workoutHistory.map((workout, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-card rounded-xl border border-border/50 p-6 hover:border-primary/20 transition-all card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{workout.title}</h3>
                    <p className="text-primary text-sm font-medium">{workout.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{workout.date}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold">{workout.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{workout.exercises}</div>
                    <div className="text-xs text-muted-foreground">Exercises</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{workout.calories}</div>
                    <div className="text-xs text-muted-foreground">Calories</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {workoutHistory.length === 0 && (
            <div className="bg-card rounded-xl border border-border/50 p-8 text-center">
              <Activity className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No workouts yet</h3>
              <p className="text-muted-foreground mb-4">
                Start your first workout to see your progress here!
              </p>
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Start Working Out
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}