import React from 'react'
import { Metadata } from 'next'
import ProfileImageUpload from './components/settings-profile-image-upload'

export const metadata: Metadata = {
    title: "Dashboard Settings"
}

const DashboardSettingsPage = () => {

  return (
      <main>
        <ProfileImageUpload />
      </main>
  )
}

export default DashboardSettingsPage