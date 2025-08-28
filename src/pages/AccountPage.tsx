import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, User, Settings, Bell, Shield, LogOut } from 'lucide-react'

export function AccountPage() {
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
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          <h1 className="text-2xl font-bold">Account</h1>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl border border-border/50 p-6 mb-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Welcome back!</h2>
              <p className="text-muted-foreground">Manage your account settings</p>
            </div>
          </div>
        </motion.div>

        {/* Settings Menu */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {[
            { icon: User, title: "Profile Settings", description: "Update your personal information", action: () => {} },
            { icon: Bell, title: "Notifications", description: "Manage workout reminders", action: () => {} },
            { icon: Shield, title: "Privacy & Security", description: "Control your data and privacy", action: () => {} },
            { icon: Settings, title: "App Preferences", description: "Customize your experience", action: () => {} },
            { icon: LogOut, title: "Sign Out", description: "Sign out of your account", action: () => navigate('/'), color: "text-red-600" }
          ].map((item, index) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={item.action}
              className="w-full bg-card rounded-xl border border-border/50 p-4 text-left hover:border-primary/20 transition-all card-hover"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className={`w-5 h-5 ${item.color || 'text-primary'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${item.color || ''}`}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  )
}