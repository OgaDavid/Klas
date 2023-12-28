import React from 'react'
import { Metadata } from 'next'
import ProfileImageUpload from './components/settings-profile-image-upload'
import SettingsUpdateProfile from './components/settings-update-profile-form'

export const metadata: Metadata = {
    title: "Dashboard Settings"
}

const DashboardSettingsPage = () => {

  return (
      <main>
        <ProfileImageUpload />
        <SettingsUpdateProfile />
      </main>
  )
}

export default DashboardSettingsPage