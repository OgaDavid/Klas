interface DashboardStat {
    type: 'students' | 'classes' |'earnings',
    title: string,
    icon: string,
}

interface UserSession {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  }