import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Palette, Code, Gamepad2, Compass, ArrowDown } from "lucide-react"

interface TeamMember {
  name: string
  title: string
  description: string
  department: string
  profilePic: string
  level: number
  reportsTo?: string
  manages?: string[]
}

const teamMembers: TeamMember[] = [
  {
    name: "Coder Irfan",
    title: "Founder & Backend Lead",
    description: "Visionary behind ChatLock, overseeing product direction, backend architecture, and company growth.",
    department: "leadership",
    profilePic: "https://res.cloudinary.com/dzdnwsojc/image/upload/v1747141589/qc0obcgdp3rqvvlasifq.webp",
    level: 1,
    manages: ["Roshni", "Manwinder"],
  },
  {
    name: "Roshni",
    title: "Chief Technology Officer (CTO) & Frontend Lead",
    description:
      "Leading all technical operations with a focus on frontend systems, scalable architecture, and tech innovation.",
    department: "leadership",
    profilePic: "https://res.cloudinary.com/dzdnwsojc/image/upload/v1748366699/WhatsApp_Image_2025-05-27_at_8.37.29_PM_rt23jf.jpg",
    level: 2,
    reportsTo: "Coder Irfan",
    manages: ["Nahin Rahman", "Jagtap", "Shurity"],
  },
  {
    name: "Manwinder",
    title: "Instructor & Technical Advisor",
    description:
      "Providing ongoing mentorship, ensuring adherence to best practices, and guiding strategic tech decisions.",
    department: "leadership",
    profilePic: "https://res.cloudinary.com/dzdnwsojc/image/upload/v1748366995/Manwinder_ipalso.png",
    level: 2,
    reportsTo: "Coder Irfan",
    manages: ["Arpit"],
  },
  {
    name: "Jagtap",
    title: "UI/UX Designer",
    description:
      "Responsible for user-centric design, wireframes, prototypes, and ensuring intuitive and elegant user experiences.",
    department: "design",
    profilePic: "/placeholder.svg?height=120&width=120",
    level: 3,
    reportsTo: "Roshni",
  },
  {
    name: "Shurity",
    title: "UI/UX Designer",
    description:
      "Responsible for user-centric design, wireframes, prototypes, and ensuring intuitive and elegant user experiences.",
    department: "design",
    profilePic: "/placeholder.svg?height=120&width=120",
    level: 3,
    reportsTo: "Roshni",
  },
  {
    name: "Nahin Rahman",
    title: "Frontend Developer",
    description: "Building responsive, dynamic user interfaces with React.js, CSS, and Bootstrap.",
    department: "development",
    profilePic: "/placeholder.svg?height=120&width=120",
    level: 3,
    reportsTo: "Roshni",
  },
   {
    name: "Neha",
    title: "Frontend Developer",
    description: "Building responsive, dynamic user interfaces with React.js, CSS, and Bootstrap.",
    department: "development",
    profilePic: "/placeholder.svg?height=120&width=120",
    level: 3,
    reportsTo: "Roshni",
  },
  {
    name: "Arpit",
    title: "Backend Developer",
    description:
      "Architecting APIs, database systems, authentication, and server-side logic to power ChatLock's infrastructure.",
    department: "development",
    profilePic: "/placeholder.svg?height=120&width=120",
    level: 3,
    reportsTo: "Manwinder",
  },
  {
    name: "Abhinav",
    title: "Gamification & Community Coordinator",
    description:
      "Designing user engagement strategies, integrating gamified features, and enhancing community interaction.",
    department: "engagement",
    profilePic: "/placeholder.svg?height=120&width=120",
    level: 2,
    reportsTo: "Coder Irfan",
  },
  {
    name: "Shailendra Rawat",
    title: "Strategic Advisor",
    description: "Offering strategic and technical insights to guide ChatLock's development and long-term vision.",
    department: "advisory",
    profilePic: "https://res.cloudinary.com/dzdnwsojc/image/upload/v1748366608/6174655468648122219_srgtyy.jpg",
    level: 1,
  },
]

