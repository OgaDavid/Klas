import React from 'react'
import { Metadata } from 'next'
import ProfileImageUpload from './_components/settings-profile-image-upload'
import SettingsUpdateProfile from './_components/settings-update-profile-form'
import getSession from '@/actions/get-user-session'

export const metadata: Metadata = {
    title: "Dashboard Settings"
}

const DashboardSettingsPage = async () => {

  const session = await getSession()
  console.log(session)

  return (
      <main>
        <ProfileImageUpload />
        <SettingsUpdateProfile session={session} />
      </main>
  )
}

export default DashboardSettingsPage