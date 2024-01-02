import React from 'react'
import { Metadata } from 'next'
import ProfileImageUpload from './_components/settings-profile-image-upload'
import SettingsUpdateProfile from './_components/settings-update-profile-form'

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