const departments = [
  {
    id: "leadership",
    title: "Leadership & Strategy",
    icon: Brain,
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    id: "design",
    title: "Design & Experience",
    icon: Palette,
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
  },
  {
    id: "development",
    title: "Development Team",
    icon: Code,
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
  },
  {
    id: "engagement",
    title: "Engagement & Innovation",
    icon: Gamepad2,
    color: "bg-pink-50 border-pink-200",
    iconColor: "text-pink-600",
  },
  {
    id: "advisory",
    title: "Advisors & Mentorship",
    icon: Compass,
    color: "bg-slate-50 border-slate-200",
    iconColor: "text-slate-600",
  },
]

function TeamMemberCard({ member, showConnections = false }: { member: TeamMember; showConnections?: boolean }) {
  const department = departments.find((d) => d.id === member.department)

  return (
    <div className="relative">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative z-10">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <img
                src={member.profilePic || "/placeholder.svg"}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div
                className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-2 border-white ${department?.iconColor.replace("text-", "bg-")}`}
              >
                {department && <department.icon className="w-3 h-3 text-white m-0.5" />}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <Badge variant="secondary" className="text-sm font-medium">
                {member.title}
              </Badge>
              {member.level && (
                <div className="flex items-center justify-center gap-1">
                  <Badge variant="outline" className="text-xs">
                    Level {member.level}
                  </Badge>
                </div>
              )}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>

            {member.manages && member.manages.length > 0 && (
              <div className="pt-2">
                <Badge variant="outline" className="text-xs text-emerald-600 border-emerald-200">
                  Manages {member.manages.length} team member{member.manages.length > 1 ? "s" : ""}
                </Badge>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Connection Lines */}
      {showConnections && member.manages && member.manages.length > 0 && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-0">
          <div className="w-0.5 h-8 bg-gray-300"></div>
          <div className="w-8 h-0.5 bg-gray-300 -ml-4"></div>
        </div>
      )}
    </div>
  )
}

function OrganizationalChart() {
  const levelGroups = teamMembers.reduce(
    (acc, member) => {
      if (!acc[member.level]) acc[member.level] = []
      acc[member.level].push(member)
      return acc
    },
    {} as Record<number, TeamMember[]>,
  )

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Organizational Chain</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hierarchical structure ensures clear communication and efficient decision-making across all levels.
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(levelGroups)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([level, members], levelIndex) => (
              <div key={level} className="relative">
                <div className="text-center mb-8">
                  <Badge variant="outline" className="px-4 py-2 text-lg font-semibold">
                    {level === "1" ? "Executive Level" : level === "2" ? "Management Level" : "Team Level"}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                  {members.map((member, index) => (
                    <div key={member.name} className="w-full max-w-sm">
                      <TeamMemberCard
                        member={member}
                        showConnections={levelIndex < Object.keys(levelGroups).length - 1}
                      />
                    </div>
                  ))}
                </div>

                {/* Level Connection Arrow */}
                {levelIndex < Object.keys(levelGroups).length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="flex flex-col items-center">
                      <ArrowDown className="w-8 h-8 text-gray-400 animate-bounce" />
                      <span className="text-sm text-gray-500 mt-2">Reports to</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

function DepartmentSection({ department, members }: { department: any; members: TeamMember[] }) {
  const Icon = department.icon

  return (
    <section className="mb-16">
      <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 ${department.color} mb-8`}>
        <Icon className={`w-6 h-6 ${department.iconColor}`} />
        <h2 className="text-2xl font-bold text-gray-900">{department.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Meet Our Team</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                ChatLock
              </span>{" "}
              Team Structure
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ChatLock is built by a passionate and dynamic team committed to creating the future of secure,
              intelligent, and community-driven social networking.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                🔒 Secure Networking
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                🤖 AI-Powered
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                👥 Community-Driven
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Chart */}
      <OrganizationalChart />

      {/* Team Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Departments Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our specialized teams and their unique contributions to ChatLock's success.
            </p>
          </div>

          {departments.map((department) => {
            const departmentMembers = teamMembers.filter((member) => member.department === department.id)
            return <DepartmentSection key={department.id} department={department} members={departmentMembers} />
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Ready to Join Our Mission?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our vision of creating secure, intelligent social
              networking solutions.
            </p>
            <div className="pt-4">
              <Badge variant="outline" className="px-6 py-3 text-base font-medium">
                🚀 Building the Future Together
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
