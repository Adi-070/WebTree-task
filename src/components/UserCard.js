'use client'

import React, { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Calendar, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

const fetchUserData = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
    const data = await response.json()
    return data.results[0]
  } catch (error) {
    console.error('Error fetching user data:', error)
    return null
  }
}

export default function UserCard() {
  const [userData, setUserData] = useState(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const loadUserData = async () => {
      const data = await fetchUserData()
      setUserData(data)
    }
    loadUserData()
  }, [])

  if (!userData) {
    return (
      <div className="w-full max-w-2xl p-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-white animate-spin" />
      </div>
    )
  }

  return (
    <motion.div
      className="w-full max-w-2xl p-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img
            src={userData.picture.large}
            alt="User profile"
            className="w-40 h-40 rounded-full object-cover ring-4 ring-white/50 shadow-lg"
          />
          <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-yellow-400 text-indigo-900 text-sm font-bold rounded-full shadow-md">
            {userData.dob.age}y
          </div>
        </motion.div>

        <div className="flex-1 space-y-6 text-white">
          <div>
            <h2 className="text-3xl font-bold mb-1">
              {userData.name.first} {userData.name.last}
            </h2>
            <p className="text-indigo-200 font-medium capitalize">
              {userData.gender} • {userData.nat}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Mail, text: userData.email },
              { icon: Phone, text: userData.phone },
              { icon: MapPin, text: `${userData.location.city}, ${userData.location.country}` },
              { icon: Calendar, text: `Joined ${new Date(userData.registered.date).toLocaleDateString()}` },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white/10 rounded-lg p-3"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <item.icon className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm mb-2">Age Percentile</p>
            <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: `${userData.dob.age}%` }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

