import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  Home, 
  Dumbbell, 
  Heart, 
  Stretch, 
  User, 
  History,
  Activity,
  TrendingUp
} from 'lucide-react'

export function DashboardPage() {
  const navigate = useNavigate()

  const menuItems = [
    {
      icon: Home,
      title: "Home Exercises",
      description: "Bodyweight workouts for home",
      color: "from-blue-500 to-cyan-500",
      route: "/exercises?type=home"
    },
    {
      icon: Dumbbell,
      title: "Gym Exercises",
      description: "Equipment-based workouts",
      color: "from-purple-500 to-pink-500",
      route: "/exercises?type=gym"
    },
    {
      icon: Stretch,
      title: "Stretching",
      description: "Flexibility and mobility",
      color: "from-green-500 to-emerald-500",
      route: "/exercises?type=stretching"
    },
    {
      icon: Heart,
      title: "Rehabilitation",
      description: "Recovery and therapy",
      color: "from-red-500 to-orange-500",
      route: "/rehab"
    },
    {
      icon: History,
      title: "History",
      description: "Track your progress",
      color: "from-yellow-500 to-amber-500",
      route: "/history"
    },
    {
      icon: User,
      title: "Account",
      description: "Profile and settings",
      color: "from-gray-500 to-slate-500",
      route: "/account"
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome back!</h1>
              <p className="text-muted-foreground">Ready for your next workout?</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">5 day streak!</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: "Workouts", value: "12", icon: Activity },
            { label: "Minutes", value: "240", icon: Clock },
            { label: "Streak", value: "5", icon: TrendingUp },
            { label: "Level", value: "2", icon: Award }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-card p-4 rounded-xl border border-border/50 text-center"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems.map((item, index) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              onClick={() => navigate(item.route)}
              className="group relative overflow-hidden bg-card hover:bg-card/80 border border-border/50 hover:border-primary/20 rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  {item.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Recent Activity */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="bg-card rounded-xl border border-border/50 p-6">
            <div className="text-center py-8">
              <Activity className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Start your first workout to see your activity here!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Missing imports
import { Clock, Award, ArrowRight } from 'lucide-react'